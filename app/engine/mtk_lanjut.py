import random
import math
from .helpers import make_options
from .svg_renderer import (
    render_vektor_2d_cartesius,
    render_lingkaran_cartesius,
    render_gelombang_trigo
)

# ==============================================================================
# 3. GENERATOR MATEMATIKA TINGKAT LANJUT (MULTI-VARIASI PER MODUL)
# ==============================================================================

def gen_mtkl_sisa():
    var = random.choice(["sisa_maju", "sisa_balik_konstanta"])
    if var == "sisa_maju":
        k = random.choice([1, 2, 3])
        a, b, c, d = 1, -2, 3, 4
        sisa = a*(k**3) + b*(k**2) + c*k + d
        correct = str(sisa)
        wrong = [str(sisa + 5), str(sisa - 4), str(sisa + 10), str(abs(sisa) + 1), str(sisa - 8)]
        opts, c_let = make_options(correct, wrong, step=3, allow_negative=True)
        return {
            "subject": "mtk_lanjut", "subject_label": "Matematika Tingkat Lanjut", "topic": "Polinomial (Teorema Sisa)",
            "stimulus": f"Suku banyak P(x) = x³ - 2x² + 3x + 4 dibagi oleh (x - {k}).",
            "question": "Berapakah sisa pembagian tersebut?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Bikin pembagi nol: x - {k} = 0 -> x = {k}. Cemplungkan x = {k} ke suku banyak: ({k}³) - 2({k}²) + 3({k}) + 4 = {sisa}.",
                "jebakan": "Jangan membagi dengan porogapit bersusun panjang!",
                "rumus_kunci": "Sisa = P(angka pembuat nol pembagi)"
            }
        }
    else:
        # P(x) = x^3 + p*x^2 - 4x + 6 dibagi (x - 2) bersisa sisa_target. Cari p.
        k = 2
        p_ans = random.choice([2, 3, 4])
        # P(2) = 8 + 4*p - 8 + 6 = 4*p + 6
        sisa_target = 4 * p_ans + 6
        correct = str(p_ans)
        cand_wrongs = [p_ans + 3, max(1, p_ans - 1), p_ans * 3, sisa_target, p_ans + 5, p_ans + 7]
        wrong = [str(w) for w in dict.fromkeys(cand_wrongs) if str(w) != correct]
        opts, c_let = make_options(correct, wrong, step=1)
        return {
            "subject": "mtk_lanjut", "subject_label": "Matematika Tingkat Lanjut", "topic": "Polinomial (Arah Balik Konstanta)",
            "stimulus": f"Suku banyak P(x) = x³ + px² - 4x + 6 dibagi oleh (x - 2) menghasilkan sisa {sisa_target}.",
            "question": "Berapakah nilai konstanta p?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Masukkan x = 2: P(2) = (2³) + p(2²) - 4(2) + 6 = 8 + 4p - 8 + 6 = 4p + 6. Karena sisanya adalah {sisa_target}, maka 4p + 6 = {sisa_target} -> 4p = {sisa_target - 6} -> p = {p_ans}.",
                "jebakan": "Sisa pembagian itu adalah hasil substitusi pembuat nol pembaginya.",
                "rumus_kunci": "P(k) = Sisa"
            }
        }

