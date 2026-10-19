import random
import math
from .helpers import make_options
from .svg_renderer import (
    render_cartesius_dhp,
    render_kubus,
    render_lingkaran_sudut,
    render_lingkaran_juring
)

# ==============================================================================
# 1. GENERATOR MATEMATIKA WAJIB (MULTI-VARIASI PER MODUL)
# ==============================================================================

def gen_mtk_komposisi():
    var = random.choice(["forward", "reverse_inner", "solve_root"])
    
    if var == "forward":
        # (g o f)(val)
        a1, b1 = random.choice([2, 3, 4]), random.choice([-3, -2, 1, 2, 4])
        a2, b2 = random.choice([2, 3]), random.choice([-4, -1, 3, 5])
        val = random.choice([2, 3, 4])
        f_res = a1 * val + b1
        g_res = a2 * f_res + b2
        correct = str(g_res)
        cand_wrongs = [a1 * (a2 * val + b2) + b1, g_res + 4, g_res - 3, g_res + 8, g_res - 6, f_res * 2, f_res + 7]
        wrong = [str(w) for w in dict.fromkeys(cand_wrongs) if str(w) != correct]
        opts, c_let = make_options(correct, wrong, step=3, allow_negative=True)
        s1 = f"+ {b1}" if b1 >= 0 else f"- {abs(b1)}"
        s2 = f"+ {b2}" if b2 >= 0 else f"- {abs(b2)}"
        return {
            "subject": "mtk_wajib", "subject_label": "Matematika Wajib", "topic": "Fungsi Komposisi (Nilai Fungsi)",
            "stimulus": f"Diketahui dua aturan fungsi: f(x) = {a1}x {s1} dan g(x) = {a2}x {s2}.",
            "question": f"Berapakah nilai dari (g ∘ f)({val})?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Kerjakan huruf yang paling nempel sama angka ({val}) duluan: f({val}) = {a1}({val}) {s1} = {f_res}. Hasilnya oper ke g: g({f_res}) = {a2}({f_res}) {s2} = {g_res}.",
                "jebakan": "Jangan terbalik membaca dari kiri ke kanan (mengerjakan g duluan).",
                "rumus_kunci": "Baca bundaran (o) dari KANAN ke KIRI!"
            }
        }
    elif var == "reverse_inner":
        # Diketahui (g o f)(x) = a2(a1*x + b1) + b2 dan f(x) = a1*x + b1, cari g(k)
        a1, b1 = random.choice([2, 3]), random.choice([1, 2, 3])
        a2, b2 = random.choice([2, 4]), random.choice([-2, 3, 5])
        k = random.choice([4, 5, 6])
        ans = a2 * k + b2
        correct = str(ans)
        cand_wrongs = [ans + 2, ans - 4, a1 * k + b1, ans * 2, ans + 9, ans - 6, ans + 11]
        wrong = [str(w) for w in dict.fromkeys(cand_wrongs) if str(w) != correct]
        opts, c_let = make_options(correct, wrong, step=2, allow_negative=True)
        s_gof_b = a2 * b1 + b2
        s_gof_b_str = f"+ {s_gof_b}" if s_gof_b >= 0 else f"- {abs(s_gof_b)}"
        s1 = f"+ {b1}" if b1 >= 0 else f"- {abs(b1)}"
        return {
            "subject": "mtk_wajib", "subject_label": "Matematika Wajib", "topic": "Fungsi Komposisi (Mencari Fungsi Luar)",
            "stimulus": f"Diketahui f(x) = {a1}x {s1} dan (g ∘ f)(x) = {a1*a2}x {s_gof_b_str}.",
            "question": f"Berapakah nilai dari g({k})?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Supaya bagian dalam f(x) bernilai {k}, bayangkan f(x) sebagai kotak tunggal t. Karena {a1*a2}x = {a2}({a1}x), rumus g(t) adalah {a2}t + {b2}. Masukkan t = {k}: {a2}({k}) + ({b2}) = {ans}.",
                "jebakan": "Jangan memasukkan x = k ke rumus (g o f)(x), yang ditanya adalah g(k) bukan (g o f)(k)!",
                "rumus_kunci": "g(f(x)) -> Ubah f(x) menjadi variabel tunggal t"
            }
        }
    else:
        # (f o g)(x) = target -> find x
        a = random.choice([2, 3])
        b = random.choice([1, 2, 4])
        c = 2
        d = random.choice([1, 3])
        x_ans = random.choice([2, 3, 4, 5])
        g_val = c * x_ans - d
        target = a * g_val + b
        correct = str(x_ans)
        cand_wrongs = [x_ans + 1, max(1, x_ans - 1), x_ans * 2, g_val, x_ans + 3, x_ans + 4, x_ans + 5, max(1, x_ans - 2), target]
        wrong = [str(w) for w in dict.fromkeys(cand_wrongs) if str(w) != correct]
        opts, c_let = make_options(correct, wrong, step=1)
        s_b = f"+ {b}" if b >= 0 else f"- {abs(b)}"
        s_d = f"- {d}" if d >= 0 else f"+ {abs(d)}"
        return {
            "subject": "mtk_wajib", "subject_label": "Matematika Wajib", "topic": "Fungsi Komposisi (Menyelesaikan Persamaan)",
            "stimulus": f"Diketahui f(x) = {a}x {s_b} dan g(x) = {c}x {s_d}. Jika (f ∘ g)(x) = {target}.",
            "question": "Berapakah nilai x yang memenuhi persamaan tersebut?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Urai dari luar: f(g(x)) = {target} -> {a}·g(x) {s_b} = {target} -> {a}·g(x) = {target - b} -> g(x) = {g_val}. Masukkan rumus g(x): {c}x {s_d} = {g_val} -> {c}x = {g_val + d} -> x = {x_ans}.",
                "jebakan": "Kupas fungsi dari kulit paling luar dulu sebelum menyentuh fungsi dalamnya.",
                "rumus_kunci": "Selesaikan f(...) = target terlebih dahulu, lalu selesaikan g(x)"
            }
        }

