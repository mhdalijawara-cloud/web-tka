# TKA Mobile CBT Engine (Paper Cream Edition)

Platform latihan dan asesmen interaktif Tes Kemampuan Akademik (TKA) berbasis FastAPI dan antarmuka minimalis Paper Cream.

## Fitur Utama

- **Antarmuka Paper Cream Ergonomis:** Desain bebas distraksi tanpa emoji berlebihan, ramah mata (*low eye-strain*), dengan tipografi Plus Jakarta Sans dan warna aksen Terracotta.
- **Fleksibilitas Penuh (Touch & Select):** Teks stimulus soal, rumus, dan opsi dapat diseleksi, disalin langsung, atau disalin satu paket menggunakan tombol **Salin Soal**. Mendukung gestur *pinch-to-zoom* pada perangkat mobile.
- **Unified Question Engine (37 Modul Standar Pusmendik):**
  - **Fisika (Fase F Pilihan):** 13 generator dinamis parametrik (Kinematika, Dinamika Newton, Usaha & Energi, Termodinamika, Listrik, Impuls/Momentum, Parabola, Fluida, Gravitasi, dll).
  - **Matematika Wajib (Fase F):** 13 generator dinamis parametrik (Fungsi Komposisi, Invers, Barisan & Deret, Peluang, Geometri Tak Hingga, Finansial, Lingkaran Sudut/Juring, Permutasi, Statistika Mean, Dimensi Tiga, Program Linear DHP, SPLTV).
  - **Matematika Tingkat Lanjut (Fase F Pilihan):** 11 generator dinamis parametrik (Teorema Sisa, Matriks, Vektor, Turunan, Limit, Vieta, Integral, Transformasi, Lingkaran, Trigonometri Periode).
  - **Literasi Membaca:** 36 stimulus autentik Bahasa Indonesia dan Bahasa Inggris dengan algoritma *dynamic option shuffle*.
- **Parametric SVG Renderer:** Grafik bidang Cartesius DHP pertidaksamaan linear dan geometri 3 dimensi (Kubus ABCD.EFGH & Limas T.ABCD) di-generate langsung secara deterministik via SVG tanpa dependensi eksternal.
- **Log Evaluasi Cerdas:** Evaluasi instan mencakup Logika Akal Sehat, Pola Jebakan Pembuat Soal, dan Rumus Kunci yang dicatat secara berkala ke `error_log.md` (dilengkapi guard rotasi memori 5 MB).

## Struktur Repositori

```text
├── app/
│   ├── engine/              # Modul generator soal TKA modular
│   │   ├── fisika.py        # 13 Generator Fisika
│   │   ├── mtk_wajib.py     # 13 Generator MTK Wajib
│   │   ├── mtk_lanjut.py    # 11 Generator MTK Lanjut
│   │   ├── literasi.py      # Bank teks autentik B. Indo & B. Inggris
│   │   ├── svg_renderer.py  # Parametric vector graphics renderer
│   │   ├── dispatcher.py    # Balanced random question dispatcher
│   │   └── helpers.py       # Deduplikasi dan opsi permutasi
│   ├── static/              # Frontend web assets
│   │   ├── index.html       # Antarmuka SPA responsif Paper Cream
│   │   └── questions.js     # Data bank soal statis cadangan
│   ├── question_engine.py   # Unified facade layer
│   └── server.py            # FastAPI production backend & CORS middleware
├── data/                    # Paket stimulus soal Pusmendik resmi
├── error_log.md             # Dokumen pencatatan kekeliruan otomatis
├── requirements.txt         # Dependensi Python minimal
└── README.md
```

## Menjalankan Aplikasi Secara Lokal

1. **Pasang Dependensi:**
   ```bash
   pip install -r requirements.txt
   ```

2. **Jalankan Server:**
   ```bash
   python -m uvicorn app.server:app --host 0.0.0.0 --port 8000
   ```

3. **Buka di Peramban:**
   Akses `http://localhost:8000` melalui browser desktop atau smartphone pada jaringan lokal yang sama.