def gen_mtkl_matriks():
    var = random.choice(["determinan", "matriks_singular"])
    if var == "determinan":
        a, b = random.choice([2, 3, 4]), random.choice([1, 2, 3])
        c, d = random.choice([1, 2]), random.choice([3, 4, 5])
        det = (a * d) - (b * c)
        correct = str(det)
        cand_wrongs = [(a * d) + (b * c), det + 3, det - 4, a + d + b + c, det + 7, det - 6, det + 11]
        wrong = [str(w) for w in dict.fromkeys(cand_wrongs) if w != det]
        opts, c_let = make_options(correct, wrong, step=2, allow_negative=True)
        return {
            "subject": "mtk_lanjut", "subject_label": "Matematika Tingkat Lanjut", "topic": "Matriks (Determinan 2x2)",
            "stimulus": f"Diketahui matriks A = [[{a}, {b}], [{c}, {d}]].",
            "question": "Berapakah nilai determinan dari matriks A (det A)?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Kali silang utama ({a} x {d} = {a*d}) DIKURANGI kali silang samping ({b} x {c} = {b*c}): {a*d} - {b*c} = {det}.",
                "jebakan": "Silang samping dikurangkan, bukan dijumlahkan!",
                "rumus_kunci": "det A = ad - bc"
            }
        }
    else:
        # Matriks singular det = 0 -> [[x, b], [c, d]] -> x*d - b*c = 0 -> x = (b*c)/d
        # Ensure exact integers without truncation
        combos = [
            (2, 6, 3, 9),   # x*2 - 6*3 = 0 -> x = 9
            (3, 6, 2, 4),   # x*3 - 6*2 = 0 -> x = 4
            (4, 8, 3, 6),   # x*4 - 8*3 = 0 -> x = 6
            (2, 8, 3, 12),  # x*2 - 8*3 = 0 -> x = 12
            (3, 9, 2, 6),   # x*3 - 9*2 = 0 -> x = 6
            (4, 12, 2, 6),  # x*4 - 12*2 = 0 -> x = 6
        ]
        d, b, c, x_ans = random.choice(combos)
        correct = str(x_ans)
        cand_wrongs = [x_ans + 2, max(1, abs(x_ans - 2) + 1), x_ans * 2, b * c, x_ans + 5, max(1, x_ans - 3)]
        wrong = [str(w) for w in dict.fromkeys(cand_wrongs) if w != x_ans]
        opts, c_let = make_options(correct, wrong, step=2)
        return {
            "subject": "mtk_lanjut", "subject_label": "Matematika Tingkat Lanjut", "topic": "Matriks (Matriks Singular)",
            "stimulus": f"Diketahui matriks M = [[x, {b}], [{c}, {d}]]. Jika matriks M merupakan matriks singular (tidak memiliki invers).",
            "question": "Berapakah nilai x?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Matriks singular itu artinya DETERMINANNYA NOL (det M = 0). Kali silang: (x x {d}) - ({b} x {c}) = 0 -> {d}x - {b*c} = 0 -> {d}x = {b*c} -> x = {x_ans}.",
                "jebakan": "Kata 'singular' artinya determinan = 0.",
                "rumus_kunci": "Matriks Singular = Determinan bernilai 0 (ad - bc = 0)"
            }
        }

def gen_mtkl_vektor():
    var = random.choice(["dot_product", "tegak_lurus"])
    if var == "dot_product":
        u1, u2 = random.choice([2, 3, 4]), random.choice([-2, 1, 3])
        v1, v2 = random.choice([1, 2, 3]), random.choice([2, 4, -1])
        dot = (u1 * v1) + (u2 * v2)
        correct = str(dot)
        cand_wrongs = [(u1 * v2) + (u2 * v1), dot + 5, dot - 3, u1 + u2 + v1 + v2, dot + 9, dot - 6, dot + 12]
        wrong = [str(w) for w in dict.fromkeys(cand_wrongs) if w != dot]
        opts, c_let = make_options(correct, wrong, step=2, allow_negative=True)
        svg_code = render_vektor_2d_cartesius((u1, u2), (v1, v2))
        return {
            "subject": "mtk_lanjut", "subject_label": "Matematika Tingkat Lanjut", "topic": "Vektor (Perkalian Titik Dot Product)",
            "stimulus": f"Perhatikan diagram Cartesius dua vektor berikut. Diketahui dua vektor: u = ({u1}, {u2}) dan v = ({v1}, {v2}).",
            "stimulus_svg": svg_code,
            "question": "Berapakah hasil perkalian titik (u · v)?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Kalikan komponen seposisi: sumbu X ({u1} x {v1} = {u1*v1}) ditambah sumbu Y ({u2} x {v2} = {u2*v2}) = {dot}.",
                "jebakan": "Hasil dot product berupa ANGKA skalar, bukan vektor lagi.",
                "rumus_kunci": "u · v = u_x v_x + u_y v_y"
            }
        }
    else:
        # Vektor tegak lurus -> u . v = 0 -> u1*x + u2*v2 = 0 -> x = (-u2*v2)/u1
        combos = [
            (2, 3, -4, 6),   # 2x + 3(-4) = 0 -> 2x = 12 -> x = 6
            (3, 2, -6, 4),   # 3x + 2(-6) = 0 -> 3x = 12 -> x = 4
            (1, 2, -4, 8),   # 1x + 2(-4) = 0 -> x = 8
            (2, 5, -2, 5),   # 2x + 5(-2) = 0 -> 2x = 10 -> x = 5
            (3, 4, -3, 4),   # 3x + 4(-3) = 0 -> 3x = 12 -> x = 4
        ]
        u1, u2, v2, x_ans = random.choice(combos)
        correct = str(x_ans)
        cand_wrongs = [-x_ans, x_ans + 3, max(1, x_ans - 2), x_ans * 2, max(1, abs(x_ans - 5)), x_ans + 4]
        wrong = [str(w) for w in dict.fromkeys(cand_wrongs) if w != x_ans]
        opts, c_let = make_options(correct, wrong, step=2, allow_negative=True)
        svg_code = render_vektor_2d_cartesius((u1, u2), (x_ans, v2), v_label=f"v(x, {v2})")
        return {
            "subject": "mtk_lanjut", "subject_label": "Matematika Tingkat Lanjut", "topic": "Vektor (Saling Tegak Lurus)",
            "stimulus": f"Perhatikan diagram pasangan vektor tegak lurus berikut. Dua vektor u = ({u1}, {u2}) dan v = (x, {v2}) saling tegak lurus (ortogonal).",
            "stimulus_svg": svg_code,
            "question": "Berapakah nilai x?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Dua vektor saling tegak lurus artinya DOT PRODUCT-NYA NOL! (u · v = 0). Kalikan: {u1}(x) + {u2}({v2}) = 0 -> {u1}x - {abs(u2*v2)} = 0 -> {u1}x = {abs(u2*v2)} -> x = {x_ans}.",
                "jebakan": "Kata kuncinya: Tegak Lurus = Hasil Kali Titik (Dot Product) bernilai 0.",
                "rumus_kunci": "Vektor Tegak Lurus -> u · v = 0"
            }
        }

