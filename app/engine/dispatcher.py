import random
from .mtk_wajib import (
    gen_mtk_komposisi,
    gen_mtk_invers,
    gen_mtk_barisan,
    gen_mtk_peluang,
    gen_mtk_geometri_takhingga,
    gen_mtk_finansial,
    gen_mtk_lingkaran_sudut,
    gen_mtk_lingkaran_juring,
    gen_mtk_permutasi,
    gen_mtk_statistika_mean,
    gen_mtk_dimensi_tiga,
    gen_mtk_program_linear,
    gen_mtk_spltv
)
from .fisika import (
    gen_fisika_kinematika,
    gen_fisika_newton,
    gen_fisika_usaha,
    gen_fisika_kalor,
    gen_fisika_listrik,
    gen_fisika_impuls,
    gen_fisika_parabola,
    gen_fisika_energi_mekanik,
    gen_fisika_fluida,
    gen_fisika_gravitasi,
    gen_fisika_momentum_tumbukan,
    gen_fisika_melingkar,
    gen_fisika_vektor_kecepatan
)
from .mtk_lanjut import (
    gen_mtkl_sisa,
    gen_mtkl_matriks,
    gen_mtkl_vektor,
    gen_mtkl_turunan,
    gen_mtkl_limit,
    gen_mtkl_vieta,
    gen_mtkl_vektor_panjang,
    gen_mtkl_integral,
    gen_mtkl_transformasi,
    gen_mtkl_lingkaran,
    gen_mtkl_trigo_periode
)
from .literasi import TEXT_BANK

# ==============================================================================
# DISPATCHER DENGAN BALANCED POOL KE SELURUH 37 MODUL RESMI PUSMENDIK
# ==============================================================================

def _shuffle_text_question(q):
    """
    Shuffles static reading options dynamically so that:
    1. Key positions are uniformly distributed (~20% for each of A, B, C, D, E).
    2. Static answer patterns in TEXT_BANK cannot be memorized or gamed.
    3. The underlying TEXT_BANK data remains pure and unmutated.
    """
    q_copy = dict(q)
    q_copy["explanation"] = dict(q["explanation"])
    correct_id = q["correct_answer"]
    correct_text = None
    for o in q["options"]:
        if o["id"] == correct_id:
            correct_text = o["text"]
            break
    all_texts = [o["text"] for o in q["options"]]
    random.shuffle(all_texts)
    letters = ["A", "B", "C", "D", "E"]
    new_options = []
    new_correct = "A"
    for idx, text in enumerate(all_texts):
        let = letters[idx]
        new_options.append({"id": let, "text": text})
        if text == correct_text:
            new_correct = let
    q_copy["options"] = new_options
    q_copy["correct_answer"] = new_correct
    return q_copy

def get_tka_question(subject="all"):
    pool_generators = {
        "fisika": [
            gen_fisika_kinematika,
            gen_fisika_newton,
            gen_fisika_usaha,
            gen_fisika_kalor,
            gen_fisika_listrik,
            gen_fisika_impuls,
            gen_fisika_parabola,
            gen_fisika_energi_mekanik,
            gen_fisika_fluida,
            gen_fisika_gravitasi,
            gen_fisika_momentum_tumbukan,
            gen_fisika_melingkar,
            gen_fisika_vektor_kecepatan
        ],
        "mtk_wajib": [
            gen_mtk_komposisi,
            gen_mtk_invers,
            gen_mtk_barisan,
            gen_mtk_peluang,
            gen_mtk_geometri_takhingga,
            gen_mtk_finansial,
            gen_mtk_lingkaran_sudut,
            gen_mtk_lingkaran_juring,
            gen_mtk_permutasi,
            gen_mtk_statistika_mean,
            gen_mtk_dimensi_tiga,
            gen_mtk_program_linear,
            gen_mtk_spltv
        ],
        "mtk_lanjut": [
            gen_mtkl_sisa,
            gen_mtkl_matriks,
            gen_mtkl_vektor,
            gen_mtkl_turunan,
            gen_mtkl_limit,
            gen_mtkl_vieta,
            gen_mtkl_vektor_panjang,
            gen_mtkl_integral,
            gen_mtkl_transformasi,
            gen_mtkl_lingkaran,
            gen_mtkl_trigo_periode
        ],
        "b_indo": [lambda: _shuffle_text_question(random.choice([q for q in TEXT_BANK if q["subject"] == "b_indo"]))],
        "b_inggris": [lambda: _shuffle_text_question(random.choice([q for q in TEXT_BANK if q["subject"] == "b_inggris"]))]
    }

    if subject == "all" or subject not in pool_generators:
        s = random.choice(list(pool_generators.keys()))
        gen = random.choice(pool_generators[s])
        return gen()
    else:
        gen = random.choice(pool_generators[subject])
        return gen()
