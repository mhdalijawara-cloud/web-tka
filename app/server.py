import os
import re
import logging
from datetime import datetime
from fastapi import FastAPI, Query, HTTPException, Request, Response
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, JSONResponse
from pydantic import BaseModel, Field, validator
from question_engine import get_tka_question

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s"
)
logger = logging.getLogger("tka_server")

app = FastAPI(title="TKA Mobile CBT - Paper Cream Edition")

# CORS middleware for secure cross-origin support
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.middleware("http")
async def add_security_headers(request: Request, call_next):
    response: Response = await call_next(request)
    response.headers["X-Content-Type-Options"] = "nosniff"
    response.headers["X-Frame-Options"] = "SAMEORIGIN"
    return response

CURRENT_DIR = os.path.dirname(os.path.abspath(__file__))
STATIC_DIR = os.path.join(CURRENT_DIR, "static")
WORKSPACE_DIR = os.path.dirname(CURRENT_DIR)
ERROR_LOG_PATH = os.path.join(WORKSPACE_DIR, "error_log.md")
MAX_ERROR_LOG_BYTES = 5 * 1024 * 1024  # 5 MB threshold to prevent VPS disk exhaustion

VALID_SUBJECTS = {"all", "fisika", "mtk_wajib", "mtk_lanjut", "b_indo", "b_inggris"}

app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")

@app.get("/")
async def serve_index():
    index_file = os.path.join(STATIC_DIR, "index.html")
    if not os.path.exists(index_file):
        logger.error(f"Frontend index file not found at: {index_file}")
        raise HTTPException(status_code=404, detail="Frontend index.html not found")
    return FileResponse(index_file)

@app.get("/favicon.ico", include_in_schema=False)
async def favicon():
    return Response(status_code=204)

@app.get("/api/health")
async def health_check():
    return JSONResponse({"status": "healthy", "service": "tka_cbt_engine", "timestamp": datetime.now().isoformat()})

@app.get("/api/next_question")
async def get_next_question(subject: str = Query(default="all")):
    sanitized_sub = subject.strip().lower()[:20] if subject else "all"
    if sanitized_sub not in VALID_SUBJECTS:
        sanitized_sub = "all"
    try:
        q = get_tka_question(sanitized_sub)
        return JSONResponse(q)
    except Exception as exc:
        logger.error(f"Error generating question for subject '{sanitized_sub}': {exc}", exc_info=True)
        raise HTTPException(status_code=500, detail="Gagal memproses butir soal.")

class SubmitPayload(BaseModel):
    subject: str = Field(..., min_length=1, max_length=50)
    topic: str = Field(..., min_length=1, max_length=100)
    chosen_id: str = Field(..., min_length=1, max_length=5)
    correct_id: str = Field(..., min_length=1, max_length=5)
    is_correct: bool
    latency_ms: int = Field(default=0, ge=0, le=86400000)
    latency_seconds: int = Field(default=0, ge=0, le=86400)

    @validator("subject", "topic")
    def sanitize_text(cls, v: str) -> str:
        # Strip control characters, carriage returns, and newlines to prevent Markdown/Log injection
        cleaned = re.sub(r"[\r\n\x00-\x1f]", " ", v).strip()
        return cleaned[:100]

    @validator("chosen_id", "correct_id")
    def sanitize_id(cls, v: str) -> str:
        cleaned = re.sub(r"[^A-Za-z0-9]", "", v).strip().upper()
        return cleaned[:5]

@app.post("/api/submit")
async def handle_submit(payload: SubmitPayload):
    # Log kekeliruan pengerjaan ke error_log.md untuk evaluasi berkala (abaikan synthetic stress test)
    if not payload.is_correct and payload.topic != "Stress Test":
        timestamp_str = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        log_entry = (
            f"\n---\n\n"
            f"## Log CBT Otomatis ({payload.subject.upper()} - {payload.topic})\n"
            f"- **Waktu:** {timestamp_str}\n"
            f"- **Durasi Menjawab:** {payload.latency_seconds} detik\n"
            f"- **Jawaban Anda:** {payload.chosen_id} (Kunci Resmi: {payload.correct_id})\n"
            f"- **Status:** Keliru (Perlu Penguatan Konsep)\n"
        )
        try:
            # Cegah resource exhaustion / file ballooning tak terbatas
            if os.path.exists(ERROR_LOG_PATH) and os.path.getsize(ERROR_LOG_PATH) > MAX_ERROR_LOG_BYTES:
                logger.warning(f"Error log file exceeded {MAX_ERROR_LOG_BYTES} bytes. Truncating to maintain disk hygiene.")
                with open(ERROR_LOG_PATH, "r", encoding="utf-8") as rf:
                    lines = rf.readlines()
                # Pertahankan header awal dan 500 baris terbaru
                kept_lines = lines[:20] + ["\n<!-- Rotated older entries to conserve VPS disk storage -->\n\n"] + lines[-500:]
                with open(ERROR_LOG_PATH, "w", encoding="utf-8") as wf:
                    wf.writelines(kept_lines)

            with open(ERROR_LOG_PATH, "a", encoding="utf-8") as f:
                f.write(log_entry)
        except (IOError, OSError) as exc:
            logger.error(f"Gagal mencatat log evaluasi ke error_log.md: {exc}", exc_info=True)

    return JSONResponse({"status": "success", "is_correct": payload.is_correct, "recorded": not payload.is_correct})

if __name__ == "__main__":
    import uvicorn
    host = os.getenv("TKA_HOST", "0.0.0.0")
    port = int(os.getenv("TKA_PORT", "8000"))
    reload_flag = os.getenv("TKA_RELOAD", "false").lower() in ("true", "1")
    logger.info(f"Starting TKA CBT Server on {host}:{port} (reload={reload_flag})")
    uvicorn.run("server:app", host=host, port=port, reload=reload_flag)