def gen_mtk_invers():
    var = random.choice(["substitusi_k", "pecahan_linear"])
    if var == "substitusi_k":
        # f(x) = (ax + b) / c. Given f^-1(k) = target, find k.
        # k = f(target) = (a * target + b) / c.
        # Ensure k != target, b != 0, and clean integer k.
        combos = [
            (2, 7, 3, 4, 5),   # target=4 -> k=(8+7)/3=5
            (3, 4, 2, 2, 5),   # target=2 -> k=(6+4)/2=5
            (3, 2, 4, 6, 5),   # target=6 -> k=(18+2)/4=5
            (2, 11, 3, 5, 7),  # target=5 -> k=(10+11)/3=7
            (3, 5, 2, 3, 7),   # target=3 -> k=(9+5)/2=7
            (2, 1, 3, 4, 3),   # target=4 -> k=(8+1)/3=3
            (4, 2, 2, 3, 7),   # target=3 -> k=(12+2)/2=7
        ]
        a, b, c, target, k = random.choice(combos)
        correct = str(k)
        cand_wrongs = [target, k + 2, max(1, k - 2), k * 2, k + 4]
        wrong = [str(w) for w in dict.fromkeys(cand_wrongs) if w != k]
        opts, c_let = make_options(correct, wrong, step=2, allow_negative=True)
        s_b = f"+ {b}" if b >= 0 else f"- {abs(b)}"
        return {
            "subject": "mtk_wajib", "subject_label": "Matematika Wajib", "topic": "Fungsi Invers (Substitusi Nilai)",
            "stimulus": f"Sebuah rumus fungsi dituliskan: f(x) = ({a}x {s_b}) / {c}.",
            "question": f"Jika f⁻¹(k) = {target}, maka berapakah nilai k?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"f⁻¹(k) = {target} itu artinya f({target}) = k! Langsung masukkan x = {target} ke rumus fungsi f: ({a} x {target} {s_b}) / {c} = {a * target + b} / {c} = {k}. Gak perlu cari rumus invers x.",
                "jebakan": "Banyak yang ribet pindah ruas mencari f⁻¹(x) panjang-panjang, padahal tinggal cemplungin angkanya!",
                "rumus_kunci": "f⁻¹(k) = p ekuivalen dengan f(p) = k"
            }
        }
    else:
        # Invers pecahan f(x) = (ax + b) / (cx - d) -> f^-1(x) = (dx + b) / (cx - a)
        # Choose configs where denominator (c*x_val - a) == 1 to guarantee clean integers
        combos = [
            (2, 3, 1, 4, 3), # f^-1(3) = (4*3 + 3) / (1*3 - 2) = 15 / 1 = 15
            (1, 2, 1, 3, 2), # f^-1(2) = (3*2 + 2) / (1*2 - 1) = 8 / 1 = 8
            (2, 1, 1, 5, 3), # f^-1(3) = (5*3 + 1) / (1*3 - 2) = 16 / 1 = 16
            (3, 2, 1, 4, 4), # f^-1(4) = (4*4 + 2) / (1*4 - 3) = 18 / 1 = 18
        ]
        a, b, c, d, x_val = random.choice(combos)
        ans = (d * x_val + b) // (c * x_val - a)
        correct = str(ans)
        cand_wrongs = [ans + 3, max(1, ans - 4), ans * 2, ans + 8, max(1, ans - 6), ans + 5]
        wrong = [str(w) for w in dict.fromkeys(cand_wrongs) if w != ans]
        opts, c_let = make_options(correct, wrong, step=2)
        return {
            "subject": "mtk_wajib", "subject_label": "Matematika Wajib", "topic": "Fungsi Invers (Pecahan Linear)",
            "stimulus": f"Fungsi rasional didefinisikan sebagai f(x) = ({a}x + {b}) / ({c}x - {d}), untuk x ≠ {d}.",
            "question": f"Berapakah nilai dari f⁻¹({x_val})?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Trik kilat invers pecahan (ax+b)/(cx-d): tukar posisi angka kiri-atas ({a}) dan kanan-bawah (-{d}) lalu balik tandanya! Jadi f⁻¹(x) = ({d}x + {b}) / ({c}x - {a}). Masukkan x = {x_val}: ({d}({x_val}) + {b}) / ({c}({x_val}) - {a}) = {ans}.",
                "jebakan": "Jangan sampai lupa membalik tanda minus/plus saat menukar posisi a dan d.",
                "rumus_kunci": "Invers (ax+b)/(cx+d) = (-dx+b)/(cx-a)"
            }
        }

def gen_mtk_barisan():
    var = random.choice(["suku_n", "eliminasi_suku", "jumlah_deret"])
    if var == "suku_n":
        a = random.choice([3, 5, 7, 10])
        b = random.choice([3, 4, 5, 6])
        n = random.choice([15, 20, 25])
        un = a + (n - 1) * b
        correct = str(un)
        cand_wrongs = [un + b, un - b, a + (n + 1) * b, un + 2 * b, max(1, un - 2 * b)]
        wrong = [str(w) for w in dict.fromkeys(cand_wrongs) if w != un]
        opts, c_let = make_options(correct, wrong, step=b)
        return {
            "subject": "mtk_wajib", "subject_label": "Matematika Wajib", "topic": "Barisan Aritmetika (Mencari Suku ke-n)",
            "stimulus": f"Sebuah barisan aritmetika suku pertamanya (U₁) adalah {a} dan beda antarsuku (b) adalah {b}.",
            "question": f"Berapakah nilai suku ke-{n} (U_{n}) dari barisan tersebut?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Dari suku ke-1 ke suku ke-{n}, kamu melangkah {n - 1} kali. Tiap langkah nambah {b}. Total nambah: {n - 1} x {b} = {(n - 1) * b}. Tambah modal awal {a}: {a} + {(n - 1) * b} = {un}.",
                "jebakan": f"Opsi {a + n * b} salah karena melangkah {n} kali (lupa dikurangi 1).",
                "rumus_kunci": "U_n = a + (n-1)b"
            }
        }
    elif var == "eliminasi_suku":
        # Diketahui Up dan Uq -> cari Ur
        b = random.choice([3, 4, 5])
        a = random.choice([2, 5, 8])
        p, q, r = 3, 7, 12
        up = a + (p - 1) * b
        uq = a + (q - 1) * b
        ur = a + (r - 1) * b
        correct = str(ur)
        cand_wrongs = [ur + b, ur - b, uq + (r - q) * (b + 1), ur + 12, max(1, ur - 8), ur + 2 * b]
        wrong = [str(w) for w in dict.fromkeys(cand_wrongs) if w != ur]
        opts, c_let = make_options(correct, wrong, step=b)
        return {
            "subject": "mtk_wajib", "subject_label": "Matematika Wajib", "topic": "Barisan Aritmetika (Dua Suku Sembarang)",
            "stimulus": f"Pada suatu barisan aritmetika, diketahui suku ke-{p} adalah {up} dan suku ke-{q} adalah {uq}.",
            "question": f"Berapakah nilai suku ke-{r} dari barisan tersebut?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Dari suku ke-{p} ({up}) ke suku ke-{q} ({uq}) ada {q - p} lompatan dengan selisih nilai {uq} - {up} = {uq - up}. Maka 1 lompatan (b) = {uq - up} / {q - p} = {b}. Sekarang dari suku ke-{q} ({uq}) mau ke suku ke-{r} butuh {r - q} lompatan lagi: {uq} + ({r - q} x {b}) = {ur}. Cepat tanpa rumus eliminasi kurung!",
                "jebakan": "Tidak perlu membuang waktu mencari suku pertama a terlebih dahulu.",
                "rumus_kunci": "Beda b = (U_q - U_p) / (q - p)"
            }
        }
    else:
        # Jumlah deret Sn (Kontekstual kursi bioskop)
        a = random.choice([10, 12, 16])
        b = random.choice([2, 4])
        n = random.choice([8, 10, 12])
        sn = (n * (2 * a + (n - 1) * b)) // 2
        correct = str(sn)
        wrong = [str(a + (n - 1) * b), str(sn + 20), str(sn - 16), str(n * a), str(sn * 2)]
        opts, c_let = make_options(correct, wrong, step=15)
        return {
            "subject": "mtk_wajib", "subject_label": "Matematika Wajib", "topic": "Deret Aritmetika (Akumulasi Total Sn)",
            "stimulus": f"Baris pertama ruang seminar berisi {a} kursi, baris kedua berisi {a + b} kursi, dan seterusnya bertambah {b} kursi di tiap baris berikutnya. Ruangan tersebut memiliki total {n} baris.",
            "question": "Berapa total seluruh kapasitas kursi di ruang seminar tersebut?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Ini menghitung TOTAL JUMLAH (bukan cuma baris terakhir!). Cari baris terakhir (U_{n}): {a} + {n-1}x{b} = {a + (n-1)*b}. Pasangkan baris pertama dan terakhir: {a} + {a + (n-1)*b} = {2*a + (n-1)*b}. Kalikan separuh baris ({n}/2 = {n//2}): {n//2} x {2*a + (n-1)*b} = {sn} kursi.",
                "jebakan": "Jangan terkecoh cuma menghitung kursi di baris paling belakang (U_n)!",
                "rumus_kunci": "Jumlah Deret S_n = (n/2) x (Suku Pertama + Suku Terakhir)"
            }
        }