def gen_mtkl_turunan():
    a = random.choice([1, 2])
    x_puncak = random.choice([3, 4, 5])
    b = 2 * a * x_puncak
    c = random.choice([10, 20])
    correct = str(x_puncak)
    cand_wrongs = [x_puncak * 2, b if b != x_puncak * 2 else x_puncak + 4, max(1, abs(x_puncak - 2)), x_puncak + 3, x_puncak + 1]
    wrong = [str(w) for w in dict.fromkeys(cand_wrongs) if w != x_puncak]
    opts, c_let = make_options(correct, wrong, step=1)
    term_a = f"-{a}x²" if a > 1 else "-x²"
    return {
        "subject": "mtk_lanjut", "subject_label": "Matematika Tingkat Lanjut", "topic": "Turunan Fungsi (Nilai Ekstrim)",
        "stimulus": f"Persamaan keuntungan sebuah UMKM dimodelkan oleh K(x) = {term_a} + {b}x - {c} (dalam ratusan ribu rupiah), dengan x jumlah produksi.",
        "question": "Berapa unit produksi x agar keuntungan mencapai nilai maksimum?",
        "options": opts, "correct_answer": c_let,
        "explanation": {
            "akal_sehat": f"Puncak grafik tercapai saat turunan pertama bernilai nol (K'(x) = 0). Turunkan: -{2*a}x + {b} = 0 -> {2*a}x = {b} -> x = {x_puncak} unit.",
            "jebakan": "Jangan masukkan x = 0, cari titik stasionernya.",
            "rumus_kunci": "Maksimum/Minimum -> f'(x) = 0"
        }
    }

def gen_mtkl_limit():
    var = random.choice(["aljabar_faktor", "aljabar_tak_hingga"])
    if var == "aljabar_faktor":
        k = random.choice([2, 3, 4])
        ans = 2 * k
        correct = str(ans)
        cand_wrongs = [k, k * k if k * k != ans else ans + 6, 0, ans + 4, max(1, ans - 2), ans + 2]
        wrong = [str(w) for w in dict.fromkeys(cand_wrongs) if w != ans]
        opts, c_let = make_options(correct, wrong, step=2)
        return {
            "subject": "mtk_lanjut", "subject_label": "Matematika Tingkat Lanjut", "topic": "Kalkulus (Limit Pemfaktoran 0/0)",
            "stimulus": f"Perhatikan bentuk limit fungsi aljabar: lim (x → {k}) [(x² - {k*k}) / (x - {k})].",
            "question": "Berapakah nilai dari limit tersebut?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Faktorkan pembilang: (x² - {k*k}) = (x - {k})(x + {k}). Coret pembuat nol (x - {k}). Sisanya tinggal (x + {k}). Masukkan x = {k}: {k} + {k} = {ans}.",
                "jebakan": "Bentuk 0/0 wajib difaktorkan dan dicoret.",
                "rumus_kunci": "Coret faktor pembuat nol di atas dan bawah"
            }
        }
    else:
        combos = [(6, 2, 3), (8, 2, 4), (9, 3, 3), (10, 2, 5), (12, 3, 4), (12, 4, 3)]
        a_atas, a_bawah, ans = random.choice(combos)
        correct = str(ans)
        cand_wrongs = ["0", "∞", str(ans + 2), str(ans * 2), str(max(1, ans - 1)), str(ans + 3)]
        wrong = [str(w) for w in dict.fromkeys(cand_wrongs) if w != str(ans)]
        opts, c_let = make_options(correct, wrong, step=1)
        return {
            "subject": "mtk_lanjut", "subject_label": "Matematika Tingkat Lanjut", "topic": "Kalkulus (Limit Menuju Tak Hingga)",
            "stimulus": f"Perhatikan bentuk limit: lim (x → ∞) [({a_atas}x² + 4x - 1) / ({a_bawah}x² + 5)].",
            "question": "Berapakah nilai dari limit menuju tak hingga tersebut?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Karena pangkat tertinggi di atas dan bawah sama-sama x², abaikan ekor angka kecil di belakangnya! Cukup bagi angka koefisien paling depan: {a_atas} / {a_bawah} = {ans}.",
                "jebakan": "Tidak perlu membagi satu per satu suku dengan x kuadrat, langsung bandingkan koefisien pangkat tertinggi!",
                "rumus_kunci": "Limit Tak Hingga Pangkat Sama = Koefisien Atas / Koefisien Bawah"
            }
        }

