import random
import re

# ================= HELPER QE: OPTION DEDUPLICATION & SHUFFLING =================

def _parse_numeric_candidate(text, u_suffix, step):
    """
    Ekstraksi basis numerik dan template pemformatan untuk membangkitkan
    pengecoh sintetis yang realistis tanpa teks dummy.
    """
    raw = text.strip()
    
    # 1. Format Mata Uang Rupiah: "Rp 1.000.000"
    if raw.startswith("Rp "):
        digits = "".join(c for c in raw if c.isdigit())
        if digits:
            base = int(digits)
            eff_step = max(step, 1000) if step == 1 else step
            formatter = lambda n: f"Rp {int(n):,}".replace(",", ".")
            return base, eff_step, formatter, True
            
    # 2. Format Derajat: "180°"
    if raw.endswith("°"):
        num_part = raw[:-1].strip()
        try:
            val = float(num_part)
            base = int(val) if val.is_integer() else val
            eff_step = max(step, 15) if step == 1 else step
            formatter = lambda n: f"{int(n) if isinstance(n, int) or n.is_integer() else round(n, 1)}°"
            return base, eff_step, formatter, True
        except ValueError:
            pass

    # 3. Format Bentuk Akar: "4√6 cm" atau "4√6"
    root_match = re.match(r"^(\d+(?:\.\d+)?)√(\d+)(.*)$", raw)
    if root_match:
        coeff = float(root_match.group(1))
        root_val = root_match.group(2)
        rest_suffix = root_match.group(3)
        base = int(coeff) if coeff.is_integer() else coeff
        eff_step = max(step, 1)
        formatter = lambda n: f"{int(n) if isinstance(n, int) or n.is_integer() else round(n, 1)}√{root_val}{rest_suffix}"
        return base, eff_step, formatter, False

    # 4. Standard Numerik murni atau ber-unit
    clean_raw = raw.replace(u_suffix, "").strip() if u_suffix else raw
    try:
        val = float(clean_raw)
        base = int(val) if val.is_integer() else val
        formatter = lambda n: f"{int(n) if isinstance(n, int) or n.is_integer() else round(n, 1)}{u_suffix}"
        return base, step, formatter, False
    except ValueError:
        pass

    return None, step, None, False

def make_options(correct_text, distractor_candidates, unit="", step=1, allow_negative=False):
    """
    Quality Engineering Helper:
    Menjamin 100% tepat 5 opsi jawaban (A, B, C, D, E) yang:
    1. Unik tanpa satupun teks duplikat.
    2. Bebas tabrakan antara jawaban benar dan pengecoh (distractors).
    3. Jika pengecoh kurang dari 4, otomatis membangkitkan opsi sintetis realistis (+/- step).
    4. Anti-Dummy: Dilarang keras mengeluarkan string placeholder 'Opsi Alternatif X'.
    5. Mengacak posisi dan mengembalikan (options_list, correct_letter).
    """
    u_suffix = f" {unit.strip()}" if unit.strip() else ""
    correct_str = str(correct_text).strip()
    if u_suffix and not correct_str.endswith(u_suffix):
        correct_str = f"{correct_str}{u_suffix}"

    unique_opts = [correct_str]

    for d in distractor_candidates:
        d_str = str(d).strip()
        if u_suffix and not d_str.endswith(u_suffix):
            d_str = f"{d_str}{u_suffix}"
        if d_str not in unique_opts and d_str:
            unique_opts.append(d_str)
        if len(unique_opts) == 5:
            break

    # Jika kandidat pengecoh bertabrakan atau kurang dari 5, buat offset sintetis
    if len(unique_opts) < 5:
        base_num, eff_step, formatter, is_strictly_pos = _parse_numeric_candidate(correct_str, u_suffix, step)

        if base_num is not None and formatter is not None:
            offset = eff_step
            factor = 1
            max_attempts = 50
            attempts = 0
            while len(unique_opts) < 5 and attempts < max_attempts:
                attempts += 1
                new_num = base_num + (offset * factor)
                if (is_strictly_pos or not allow_negative) and new_num <= 0:
                    new_num = base_num + (offset * abs(factor)) + eff_step
                cand = formatter(new_num)
                if cand not in unique_opts:
                    unique_opts.append(cand)
                factor = -factor if factor > 0 else (-factor + 1)
                offset += eff_step

        if len(unique_opts) < 5:
            raise ValueError(
                f"[QE Flaw] make_options gagal mengumpulkan 5 opsi unik untuk: '{correct_str}'. "
                f"Kandidat tersedia hanya {len(unique_opts)}: {unique_opts}. "
                "Generator wajib menyediakan minimal 4 pengecoh unik non-kolisi."
            )

    raw_choices = unique_opts[:5]
    random.shuffle(raw_choices)

    letters = ["A", "B", "C", "D", "E"]
    c_let = "A"
    final_options = []
    for idx, text in enumerate(raw_choices):
        let = letters[idx]
        final_options.append({"id": let, "text": text})
        if text == correct_str:
            c_let = let

    return final_options, c_let