def gen_mtk_peluang():
    var = random.choice(["kombinasi_tim", "kombinasi_ganda", "peluang_kelereng"])
    if var == "kombinasi_tim":
        n, r = random.choice([6, 7, 8]), random.choice([2, 3])
        ans = math.comb(n, r)
        perm = math.perm(n, r)
        correct = str(ans)
        cand_wrongs = [perm, ans * 2, ans + 10, max(5, ans - 6), n * r, ans + 15, ans * 3]
        wrong = [str(w) for w in dict.fromkeys(cand_wrongs) if str(w) != correct]
        opts, c_let = make_options(correct, wrong, step=4)
        return {
            "subject": "mtk_wajib", "subject_label": "Matematika Wajib", "topic": "Kombinatorika (Pemilihan Tim Bebas)",
            "stimulus": f"Dari {n} siswa berprestasi di suatu sekolah, guru akan memilih {r} orang untuk membentuk tim delegasi olimpiade.",
            "question": "Berapa banyak susunan tim berbeda yang dapat dibentuk?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Karena posisi dalam tim setara (urutan bebas), pakai Kombinasi C({n}, {r}). Hitung mundur {r} angka dari {n}, lalu bagi faktorial {r}. Tepat {ans} susunan.",
                "jebakan": f"Opsi {perm} itu Permutasi (kalau ada jabatan juara 1, 2, 3).",
                "rumus_kunci": "Kombinasi = n! / (r!(n-r)!)"
            }
        }
    elif var == "kombinasi_ganda":
        # Memilih 2 pria dari 5 dan 1 wanita dari 4
        n_p, r_p = 5, 2
        n_w, r_w = 4, 1
        ans = math.comb(n_p, r_p) * math.comb(n_w, r_w) # 10 * 4 = 40
        correct = str(ans)
        cand_wrongs = [math.comb(n_p + n_w, r_p + r_w), ans + 10, ans // 2, ans * 2, (n_p * r_p) + (n_w * r_w), ans + 20, ans - 15]
        wrong = [str(w) for w in dict.fromkeys(cand_wrongs) if str(w) != correct]
        opts, c_let = make_options(correct, wrong, step=6)
        return {
            "subject": "mtk_wajib", "subject_label": "Matematika Wajib", "topic": "Kombinatorika (Kombinasi Bersyarat Kelompok)",
            "stimulus": f"Sebuah panitia membutuhkan 2 orang pria dan 1 orang wanita. Calon yang tersedia adalah {n_p} orang pria dan {n_w} orang wanita.",
            "question": "Berapa banyak cara memilih susunan panitia tersebut?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Pecah dua kubu: Pilih pria C({n_p}, 2) = 10 cara. Pilih wanita C({n_w}, 1) = 4 cara. Karena pria DAN wanita harus terpilih bersamaan, kalikan keduanya: 10 x 4 = {ans} cara.",
                "jebakan": "Jangan langsung gabungkan jumlah orang 5+4 = 9 lalu dicari C(9, 3)!",
                "rumus_kunci": "Total Cara = Kombinasi Kelompok A x Kombinasi Kelompok B"
            }
        }
    else:
        # Peluang kelereng merah dari kantong
        merah = random.choice([3, 4, 5])
        biru = random.choice([5, 6])
        total = merah + biru
        from fractions import Fraction
        f = Fraction(merah, total)
        correct = f"{f.numerator}/{f.denominator}"
        cand_fractions = [
            Fraction(biru, total),
            Fraction(merah, total + 2),
            Fraction(merah + 1, total + 1),
            Fraction(1, total),
            Fraction(max(1, merah - 1), total),
            Fraction(merah, total + 3),
            Fraction(biru - 1, total)
        ]
        cand_wrongs = [f"{frac.numerator}/{frac.denominator}" for frac in cand_fractions if frac != f]
        wrong = list(dict.fromkeys(cand_wrongs))
        opts, c_let = make_options(correct, wrong)
        return {
            "subject": "mtk_wajib", "subject_label": "Matematika Wajib", "topic": "Peluang Teoretik (Kejadian Tunggal)",
            "stimulus": f"Dalam sebuah kantong terdapat {merah} kelereng merah dan {biru} kelereng biru. Sebuah kelereng diambil secara acak.",
            "question": "Berapakah peluang terambilnya kelereng berwarna merah?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Total kelereng di kantong: {merah} + {biru} = {total} butir. Kelereng merah yang diincar ada {merah} butir. Peluangnya tinggal jatah merah per total kantong: {merah}/{total} = {correct}.",
                "jebakan": f"Opsi {biru}/{total} salah karena itu adalah peluang terambilnya kelereng biru, bukan merah!",
                "rumus_kunci": "Peluang = Jumlah Target / Total Seluruh Sampel"
            }
        }

