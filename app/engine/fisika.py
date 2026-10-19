import random
import math
from .helpers import make_options
from .svg_renderer import (
    render_grafik_vt,
    render_fbd_balok,
    render_dua_balok,
    render_grafik_fs,
    render_rangkaian_listrik,
    render_parabola_fisika,
    render_vektor_sungai
)

# ==============================================================================
# 2. GENERATOR FISIKA (MULTI-VARIASI PER MODUL)
# ==============================================================================

def gen_fisika_kinematika():
    var = random.choice(["grafik_tiga_babak", "pengereman_berhenti", "dua_mobil_berpapasan"])
    if var == "grafik_tiga_babak":
        vt = random.choice([12, 16, 20, 24])
        t1, t_konstan, t_rem = 2, random.choice([4, 5]), 2
        t2 = t1 + t_konstan
        t3 = t2 + t_rem
        s1 = (vt * t1) // 2
        s2 = vt * t_konstan
        s3 = (vt * t_rem) // 2
        tot = s1 + s2 + s3
        correct = f"{tot}"
        cand_wrongs = [tot + 30, max(10, tot - 20), vt * t3, s2 + s3, tot + 50]
        wrong = [f"{w}" for w in dict.fromkeys(cand_wrongs) if w != tot]
        opts, c_let = make_options(correct, wrong, unit="meter", step=10)
        svg_code = render_grafik_vt(t1, t2, t3, vt)
        return {
            "subject": "fisika", "subject_label": "Fisika", "topic": "Kinematika Gerak Lurus (Grafik v-t)",
            "stimulus": f"Perhatikan grafik kecepatan terhadap waktu (v-t) dari sebuah mobil yang meluncur lurus berikut.",
            "stimulus_svg": svg_code,
            "question": f"Berapa total jarak tempuh mobil selama {t3} detik seluruh perjalanan?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Pecah jadi 3 babak perjalanan: 1. Pas ngegas ({vt//2} x {t1}s = {s1}m). 2. Pas stabil ({vt} x {t_konstan}s = {s2}m). 3. Pas ngerem ({vt//2} x {t_rem}s = {s3}m). Jumlahkan: {s1} + {s2} + {s3} = {tot} meter.",
                "jebakan": f"Opsi {vt * t3} meter itu jebakan kalau kamu anggap mobil melaju kencang terus sepanjang {t3} detik.",
                "rumus_kunci": "Total Jarak = Jarak Ngegas + Jarak Stabil + Jarak Ngerem"
            }
        }
    elif var == "pengereman_berhenti":
        # v0 direm dengan a hingga berhenti -> s = v0^2 / (2a)
        v0 = random.choice([20, 30])
        a = random.choice([2, 5])
        s = (v0 ** 2) // (2 * a)
        correct = f"{s}"
        cand_wrongs = [s * 2, v0 * a, s + 15, max(10, s - 10), v0 // a]
        wrong = [f"{w}" for w in dict.fromkeys(cand_wrongs) if w != s]
        opts, c_let = make_options(correct, wrong, unit="meter", step=15)
        return {
            "subject": "fisika", "subject_label": "Fisika", "topic": "Kinematika GLBB (Jarak Pengereman)",
            "stimulus": f"Sebuah motor melaju dengan kecepatan awal {v0} m/s. Pengendara melihat lampu merah dan mengerem dengan perlambatan konstan {a} m/s² hingga motor berhenti.",
            "question": "Berapakah jarak tempuh motor tersebut dari awal pengereman hingga berhenti total?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Rumus kilat ngerem sampai berhenti (v_t = 0): Jarak = (Kecepatan Awal)² / (2 x Perlambatan) = ({v0}²) / (2 x {a}) = {v0**2} / {2*a} = {s} meter.",
                "jebakan": "Jangan kalikan kecepatan dengan perlambatan!",
                "rumus_kunci": "Jarak Berhenti = v₀² / (2a)"
            }
        }
    else:
        # Dua mobil saling mendekat (berpapasan)
        v1 = random.choice([15, 20])
        v2 = random.choice([10, 15])
        d = (v1 + v2) * random.choice([4, 6, 8])
        t_temu = d // (v1 + v2)
        correct = f"{t_temu}"
        cand_wrongs = [t_temu * 2, d // v1, t_temu + 3, max(2, t_temu - 2), d // v2, t_temu + 5]
        wrong = [f"{w}" for w in dict.fromkeys(cand_wrongs) if w != t_temu]
        opts, c_let = make_options(correct, wrong, unit="detik", step=2)
        return {
            "subject": "fisika", "subject_label": "Fisika", "topic": "Kinematika (Waktu Berpapasan)",
            "stimulus": f"Mobil A melaju dengan kecepatan konstan {v1} m/s dari kota P menuju kota Q. Pada saat bersamaan dari arah berlawanan, mobil B melaju dari kota Q menuju kota P dengan kecepatan konstan {v2} m/s. Jarak kota P dan Q adalah {d} meter.",
            "question": "Setelah berapa detik kedua mobil tersebut akan berpapasan di jalan?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Kedua mobil saling mendekat, artinya tiap detik jarak mereka terpangkas sebesar ({v1} + {v2} = {v1+v2} meter/detik). Waktu papasan tinggal bagi jarak awal dengan kecepatan gabungan: {d} / {v1+v2} = {t_temu} detik.",
                "jebakan": "Karena bergerak berlawanan arah saling mendekat, kecepatannya DIJUMLAHKAN, bukan dikurangkan!",
                "rumus_kunci": "Waktu Berpapasan = Jarak Total / (v₁ + v₂)"
            }
        }