def gen_mtkl_vieta():
    b = random.choice([3, 4, 5])
    c, d = random.choice([2, -3]), random.choice([6, 8])
    ans = b
    correct = str(ans)
    c_str = f"+ {c}x" if c >= 0 else f"- {abs(c)}x"
    cand_wrongs = [-ans, c, -c, d, -d, ans + 7, ans - 3, ans + 9]
    wrong = [str(w) for w in dict.fromkeys(cand_wrongs) if str(w) != str(ans)]
    opts, c_let = make_options(correct, wrong, step=1, allow_negative=True)
    return {
        "subject": "mtk_lanjut", "subject_label": "Matematika Tingkat Lanjut", "topic": "Polinomial (Teorema Vieta)",
        "stimulus": f"Persamaan suku banyak berderajat tiga dituliskan: x³ - {b}x² {c_str} - {d} = 0 memiliki akar-akar x₁, x₂, dan x₃.",
        "question": "Berapakah nilai dari penjumlahan seluruh akar-akarnya (x₁ + x₂ + x₃)?",
        "options": opts, "correct_answer": c_let,
        "explanation": {
            "akal_sehat": f"Teorema Vieta: jumlah seluruh akar suku tiga (x₁ + x₂ + x₃) adalah -b/a = -(-{b})/1 = {ans}.",
            "jebakan": "Ingat balik tanda koefisien x² (-b/a).",
            "rumus_kunci": "x₁ + x₂ + x₃ = -b/a"
        }
    }

def gen_mtkl_vektor_panjang():
    x, y, z, p = random.choice([(2, 3, 6, 7), (1, 4, 8, 9), (2, 6, 9, 11)])
    correct = str(p)
    wrong = [str(x + y + z), str(p * 2), str(p + 3), str(max(3, p - 2)), str(x * y)]
    opts, c_let = make_options(correct, wrong, step=2)
    return {
        "subject": "mtk_lanjut", "subject_label": "Matematika Tingkat Lanjut", "topic": "Vektor (Panjang Vektor 3D)",
        "stimulus": f"Sebuah vektor pada ruang tiga dimensi dinyatakan oleh koordinat: v = ({x}i + {y}j + {z}k).",
        "question": "Berapakah panjang (modulus) dari vektor v tersebut (|v|)?",
        "options": opts, "correct_answer": c_let,
        "explanation": {
            "akal_sehat": f"Pythagoras 3D: |v| = √({x}² + {y}² + {z}²) = √({x*x} + {y*y} + {z*z}) = √{p*p} = {p}.",
            "jebakan": "Kuadratkan dulu semua sumbunya sebelum ditarik akar.",
            "rumus_kunci": "|v| = √(x² + y² + z²)"
        }
    }

def gen_mtkl_integral():
    k = random.choice([2, 3, 4])
    ans = (k**2 + 2*k) - 3
    correct = str(ans)
    wrong = [str(ans + 4), str(ans - 3), str(k**2 + 2*k), str(ans * 2), str(ans + 8)]
    opts, c_let = make_options(correct, wrong, step=2)
    return {
        "subject": "mtk_lanjut", "subject_label": "Matematika Tingkat Lanjut", "topic": "Kalkulus (Integral Tentu)",
        "stimulus": f"Perhatikan persamaan integral tentu: ∫ dari 1 sampai {k} untuk fungsi (2x + 2) dx.",
        "question": "Berapakah nilai hasil integral tentu tersebut?",
        "options": opts, "correct_answer": c_let,
        "explanation": {
            "akal_sehat": f"Integralkan fungsinya: [x² + 2x]. Batas atas ({k}): {k*k + 2*k}. Batas bawah (1): 3. Kurangkan: {k*k + 2*k} - 3 = {ans}.",
            "jebakan": "Jangan lupa kurangkan nilai fungsi di batas bawahnya!",
            "rumus_kunci": "Integral Tentu = F(atas) - F(bawah)"
        }
    }