def gen_mtk_geometri_takhingga():
    h = random.choice([6, 8, 10, 12])
    a, b = random.choice([(3, 4), (2, 3), (1, 2), (3, 5)])
    tot = (h * (b + a)) // (b - a)
    correct = f"{tot}"
    cand_wrongs = [tot * 2, tot // 2, tot + 14, max(4, tot - 10), tot + 20, h * 2]
    wrong = [f"{w}" for w in dict.fromkeys(cand_wrongs) if w != tot]
    opts, c_let = make_options(correct, wrong, unit="meter", step=8)
    return {
        "subject": "mtk_wajib", "subject_label": "Matematika Wajib", "topic": "Deret Geometri Tak Hingga",
        "stimulus": f"Sebuah bola dijatuhkan dari ketinggian {h} meter di atas lantai. Setiap kali memantul, bola mencapai ketinggian {a}/{b} dari tinggi sebelumnya sampai bola akhirnya berhenti.",
        "question": "Berapakah total panjang lintasan yang ditempuh bola tersebut hingga berhenti?",
        "options": opts, "correct_answer": c_let,
        "explanation": {
            "akal_sehat": f"Trik kilat pantulan bola: kalikan tinggi awal ({h} m) dengan (Penyebut + Pembilang) dibagi (Penyebut - Pembilang). Jadi: {h} x ({b} + {a}) / ({b} - {a}) = {tot} meter.",
            "jebakan": "Jangan cuma hitung lintasan bola turunnya doang, lintasan naik setelah memantul juga harus dihitung!",
            "rumus_kunci": "Panjang Lintasan Bola Pantul = h x (b + a) / (b - a)"
        }
    }

def gen_mtk_finansial():
    m = random.choice([5, 10, 20])
    b = random.choice([6, 8, 10])
    t = random.choice([2, 3])
    bunga_total = m * (b / 100) * t
    uang_akhir = round(m + bunga_total, 1)
    if uang_akhir.is_integer():
        uang_akhir = int(uang_akhir)
    correct = f"{uang_akhir}"
    cand_wrongs = [
        round(m + (m * b / 100), 1),
        round(uang_akhir * 1.2, 1),
        round(uang_akhir + 3, 1),
        m * 2,
        round(max(1, uang_akhir - 1.5), 1)
    ]
    wrong = [f"{int(w)}" if float(w).is_integer() else f"{w}" for w in dict.fromkeys(cand_wrongs) if str(int(w) if float(w).is_integer() else w) != str(uang_akhir)]
    opts, c_let = make_options(correct, wrong, unit="juta rupiah", step=1)
    return {
        "subject": "mtk_wajib", "subject_label": "Matematika Wajib", "topic": "Matematika Finansial (Bunga Tunggal)",
        "stimulus": f"Pak Ridwan menabung modal usaha sebesar {m} juta rupiah di bank dengan sistem bunga tunggal {b}% per tahun selama {t} tahun.",
        "question": "Berapakah total saldo tabungan akhir Pak Ridwan setelah periode tersebut?",
        "options": opts, "correct_answer": c_let,
        "explanation": {
            "akal_sehat": f"Bunga tunggal selalu sama tiap tahun ({b}% x {m} juta = {m * b / 100} juta/tahun). Selama {t} tahun, total bunganya: {m * b / 100} x {t} = {bunga_total} juta. Total uang akhir = {m} + {bunga_total} = {uang_akhir} juta rupiah.",
            "jebakan": "Bunga tunggal tidak berbunga-bunga seperti bunga majemuk.",
            "rumus_kunci": "Saldo Akhir = Modal Awal + (Modal x Bunga x Waktu)"
        }
    }

def gen_mtk_lingkaran_sudut():
    var = random.choice(["pusat_keliling", "tali_busur"])
    if var == "pusat_keliling":
        sudut_keliling = random.choice([35, 40, 45, 55])
        sudut_pusat = sudut_keliling * 2
        correct = f"{sudut_pusat}°"
        cand_wrongs = [sudut_keliling, 180 - sudut_keliling, sudut_pusat + 20, max(20, sudut_pusat - 30), sudut_keliling + 40]
        wrong = [f"{w}°" for w in dict.fromkeys(cand_wrongs) if w != sudut_pusat]
        opts, c_let = make_options(correct, wrong, step=10)
        svg_code = render_lingkaran_sudut("pusat_keliling", sudut_keliling=sudut_keliling, sudut_pusat="?")
        return {
            "subject": "mtk_wajib", "subject_label": "Matematika Wajib", "topic": "Geometri Lingkaran (Sudut Pusat & Keliling)",
            "stimulus": f"Perhatikan diagram lingkaran berikut. Titik A, B, dan C terletak pada busur lingkaran berpusat di titik O. Sudut keliling ∠ACB besarnya {sudut_keliling}° dan menghadap busur AB yang sama dengan sudut pusat ∠AOB.",
            "stimulus_svg": svg_code,
            "question": "Berapakah besar sudut pusat ∠AOB?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Jika menghadap busur yang sama, sudut PUSAT selalu DUA KALI LIPAT sudut KELILING: 2 x {sudut_keliling}° = {sudut_pusat}°.",
                "jebakan": "Sudut pusat berada di tengah lingkaran, bukaan sudutnya pasti lebih besar dari sudut keliling di pinggir.",
                "rumus_kunci": "Sudut Pusat = 2 x Sudut Keliling"
            }
        }
    else:
        # Segi empat tali busur: sudut berhadapan total 180 derajat
        sudut_a = random.choice([75, 80, 85, 95])
        sudut_c = 180 - sudut_a
        correct = f"{sudut_c}°"
        cand_wrongs = [sudut_a, 90, sudut_c + 20, max(20, sudut_c - 20), 180 - (sudut_a // 2)]
        wrong = [f"{w}°" for w in dict.fromkeys(cand_wrongs) if w != sudut_c]
        opts, c_let = make_options(correct, wrong, step=10)
        svg_code = render_lingkaran_sudut("segiempat", sudut_a=sudut_a, sudut_c="?")
        return {
            "subject": "mtk_wajib", "subject_label": "Matematika Wajib", "topic": "Geometri Lingkaran (Segi Empat Tali Busur)",
            "stimulus": f"Perhatikan diagram segi empat tali busur ABCD berikut. ABCD adalah segi empat tali busur di mana keempat titik sudutnya menyentuh lingkaran. Jika besar sudut ∠DAB = {sudut_a}°.",
            "stimulus_svg": svg_code,
            "question": "Berapakah besar sudut yang berhadapan dengannya (∠BCD)?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Hukum segi empat tali busur: dua sudut yang saling BERHADAPAN kalau dijumlahkan WAJIB pas 180°! Tinggal kurangkan: 180° - {sudut_a}° = {sudut_c}°.",
                "jebakan": "Bukan sama besar! Sudut yang berhadapan saling melengkapi menjadi 180 derajat.",
                "rumus_kunci": "Sudut Berhadapan Segi Empat Tali Busur = 180°"
            }
        }

def gen_mtk_lingkaran_juring():
    # Choose pairs where (2 * 22/7 * r) * (theta / 360) is guaranteed to be an exact integer
    combos = [
        (90, 14), # keliling = 88, busur = 88 / 4 = 22
        (90, 21), # keliling = 132, busur = 132 / 4 = 33
        (90, 28), # keliling = 176, busur = 176 / 4 = 44
        (60, 21), # keliling = 132, busur = 132 / 6 = 22
        (60, 42), # keliling = 264, busur = 264 / 6 = 44
        (120, 21), # keliling = 132, busur = 132 / 3 = 44
        (120, 42), # keliling = 264, busur = 264 / 3 = 88
        (45, 28), # keliling = 176, busur = 176 / 8 = 22
    ]
    theta, r = random.choice(combos)
    keliling = int(2 * (22 / 7) * r)
    busur = (theta * keliling) // 360
    correct = f"{busur}"
    cand_wrongs = [keliling, busur * 2, busur + 11, max(5, busur - 8), int(r * 2), busur + 22]
    wrong = [f"{w}" for w in dict.fromkeys(cand_wrongs) if w != busur]
    opts, c_let = make_options(correct, wrong, unit="cm", step=6)
    svg_code = render_lingkaran_juring(theta, r)
    return {
        "subject": "mtk_wajib", "subject_label": "Matematika Wajib", "topic": "Geometri Lingkaran (Panjang Busur)",
        "stimulus": f"Perhatikan diagram juring lingkaran berikut. Sebuah juring lingkaran memiliki sudut pusat {theta}° dan jari-jari r = {r} cm (gunakan π = 22/7).",
        "stimulus_svg": svg_code,
        "question": "Berapakah panjang busur lingkaran yang membatasi juring tersebut?",
        "options": opts, "correct_answer": c_let,
        "explanation": {
            "akal_sehat": f"Sudut {theta}° berarti {theta}/360 = 1/{360 // theta} lingkaran. Keliling utuh: 2 x 22/7 x {r} = {keliling} cm. Ambil jatahnya: {keliling} / {360 // theta} = {busur} cm.",
            "jebakan": "Jangan tertukar dengan rumus luas juring (π r²).",
            "rumus_kunci": "Panjang Busur = (Sudut Pusat / 360°) x Keliling Lingkaran"
        }
    }

def gen_mtk_permutasi():
    n = random.choice([5, 6, 7])
    ans = n * (n - 1) * (n - 2)
    komb = math.comb(n, 3)
    correct = str(ans)
    cand_wrongs = [komb, ans * 2, max(10, ans - 20), n * 3, ans + 30]
    wrong = [str(w) for w in dict.fromkeys(cand_wrongs) if w != ans]
    opts, c_let = make_options(correct, wrong, step=15)
    return {
        "subject": "mtk_wajib", "subject_label": "Matematika Wajib", "topic": "Kaidah Pencacahan (Permutasi Jabatan)",
        "stimulus": f"Dalam pemilihan pengurus OSIS, terdapat {n} calon siswa yang akan dipilih untuk mengisi 3 posisi berbeda: Ketua, Sekretaris, dan Bendahara.",
        "question": "Berapa banyak susunan kepengurusan berbeda yang mungkin terpilih?",
        "options": opts, "correct_answer": c_let,
        "explanation": {
            "akal_sehat": f"Karena ada JABATAN (urutan penting), pakai teknik kotak: Kotak Ketua ada {n} pilihan, Sekretaris sisa {n-1}, Bendahara sisa {n-2}. Kalikan: {n} x {n-1} x {n-2} = {ans} susunan.",
            "jebakan": f"Opsi {komb} itu Kombinasi (jika tanpa jabatan).",
            "rumus_kunci": "Permutasi = n x (n-1) x (n-2)"
        }
    }

def gen_mtk_statistika_mean():
    var = random.choice(["gabungan_maju", "gabungan_balik"])
    if var == "gabungan_maju":
        mean_combos = [(70, 80), (70, 85), (75, 85), (75, 90), (80, 90)]
        mean1, mean2 = random.choice(mean_combos)
        n1, n2 = 20, 30
        total_siswa = n1 + n2
        mean_gab = int((n1 * mean1 + n2 * mean2) / total_siswa)
        correct = str(mean_gab)
        mean_biasa = (mean1 + mean2) // 2
        cand_wrongs = [mean_biasa, mean_gab + 4, max(50, mean_gab - 3), mean2, mean1, mean_gab + 6]
        wrong = [str(w) for w in dict.fromkeys(cand_wrongs) if w != mean_gab]
        opts, c_let = make_options(correct, wrong, step=2)
        return {
            "subject": "mtk_wajib", "subject_label": "Matematika Wajib", "topic": "Statistika (Rata-rata Gabungan)",
            "stimulus": f"Kelas A terdiri atas {n1} siswa dengan nilai rata-rata ujian {mean1}. Kelas B terdiri atas {n2} siswa dengan nilai rata-rata ujian {mean2}.",
            "question": "Berapakah nilai rata-rata gabungan seluruh siswa dari kedua kelas tersebut?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Hitung total skor Kelas A ({n1} x {mean1} = {n1*mean1}) ditambah total skor Kelas B ({n2} x {mean2} = {n2*mean2}) = {n1*mean1 + n2*mean2}. Bagi total murid ({total_siswa}): {n1*mean1 + n2*mean2} / {total_siswa} = {mean_gab}.",
                "jebakan": f"Opsi {mean_biasa} salah karena jumlah murid tiap kelas tidak sama banyak.",
                "rumus_kunci": "Rata-rata Gabungan = (n₁ · x̄₁ + n₂ · x̄₂) / (n₁ + n₂)"
            }
        }
    else:
        combos = [
            (15, 70, 25, 75, 78),
            (10, 65, 30, 75, 78),
            (20, 70, 20, 80, 90)
        ]
        n_pa, x_pa, n_pi, x_gab, x_pi = random.choice(combos)
        tot_all = (n_pa + n_pi) * x_gab
        tot_pa = n_pa * x_pa
        correct = str(x_pi)
        cand_wrongs = [x_pi + 3, max(50, x_pi - 4), x_gab, x_pa, x_pi + 7]
        wrong = [str(w) for w in dict.fromkeys(cand_wrongs) if w != x_pi]
        opts, c_let = make_options(correct, wrong, step=2)
        return {
            "subject": "mtk_wajib", "subject_label": "Matematika Wajib", "topic": "Statistika (Mencari Rata-rata Bagian)",
            "stimulus": f"Suatu kelas memiliki {n_pa} siswa laki-laki dengan rata-rata nilai {x_pa} dan {n_pi} siswa perempuan. Jika nilai rata-rata seluruh kelas adalah {x_gab}.",
            "question": "Berapakah nilai rata-rata khusus siswa perempuan?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Total nilai seluruh kelas = {n_pa + n_pi} anak x {x_gab} = {tot_all}. Total nilai siswa laki-laki = {n_pa} x {x_pa} = {tot_pa}. Sisa nilai milik perempuan: {tot_all} - {tot_pa} = {tot_all - tot_pa}. Bagi dengan jumlah anak perempuan ({n_pi}): {tot_all - tot_pa} / {n_pi} = {x_pi}.",
                "jebakan": "Kunci menyelesaikan rata-rata gabungan adalah selalu bermain dengan TOTAL SKOR!",
                "rumus_kunci": "Total Skor Bagian = Total Seluruh Kelas - Total Kelompok Lain"
            }
        }