def gen_fisika_newton():
    var = random.choice(["lantai_licin", "lantai_kasar", "dua_balok_kontak"])
    if var == "lantai_licin":
        m = random.choice([2, 4, 5, 8])
        f_kanan = random.choice([40, 50, 60])
        f_kiri = random.choice([10, 15, 20])
        f_net = f_kanan - f_kiri
        a_val = f_net / m
        fmt_a = lambda v: f"{int(v)}" if float(v).is_integer() else f"{v:.2f}".rstrip('0').rstrip('.')
        correct = fmt_a(a_val)
        cand_wrongs = [
            (f_kanan + f_kiri)/m,
            f_kanan/m,
            a_val * 2,
            f_kiri/m,
            a_val + 3,
            a_val + 5,
            max(0.5, a_val - 2.5),
            f_net / (m * 2)
        ]
        wrong = [fmt_a(w) for w in dict.fromkeys(cand_wrongs) if fmt_a(w) != correct]
        opts, c_let = make_options(correct, wrong, unit="m/s²", step=2)
        svg_code = render_fbd_balok(m, f_kanan=f_kanan, f_kiri=f_kiri)
        return {
            "subject": "fisika", "subject_label": "Fisika", "topic": "Dinamika Gerak (Hukum II Newton)",
            "stimulus": f"Sebuah balok bermassa {m} kg berada di atas lantai mendatar licin ditarik oleh dua gaya berlawanan arah seperti pada diagram gaya berikut.",
            "stimulus_svg": svg_code,
            "question": "Berapakah percepatan gerak balok tersebut?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Gaya menang ke kanan selisihnya: {f_kanan} - {f_kiri} = {f_net} N. Bagi dengan massanya ({m} kg): {f_net} / {m} = {correct} m/s².",
                "jebakan": "Arah gaya berlawanan, jadi gayanya dikurangkan bukan dijumlahkan.",
                "rumus_kunci": "Percepatan = F_bersih / m"
            }
        }
    elif var == "lantai_kasar":
        m = random.choice([4, 5, 10])
        f_dorong = random.choice([40, 60, 80])
        f_gesek = random.choice([10, 15, 20])
        f_net = f_dorong - f_gesek
        a_val = f_net / m
        fmt_a = lambda v: f"{int(v)}" if float(v).is_integer() else f"{v:.2f}".rstrip('0').rstrip('.')
        correct = fmt_a(a_val)
        cand_wrongs = [
            f_dorong / m,
            (f_dorong + f_gesek)/m,
            a_val * 2,
            f_gesek / m,
            a_val + 3,
            a_val + 5,
            max(0.5, a_val - 2.5),
            f_net / (m * 2)
        ]
        wrong = [fmt_a(w) for w in dict.fromkeys(cand_wrongs) if fmt_a(w) != correct]
        opts, c_let = make_options(correct, wrong, unit="m/s²", step=2)
        svg_code = render_fbd_balok(m, f_kanan=f_dorong, f_kiri=f_gesek)
        return {
            "subject": "fisika", "subject_label": "Fisika", "topic": "Dinamika Gerak (Lantai Kasar)",
            "stimulus": f"Sebuah balok bermassa {m} kg ditarik di lantai kasar dengan gaya mendatar {f_dorong} N dan mengalami gaya gesek kinetik {f_gesek} N seperti pada gambar.",
            "stimulus_svg": svg_code,
            "question": "Berapakah percepatan gerak balok tersebut?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Gaya dorong kamu ({f_dorong} N) ditahan oleh gesekan lantai ({f_gesek} N). Tenaga bersih yang sisa cuma: {f_dorong} - {f_gesek} = {f_net} N. Bagi dengan massa balok ({m} kg): {f_net} / {m} = {correct} m/s².",
                "jebakan": "Gaya gesek selalu MELAWAN arah gerak, jadi selalu mengurangi gaya dorong!",
                "rumus_kunci": "a = (F_dorong - f_gesek) / m"
            }
        }
    else:
        # Dua balok bergandengan didorong
        combos = [(2, 3, 25), (3, 2, 25), (2, 4, 30), (3, 5, 40)]
        m1, m2, f = random.choice(combos)
        ans = (f * m2) // (m1 + m2)
        correct = f"{ans}"
        cand_wrongs = [f, f - ans, ans * 2, ans + 7, max(2, ans - 3), f + ans, ans * 3]
        wrong = [f"{w}" for w in dict.fromkeys(cand_wrongs) if f"{w}" != correct]
        opts, c_let = make_options(correct, wrong, unit="Newton", step=5)
        svg_code = render_dua_balok(m1, m2, f)
        return {
            "subject": "fisika", "subject_label": "Fisika", "topic": "Dinamika Gerak (Gaya Kontak Dua Balok)",
            "stimulus": f"Dua balok berdampingan, balok A ({m1} kg) dan balok B ({m2} kg), diletakkan di lantai licin dan didorong dengan gaya F = {f} Newton seperti pada gambar.",
            "stimulus_svg": svg_code,
            "question": "Berapakah besar gaya kontak (gaya dorong yang diberikan balok A ke balok B)?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Cari percepatan gabungan dulu: total massa = {m1} + {m2} = {m1+m2} kg. Percepatan bersama = {f} / {m1+m2} = {f // (m1+m2)} m/s². Nah balok B ({m2} kg) ikut maju karena didorong oleh balok A. Gaya dorongnya = massa B x percepatan = {m2} x {f // (m1+m2)} = {ans} Newton.",
                "jebakan": "Gaya dorong A ke B BUKAN sebesar gaya luar utuh, karena sebagian gaya luar sudah terpakai menggerakkan balok A sendiri!",
                "rumus_kunci": "Gaya Kontak = Massa Balok Depan x Percepatan Bersama"
            }
        }