def gen_mtkl_transformasi():
    var = random.choice(["translasi_garis", "dilatasi_parabola", "refleksi_garis"])
    if var == "translasi_garis":
        a = random.choice([2, 3, 4])
        b = random.choice([1, -1, 2, -2])
        c = random.choice([4, 6, -8, 10])
        p = random.choice([1, 2, 3, -1])
        q = random.choice([2, 4, -2, -3])
        if (a * p) + (b * q) == 0:
            q += 1
        c_baru = c - (a * p) - (b * q)
        
        def fmt_line(k_a, k_b, k_c):
            y_part = f"+ {k_b}y" if k_b > 0 else (f"- {abs(k_b)}y" if k_b < 0 else "")
            c_part = f"+ {k_c}" if k_c > 0 else (f"- {abs(k_c)}" if k_c < 0 else "")
            return f"{k_a}x {y_part} {c_part} = 0".replace("  ", " ").strip()

        correct = fmt_line(a, b, c_baru)
        cand_wrongs = [
            fmt_line(a, b, c_baru + 6),
            fmt_line(a, b, c_baru - 6),
            fmt_line(a, b, c_baru + 12),
            fmt_line(a, -b, c_baru),
            fmt_line(a, b, c),
            fmt_line(a, b, c_baru + 8)
        ]
        wrong = [w for w in dict.fromkeys(cand_wrongs) if w != correct]
        opts, c_let = make_options(correct, wrong)
        orig_line = fmt_line(a, b, c)
        return {
            "subject": "mtk_lanjut", "subject_label": "Matematika Tingkat Lanjut", "topic": "Transformasi Geometri (Translasi Garis)",
            "stimulus": f"Sebuah garis lurus memiliki persamaan {orig_line}. Garis tersebut ditranslasikan oleh matriks T = ({p}, {q}).",
            "question": "Berapakah persamaan garis bayangan hasil translasi tersebut?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Translasi titik: x' = x + {p} -> x = x' - {p}, dan y' = y + {q} -> y = y' - {q}. Substitusikan ke garis awal dan sederhanakan: diperoleh {correct}.",
                "jebakan": "Jangan menambahkan nilai p dan q langsung ke konstanta c; substitusi variabel selalu berlawanan tanda: x diganti (x - p)!",
                "rumus_kunci": "Bayangan Translasi: f(x - p, y - q) = 0"
            }
        }
    elif var == "dilatasi_parabola":
        k = random.choice([2, 3])
        a = k * random.choice([1, 2]) # agar a / k bulat
        c = random.choice([2, 3, 4])
        # y = a x^2 + c didilatasikan [O, k]
        # x = x'/k, y = y'/k -> y/k = a (x/k)^2 + c -> y = (a/k) x^2 + c*k
        a_baru = a // k
        c_baru = c * k
        fmt_parabola = lambda k_coeff, k_c: f"y = {'x²' if k_coeff == 1 else f'{k_coeff}x²'} + {k_c}"
        correct = fmt_parabola(a_baru, c_baru)
        cand_wrongs = [
            fmt_parabola(a * k, c * k),
            fmt_parabola(a_baru, c),
            fmt_parabola(a * k * k, c_baru),
            fmt_parabola(a_baru, c * k + 2),
            fmt_parabola(a, c),
            fmt_parabola(a * k, max(1, c // k))
        ]
        wrong = [w for w in dict.fromkeys(cand_wrongs) if w != correct]
        opts, c_let = make_options(correct, wrong)
        return {
            "subject": "mtk_lanjut", "subject_label": "Matematika Tingkat Lanjut", "topic": "Transformasi Geometri (Dilatasi Kurva Kuadrat)",
            "stimulus": f"Kurva parabola dengan persamaan y = {a}x² + {c} didilatasikan dengan faktor skala k = {k} berpusat di titik asal O(0, 0).",
            "question": "Berapakah persamaan kurva bayangan setelah dilatasi?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Dilatasi berpusat di O(0,0) dengan faktor {k}: x' = {k}x -> x = x'/{k} dan y' = {k}y -> y = y'/{k}. Substitusi ke kurva: y/{k} = {a}(x/{k})² + {c} -> y/{k} = ({a}/{k**2})x² + {c} -> kalikan {k} kedua ruas: y = ({a}/{k})x² + {c*k} = {correct}.",
                "jebakan": "Variabel x berada di dalam kuadrat, sehingga saat diganti x/k akan menghasilkan pembagi k²!",
                "rumus_kunci": "Dilatasi kurva f(x, y) = 0 dengan pusat O faktor k: f(x/k, y/k) = 0"
            }
        }
    else:
        # Refleksi garis terhadap sumbu X
        a = random.choice([2, 3, 5])
        b = random.choice([3, 4, 7])
        c = random.choice([6, 12, 15])
        # ax + by + c = 0 direfleksikan thd sumbu X: (x, -y) -> ax - by + c = 0
        correct = f"{a}x - {b}y + {c} = 0"
        cand_wrongs = [
            f"-{a}x + {b}y + {c} = 0",
            f"{a}x + {b}y - {c} = 0",
            f"{b}x + {a}y + {c} = 0",
            f"-{a}x - {b}y - {c} = 0",
            f"{a}x + {b}y + {c} = 0"
        ]
        wrong = [w for w in dict.fromkeys(cand_wrongs) if w != correct]
        opts, c_let = make_options(correct, wrong)
        return {
            "subject": "mtk_lanjut", "subject_label": "Matematika Tingkat Lanjut", "topic": "Transformasi Geometri (Refleksi Garis)",
            "stimulus": f"Garis g memiliki persamaan {a}x + {b}y + {c} = 0 direfleksikan (dicerminkan) terhadap sumbu X.",
            "question": "Berapakah persamaan garis bayangannya?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Refleksi terhadap sumbu X membalikkan tanda koordinat y: (x' = x, y' = -y). Gantikan y dengan (-y): {a}x + {b}(-y) + {c} = 0 -> {correct}.",
                "jebakan": "Refleksi sumbu X hanya mengubah tanda y, sedangkan nilai x tetap!",
                "rumus_kunci": "Refleksi terhadap Sumbu X: (x, y) -> (x, -y)"
            }
        }