def gen_mtk_dimensi_tiga():
    var = random.choice(["jarak_pusat_alas", "jarak_titik_diagonal_ruang", "kedudukan_garis"])
    if var == "jarak_pusat_alas":
        s = random.choice([6, 8, 10, 12, 14, 16])
        half_s = s // 2
        correct = f"{half_s}√6"
        wrong = [f"{half_s}√3", f"{s}√2", f"{half_s}√2", f"{s}√3", f"{half_s * 2}√6"]
        opts, c_let = make_options(correct, wrong, unit="cm")
        svg_code = render_kubus(
            rusuk_text=f"s = {s} cm",
            highlight_lines=[("H", "O")],
            highlight_points=["H", "O"],
            show_diagonals=[("A", "C"), ("B", "D")]
        )
        return {
            "subject": "mtk_wajib", "subject_label": "Matematika Wajib", "topic": "Dimensi Tiga (Jarak Titik ke Titik Potong Diagonal)",
            "stimulus": f"Perhatikan kubus ABCD.EFGH dengan panjang rusuk {s} cm. Titik O merupakan titik potong diagonal sisi alas AC dan BD.",
            "stimulus_svg": svg_code,
            "question": "Berapakah jarak dari titik sudut H ke titik O?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Segitiga DOH siku-siku di D. Rusuk tegak DH = {s} cm. DO = 1/2 diagonal sisi = {half_s}√2 cm. Jarak HO = √(DH² + DO²) = √({s**2} + {(half_s)**2 * 2}) = {half_s}√6 cm.",
                "jebakan": f"Jangan tertukar dengan diagonal ruang ({s}√3 cm). Titik O berada di pusat alas.",
                "rumus_kunci": "Jarak Titik Sudut Atas ke Titik Tengah Alas Kubus = (s/2)√6"
            }
        }
    elif var == "jarak_titik_diagonal_ruang":
        s = random.choice([6, 9, 12, 15, 18])
        third_s = s // 3
        correct = f"{third_s}√6"
        wrong = [f"{s // 2}√6", f"{third_s}√3", f"{s}√2", f"{third_s * 2}√3", f"{s // 3}√2"]
        opts, c_let = make_options(correct, wrong, unit="cm")
        svg_code = render_kubus(
            rusuk_text=f"s = {s} cm",
            highlight_lines=[("B", "H")],
            highlight_points=["F", "B", "H"]
        )
        return {
            "subject": "mtk_wajib", "subject_label": "Matematika Wajib", "topic": "Dimensi Tiga (Jarak Titik ke Diagonal Ruang)",
            "stimulus": f"Diketahui kubus ABCD.EFGH memiliki panjang rusuk {s} cm. Sebuah garis diagonal ruang ditarik dari titik B ke titik H.",
            "stimulus_svg": svg_code,
            "question": "Berapakah jarak terdekat dari titik sudut F ke garis diagonal ruang BH?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Segitiga BFH siku-siku di F dengan alas BF = {s} cm, FH = {s}√2 cm, dan BH = {s}√3 cm. Jarak terdekat d = (BF x FH) / BH = ({s} x {s}√2) / ({s}√3) = ({s}/3)√6 = {third_s}√6 cm.",
                "jebakan": "Jarak terdekat selalu ruas garis yang jatuh TEGAK LURUS terhadap garis diagonal.",
                "rumus_kunci": "Jarak Titik Sudut ke Diagonal Ruang Kubus = (s/3)√6"
            }
        }
    else:
        soal_pilihan = random.choice([
            {
                "garis1": "AB", "garis2": "BC", "status": "Berpotongan tegak lurus",
                "penjelasan": "Garis AB dan BC terletak pada bidang alas ABCD yang sama dan bertemu di titik sudut B membentuk sudut siku-siku 90°."
            },
            {
                "garis1": "BC", "garis2": "EH", "status": "Sejajar",
                "penjelasan": "BC sejajar AD, dan AD sejajar EH pada bidang diagonal, sehingga BC sejajar EH."
            },
            {
                "garis1": "EF", "garis2": "CG", "status": "Bersilangan tegak lurus",
                "penjelasan": "EF terletak di bidang atas horizontal dan CG di rusuk tegak vertikal. Keduanya tidak sebidang, tidak bertemu, dan arahnya membentuk sudut 90° (bersilangan tegak lurus)."
            }
        ])
        g1, g2, st = soal_pilihan["garis1"], soal_pilihan["garis2"], soal_pilihan["status"]
        correct = st
        wrong = [w for w in ["Sejajar", "Berpotongan tegak lurus", "Bersilangan tegak lurus", "Bersilangan tidak tegak lurus", "Berimpit"] if w.lower() != st.lower()]
        opts, c_let = make_options(correct, wrong)
        svg_code = render_kubus(
            highlight_lines=[(g1[0], g1[1]), (g2[0], g2[1])],
            highlight_points=[g1[0], g1[1], g2[0], g2[1]]
        )
        return {
            "subject": "mtk_wajib", "subject_label": "Matematika Wajib", "topic": "Dimensi Tiga (Kedudukan Garis pada Kubus)",
            "stimulus": "Diberikan kubus ABCD.EFGH dengan bidang alas ABCD dan bidang atas EFGH.",
            "stimulus_svg": svg_code,
            "question": f"Bagaimanakah kedudukan geometris antara garis {g1} dan garis {g2}?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": soal_pilihan["penjelasan"],
                "jebakan": "Garis yang tidak bertemu di ruang 3 dimensi belum tentu sejajar; jika tidak sebidang, garis tersebut bersilangan.",
                "rumus_kunci": "Dua garis bersilangan jika tidak sejajar dan tidak pernah berpotongan di satu bidang datar."
            }
        }