def gen_fisika_usaha():
    var = random.choice(["usaha_maju", "jarak_rem_energi", "daya_listrik"])
    if var == "usaha_maju":
        f = random.choice([15, 20, 25])
        s = random.choice([4, 6, 8])
        w = f * s
        correct = f"{w}"
        cand_wrongs = [w // 2, w * 2, w + 50, f + s, max(10, w - 30)]
        wrong = [f"{val}" for val in dict.fromkeys(cand_wrongs) if val != w]
        opts, c_let = make_options(correct, wrong, unit="Joule", step=20)
        svg_code = render_grafik_fs(s, f)
        return {
            "subject": "fisika", "subject_label": "Fisika", "topic": "Usaha & Energi",
            "stimulus": f"Perhatikan grafik gaya F terhadap perpindahan s pada sebuah benda yang ditarik mendatar di lantai licin berikut.",
            "stimulus_svg": svg_code,
            "question": "Berapakah usaha total yang dilakukan gaya tersebut?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Usaha adalah luas daerah di bawah grafik F-s: Gaya ({f} N) x Jarak ({s} m) = {w} Joule.",
                "jebakan": "Usaha hanya terjadi jika benda benar-benar berpindah searah gaya.",
                "rumus_kunci": "W = Luas Grafik F-s = F x s"
            }
        }
    elif var == "jarak_rem_energi":
        combos = [(1000, 20, 5000, 40), (1200, 20, 6000, 40), (800, 30, 6000, 60)]
        m, v, f_rem, s = random.choice(combos)
        ek = (m * (v ** 2)) // 2
        correct = f"{s}"
        cand_wrongs = [s * 2, s // 2, s + 20, max(10, s - 15), s + 30]
        wrong = [f"{val}" for val in dict.fromkeys(cand_wrongs) if val != s]
        opts, c_let = make_options(correct, wrong, unit="meter", step=10)
        return {
            "subject": "fisika", "subject_label": "Fisika", "topic": "Teorema Usaha-Energi (Arah Balik)",
            "stimulus": f"Sebuah mobil bermassa {m} kg melaju dengan kecepatan {v} m/s. Sopir mengerem sehingga timbul gaya rem tetap sebesar {f_rem} Newton hingga mobil berhenti.",
            "question": "Berapa jarak yang ditempuh mobil dari saat direm hingga berhenti total?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Energi gerak mobil harus dihabiskan oleh usaha rem: Ek = 1/2 x {m} kg x ({v} m/s)² = {ek} Joule. Usaha rem = Gaya rem x Jarak. Maka Jarak = Energi / Gaya Rem = {ek} / {f_rem} = {s} meter.",
                "jebakan": "Jangan lupa kuadratkan kecepatannya saat menghitung energi kinetik!",
                "rumus_kunci": "Jarak Rem = Energi Kinetik / Gaya Pengereman"
            }
        }
    else:
        # Daya P = W / t
        w = random.choice([600, 1200, 1800])
        t = random.choice([3, 4, 6])
        p = w // t
        correct = f"{p}"
        cand_wrongs = [w * t, p * 2, p + 50, max(50, p - 50), w]
        wrong = [f"{val}" for val in dict.fromkeys(cand_wrongs) if val != p]
        opts, c_let = make_options(correct, wrong, unit="Watt", step=50)
        return {
            "subject": "fisika", "subject_label": "Fisika", "topic": "Usaha & Daya",
            "stimulus": f"Sebuah motor derek melakukan usaha sebesar {w} Joule untuk mengangkat beban selama waktu {t} detik.",
            "question": "Berapakah daya keluaran motor derek tersebut?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Daya adalah kecepatan mengeluarkan tenaga per detik. Tinggal bagi usaha ({w} Joule) dengan waktunya ({t} detik): {w} / {t} = {p} Watt.",
                "jebakan": "Daya bukan total usaha, melainkan usaha per satu detik waktu kerja.",
                "rumus_kunci": "Daya = Usaha / Waktu (P = W / t)"
            }
        }