def gen_mtkl_lingkaran():
    var = random.choice(["persamaan_pusat_titik", "jari_jari_bentuk_umum", "garis_singgung_titik"])
    if var == "persamaan_pusat_titik":
        a, b = random.choice([(1, 2), (2, 3), (3, 1), (-1, 2), (2, -1)])
        # r = 3, 4, 5
        r = random.choice([3, 4, 5])
        r2 = r ** 2
        correct = str(r2)
        wrong = [str(r), str(r2 + 4), str(r2 - 5 if r2 > 5 else 10), str(r * 2), str(r2 * 2)]
        opts, c_let = make_options(correct, wrong)
        sa = f"- {a}" if a > 0 else f"+ {abs(a)}"
        sb = f"- {b}" if b > 0 else f"+ {abs(b)}"
        svg_code = render_lingkaran_cartesius(a, b, r)
        return {
            "subject": "mtk_lanjut", "subject_label": "Matematika Tingkat Lanjut", "topic": "Geometri Analitik Lingkaran (Konstanta Jari-jari Kuadrat)",
            "stimulus": f"Perhatikan diagram lingkaran pada bidang Cartesius berikut. Sebuah lingkaran memiliki titik pusat di P({a}, {b}) dan memiliki jari-jari r = {r}.",
            "stimulus_svg": svg_code,
            "question": f"Jika persamaan lingkaran ditulis dalam bentuk standar (x {sa})² + (y {sb})² = K, berapakah nilai konstanta K?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Persamaan baku lingkaran berpusat di (a, b) dengan jari-jari r adalah (x - a)² + (y - b)² = r². Karena r = {r}, maka nilai konstanta K = r² = ({r})² = {r2}.",
                "jebakan": "Ruas kanan persamaan lingkaran baku selalu merupakan kuadrat dari jari-jari (r²), bukan r!",
                "rumus_kunci": "(x - a)² + (y - b)² = r²"
            }
        }
    elif var == "jari_jari_bentuk_umum":
        combos = [
            (-6, -8, 9, 4),   # r = sqrt(9 + 16 - 9) = sqrt(16) = 4
            (-4, -6, -3, 4),  # r = sqrt(4 + 9 - (-3)) = sqrt(16) = 4
            (-6, -8, 0, 5),   # r = sqrt(9 + 16 - 0) = sqrt(25) = 5
            (-8, -6, 0, 5),
            (-4, -8, 11, 3),  # r = sqrt(4 + 16 - 11) = sqrt(9) = 3
            (-10, -6, 25, 3)  # r = sqrt(25 + 9 - 25) = sqrt(9) = 3
        ]
        A, B, C, r = random.choice(combos)
        correct = str(r)
        cand_wrongs = [r ** 2, r + 2, max(1, r - 1), r * 2, r + 3, r + 5]
        wrong = [str(w) for w in dict.fromkeys(cand_wrongs) if w != r]
        opts, c_let = make_options(correct, wrong, unit="satuan")
        sA = f"{A}x" if A < 0 else f"+ {A}x"
        sB = f"{B}y" if B < 0 else f"+ {B}y"
        sC = f"+ {C}" if C > 0 else (f"- {abs(C)}" if C < 0 else "")
        svg_code = render_lingkaran_cartesius(-A // 2, -B // 2, r, r_label="r = ?")
        return {
            "subject": "mtk_lanjut", "subject_label": "Matematika Tingkat Lanjut", "topic": "Geometri Analitik Lingkaran (Jari-Jari Bentuk Umum)",
            "stimulus": f"Perhatikan grafik lingkaran pada bidang Cartesius berikut. Diberikan persamaan lingkaran bentuk umum: x² + y² {sA} {sB} {sC} = 0.".replace("  ", " "),
            "stimulus_svg": svg_code,
            "question": "Berapakah panjang jari-jari (r) dari lingkaran tersebut?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"1. Pusat lingkaran P = (-A/2, -B/2) = ({-A//2}, {-B//2}). 2. Kuadrat pusat = ({-A//2})² + ({-B//2})² = {(-A//2)**2 + (-B//2)**2}. 3. Jari-jari r = √(Pusat² - C) = √({(-A//2)**2 + (-B//2)**2} - ({C})) = √{r**2} = {r} satuan.",
                "jebakan": "Ingat rumus jari-jari adalah akar dari (-A/2)² + (-B/2)² MINUS C (jangan sampai salah tanda minus).",
                "rumus_kunci": "r = √((-A/2)² + (-B/2)² - C)"
            }
        }
    else:
        # Garis singgung di titik pada lingkaran x^2 + y^2 = r^2
        x1, y1, r2 = random.choice([(3, 4, 25), (4, -3, 25), (-3, 4, 25), (6, 8, 100), (8, 6, 100)])
        
        def fmt_tan(k_x, k_y, k_r):
            y_p = f"+ {k_y}y" if k_y >= 0 else f"- {abs(k_y)}y"
            return f"{k_x}x {y_p} = {k_r}"

        correct = fmt_tan(x1, y1, r2)
        cand_wrongs = [
            fmt_tan(y1, x1, r2),
            fmt_tan(x1, y1, int(math.sqrt(r2))),
            fmt_tan(abs(x1), abs(y1), r2 + 10),
            fmt_tan(x1, -y1, r2),
            fmt_tan(x1, y1, r2 * 2),
            fmt_tan(-x1, y1, r2)
        ]
        wrong = [w for w in dict.fromkeys(cand_wrongs) if w != correct]
        opts, c_let = make_options(correct, wrong)
        r_val = int(math.isqrt(r2))
        svg_code = render_lingkaran_cartesius(0, 0, r_val, tangent_pt=(x1, y1), r_label=f"r = {r_val}")
        return {
            "subject": "mtk_lanjut", "subject_label": "Matematika Tingkat Lanjut", "topic": "Geometri Analitik Lingkaran (Garis Singgung di Titik Singgung)",
            "stimulus": f"Perhatikan diagram garis singgung lingkaran berikut. Titik P({x1}, {y1}) terletak tepat pada lingkaran dengan persamaan x² + y² = {r2}.",
            "stimulus_svg": svg_code,
            "question": "Berapakah persamaan garis singgung yang melalui titik P tersebut?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Rumus bagi adil garis singgung lingkaran x² + y² = r² pada titik (x₁, y₁): x₁·x + y₁·y = r². Substitusi langsung: ({x1})x + ({y1})y = {r2} -> {correct}.",
                "jebakan": "Tidak perlu turunan rumit; untuk titik tepat pada lingkaran, gunakan metode 'Bagi Adil'!",
                "rumus_kunci": "Garis Singgung Lingkaran Pusat O: x₁·x + y₁·y = r²"
            }
        }

def gen_mtkl_trigo_periode():
    var = random.choice(["periode_gelombang", "nilai_ekstrim", "amplitudo"])
    A = random.choice([2, 3, 4, 5])
    k = random.choice([2, 3, 4, 6])
    C = random.choice([1, 2, 3, 4])
    theta = random.choice([15, 30, 45, 60])
    periode = 360 // k
    
    if var == "periode_gelombang":
        correct = f"{periode}°"
        cand_periods = [360, periode * 2, max(30, periode // 2), 720 // k, periode + 45, periode + 60, 90, 120]
        wrong = [f"{p}°" for p in dict.fromkeys(cand_periods) if p != periode]
        opts, c_let = make_options(correct, wrong)
        svg_code = render_gelombang_trigo("sin", A=A, k=k, C=C, title="Grafik Gelombang Trigonometri")
        return {
            "subject": "mtk_lanjut", "subject_label": "Matematika Tingkat Lanjut", "topic": "Fungsi Trigonometri (Periode Gelombang)",
            "stimulus": f"Perhatikan grafik gelombang trigonometri berikut. Diberikan fungsi trigonometri f(x) = {A} sin({k}x - {theta}°) + {C} untuk sudut x dalam satuan derajat.",
            "stimulus_svg": svg_code,
            "question": "Berapakah periode dari fungsi trigonometri tersebut?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Periode fungsi sinus/cosinus dasar adalah 360°. Kecepatan gelombang ditentukan oleh koefisien x, yaitu k = {k}. Periode T = 360° / k = 360° / {k} = {periode}°.",
                "jebakan": f"Amplitudo {A}, pergeseran {theta}°, dan konstanta {C} sama sekali TIDAK mempengaruhi panjang periode gelombang!",
                "rumus_kunci": "Periode Gelombang T = 360° / k (atau 2π / k)"
            }
        }
    elif var == "nilai_ekstrim":
        y_max = A + C
        y_min = -A + C
        correct = f"Maksimum = {y_max}, Minimum = {y_min}"
        cand_wrongs = [
            f"Maksimum = {y_max + 1}, Minimum = {y_min - 1}",
            f"Maksimum = {A}, Minimum = -{A}",
            f"Maksimum = {y_max + 2}, Minimum = {y_min - 1}",
            f"Maksimum = {A * 2}, Minimum = -{A * 2}",
            f"Maksimum = {y_max + 2}, Minimum = {y_min}",
            f"Maksimum = {y_max}, Minimum = {y_min - 2}"
        ]
        wrong = [w for w in dict.fromkeys(cand_wrongs) if w != correct]
        opts, c_let = make_options(correct, wrong)
        svg_code = render_gelombang_trigo("cos", A=A, k=k, C=C, title="Grafik Gelombang Cosinus")
        return {
            "subject": "mtk_lanjut", "subject_label": "Matematika Tingkat Lanjut", "topic": "Fungsi Trigonometri (Nilai Maksimum & Minimum)",
            "stimulus": f"Perhatikan grafik osilasi cosinus berikut. Perhatikan fungsi gelombang f(x) = {A} cos({k}x + {theta}°) + {C}.",
            "stimulus_svg": svg_code,
            "question": "Berapakah nilai maksimum dan nilai minimum berturut-turut yang dapat dicapai fungsi tersebut?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Nilai fungsi cosinus selalu berosilasi antara -1 sampai +1. Nilai Maksimum = {A}(+1) + {C} = {y_max}. Nilai Minimum = {A}(-1) + {C} = {y_min}.",
                "jebakan": f"Jangan lupa menambahkan pergeseran vertikal konstanta C = {C} pada kedua nilai ekstrim!",
                "rumus_kunci": "y_max = |A| + C, dan y_min = -|A| + C"
            }
        }
    else:
        correct = str(A)
        cand_wrongs = [A * 2, A + 3, max(1, A - 1), A + C, A + 4, A + 2]
        wrong = [str(w) for w in dict.fromkeys(cand_wrongs) if w != A]
        opts, c_let = make_options(correct, wrong, unit="satuan")
        svg_code = render_gelombang_trigo("sin", A=A, k=k, C=C, title="Grafik Simpangan Gelombang")
        return {
            "subject": "mtk_lanjut", "subject_label": "Matematika Tingkat Lanjut", "topic": "Fungsi Trigonometri (Amplitudo Simpangan)",
            "stimulus": f"Perhatikan grafik fungsi simpangan osilasi berikut. Sebuah gelombang osilasi dimodelkan dengan persamaan f(x) = {A} sin({k}x - {theta}°) + {C}.",
            "stimulus_svg": svg_code,
            "question": "Berapakah nilai amplitudo (simpangan terjauh dari garis tengah) fungsi tersebut?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Amplitudo adalah nilai mutlak pengali di depan fungsi trigonometri: Amplitudo = |{A}| = {A} satuan.",
                "jebakan": "Amplitudo murni mengukur jarak puncak ke garis tengah osilasi, tidak terpengaruh pergeseran vertikal +{C}.",
                "rumus_kunci": "Amplitudo = |A|"
            }
        }