def gen_mtk_program_linear():
    var = random.choice(["daerah_dhp_romawi", "nilai_optimum_dhp", "keuntungan_maksimum", "alokasi_produksi"])
    clean_configs = [
        {"xp": 2, "yp": 2, "a1": 2, "b1": 1, "k1": 6, "x1": 3, "y1": 6, "a2": 1, "b2": 2, "k2": 6, "x2": 6, "y2": 3},
        {"xp": 2, "yp": 4, "a1": 2, "b1": 1, "k1": 8, "x1": 4, "y1": 8, "a2": 1, "b2": 2, "k2": 10, "x2": 10, "y2": 5},
        {"xp": 4, "yp": 2, "a1": 1, "b1": 2, "k1": 8, "x1": 8, "y1": 4, "a2": 2, "b2": 1, "k2": 10, "x2": 5, "y2": 10},
        {"xp": 3, "yp": 2, "a1": 2, "b1": 1, "k1": 8, "x1": 4, "y1": 8, "a2": 1, "b2": 1, "k2": 5, "x2": 5, "y2": 5},
        {"xp": 2, "yp": 3, "a1": 1, "b1": 1, "k1": 5, "x1": 5, "y1": 5, "a2": 1, "b2": 2, "k2": 8, "x2": 8, "y2": 4},
    ]
    if var == "daerah_dhp_romawi":
        cfg = random.choice(clean_configs)
        xp, yp = cfg["xp"], cfg["yp"]
        x1, y1 = cfg["x1"], cfg["y1"]
        x2, y2 = cfg["x2"], cfg["y2"]
        a1, b1, k1 = cfg["a1"], cfg["b1"], cfg["k1"]
        a2, b2, k2 = cfg["a2"], cfg["b2"], cfg["k2"]

        roman_regions = {
            "I": (xp + 1.8, yp + 1.8),
            "II": (0.35 * xp, min(y1, y2) + 0.4 * abs(y1 - y2)),
            "III": (0.45 * xp, 0.45 * yp),
            "IV": (min(x1, x2) + 0.4 * abs(x1 - x2), 0.35 * yp),
            "V": (max(x1, x2) + 1.2, 0.8)
        }

        ineq_mode = random.choice(["both_le", "both_ge", "l1_le_l2_ge", "l1_ge_l2_le"])
        if ineq_mode == "both_le":
            op1, op2 = "≤", "≤"
            correct = "III"
            hint_region = "di bawah kedua garis dan di kuadran I (berbatasan dengan titik 0,0)"
        elif ineq_mode == "both_ge":
            op1, op2 = "≥", "≥"
            correct = "I"
            hint_region = "di atas kedua garis pembatas (menjauhi titik 0,0 ke arah kanan-atas)"
        elif ineq_mode == "l1_le_l2_ge":
            op1, op2 = "≤", "≥"
            correct = "II" if y1 > y2 else "IV"
            hint_region = f"di bawah garis {a1}x+{b1}y={k1} namun di atas garis {a2}x+{b2}y={k2}"
        else:
            op1, op2 = "≥", "≤"
            correct = "IV" if y1 > y2 else "II"
            hint_region = f"di atas garis {a1}x+{b1}y={k1} namun di bawah garis {a2}x+{b2}y={k2}"

        wrong = [r for r in ["I", "II", "III", "IV", "V"] if r != correct]
        opts, c_let = make_options(correct, wrong)

        lines = [
            {"x_int": x1, "y_int": y1},
            {"x_int": x2, "y_int": y2}
        ]
        svg_code = render_cartesius_dhp(lines=lines, roman_regions=roman_regions)

        s_a1 = f"{a1}x" if a1 != 1 else "x"
        s_b1 = f"+ {b1}y" if b1 != 1 else "+ y"
        s_a2 = f"{a2}x" if a2 != 1 else "x"
        s_b2 = f"+ {b2}y" if b2 != 1 else "+ y"

        return {
            "subject": "mtk_wajib", "subject_label": "Matematika Wajib", "topic": "Program Linear (Identifikasi Daerah DHP)",
            "stimulus": "Perhatikan grafik daerah himpunan penyelesaian pada sistem koordinat Cartesius dengan pembagian daerah Romawi I, II, III, IV, dan V berikut.",
            "stimulus_svg": svg_code,
            "question": f"Daerah himpunan penyelesaian yang memenuhi sistem pertidaksamaan {s_a1} {s_b1} {op1} {k1}, {s_a2} {s_b2} {op2} {k2}, x ≥ 0, y ≥ 0 ditunjukkan oleh daerah nomor...",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Gunakan uji titik (0,0): {s_a1} {s_b1} = 0 {op1} {k1} bernilai {'BENAR' if op1 == '≤' else 'SALAH'}, dan {s_a2} {s_b2} = 0 {op2} {k2} bernilai {'BENAR' if op2 == '≤' else 'SALAH'}. Daerah yang sesuai adalah daerah {hint_region}, yaitu nomor {correct}.",
                "jebakan": "Hati-hati terbalik menentukan daerah di atas atau di bawah garis; selalu uji titik (0,0) untuk kepastian tanda pertidaksamaan.",
                "rumus_kunci": "Tanda ≤ mengarsir arah mendekati (0,0) bila konstanta positif, tanda ≥ mengarsir arah menjauhi (0,0)."
            }
        }
    elif var == "nilai_optimum_dhp":
        cfg = random.choice(clean_configs)
        xp, yp = cfg["xp"], cfg["yp"]
        x1, y1 = cfg["x1"], cfg["y1"]
        x2, y2 = cfg["x2"], cfg["y2"]

        c1 = random.choice([3, 4, 5])
        c2 = random.choice([2, 3, 4])

        pt_x = min(x1, x2)
        pt_y = min(y1, y2)
        poly = [(0.0, 0.0), (float(pt_x), 0.0), (float(xp), float(yp)), (0.0, float(pt_y))]

        val_a = c1 * pt_x
        val_b = c1 * xp + c2 * yp
        val_c = c2 * pt_y
        max_val = max(val_a, val_b, val_c)

        correct = str(max_val)
        cand_wrongs = [val_a, val_b, val_c, max_val + 4, max_val - 3, max_val + 8, max_val - 5, c1 * max(x1, x2), c2 * max(y1, y2)]
        wrong = [str(w) for w in dict.fromkeys(cand_wrongs) if w != max_val and w > 0]
        opts, c_let = make_options(correct, wrong, step=3)

        lines = [
            {"x_int": x1, "y_int": y1},
            {"x_int": x2, "y_int": y2}
        ]
        labeled_pts = [(xp, yp, f"({xp}, {yp})")]
        svg_code = render_cartesius_dhp(lines=lines, shaded_polygon=poly, labeled_points=labeled_pts)

        return {
            "subject": "mtk_wajib", "subject_label": "Matematika Wajib", "topic": "Program Linear (Nilai Optimum Titik Pojok)",
            "stimulus": "Perhatikan daerah himpunan penyelesaian yang diarsir pada sistem koordinat Cartesius berikut.",
            "stimulus_svg": svg_code,
            "question": f"Nilai maksimum dari fungsi objektif Z = {c1}x + {c2}y pada daerah yang diarsir adalah...",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Uji seluruh titik pojok daerah arsiran: O(0,0) → 0, A({pt_x},0) → {c1}({pt_x}) = {val_a}, B({xp},{yp}) → {c1}({xp}) + {c2}({yp}) = {val_b}, C(0,{pt_y}) → {c2}({pt_y}) = {val_c}. Nilai maksimumnya adalah {max_val}.",
                "jebakan": f"Jangan lupa menguji titik potong ({xp}, {yp}); titik potong seringkali menghasilkan nilai maksimum fungsi tujuan.",
                "rumus_kunci": "Nilai optimum selalu dicapai pada salah satu titik pojok (ekstrem) daerah fisibel."
            }
        }
    elif var == "keuntungan_maksimum":
        fmt_rp = lambda v: f"Rp {int(v):,}".replace(",", ".")
        cap = random.choice([400, 500, 600])
        x_opt = random.choice([200, 250, 300])
        y_opt = cap - x_opt
        laba_x = random.choice([3000, 4000])
        laba_y = random.choice([2000, 2500])
        max_laba = x_opt * laba_x + y_opt * laba_y
        correct = fmt_rp(max_laba)
        cand_labas = [
            cap * laba_x,
            cap * laba_y,
            max_laba - 100000,
            max_laba + 150000,
            max_laba - 250000,
            max_laba + 250000,
            (x_opt * laba_y) + (y_opt * laba_x)
        ]
        wrong = [fmt_rp(val) for val in dict.fromkeys(cand_labas) if val != max_laba and val > 0]
        opts, c_let = make_options(correct, wrong)

        flour_x_int = x_opt + y_opt // 2
        flour_y_int = 2 * x_opt + y_opt
        lines = [
            {"x_int": cap, "y_int": cap},
            {"x_int": flour_x_int, "y_int": flour_y_int}
        ]
        poly = [(0.0, 0.0), (float(flour_x_int), 0.0), (float(x_opt), float(y_opt)), (0.0, float(cap))]
        labeled_pts = [(x_opt, y_opt, f"({x_opt}, {y_opt})")]
        svg_code = render_cartesius_dhp(lines=lines, shaded_polygon=poly, labeled_points=labeled_pts)

        return {
            "subject": "mtk_wajib", "subject_label": "Matematika Wajib", "topic": "Program Linear (Keuntungan Maksimum)",
            "stimulus": f"Seorang wirausahawan kue memproduksi dua jenis bolu: Bolu Cokelat (x) dan Bolu Keju (y). Daya tampung oven maksimal {cap} kotak per hari. Berdasarkan ketersediaan bahan, kombinasi produksi optimal berada pada titik potong {x_opt} kotak Bolu Cokelat dan {y_opt} kotak Bolu Keju. Keuntungan per kotak Bolu Cokelat adalah {fmt_rp(laba_x)} dan Bolu Keju {fmt_rp(laba_y)}.",
            "stimulus_svg": svg_code,
            "question": "Berapakah keuntungan maksimum harian yang dapat diperoleh?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Hitung laba pada titik potong optimum: ({x_opt} x {fmt_rp(laba_x)}) + ({y_opt} x {fmt_rp(laba_y)}) = {fmt_rp(x_opt*laba_x)} + {fmt_rp(y_opt*laba_y)} = {fmt_rp(max_laba)}.",
                "jebakan": "Memproduksi 100% barang termahal seringkali melanggar batasan kendala bahan baku!",
                "rumus_kunci": "Nilai Maksimum = Z(x, y) = c₁·x + c₂·y pada titik pojok fisibel"
            }
        }
    else:
        # Alokasi Produksi (Arah Balik)
        cap = 500
        x_val = random.choice([150, 200, 250, 300])
        y_val = cap - x_val
        correct = f"{y_val} unit"
        cand_wrongs = [x_val + 20, y_val + 50, max(50, y_val - 50), cap, y_val + 100, max(50, y_val - 80)]
        wrong = [f"{w} unit" for w in dict.fromkeys(cand_wrongs) if w != y_val]
        opts, c_let = make_options(correct, wrong)

        lines = [{"x_int": cap, "y_int": cap}]
        labeled_pts = [(x_val, y_val, f"({x_val}, {y_val})")]
        svg_code = render_cartesius_dhp(lines=lines, labeled_points=labeled_pts)

        return {
            "subject": "mtk_wajib", "subject_label": "Matematika Wajib", "topic": "Program Linear (Kuantitas Produksi Saling Melengkapi)",
            "stimulus": f"Sebuah pabrik mebel memproduksi kursi (x) dan meja (y) dengan kapasitas gabungan tepat {cap} unit per pekan. Hasil analisis keuntungan menyatakan pabrik harus memproduksi {x_val} unit kursi untuk mencapai laba optimum.",
            "stimulus_svg": svg_code,
            "question": "Berapakah banyak meja yang harus diproduksi pabrik tersebut pada pekan yang sama?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Kapasitas total adalah {cap} unit. Jika kursi yang dibuat adalah {x_val} unit, maka sisa alokasi untuk meja adalah: {cap} - {x_val} = {y_val} unit.",
                "jebakan": "Perhatikan batasan kapasitas gabungan total!",
                "rumus_kunci": "Kapasitas Komplementer = Total Kapasitas - Alokasi Produk A"
            }
        }