def gen_fisika_kalor():
    var = random.choice(["kalor_pemanasan", "asas_black_campuran"])
    if var == "kalor_pemanasan":
        m = random.choice([2, 3, 5])
        t_awal = random.choice([20, 25])
        delta_t = random.choice([30, 40])
        t_akhir = t_awal + delta_t
        q_kj = (m * 4200 * delta_t) // 1000
        correct = f"{q_kj}"
        wrong = [f"{q_kj // 2}", f"{q_kj * 2}", f"{(m * 4200 * t_akhir) // 1000}", f"{q_kj + 150}", f"{q_kj - 80}"]
        opts, c_let = make_options(correct, wrong, unit="kJ", step=40)
        return {
            "subject": "fisika", "subject_label": "Fisika", "topic": "Suhu & Kalor (Pemanasan)",
            "stimulus": f"Air sebanyak {m} kg bersuhu {t_awal}°C dipanaskan hingga suhunya mencapai {t_akhir}°C. Kalor jenis air adalah 4.200 J/(kg°C).",
            "question": "Berapakah jumlah kalor yang diserap air tersebut (dalam kJ)?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Kenaikan suhu: {t_akhir} - {t_awal} = {delta_t}°C. Kalor = Massa ({m}) x Kalor jenis (4.200) x Kenaikan suhu ({delta_t}) = {m * 4200 * delta_t} Joule = {q_kj} kJ.",
                "jebakan": f"Jangan pakai angka suhu akhir {t_akhir}°C, yang dihitung adalah SELISIH suhunya!",
                "rumus_kunci": "Q = m c ΔT"
            }
        }
    else:
        # Asas Black Campuran
        combos = [(1, 80, 3, 20, 35), (2, 80, 2, 20, 50), (1, 90, 2, 30, 50)]
        m_panas, t_panas, m_dingin, t_dingin, tc = random.choice(combos)
        correct = f"{tc}"
        cand_wrongs = [(t_panas + t_dingin) // 2, tc + 10, max(10, tc - 8), t_panas, t_dingin]
        wrong = [f"{w}" for w in dict.fromkeys(cand_wrongs) if w != tc]
        opts, c_let = make_options(correct, wrong, unit="°C", step=5)
        return {
            "subject": "fisika", "subject_label": "Fisika", "topic": "Suhu & Kalor (Asas Black Campuran)",
            "stimulus": f"Air panas sebanyak {m_panas} kg bersuhu {t_panas}°C dicampurkan ke dalam bejana berisi {m_dingin} kg air dingin bersuhu {t_dingin}°C. Abaikan kapasitas kalor bejana.",
            "question": "Berapakah suhu akhir kesetimbangan termal campuran air tersebut?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Asas Black: Kalor dilepas air panas = Kalor diserap air dingin. Total panas = ({m_panas} x {t_panas}) + ({m_dingin} x {t_dingin}) = {m_panas*t_panas + m_dingin*t_dingin}. Bagi total massa ({m_panas+m_dingin} kg) = {tc}°C.",
                "jebakan": "Jangan asal merata-ratakan suhu kalau massanya tidak sama seimbang!",
                "rumus_kunci": "Suhu Campuran = (m₁T₁ + m₂T₂) / (m₁ + m₂)"
            }
        }

def gen_fisika_listrik():
    var = random.choice(["hukum_ohm", "resistor_paralel"])
    if var == "hukum_ohm":
        v = random.choice([12, 24, 36])
        r = random.choice([3, 4, 6])
        i = v // r
        correct = f"{i}"
        cand_wrongs = [i * 2, v * r, abs(v - r), i + 3, max(1, i - 2)]
        wrong = [f"{w}" for w in dict.fromkeys(cand_wrongs) if w != i]
        opts, c_let = make_options(correct, wrong, unit="Ampere", step=1)
        svg_code = render_rangkaian_listrik(v, r)
        return {
            "subject": "fisika", "subject_label": "Fisika", "topic": "Listrik Dinamis (Hukum Ohm)",
            "stimulus": f"Perhatikan skema rangkaian listrik arus searah dengan hambatan kawat R = {r} Ω dan sumber tegangan {v} Volt berikut.",
            "stimulus_svg": svg_code,
            "question": "Berapakah kuat arus listrik yang mengalir melalui kawat hambatan tersebut?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Arus adalah tegangan dibagi hambatan: {v} / {r} = {i} Ampere.",
                "jebakan": "Jangan mengalikan tegangan dengan hambatan.",
                "rumus_kunci": "I = V / R"
            }
        }
    else:
        combos = [(6, 3, 12), (6, 3, 24), (12, 4, 24), (10, 10, 30)]
        r1, r2, v = random.choice(combos)
        rp = (r1 * r2) // (r1 + r2)
        i_tot = v // rp
        correct = f"{i_tot}"
        cand_wrongs = [v // (r1 + r2), i_tot * 2, i_tot + 4, max(1, i_tot - 3), rp, i_tot + 2]
        wrong = [f"{w}" for w in dict.fromkeys(cand_wrongs) if w != i_tot and w > 0]
        opts, c_let = make_options(correct, wrong, unit="Ampere", step=2)
        svg_code = render_rangkaian_listrik(v, r1, r2, is_parallel=True)
        return {
            "subject": "fisika", "subject_label": "Fisika", "topic": "Listrik Dinamis (Rangkaian Resistor Paralel)",
            "stimulus": f"Perhatikan rangkaian paralel dua buah hambatan R₁ = {r1} Ω dan R₂ = {r2} Ω yang dihubungkan ke sumber tegangan {v} Volt berikut.",
            "stimulus_svg": svg_code,
            "question": "Berapakah kuat arus total yang keluar dari sumber tegangan?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Cari hambatan gabungan paralel: ({r1} x {r2}) / ({r1} + {r2}) = {rp} Ω. Lalu hitung arus total dengan Hukum Ohm: Arus = Tegangan / Hambatan Total = {v} / {rp} = {i_tot} Ampere.",
                "jebakan": f"Opsi {v // (r1 + r2)} salah karena menganggap rangkaian berupa susunan seri ({r1}+{r2} Ω).",
                "rumus_kunci": "Hambatan Paralel = (R₁ x R₂) / (R₁ + R₂)"
            }
        }

def gen_fisika_impuls():
    m = random.choice([2, 4, 5])
    f = random.choice([50, 100, 150])
    dt = random.choice([0.1, 0.2])
    impuls = int(round(f * dt))
    correct = f"{impuls}"
    cand_wrongs = [impuls * 2, impuls + 15, max(1, impuls - 8), f, int(f * 0.5), impuls + 8]
    wrong = [f"{w}" for w in dict.fromkeys(cand_wrongs) if w != impuls]
    opts, c_let = make_options(correct, wrong, unit="N·s", step=5)
    return {
        "subject": "fisika", "subject_label": "Fisika", "topic": "Momentum & Impuls",
        "stimulus": f"Sebuah bola massanya {m} kg diam di lapangan, lalu ditendang dengan gaya rata-rata {f} Newton. Kaki pemain menyentuh bola selama {dt} detik.",
        "question": "Berapakah besar impuls yang bekerja pada bola tersebut?",
        "options": opts, "correct_answer": c_let,
        "explanation": {
            "akal_sehat": f"Impuls adalah perkalian gaya dengan durasi sentuhan: {f} N x {dt} s = {impuls} N·s.",
            "jebakan": "Massa bola di soal ini hanyalah pengecoh.",
            "rumus_kunci": "Impuls = F x Δt"
        }
    }

def gen_fisika_parabola():
    v0 = random.choice([20, 40, 60])
    g = 10
    v0y = v0 // 2
    h_max = (v0y ** 2) // (2 * g)
    correct = f"{h_max}"
    cand_wrongs = [h_max * 2, (v0 ** 2) // (2 * g), h_max + 10, max(5, h_max - 5), h_max + 20, v0 // 2]
    wrong = [f"{w}" for w in dict.fromkeys(cand_wrongs) if w != h_max]
    opts, c_let = make_options(correct, wrong, unit="meter", step=5)
    svg_code = render_parabola_fisika(v0, 30, "?")
    return {
        "subject": "fisika", "subject_label": "Fisika", "topic": "Kinematika (Gerak Parabola)",
        "stimulus": f"Perhatikan diagram lintasan gerak peluru yang ditembakkan dari tanah dengan kecepatan awal v₀ = {v0} m/s dan sudut elevasi 30° berikut (g = 10 m/s²).",
        "stimulus_svg": svg_code,
        "question": "Berapakah ketinggian maksimum yang dapat dicapai oleh peluru tersebut?",
        "options": opts, "correct_answer": c_let,
        "explanation": {
            "akal_sehat": f"Kecepatan vertikal awal = {v0} x 0,5 = {v0y} m/s. Tinggi puncak: ({v0y}²) / (2 x 10) = {v0y**2} / 20 = {h_max} meter.",
            "jebakan": "Jangan lupa kuadratkan komponen sin sudut elevasinya!",
            "rumus_kunci": "Tinggi Maksimum = (v₀ · sin α)² / (2g)"
        }
    }

def gen_fisika_energi_mekanik():
    h = random.choice([5, 20, 45])
    v = int(math.sqrt(2 * 10 * h))
    correct = f"{v}"
    cand_wrongs = [v * 2, v + 8, v + 5, max(2, v - 4), v // 2]
    wrong = [f"{w}" for w in dict.fromkeys(cand_wrongs) if w != v]
    opts, c_let = make_options(correct, wrong, unit="m/s", step=4)
    return {
        "subject": "fisika", "subject_label": "Fisika", "topic": "Hukum Kekekalan Energi Mekanik",
        "stimulus": f"Sebuah kelapa jatuh bebas tanpa kecepatan awal dari pohon setinggi {h} meter di atas tanah (abaikan gesekan udara, g = 10 m/s²).",
        "question": "Berapakah kecepatan kelapa tersebut tepat saat menyentuh tanah?",
        "options": opts, "correct_answer": c_let,
        "explanation": {
            "akal_sehat": f"Energi potensial di atas berubah total menjadi energi gerak di tanah. Rumus kilat: v = √(2 x g x h) = √(2 x 10 x {h}) = {v} m/s.",
            "jebakan": "Kecepatan jatuh bebas tidak bergantung pada berat atau massa benda.",
            "rumus_kunci": "v = √(2gh)"
        }
    }

def gen_fisika_fluida():
    v_benda = random.choice([0.02, 0.04, 0.05])
    f_apung = int(1000 * 10 * v_benda)
    correct = f"{f_apung}"
    cand_wrongs = [f_apung // 2, f_apung * 2, f_apung + 100, max(50, f_apung - 80), f_apung + 250]
    wrong = [f"{val}" for val in dict.fromkeys(cand_wrongs) if val != f_apung and val > 0]
    opts, c_let = make_options(correct, wrong, unit="Newton", step=50)
    return {
        "subject": "fisika", "subject_label": "Fisika", "topic": "Fluida Statis (Hukum Archimedes)",
        "stimulus": f"Sebuah balok dengan volume {v_benda} m³ tercelup seluruhnya ke dalam air (massa jenis air = 1.000 kg/m³, g = 10 m/s²).",
        "question": "Berapakah besar gaya apung ke atas yang dialami oleh balok tersebut?",
        "options": opts, "correct_answer": c_let,
        "explanation": {
            "akal_sehat": f"Hukum Archimedes: Gaya apung = Massa jenis air (1.000) x Gravitasi (10) x Volume tercelup ({v_benda}) = {f_apung} Newton.",
            "jebakan": "Gaya apung hanya tergantung pada volume cairan yang digusur, bukan massa jenis bendanya!",
            "rumus_kunci": "F_A = ρ_cairan x g x V_celup"
        }
    }

def gen_fisika_gravitasi():
    # h = n*R => jarak dari pusat = (n+1)*R => g_h = g / (n+1)^2
    # All configurations yield exact terminating decimals
    combos = [
        (1, 4, "2.5"),    # h = R, jarak = 2R, g/4 = 2.5
        (3, 16, "0.625"), # h = 3R, jarak = 4R, g/16 = 0.625
        (4, 25, "0.4"),   # h = 4R, jarak = 5R, g/25 = 0.4
    ]
    n, divisor, correct_str = random.choice(combos)
    correct = correct_str
    cand_wrongs = ["10.0", "5.0", "2.5", "0.4", "0.625", "7.5", "1.25", "0.0", "2.0", "4.0"]
    wrong = [w for w in cand_wrongs if w != correct]
    opts, c_let = make_options(correct, wrong, unit="m/s²", step=1)
    h_label = f"{n}R" if n > 1 else "R"
    jarak_label = f"{n + 1}R"
    return {
        "subject": "fisika", "subject_label": "Fisika", "topic": "Gravitasi Newton",
        "stimulus": f"Percepatan gravitasi di permukaan bumi bernilai 10 m/s². Sebuah satelit mengorbit pada ketinggian tepat h = {h_label} di atas permukaan (R = jari-jari bumi).",
        "question": "Berapakah besar percepatan gravitasi bumi yang dirasakan oleh satelit tersebut?",
        "options": opts, "correct_answer": c_let,
        "explanation": {
            "akal_sehat": f"Jarak dari pusat bumi = R + {h_label} = {jarak_label}. Gravitasi berbanding terbalik kuadrat jarak: g' = 10 / ({n + 1})² = 10 / {divisor} = {correct} m/s².",
            "jebakan": f"Opsi 5,0 m/s² itu jebakan kalau kamu lupa menguadratkan jaraknya!",
            "rumus_kunci": "g' = g₀ × R² / (R + h)²"
        }
    }


def gen_fisika_momentum_tumbukan():
    var = random.choice(["tumbukan_tidak_lenting", "impuls_gaya_kontak", "tolakan_pegas"])
    if var == "tumbukan_tidak_lenting":
        combos = [
            (1000, 1000, 20, 10),
            (1200, 800, 20, 12),
            (1500, 1500, 24, 12),
            (1200, 600, 18, 12),
            (1600, 800, 24, 16)
        ]
        m1, m2, v1, v_prime = random.choice(combos)
        correct = str(v_prime)
        cand_wrongs = [v1, v_prime + 5, max(2, v_prime - 3), v1 // 2 if v1 // 2 != v_prime else v_prime + 3, v_prime + 8]
        wrong = [str(w) for w in dict.fromkeys(cand_wrongs) if w != v_prime]
        opts, c_let = make_options(correct, wrong, unit="m/s")
        return {
            "subject": "fisika", "subject_label": "Fisika", "topic": "Momentum & Tumbukan (Tumbukan Tidak Lenting Sama Sekali)",
            "stimulus": f"Mobil sedan A bermassa {m1} kg bergerak lurus dengan kelajuan {v1} m/s dan menabrak mobil boks B bermassa {m2} kg yang sedang mogok diam di bahu jalan. Setelah tabrakan, kedua kendaraan saling terkait dan terseret bersama-sama.",
            "question": "Berapakah kelajuan bersama kedua mobil tersebut tepat setelah tabrakan?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Hukum Kekekalan Momentum: Momentum awal mobil A ({m1} kg x {v1} m/s = {m1*v1} kg·m/s) dibagi rata ke massa total kedua mobil ({m1 + m2} kg). Kecepatan akhir bersama v' = {m1*v1} / {m1+m2} = {v_prime} m/s.",
                "jebakan": "Karena kedua mobil menempel (tidak lenting sama sekali), kelajuan akhirnya selalu lebih lambat daripada kelajuan mobil awal.",
                "rumus_kunci": "v' = (m₁·v₁ + m₂·v₂) / (m₁ + m₂)"
            }
        }
    elif var == "impuls_gaya_kontak":
        m_tangan = random.choice([1, 2])
        v_tangan = random.choice([10, 15, 20])
        dt_ms = random.choice([5, 10, 20]) # milidetik
        dt_s = dt_ms / 1000.0
        dp = m_tangan * v_tangan
        f_kontak = int(dp / dt_s)
        f_kontak_fmt = f"{f_kontak:,}".replace(",", ".")
        correct = f_kontak_fmt
        cand_kontak = [
            f_kontak // 2,
            f_kontak * 2,
            f_kontak * 3,
            dp,
            f_kontak * 4,
            f_kontak + 3500
        ]
        wrong = [f"{val:,}".replace(",", ".") for val in dict.fromkeys(cand_kontak) if val != f_kontak]
        opts, c_let = make_options(correct, wrong, unit="N")
        return {
            "subject": "fisika", "subject_label": "Fisika", "topic": "Impuls & Momentum (Gaya Kontak Rata-rata)",
            "stimulus": f"Seorang atlet karate menghantam tumpukan bata beton dengan telapak tangan bermassa efektif {m_tangan} kg. Kecepatan telapak tangan sesaat sebelum membentur bata adalah {v_tangan} m/s dan berhenti total setelah bata pecah dalam waktu kontak {dt_ms} milidetik.",
            "question": "Berapakah besar gaya rata-rata yang dikerahkan tangan pada tumpukan bata selama benturan?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Perubahan momentum tangan Δp = m x v = {m_tangan} kg x {v_tangan} m/s = {dp} kg·m/s. Waktu benturan Δt = {dt_ms} ms = {dt_s} detik. Gaya impuls F = Δp / Δt = {dp} / {dt_s} = {f_kontak_fmt} N!",
                "jebakan": "Waktu kontak dalam milidetik (ms) WAJIB diubah ke detik (dibagi 1.000) sebelum menghitung gaya Newton.",
                "rumus_kunci": "F = Δp / Δt = (m·v) / Δt"
            }
        }
    else:
        # Tolakan pegas / pemisahan massa - exact integers only
        combos = [(2, 4, 8, 4), (2, 4, 10, 5), (3, 6, 8, 4), (2, 6, 12, 4), (4, 8, 10, 5), (3, 9, 12, 4)]
        mA, mB, vA, vB = random.choice(combos)
        correct = str(vB)
        cand_wrongs = [vA, vB + 2, vB + 4, vA * 2, max(1, vB - 1)]
        wrong = [str(w) for w in dict.fromkeys(cand_wrongs) if w != vB]
        opts, c_let = make_options(correct, wrong, unit="m/s")
        return {
            "subject": "fisika", "subject_label": "Fisika", "topic": "Momentum & Tumbukan (Pelepasan Gaya Aksi-Reaksi)",
            "stimulus": f"Dua balok A ({mA} kg) dan B ({mB} kg) diletakkan di atas lantai mendatar licin tanpa gesekan dengan pegas ringan tertekan di antara keduanya. Saat sistem dilepaskan tiba-tiba, balok A terlontar ke kiri dengan kelajuan {vA} m/s.",
            "question": "Berapakah kelajuan lontaran balok B ke kanan?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Momentum total awal adalah nol (diam). Momentum balok A ke kiri harus persis mengimbangi momentum balok B ke kanan: mA x vA = mB x vB -> {mA} x {vA} = {mB} x vB -> {mA*vA} = {mB} x vB. Maka vB = {mA*vA} / {mB} = {vB} m/s.",
                "jebakan": "Benda yang bermassa lebih berat selalu terlempar dengan kelajuan yang lebih lambat!",
                "rumus_kunci": "mA · vA = mB · vB (Kekekalan Momentum Terisolasi)"
            }
        }

def gen_fisika_melingkar():
    var = random.choice(["kecepatan_sudut", "percepatan_sentripetal", "hubungan_roda"])
    if var == "kecepatan_sudut":
        r_cm = random.choice([20, 25, 40, 50])
        r_m = r_cm / 100.0
        omega = random.choice([4, 6, 8, 10])
        v = round(omega * r_m, 1)
        if v.is_integer():
            v = int(v)
        correct = str(omega)
        cand_wrongs = [omega * 2, max(2, omega // 2), round(v, 1), omega + 3, max(1, omega - 2), omega + 5]
        wrong = [str(w) for w in dict.fromkeys(cand_wrongs) if str(w) != str(omega)]
        opts, c_let = make_options(correct, wrong, unit="rad/s")
        return {
            "subject": "fisika", "subject_label": "Fisika", "topic": "Gerak Melingkar Beraturan (Kecepatan Sudut)",
            "stimulus": f"Sebuah meja pembuat gerabah keramik berputar secara horizontal terhadap sumbu poros di pusatnya. Sebuah titik perkakas yang berjarak {r_cm} cm dari pusat putaran bergerak dengan kecepatan linier tetap {v} m/s.",
            "question": "Berapakah kecepatan sudut putaran meja keramik tersebut?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Ubah jarak ke meter: r = {r_cm} cm = {r_m} m. Hubungan kecepatan linier dan sudut: v = ω x r. Maka ω = v / r = {v} / {r_m} = {omega} rad/s.",
                "jebakan": "Satuan jari-jari harus dalam meter (SI) agar hasil kecepatan sudut tepat dalam rad/s.",
                "rumus_kunci": "ω = v / r"
            }
        }
    elif var == "percepatan_sentripetal":
        combos = [(6, 2, 18), (6, 4, 9), (8, 2, 32), (8, 4, 16), (10, 2, 50), (10, 5, 20), (12, 4, 36)]
        v, r, asp = random.choice(combos)
        correct = str(asp)
        cand_wrongs = [v * r, asp // 2, v ** 2, asp + 8, max(4, asp - 6), asp + 12]
        wrong = [str(w) for w in dict.fromkeys(cand_wrongs) if w != asp]
        opts, c_let = make_options(correct, wrong, unit="m/s²")
        return {
            "subject": "fisika", "subject_label": "Fisika", "topic": "Gerak Melingkar Beraturan (Percepatan Sentripetal)",
            "stimulus": f"Sebuah mobil mainan melaju dengan kelajuan konstan {v} m/s melintasi lintasan tikungan melingkar horizontal berjari-jari {r} meter.",
            "question": "Berapakah percepatan sentripetal yang dialami oleh mobil mainan tersebut?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Percepatan sentripetal menarik benda ke arah pusat lingkaran: as = v² / r = ({v})² / {r} = {v**2} / {r} = {asp} m/s².",
                "jebakan": "Meskipun kelajuan konstan, arah kecepatan selalu berubah sehingga percepatan sentripetal tidak pernah nol!",
                "rumus_kunci": "as = v² / r = ω² · r"
            }
        }
    else:
        combos = [(10, 30, 15, 5), (12, 36, 18, 6), (15, 45, 12, 4), (20, 40, 16, 8)]
        rA, rB, omegaA, omegaB = random.choice(combos)
        correct = str(omegaB)
        cand_wrongs = [omegaA, omegaB * 2, omegaB + 4, max(1, omegaB - 2), omegaA * 2, omegaB + 6]
        wrong = [str(w) for w in dict.fromkeys(cand_wrongs) if w != omegaB]
        opts, c_let = make_options(correct, wrong, unit="rad/s")
        return {
            "subject": "fisika", "subject_label": "Fisika", "topic": "Gerak Melingkar (Hubungan Dua Roda Dihubungkan Rantai)",
            "stimulus": f"Dua roda gigi A dan B dihubungkan oleh sebuah rantai sepeda tanpa slip. Roda gigi kecil A memiliki jari-jari {rA} cm dan roda gigi besar B memiliki jari-jari {rB} cm. Roda A berputar dengan kecepatan sudut {omegaA} rad/s.",
            "question": "Berapakah kecepatan sudut putaran roda gigi besar B?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Roda yang terhubung rantai memiliki kelajuan linier tepi yang sama persis (vA = vB). Karena v = ω x r, maka ωA x rA = ωB x rB -> {omegaA} x {rA} = ωB x {rB} -> {omegaA*rA} = {rB} x ωB. Maka ωB = {omegaA*rA} / {rB} = {omegaB} rad/s.",
                "jebakan": "Roda yang lebih besar selalu berputar lebih lambat (kecepatan sudut lebih kecil).",
                "rumus_kunci": "ωA · rA = ωB · rB (Dua Roda Dihubungkan Rantai / Bersinggungan)"
            }
        }

def gen_fisika_vektor_kecepatan():
    var = random.choice(["resultan_arus", "jarak_hanyut", "waktu_menyeberang"])
    pyth = random.choice([(3, 4, 5), (6, 8, 10), (5, 12, 13), (8, 6, 10)])
    vp, va, vtot = pyth[0], pyth[1], pyth[2]
    # Pick lebar sungai such that lebar_sungai % vp == 0
    k_waktu = random.choice([10, 15, 20])
    lebar_sungai = k_waktu * vp
    t_detik = k_waktu
    jarak_hanyut = va * t_detik
    
    if var == "resultan_arus":
        svg_code = render_vektor_sungai(vp, va, "?")
        correct = str(vtot)
        cand_wrongs = [vp + va, abs(vp - va), vtot + 2, max(1, vtot - 1), vp * 2, vtot + 4]
        wrong = [str(w) for w in dict.fromkeys(cand_wrongs) if w != vtot]
        opts, c_let = make_options(correct, wrong, unit="m/s")
        return {
            "subject": "fisika", "subject_label": "Fisika", "topic": "Vektor Kecepatan Relatif (Perahu Menyeberang Arus)",
            "stimulus": f"Sebuah perahu motor bergerak menyeberangi sungai tegak lurus terhadap arah aliran arus seperti pada diagram vektor berikut (v_perahu = {vp} m/s, v_arus = {va} m/s).",
            "stimulus_svg": svg_code,
            "question": "Berapakah besar kelajuan total resultan gerak perahu terhadap pengamat di pinggir sungai?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Arah perahu dan arah arus sungai saling tegak lurus (membentuk sudut 90°). Gunakan dalil Pythagoras: v_tot = √(v_perahu² + v_arus²) = √({vp}² + {va}²) = √({vp**2} + {va**2}) = √{vtot**2} = {vtot} m/s.",
                "jebakan": f"Jangan langsung menjumlahkan biasa ({vp} + {va} = {vp+va}); kecepatan adalah besaran VEKTOR tegak lurus!",
                "rumus_kunci": "v_resultan = √(vx² + vy²)"
            }
        }
    elif var == "jarak_hanyut":
        svg_code = render_vektor_sungai(vp, va, "?")
        correct = str(jarak_hanyut)
        cand_wrongs = [lebar_sungai, jarak_hanyut + 20, max(10, jarak_hanyut - 15), jarak_hanyut * 2, jarak_hanyut + 30]
        wrong = [str(w) for w in dict.fromkeys(cand_wrongs) if w != jarak_hanyut]
        opts, c_let = make_options(correct, wrong, unit="meter")
        return {
            "subject": "fisika", "subject_label": "Fisika", "topic": "Kinematika Vektor (Jarak Hanyut Terbawa Arus)",
            "stimulus": f"Sebuah perahu menyeberangi sungai selebar {lebar_sungai} meter dengan kelajuan perahu {vp} m/s dan kecepatan arus sungai {va} m/s seperti pada diagram vektor berikut.",
            "stimulus_svg": svg_code,
            "question": "Berapakah jarak perahu tersebut terseret hanyut ke hilir saat tiba di tepi seberang sungai?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"1. Waktu menyeberang ditentukan hanya oleh komponen gerak tegak lurus: t = Lebar Sungai / v_perahu = {lebar_sungai} / {vp} = {t_detik} detik. 2. Selama {t_detik} detik tersebut, arus menyeret perahu ke hilir: Jarak hanyut x = v_arus x t = {va} m/s x {t_detik} s = {jarak_hanyut} meter.",
                "jebakan": "Arus air tidak memperlambat waktu menyeberang, arus hanya menyeret posisi perahu ke hilir!",
                "rumus_kunci": "x_hanyut = v_arus · (Lebar / v_perahu)"
            }
        }
    else:
        svg_code = render_vektor_sungai(vp, va, "?")
        correct = str(t_detik)
        cand_wrongs = [t_detik + 5, max(2, t_detik - 4), t_detik * 2, t_detik + 10, max(1, t_detik - 2)]
        wrong = [str(w) for w in dict.fromkeys(cand_wrongs) if w != t_detik]
        opts, c_let = make_options(correct, wrong, unit="detik")
        return {
            "subject": "fisika", "subject_label": "Fisika", "topic": "Kinematika Vektor (Waktu Tempuh Menyeberangi Sungai)",
            "stimulus": f"Sebuah sungai memiliki lebar {lebar_sungai} meter dengan kecepatan arus {va} m/s. Sebuah kapal motor menyeberang tegak lurus arus dengan kelajuan {vp} m/s seperti pada diagram berikut.",
            "stimulus_svg": svg_code,
            "question": "Berapa lama waktu yang dibutuhkan kapal untuk mencapai tepi seberang sungai?",
            "options": opts, "correct_answer": c_let,
            "explanation": {
                "akal_sehat": f"Waktu untuk mencapai tepi seberang HANYA dipengaruhi oleh kelajuan perahu pada sumbu tegak lurus (v_perahu = {vp} m/s): t = d / v_perahu = {lebar_sungai} / {vp} = {t_detik} detik.",
                "jebakan": "Jangan membagi lebar sungai dengan resultan kecepatan; resultan kecepatan hanya untuk panjang lintasan diagonal!",
                "rumus_kunci": "t_seberang = Lebar / v_tegak_lurus"
            }
        }