def gen_mtk_spltv():
    fmt_rp = lambda v: f"Rp {int(v):,}".replace(",", ".")
    var = random.choice(["harga_satu_barang", "harga_satu_paket", "selisih_dua_barang"])
    # Basis harga: buku (b), pulpen (p), pensil (s)
    b = random.choice([4000, 5000, 6000])
    p = random.choice([2500, 3000, 3500])
    s = random.choice([1500, 2000])
    
    t1 = 2 * b + 1 * p + 1 * s
    t2 = 1 * b + 2 * p + 1 * s
    t3 = 1 * b + 1 * p + 2 * s
    
    if var == "harga_satu_barang":
        correct = fmt_rp(b)
        candidate_vals = [p, s, b + 1500, b - 500, b + 1000, b + 2000, p + s]
        wrong = [fmt_rp(val) for val in dict.fromkeys(candidate_vals) if val != b and val > 0]
        opts, c_let = make_options(correct, wrong)
        return {
            "subject": "mtk_wajib", "subject_label": "Matematika Wajib", "topic": "Sistem Persamaan Linear Tiga Variabel (Harga Satuan)",
            "stimulus": f"Tiga siswa berbelanja di koperasi sekolah: Ahmad membeli 2 buku, 1 pulpen, dan 1 pensil seharga {fmt_rp(t1)}. Budi membeli 1 buku, 2 pulpen, dan 1 pensil seharga {fmt_rp(t2)}. Cici membeli 1 buku, 1 pulpen, dan 2 pensil seharga {fmt_rp(t3)}.",
            "question": "Berapakah harga satuan untuk 1 buah buku?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Kurangkan belanja Ahmad (2b + p + s = {fmt_rp(t1)}) dengan Budi (b + 2p + s = {fmt_rp(t2)}): diperoleh b - p = {fmt_rp(t1 - t2)}. Kurangkan belanja Budi dengan Cici: p - s = {fmt_rp(t2 - t3)}. Dengan substitusi balik, diperoleh harga 1 buku = {fmt_rp(b)}.",
                "jebakan": "Kurangkan persamaan yang memiliki koefisien pensil sama (s) untuk langsung mengeliminasi variabel s!",
                "rumus_kunci": "Eliminasi variabel berkoefisien sama terlebih dahulu untuk mereduksi 3 variabel menjadi 2 variabel."
            }
        }
    elif var == "harga_satu_paket":
        tot_paket = b + p + s
        correct = fmt_rp(tot_paket)
        candidate_vals = [tot_paket + 2000, tot_paket - 1500, b + p + 500, tot_paket + 3000, tot_paket - 2500, 2 * b + s]
        wrong = [fmt_rp(val) for val in dict.fromkeys(candidate_vals) if val != tot_paket and val > 0]
        opts, c_let = make_options(correct, wrong)
        return {
            "subject": "mtk_wajib", "subject_label": "Matematika Wajib", "topic": "Sistem Persamaan Linear Tiga Variabel (Harga Paket)",
            "stimulus": f"Ahmad membayar {fmt_rp(t1)} untuk 2 buku, 1 pulpen, dan 1 pensil. Budi membayar {fmt_rp(t2)} untuk 1 buku, 2 pulpen, dan 1 pensil. Cici membayar {fmt_rp(t3)} untuk 1 buku, 1 pulpen, dan 2 pensil.",
            "question": "Berapakah biaya yang harus dibayar jika seseorang ingin membeli 1 paket (1 buku, 1 pulpen, dan 1 pensil)?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Trik kilat: Jumlahkan seluruh belanjaan ketiga anak: (2b+p+s) + (b+2p+s) + (b+p+2s) = 4b + 4p + 4s = {fmt_rp(t1 + t2 + t3)}. Maka 4(b + p + s) = {fmt_rp(t1 + t2 + t3)}. Cukup bagi 4: (b + p + s) = {t1 + t2 + t3} / 4 = {fmt_rp(tot_paket)}!",
                "jebakan": "Tidak perlu mencari harga masing-masing barang satu per satu jika yang ditanya adalah jumlah 1 paket simetris!",
                "rumus_kunci": "Trik Penjumlahan Simetris: Jumlahkan seluruh persamaan lalu bagi dengan faktor kelipatan koefisien."
            }
        }
    else:
        selisih = b - s
        correct = fmt_rp(selisih)
        cand_diffs = [abs(b - p), abs(p - s), selisih + 1000, selisih + 1500, abs(selisih - 500), p, s]
        wrong = [fmt_rp(val) for val in dict.fromkeys(cand_diffs) if val != selisih and val > 0]
        opts, c_let = make_options(correct, wrong)
        return {
            "subject": "mtk_wajib", "subject_label": "Matematika Wajib", "topic": "Sistem Persamaan Linear Tiga Variabel (Selisih Harga)",
            "stimulus": f"Di koperasi sekolah, 2 buku + 1 pulpen + 1 pensil = {fmt_rp(t1)}, sedangkan 1 buku + 1 pulpen + 2 pensil = {fmt_rp(t3)}.",
            "question": "Berapakah selisih harga antara 1 buah buku dan 1 buah pensil?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Trik kilat 1 langkah: Kurangkan langsung persamaan (1) dengan persamaan (2): (2b + p + s) - (b + p + 2s) = b - s. Maka b - s = {fmt_rp(t1)} - {fmt_rp(t3)} = {fmt_rp(selisih)}!",
                "jebakan": "Variabel pulpen (p) langsung saling menghabisi saat kedua persamaan dikurangkan!",
                "rumus_kunci": "Selisih Langsung = (2b + p + s) - (b + p + 2s) = b - s"
            }
        }
