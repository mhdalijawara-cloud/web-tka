// Bank Soal TKA Resmi (Fisika, MTK Wajib, MTK Lanjut, B. Indo, B. Inggris)
const QUESTIONS_DATA = [
  {
    "subject": "b_indo",
    "subject_label": "Bahasa Indonesia",
    "topic": "Literasi Membaca (Ide Pokok)",
    "stimulus": "Kendaraan listrik digadang-gadang ramah lingkungan karena nol emisi gas buang di jalan raya. Namun, baterai mobil listrik membutuhkan nikel dan lithium yang proses penambangannya menghasilkan limbah berat dan merusak ekosistem hutan sekitar area tambang jika tidak dikelola ketat. Oleh sebab itu, klaim hijau kendaraan listrik masih menuai pro dan kontra di kalangan aktivis lingkungan.",
    "question": "Apa ide pokok (gagasan utama) dari teks di atas?",
    "options": [
      {
        "id": "A",
        "text": "Proses penambangan mineral nikel dan lithium di kawasan hutan tropis."
      },
      {
        "id": "B",
        "text": "Klaim ramah lingkungan mobil listrik yang menuai perdebatan akibat limbah baterai."
      },
      {
        "id": "C",
        "text": "Pencapaian emisi nol gas buang kendaraan listrik di jaringan jalan raya perkotaan."
      },
      {
        "id": "D",
        "text": "Dampak buruk pencemaran limbah industri baterai terhadap sanitasi permukiman kota."
      },
      {
        "id": "E",
        "text": "Rencana penghentian operasional tambang mineral mentah di kawasan konservasi alam."
      }
    ],
    "correct_answer": "B",
    "explanation": {
      "akal_sehat": "Teks membahas dua sisi: mobil listrik bersih di jalan tapi baterainya bikin limbah tambang, sehingga menuai pro-kontra. Opsi B merangkum seluruh payung cerita.",
      "jebakan": "Opsi C hanya kalimat pertama, bukan ide utama yang memayungi teks.",
      "rumus_kunci": "Ide Pokok = Rangkuman menyeluruh pesan utama paragraf"
    }
  },
  {
    "subject": "b_indo",
    "subject_label": "Bahasa Indonesia",
    "topic": "Kalimat Efektif (Anti-Pemborosan)",
    "stimulus": "Perhatikan kalimat ini: 'Kepada para hadirin sekalian dimohon untuk segera memasuki ke dalam ruangan.'",
    "question": "Bagaimana perbaikan kalimat di atas agar jadi kalimat efektif yang hemat kata?",
    "options": [
      {
        "id": "A",
        "text": "Kepada para hadirin dimohon memasuki ke dalam ruangan."
      },
      {
        "id": "B",
        "text": "Hadirin dimohon segera memasuki ruangan."
      },
      {
        "id": "C",
        "text": "Untuk para hadirin sekalian mohon masuk ruangan."
      },
      {
        "id": "D",
        "text": "Para hadirin sekalian dimohon segera masuk ke dalam."
      },
      {
        "id": "E",
        "text": "Kepada para hadirin sekalian silakan masuk."
      }
    ],
    "correct_answer": "B",
    "explanation": {
      "akal_sehat": "Buang kata mubazir: 'Kepada', dobel jamak ('para + sekalian'), dan 'ke dalam' setelah kata 'memasuki'. Menjadi ringkas: 'Hadirin dimohon segera memasuki ruangan.'",
      "jebakan": "Menaruh kata depan 'Kepada' di awal kalimat membuat kalimat kehilangan subjek.",
      "rumus_kunci": "Kalimat Efektif = Hindari jamak ganda dan kata depan di depan subjek"
    }
  },
  {
    "subject": "b_indo",
    "subject_label": "Bahasa Indonesia",
    "topic": "Penalaran Kritis (Simpulan Logis)",
    "stimulus": "Hasil riset kesehatan menunjukkan bahwa remaja yang tidur kurang dari 6 jam setiap malam memiliki tingkat konsentrasi 40% lebih rendah saat ujian sekolah dibandingkan remaja yang tidur cukup 8 jam. Selain itu, kelompok kurang tidur ini memproduksi hormon stres kortisol dua kali lebih tinggi.",
    "question": "Simpulan yang paling tepat dan logis berdasarkan bacaan di atas adalah ....",
    "options": [
      {
        "id": "A",
        "text": "Semua remaja yang nilai ujiannya jelek pasti karena tidur larut malam."
      },
      {
        "id": "B",
        "text": "Tidur cukup selama 8 jam berperan penting menjaga kestabilan hormon dan daya konsentrasi belajar remaja."
      },
      {
        "id": "C",
        "text": "Ujian sekolah adalah penyebab utama naiknya hormon kortisol pada tubuh remaja."
      },
      {
        "id": "D",
        "text": "Remaja yang tidur lebih dari 10 jam dijamin mendapat nilai tertinggi di sekolah."
      },
      {
        "id": "E",
        "text": "Konsentrasi belajar tidak dipengaruhi oleh jam tidur melainkan bakat bawaan."
      }
    ],
    "correct_answer": "B",
    "explanation": {
      "akal_sehat": "Kurang tidur = konsentrasi anjlok & hormon stres naik. Maka simpulan logisnya: tidur cukup menjaga konsentrasi dan hormon (Opsi B).",
      "jebakan": "Opsi A terlalu ekstrim dengan kata 'semua... pasti karena'.",
      "rumus_kunci": "Simpulan Logis = Sejalan dengan data teks tanpa kata ekstrim mutlak"
    }
  },
  {
    "subject": "b_indo",
    "subject_label": "Bahasa Indonesia",
    "topic": "Kohesi & Hubungan Antarkalimat",
    "stimulus": "Pemerintah kota menambah 50 unit bus listrik baru untuk mengurangi polusi udara. [...], jalur khusus bus masih sering diserobot pengendara sepeda motor, sehingga bus listrik tetap terjebak kemacetan.",
    "question": "Konjungsi antarkalimat yang paling tepat untuk mengisi bagian rumpang di atas adalah ....",
    "options": [
      {
        "id": "A",
        "text": "Namun demikian"
      },
      {
        "id": "B",
        "text": "Oleh karena itu"
      },
      {
        "id": "C",
        "text": "Dengan demikian"
      },
      {
        "id": "D",
        "text": "Selain itu"
      },
      {
        "id": "E",
        "text": "Sebagai akibatnya"
      }
    ],
    "correct_answer": "A",
    "explanation": {
      "akal_sehat": "Dua kalimat bertolak belakang (kabar positif bus baru vs kabar negatif diserobot macet). Hubungannya wajib konjungsi pertentangan: 'Namun demikian'.",
      "jebakan": "Opsi B dan C adalah konjungsi sebab-akibat searah.",
      "rumus_kunci": "Logika Kontras = Gunakan konjungsi pertentangan"
    }
  },
  {
    "subject": "b_indo",
    "subject_label": "Bahasa Indonesia",
    "topic": "Evaluasi Teks (Fakta vs Opini)",
    "stimulus": "(1) Kementerian Pendidikan mencatat 85% sekolah di perkotaan telah terkoneksi internet pita lebar pada akhir 2025. (2) Kecepatan rata-rata akses internet sekolah mencapai 50 Mbps. (3) Koneksi internet cepat ini diyakini akan secara otomatis menjadikan seluruh siswa berprestasi gemilang. (4) Anggaran digitalisasi pendidikan tahun ini dialokasikan sebesar Rp4,5 triliun.",
    "question": "Kalimat yang memuat opini (pandangan subjektif yang belum terbukti) adalah kalimat nomor ....",
    "options": [
      {
        "id": "A",
        "text": "(1)"
      },
      {
        "id": "B",
        "text": "(2)"
      },
      {
        "id": "C",
        "text": "(3)"
      },
      {
        "id": "D",
        "text": "(4)"
      },
      {
        "id": "E",
        "text": "(1) dan (2)"
      }
    ],
    "correct_answer": "C",
    "explanation": {
      "akal_sehat": "Kalimat (3) menggunakan kata 'diyakini akan secara otomatis' — ini adalah dugaan/harapan subjektif, bukan fakta angka terverifikasi.",
      "jebakan": "Opini sering kali bersembunyi di balik kata 'diyakini', 'tampaknya', atau 'seharusnya'.",
      "rumus_kunci": "Fakta = Data terverifikasi; Opini = Harapan/asumsi dugaan"
    }
  },
  {
    "subject": "b_indo",
    "subject_label": "Bahasa Indonesia",
    "topic": "Analisis Ketepatan Data Teks",
    "stimulus": "Data BPS menunjukkan bahwa konsumsi ikan masyarakat Indonesia pada tahun 2024 mencapai 58 kg per kapita, naik 4% dibanding 2023. Namun, konsumsi ikan di wilayah pegunungan Jawa masih di bawah 30 kg per kapita karena mahalnya rantai logistik pendingin.",
    "question": "Pernyataan berikut yang TIDAK SESUAI dengan isi teks bacaan di atas adalah ....",
    "options": [
      {
        "id": "A",
        "text": "Konsumsi ikan rata-rata nasional mengalami peningkatan dibanding tahun sebelumnya."
      },
      {
        "id": "B",
        "text": "Tingkat konsumsi ikan di seluruh daerah di Indonesia sudah merata di atas 50 kg per kapita."
      },
      {
        "id": "C",
        "text": "Ketiadaan logistik pendingin menghambat pasokan ikan ke pegunungan."
      },
      {
        "id": "D",
        "text": "BPS adalah sumber data konsumsi ikan dalam teks."
      },
      {
        "id": "E",
        "text": "Warga pegunungan Jawa mengonsumsi ikan lebih sedikit daripada rata-rata nasional."
      }
    ],
    "correct_answer": "B",
    "explanation": {
      "akal_sehat": "Teks jelas menyebut wilayah pegunungan masih di bawah 30 kg. Jadi klaim opsi B bahwa sudah merata di atas 50 kg jelas bohong dan tidak sesuai teks.",
      "jebakan": "Pertanyaan bertipe 'TIDAK SESUAI' mencari pernyataan yang salah.",
      "rumus_kunci": "Cari opsi yang bertolak belakang dengan data teks"
    }
  },
  {
    "subject": "b_indo",
    "subject_label": "Bahasa Indonesia",
    "topic": "Makna Istilah Ilmiah Kontekstual",
    "stimulus": "Penggunaan antibiotik secara sembarangan dapat memicu timbulnya resistansi bakteri patogen, sehingga infeksi penyakit biasa menjadi sulit disembuhkan dengan obat standar.",
    "question": "Makna istilah 'resistansi' dalam konteks bacaan ilmiah di atas adalah ....",
    "options": [
      {
        "id": "A",
        "text": "Daya tahan atau kekebalan terhadap pengaruh obat tertentu."
      },
      {
        "id": "B",
        "text": "Penularan penyakit secara cepat ke manusia lain."
      },
      {
        "id": "C",
        "text": "Kematian massal mikroorganisme dalam tubuh."
      },
      {
        "id": "D",
        "text": "Penyusutan ukuran bakteri di dalam laboratorium."
      },
      {
        "id": "E",
        "text": "Pelemahan sistem kekebalan tubuh pasien."
      }
    ],
    "correct_answer": "A",
    "explanation": {
      "akal_sehat": "Bakteri tidak mempan diobati lagi artinya bakteri tersebut sudah memiliki kekebalan atau daya tahan terhadap antibiotik (Opsi A).",
      "jebakan": "Resistansi bakteri adalah kekebalan milik bakteri, bukan penurunan imun tubuh pasien.",
      "rumus_kunci": "Resistansi = Daya tangkal / Kekebalan organisme terhadap zat kimia"
    }
  },
  {
    "subject": "b_indo",
    "subject_label": "Bahasa Indonesia",
    "topic": "Penalaran Kausalitas (Sebab-Akibat)",
    "stimulus": "Penurunan populasi lebah madu secara drastis dalam satu dekade terakhir diakibatkan oleh alih fungsi lahan hutan menjadi perkebunan monokultur serta penggunaan pestisida neonikotinoid. Akibat hilangnya lebah, ratusan spesies tanaman pangan gagal melakukan penyerbukan alami, yang memicu penurunan panen buah dan biji-bijian di berbagai belahan dunia.",
    "question": "Penyebab utama dari kegagalan penyerbukan tanaman pangan berdasarkan teks adalah ....",
    "options": [
      {
        "id": "A",
        "text": "Anjloknya populasi lebah madu sebagai agen penyerbuk alami."
      },
      {
        "id": "B",
        "text": "Tingginya harga bibit tanaman buah di pasar dunia."
      },
      {
        "id": "C",
        "text": "Perubahan iklim global yang menyebabkan banjir bandang."
      },
      {
        "id": "D",
        "text": "Pemberian pupuk kompos yang berlebihan pada tanah perkebunan."
      },
      {
        "id": "E",
        "text": "Keberhasilan petani membasmi seluruh hama serangga."
      }
    ],
    "correct_answer": "A",
    "explanation": {
      "akal_sehat": "Rantai sebab-akibat: pestisida -> lebah musnah -> tanaman pangan gagal penyerbukan. Penyebab langsung gagal penyerbukan adalah hilangnya lebah madu.",
      "jebakan": "Jangan menambahkan asumsi luar seperti perubahan iklim atau banjir.",
      "rumus_kunci": "Sebab-Akibat = Hubungkan kalimat sebab dan frasa 'Akibat hilangnya...'"
    }
  },
  {
    "subject": "b_inggris",
    "subject_label": "Bahasa Inggris",
    "topic": "Reading Comprehension (Main Idea)",
    "stimulus": "Social media algorithms are deliberately engineered to maximize user engagement by serving sensational and emotionally charged content. When users encounter posts that provoke outrage or extreme joy, they spend significantly more time commenting and sharing. Consequently, nuanced educational content is often suppressed in favor of viral controversy.",
    "question": "What is the main idea of the passage?",
    "options": [
      {
        "id": "A",
        "text": "Why educational content creators struggle to gain millions of active online views."
      },
      {
        "id": "B",
        "text": "How social media algorithms prioritize emotional content over nuanced information."
      },
      {
        "id": "C",
        "text": "The psychological dangers of excessive screen time and digital device addiction."
      },
      {
        "id": "D",
        "text": "Effective strategies for users to disable push notifications on social platforms."
      },
      {
        "id": "E",
        "text": "Sociological trends in how communities share emotional grievances across networks."
      }
    ],
    "correct_answer": "B",
    "explanation": {
      "akal_sehat": "Teks membahas algoritma medsos yang sengaja memprioritaskan konten emosional agar pengguna betah berlama-lama (Opsi B).",
      "jebakan": "Opsi A, C, D hanya contoh sepotong, bukan ide payung paragraf.",
      "rumus_kunci": "Main Idea = Summary of what the whole paragraph informs about"
    }
  },
  {
    "subject": "b_inggris",
    "subject_label": "Bahasa Inggris",
    "topic": "Vocabulary in Context (Artinya Apa?)",
    "stimulus": "The ancient dam showed visible signs of deterioration, forcing engineers to drain the reservoir before the walls collapsed completely.",
    "question": "The word 'deterioration' in the sentence is closest in meaning to ....",
    "options": [
      {
        "id": "A",
        "text": "Structural improvement"
      },
      {
        "id": "B",
        "text": "Physical decay"
      },
      {
        "id": "C",
        "text": "Modern reconstruction"
      },
      {
        "id": "D",
        "text": "Rapid expansion"
      },
      {
        "id": "E",
        "text": "Internal reinforcement"
      }
    ],
    "correct_answer": "B",
    "explanation": {
      "akal_sehat": "Bendungan mau runtuh ('walls collapsed'), air dikosongkan. Berarti kondisi bendungannya memburuk/rusak ('worsening condition/decay').",
      "jebakan": "Opsi A (Improvement = membaik) kebalikan dari kondisi mau runtuh.",
      "rumus_kunci": "Tebak arti kata dari petunjuk klausa akibat berikutnya"
    }
  },
  {
    "subject": "b_inggris",
    "subject_label": "Bahasa Inggris",
    "topic": "Inference (Menyimpulkan yang Tersirat)",
    "stimulus": "Urban vertical farming utilizes 95% less water and zero synthetic pesticides compared to conventional outdoor farming. However, the initial capital required for LED lighting, climate-control sensors, and automated nutrient delivery systems makes fresh produce substantially more expensive for low-income consumers.",
    "question": "It can be inferred from the passage that vertical farming ....",
    "options": [
      {
        "id": "A",
        "text": "Produces lower quality vegetables than traditional open fields."
      },
      {
        "id": "B",
        "text": "Is environmentally efficient but currently faces economic barriers to mass affordability."
      },
      {
        "id": "C",
        "text": "Requires massive quantities of chemical fertilizers to operate."
      },
      {
        "id": "D",
        "text": "Is illegal in major metropolitan areas."
      },
      {
        "id": "E",
        "text": "Will completely replace outdoor farming within the next decade."
      }
    ],
    "correct_answer": "B",
    "explanation": {
      "akal_sehat": "Dua fakta digabung: hemat air 95% (efisien lingkungan) TAPI modal mahal bikin sayur mahal bagi konsumen bawah (hambatan ekonomi). Opsi B tepat merangkum keduanya.",
      "jebakan": "Opsi C bertentangan langsung dengan teks ('zero synthetic pesticides').",
      "rumus_kunci": "Inference = Kesimpulan logis menggabungkan sisi positif dan tantangannya"
    }
  },
  {
    "subject": "b_inggris",
    "subject_label": "Bahasa Inggris",
    "topic": "Author's Tone & Purpose",
    "stimulus": "Artificial intelligence tools in high schools should not be banned outright. Instead of fearing automated essays, educators ought to redesign assessments around oral defense and critical thinking, teaching students to responsibly critique AI outputs rather than naively copying them.",
    "question": "What is the author's primary purpose in writing the passage?",
    "options": [
      {
        "id": "A",
        "text": "To advocate for adapting pedagogical methods rather than prohibiting AI in education."
      },
      {
        "id": "B",
        "text": "To explain the technical architecture behind generative language models."
      },
      {
        "id": "C",
        "text": "To demand the complete abolition of written examinations."
      },
      {
        "id": "D",
        "text": "To criticize students who utilize digital tools for homework."
      },
      {
        "id": "E",
        "text": "To promote specific software products to high schools."
      }
    ],
    "correct_answer": "A",
    "explanation": {
      "akal_sehat": "Penulis mengajak guru mengubah cara mengajar/menguji daripada melarang AI. Tujuannya adalah mengadvokasi perubahan metode pendidikan (Opsi A).",
      "jebakan": "Opsi B salah karena teks tidak membahas teknis mesin AI.",
      "rumus_kunci": "Author's Purpose = Cari kata kerja misi penulis (advocate/warn/inform)"
    }
  },
  {
    "subject": "b_inggris",
    "subject_label": "Bahasa Inggris",
    "topic": "Pronoun Reference (Rujukan Kata Ganti)",
    "stimulus": "Marine biologists discovered that manta rays possess extraordinary cognitive maps. They navigate hundreds of kilometers across open ocean trenches to reach seasonal cleaning stations where small wrasse fish remove external parasites from their bodies.",
    "question": "The word 'They' in the second sentence refers to ....",
    "options": [
      {
        "id": "A",
        "text": "Marine biologists"
      },
      {
        "id": "B",
        "text": "Manta rays"
      },
      {
        "id": "C",
        "text": "Ocean trenches"
      },
      {
        "id": "D",
        "text": "Wrasse fish"
      },
      {
        "id": "E",
        "text": "External parasites"
      }
    ],
    "correct_answer": "B",
    "explanation": {
      "akal_sehat": "Makhluk yang berenang ratusan kilometer dan dibersihkan parasitnya adalah ikan pari manta (manta rays).",
      "jebakan": "Opsi A (biologists) tidak masuk akal karena peneliti manusia tidak dibersihkan kutunya oleh ikan.",
      "rumus_kunci": "Pronoun Reference = Cari subjek jamak yang melakukan aksi berikutnya"
    }
  },
  {
    "subject": "b_inggris",
    "subject_label": "Bahasa Inggris",
    "topic": "Factual Specific Details (Pernyataan Sesuai)",
    "stimulus": "Sleep deprivation impairs the brain's glymphatic system, a specialized waste-clearance pathway that removes toxic metabolic proteins such as beta-amyloid during deep non-REM sleep. Chronic disruption of this cycle significantly elevates the long-term risk of neurodegenerative disorders.",
    "question": "According to the passage, what is the primary role of the glymphatic system?",
    "options": [
      {
        "id": "A",
        "text": "To eliminate harmful metabolic proteins like beta-amyloid during deep sleep."
      },
      {
        "id": "B",
        "text": "To trigger rapid awakening in response to sensory danger."
      },
      {
        "id": "C",
        "text": "To synthesize neurotransmitters that suppress non-REM sleep stages."
      },
      {
        "id": "D",
        "text": "To prevent muscles from moving during dreaming."
      },
      {
        "id": "E",
        "text": "To produce growth hormones throughout waking hours."
      }
    ],
    "correct_answer": "A",
    "explanation": {
      "akal_sehat": "Teks tertulis: 'waste-clearance pathway that removes toxic metabolic proteins such as beta-amyloid during deep non-REM sleep'. Opsi A persis sama.",
      "jebakan": "Opsi B, C, D mengarang fungsi biologis yang tidak ada di teks.",
      "rumus_kunci": "According to passage = Cari kalimat definisi langsung dari teks"
    }
  },
  {
    "subject": "b_inggris",
    "subject_label": "Bahasa Inggris",
    "topic": "Negative Fact (Exception Question)",
    "stimulus": "Renewable geothermal energy offers continuous baseload electricity independent of weather fluctuations, occupies minimal surface land compared to solar farms, and generates near-zero direct greenhouse emissions. However, geothermal power plants require substantial exploratory drilling investments and carry slight risks of inducing localized micro-seismic tremors.",
    "question": "All of the following are mentioned as advantages of geothermal energy EXCEPT ....",
    "options": [
      {
        "id": "A",
        "text": "Continuous power generation unaffected by weather conditions."
      },
      {
        "id": "B",
        "text": "Minimal surface land footprint relative to solar facilities."
      },
      {
        "id": "C",
        "text": "Low initial exploratory capital costs."
      },
      {
        "id": "D",
        "text": "Extremely low direct greenhouse gas emissions."
      },
      {
        "id": "E",
        "text": "Reliable baseload electrical supply."
      }
    ],
    "correct_answer": "C",
    "explanation": {
      "akal_sehat": "Teks menyatakan biaya pengeboran awal justru sangat besar ('substantial exploratory drilling investments'). Jadi klaim 'low initial capital' adalah pernyataan yang salah/dikecualikan.",
      "jebakan": "Pertanyaan bertipe 'EXCEPT' menuntut mencari opsi yang bertentangan dengan fakta teks.",
      "rumus_kunci": "EXCEPT = Cari opsi yang memutarbalikkan fakta kelemahan menjadi kelebihan palsu"
    }
  },
  {
    "subject": "b_inggris",
    "subject_label": "Bahasa Inggris",
    "topic": "Contextual Synonym",
    "stimulus": "The mayor's ambitious public transit initiative was hampered by severe budget deficits and unexpected engineering delays, postponing the subway opening by two years.",
    "question": "The word 'hampered' in the sentence is closest in meaning to ....",
    "options": [
      {
        "id": "A",
        "text": "Accelerated"
      },
      {
        "id": "B",
        "text": "Hindered or obstructed"
      },
      {
        "id": "C",
        "text": "Financed"
      },
      {
        "id": "D",
        "text": "Celebrated"
      },
      {
        "id": "E",
        "text": "Terminated permanently"
      }
    ],
    "correct_answer": "B",
    "explanation": {
      "akal_sehat": "Proyek ditunda 2 tahun gara-gara defisit uang dan kendala teknik. Artinya proyek tersebut terhambat atau terhalang ('hindered/obstructed').",
      "jebakan": "Opsi A (Accelerated = dipercepat) kebalikan total dari konteks penundaan.",
      "rumus_kunci": "Hampered = Terhalang atau Terhambat oleh rintangan"
    }
  },
  {
    "subject": "b_indo",
    "subject_label": "Bahasa Indonesia",
    "topic": "Makna Istilah Kontekstual",
    "stimulus": "Lautan mengalami ancaman pemanasan dan pengasaman akibat emisi karbon yang tidak terkendali. Para ilmuwan menyerukan mobilisasi aksi global antarnegara untuk mereduksi polusi sebelum ambang kritis tercapai pada tahun 2050.",
    "question": "Makna istilah 'mobilisasi' yang paling tepat dalam konteks bacaan di atas adalah ....",
    "options": [
      {
        "id": "A",
        "text": "Pengalihan arus lalu lintas kendaraan bermotor."
      },
      {
        "id": "B",
        "text": "Penggerakan massa atau sumber daya secara serentak untuk tujuan tertentu."
      },
      {
        "id": "C",
        "text": "Perpindahan penduduk dari pesisir menuju perkotaan."
      },
      {
        "id": "D",
        "text": "Penghentian total operasional industri maritim."
      },
      {
        "id": "E",
        "text": "Pembangunan sarana transportasi modern antarpulau."
      }
    ],
    "correct_answer": "B",
    "explanation": {
      "akal_sehat": "Mobilisasi aksi artinya menggerakkan seluruh daya dan kekuatan secara bersama-sama untuk aksi penyelamatan.",
      "jebakan": "Jangan terkecoh dengan kata 'mobil' yang disangka transportasi kendaraan.",
      "rumus_kunci": "Mobilisasi (KBBI) = Tindakan menggerakkan dan mengerahkan sumber daya untuk tujuan bersama"
    }
  },
  {
    "subject": "b_indo",
    "subject_label": "Bahasa Indonesia",
    "topic": "Penalaran Hubungan Sebab-Akibat",
    "stimulus": "Laporan iklim 2025 memprediksi bahwa kenaikan suhu permukaan air laut sebesar 1,5 derajat Celsius akan memicu pemutihan karang (coral bleaching) massal hingga 90 persen di kawasan segitiga terumbu karang dunia, yang pada akhirnya memutus rantai makanan ikan tangkapan nelayan.",
    "question": "Berdasarkan teks tersebut, mengapa nelayan tradisional terancam kehilangan mata pencaharian pada 2050?",
    "options": [
      {
        "id": "A",
        "text": "Harga bahan bakar kapal nelayan naik drastis."
      },
      {
        "id": "B",
        "text": "Pemutihan terumbu karang merusak habitat dan memutus rantai pasokan ikan laut."
      },
      {
        "id": "C",
        "text": "Pemerintah melarang penggunaan jaring tradisional."
      },
      {
        "id": "D",
        "text": "Terjadinya tsunami besar di seluruh garis pantai dunia."
      },
      {
        "id": "E",
        "text": "Wilayah penangkapan ikan dialihkan untuk pariwisata kapal pesiar."
      }
    ],
    "correct_answer": "B",
    "explanation": {
      "akal_sehat": "Alur sebab akibat: Suhu naik -> Karang memutih/rusak -> Rantai makanan ikan putus -> Nelayan kehilangan tangkapan.",
      "jebakan": "Opsi A dan E tidak pernah disebutkan sebagai penyebab fisis di dalam stimulus.",
      "rumus_kunci": "Sebab-Akibat = Telusuri rantai kausalitas langsung yang tertulis dalam bacaan"
    }
  },
  {
    "subject": "b_indo",
    "subject_label": "Bahasa Indonesia",
    "topic": "Evaluasi Fakta vs Opini",
    "stimulus": "Data Kementerian Perdagangan mencatat volume ekspor kopi Indonesia mencapai 380 ribu ton pada tahun 2024. Cita rasa kopi Nusantara konon merupakan yang paling eksotis di dunia sehingga tak ada negara lain yang mampu menandingi kelezatannya.",
    "question": "Kalimat manakah dari bacaan di atas yang tergolong sebagai opini?",
    "options": [
      {
        "id": "A",
        "text": "Volume ekspor kopi Indonesia mencapai 380 ribu ton pada tahun 2024."
      },
      {
        "id": "B",
        "text": "Kementerian Perdagangan mencatat data ekspor kopi Indonesia."
      },
      {
        "id": "C",
        "text": "Cita rasa kopi Nusantara konon paling eksotis dan tak ada yang mampu menandinginya."
      },
      {
        "id": "D",
        "text": "Indonesia mengekspor kopi pada tahun 2024."
      },
      {
        "id": "E",
        "text": "Data perdagangan kopi dicatat secara resmi oleh pemerintah."
      }
    ],
    "correct_answer": "C",
    "explanation": {
      "akal_sehat": "Cita rasa 'paling eksotis' dan 'tak tertandingi' adalah penilaian subjektif (opini), ditambah ada kata 'konon'. Angka 380 ribu ton adalah fakta terukur.",
      "jebakan": "Kata superlatif (paling, terlezat, tercantik) tanpa parameter angka baku selalu merupakan opini.",
      "rumus_kunci": "Fakta = Data angka empiris terverifikasi; Opini = Penilaian rasa/pandangan subjektif"
    }
  },
  {
    "subject": "b_indo",
    "subject_label": "Bahasa Indonesia",
    "topic": "Literasi Infografis (Analisis Pertumbuhan)",
    "stimulus": "Infografis UMKM: Tercatat jumlah pelaku usaha mikro di sektor kuliner meningkat dari 12.000 pada Januari 2025 menjadi 18.000 pada Juli 2025. Namun, tingkat literasi digital pencatatan keuangan hanya naik tipis dari 15% menjadi 18% pada periode yang sama.",
    "question": "Simpulan yang paling akurat dari fenomena infografis di atas adalah ....",
    "options": [
      {
        "id": "A",
        "text": "Pertumbuhan kuantitas pelaku usaha kuliner belum diimbangi percepatan adopsi literasi keuangan digital."
      },
      {
        "id": "B",
        "text": "Seluruh pelaku UMKM kuliner telah mahir menggunakan aplikasi akuntansi modern."
      },
      {
        "id": "C",
        "text": "Sektor kuliner mengalami kebangkrutan massal pada pertengahan tahun 2025."
      },
      {
        "id": "D",
        "text": "Pencatatan keuangan digital tidak dibutuhkan dalam bisnis kuliner mikro."
      },
      {
        "id": "E",
        "text": "Jumlah pelaku usaha mikro kuliner menurun drastis sebesar 50%."
      }
    ],
    "correct_answer": "A",
    "explanation": {
      "akal_sehat": "Jumlah warung melonjak pesat (12 ribu ke 18 ribu = naik 50%), tapi yang melek pembukuan digital naiknya lambat sekali (cuma 15% ke 18%).",
      "jebakan": "Opsi B bertentangan langsung dengan angka 18%.",
      "rumus_kunci": "Kompilasi Data = Bandingkan rasio lonjakan kuantitas fisik vs adaptasi kompetensi"
    }
  },
  {
    "subject": "b_indo",
    "subject_label": "Bahasa Indonesia",
    "topic": "Ketidaksesuaian Informasi (Tipe EXCEPT)",
    "stimulus": "Program restorasi mangrove di pesisir utara Jawa berhasil memulihkan 450 hektare lahan basah. Keberhasilan ini berdampak pada berkurangnya abrasi pantai, kembalinya kepiting bakau sebagai komoditas warga, serta penurunan intrusi air laut ke sumur penduduk dari 60% menjadi 25%.",
    "question": "Pernyataan berikut ini SESUAI dengan teks di atas, KECUALI ....",
    "options": [
      {
        "id": "A",
        "text": "Luas lahan mangrove yang berhasil dipulihkan mencapai 450 hektare."
      },
      {
        "id": "B",
        "text": "Kadar intrusi air asin ke sumur warga mengalami penurunan signifikan."
      },
      {
        "id": "C",
        "text": "Warga kembali mendapatkan kepiting bakau untuk diperdagangkan."
      },
      {
        "id": "D",
        "text": "Abrasi pantai di pesisir utara Jawa semakin parah pascarestorasi."
      },
      {
        "id": "E",
        "text": "Restorasi mangrove membawa dampak positif ekologis dan ekonomi."
      }
    ],
    "correct_answer": "D",
    "explanation": {
      "akal_sehat": "Teks menyatakan abrasi berkurang, bukan semakin parah. Jadi opsi D adalah pernyataan yang tidak sesuai.",
      "jebakan": "Pertanyaan 'KECUALI' mencari pernyataan yang SALAH/BERLAWANAN dengan isi teks.",
      "rumus_kunci": "Cari opsi yang bertolak belakang langsung dengan predikat teks"
    }
  },
  {
    "subject": "b_indo",
    "subject_label": "Bahasa Indonesia",
    "topic": "Rujukan Kata Ganti (Pronoun Reference)",
    "stimulus": "Kecerdasan artifisial generatif kini mampu menyusun draf artikel ilmiah dalam hitungan detik. Meskipun demikian, teknologinya tetap memiliki kelemahan laten berupa halusinasi data, sehingga verifikasi manusia tetap menjadi benteng terakhir keabsahannya.",
    "question": "Kata 'benteng terakhir' dalam kutipan tersebut merujuk pada fungsi manusia sebagai ....",
    "options": [
      {
        "id": "A",
        "text": "Pembuat kode program kecerdasan buatan dari awal."
      },
      {
        "id": "B",
        "text": "Penyaring dan pemeriksa kebenaran fakta sebelum informasi dipublikasikan."
      },
      {
        "id": "C",
        "text": "Penghalang berkembangnya teknologi informasi modern."
      },
      {
        "id": "D",
        "text": "Operator perangkat keras komputer di ruang data."
      },
      {
        "id": "E",
        "text": "Pemasar produk perangkat lunak di pasar global."
      }
    ],
    "correct_answer": "B",
    "explanation": {
      "akal_sehat": "Karena AI bisa halusinasi data palsu, manusia menjadi 'benteng terakhir' untuk memeriksa dan memastikan kebenaran fakta.",
      "jebakan": "Opsi C keliru mengartikan benteng sebagai penghalang kemajuan.",
      "rumus_kunci": "Metafora 'benteng terakhir' = Garda validasi akhir untuk menjaga keabsahan data"
    }
  },
  {
    "subject": "b_indo",
    "subject_label": "Bahasa Indonesia",
    "topic": "Simpulan Paragraf Argumen",
    "stimulus": "Penerapan ekonomi sirkular pada industri tekstil berhasil mendaur ulang 70% sisa kain perca menjadi benang rajut bernilai ekonomis tinggi. Jika seluruh industri garmen nasional mengadopsi sistem serupa, diperkirakan timbulan sampah kain di TPA dapat dipangkas hingga 1,2 juta ton per tahun.",
    "question": "Tujuan utama penulis menyampaikan teks argumentasi di atas adalah ....",
    "options": [
      {
        "id": "A",
        "text": "Mendorong industri garmen nasional untuk menerapkan prinsip ekonomi sirkular daur ulang kain."
      },
      {
        "id": "B",
        "text": "Melarang masyarakat membeli pakaian baru demi menghemat kapas."
      },
      {
        "id": "C",
        "text": "Menjelaskan cara kerja mesin rajut kain perca di pabrik tekstil."
      },
      {
        "id": "D",
        "text": "Menutup tempat pembuangan akhir (TPA) yang menampung limbah garmen."
      },
      {
        "id": "E",
        "text": "Mempromosikan merek benang rajut tertentu di pasaran."
      }
    ],
    "correct_answer": "A",
    "explanation": {
      "akal_sehat": "Penulis menyajikan bukti sukses 70% daur ulang untuk mengajak seluruh industri garmen meniru langkah tersebut demi mengurangi jutaan ton sampah.",
      "jebakan": "Teks argumen bukan cuma menjelaskan (opsi C), tapi memiliki misi persuasi/dorongan kebijakan (opsi A).",
      "rumus_kunci": "Tujuan Penulis = Cari kata kerja dorongan/ajakan yang memayungi argumen"
    }
  },
  {
    "subject": "b_indo",
    "subject_label": "Bahasa Indonesia",
    "topic": "Analisis Bias Penulis",
    "stimulus": "Meskipun kecerdasan buatan terbukti mempermudah diagnosis medis awal, teknologi ini tidak memiliki empati kemanusiaan saat menyampaikan kabar duka. Pengobatan sejati tidak hanya menyembuhkan raga, tetapi juga menenangkan jiwa pasien yang sedang rapuh.",
    "question": "Sikap (attitude) penulis terhadap peran kecerdasan buatan dalam dunia medis adalah ....",
    "options": [
      {
        "id": "A",
        "text": "Menolak mentah-mentah seluruh bentuk digitalisasi di rumah sakit."
      },
      {
        "id": "B",
        "text": "Mengakui keunggulannya namun menekankan bahwa sentuhan humanis dokter tidak dapat digantikan."
      },
      {
        "id": "C",
        "text": "Menganggap kecerdasan buatan lebih unggul daripada dokter dalam segala aspek."
      },
      {
        "id": "D",
        "text": "Bersikap acuh tak acuh terhadap perkembangan teknologi kecerdasan buatan."
      },
      {
        "id": "E",
        "text": "Mendorong penggantian seluruh tenaga medis dengan robot kecerdasan buatan."
      }
    ],
    "correct_answer": "B",
    "explanation": {
      "akal_sehat": "Penulis mengakui AI bagus untuk diagnosis raga, tapi menegaskan bahwa jiwa butuh empati dokter manusia yang tak bisa digantikan.",
      "jebakan": "Penulis tidak menolak teknologi (opsi A), melainkan memberi batasan etis peran manusia.",
      "rumus_kunci": "Sikap Penulis Berimbang = Mengakui manfaat teknis seraya mempertahankan nilai kemanusiaan"
    }
  },
  {
    "subject": "b_indo",
    "subject_label": "Bahasa Indonesia",
    "topic": "Struktur Kalimat Baku PUEBI",
    "stimulus": "Perhatikan kalimat berikut: 'Meskipun harga bahan pokok mengalami kenaikan, namun daya beli masyarakat tetap terjaga stabil.'",
    "question": "Kesalahan struktur sintaksis pada kalimat majemuk di atas adalah ....",
    "options": [
      {
        "id": "A",
        "text": "Penggunaan tanda koma sebelum konjungsi pertentangan antarklausa."
      },
      {
        "id": "B",
        "text": "Pemakaian ganda konjungsi subordinatif 'meskipun' dengan konjungsi 'namun'."
      },
      {
        "id": "C",
        "text": "Penulisan gabungan kata 'daya beli' yang seharusnya digabung tanpa spasi."
      },
      {
        "id": "D",
        "text": "Pemilihan kata kerja 'mengalami' yang tidak lazim dalam konteks ekonomi."
      },
      {
        "id": "E",
        "text": "Ketiadaan klausa keterangan tempat yang memperjelas kedudukan subjek."
      }
    ],
    "correct_answer": "B",
    "explanation": {
      "akal_sehat": "Jika sudah pakai 'Meskipun' di depan, jangan pakai 'namun' lagi di tengah. Pilih salah satu agar kalimat tidak rancu dan punya induk kalimat yang sah.",
      "jebakan": "Banyak yang mengira 'Meskipun..., namun...' itu wajar, padahal itu pelanggaran tata bahasa baku!",
      "rumus_kunci": "PUEBI: Konjungsi subordinatif tidak boleh dipasangkan bersamaan dengan konjungsi pertentangan intrakalimat"
    }
  },
  {
    "subject": "b_indo",
    "subject_label": "Bahasa Indonesia",
    "topic": "Prediksi Logis Berdasarkan Tren Data",
    "stimulus": "Penggunaan kantong plastik sekali pakai di minimarket menurun 80% sejak diberlakukannya tarif berbayar. Sebaliknya, penjualan tas belanja lipat berbahan kain ramah lingkungan melonjak hingga 250% dalam enam bulan pertama.",
    "question": "Prediksi logis yang paling mungkin terjadi jika kebijakan ini diperluas ke pasar tradisional adalah ....",
    "options": [
      {
        "id": "A",
        "text": "Pedagang pasar tradisional akan kehilangan seluruh pembeli secara permanen."
      },
      {
        "id": "B",
        "text": "Volume limbah kantong plastik di hilir kota akan mengalami tren penurunan yang signifikan."
      },
      {
        "id": "C",
        "text": "Harga sayur-mayur di pasar tradisional akan melipatgandakan nilai jualnya."
      },
      {
        "id": "D",
        "text": "Pabrik pembuat tas kain ramah lingkungan akan mengalami kebangkrutan."
      },
      {
        "id": "E",
        "text": "Masyarakat akan beralih belanja hanya di toko online."
      }
    ],
    "correct_answer": "B",
    "explanation": {
      "akal_sehat": "Jika minimarket saja bisa pangkas plastik 80%, maka memperluas aturan ke pasar tradisional akan menurunkan tumpukan sampah plastik kota secara masif.",
      "jebakan": "Opsi A terlalu hiperbolis dan tidak realistis bagi kebutuhan harian warga.",
      "rumus_kunci": "Prediksi Logis = Ekstrapolasi tren data positif yang sudah terbukti pada sampel awal"
    }
  },
  {
    "subject": "b_inggris",
    "subject_label": "Bahasa Inggris",
    "topic": "Literasi Membaca (Main Idea of Infographic)",
    "stimulus": "Infographic: 'Effective Study Techniques'. Research shows that the Pomodoro Technique (25 minutes of intense focus followed by a 5-minute break) enhances brain dopamine levels and prevents mental fatigue. Combined with Spaced Repetition, students can retain up to 80% of complex factual information even after 30 days.",
    "question": "What is the primary message conveyed by the text?",
    "options": [
      {
        "id": "A",
        "text": "Students should study non-stop for 10 hours without taking any breaks."
      },
      {
        "id": "B",
        "text": "Structured focus intervals paired with spaced repetition optimize memory retention and prevent burnout."
      },
      {
        "id": "C",
        "text": "Dopamine is a harmful brain chemical that causes academic stress."
      },
      {
        "id": "D",
        "text": "Memorizing textbooks in a single night is the best strategy for final exams."
      },
      {
        "id": "E",
        "text": "Breaks longer than 25 minutes are necessary for every 5 minutes of reading."
      }
    ],
    "correct_answer": "B",
    "explanation": {
      "akal_sehat": "The text explains how Pomodoro (focus + short breaks) and Spaced Repetition work together to boost retention and keep the mind fresh.",
      "jebakan": "Option A is the opposite of the Pomodoro principle.",
      "rumus_kunci": "Main Idea = Look for the synthesis of the technique and its cognitive benefit"
    }
  },
  {
    "subject": "b_inggris",
    "subject_label": "Bahasa Inggris",
    "topic": "Detail Information (Specific Fact)",
    "stimulus": "According to cognitive psychologists, taking short 5-minute pauses between study sessions helps the hippocampus consolidate newly acquired facts into long-term memory storage, keeping the brain agile and ready for subsequent learning blocks.",
    "question": "Based on the text, how can students keep their mind fresh and focused during prolonged study?",
    "options": [
      {
        "id": "A",
        "text": "By consuming large amounts of sugary energy drinks."
      },
      {
        "id": "B",
        "text": "By incorporating regular short breaks to allow memory consolidation."
      },
      {
        "id": "C",
        "text": "By avoiding sleep the night before the examination."
      },
      {
        "id": "D",
        "text": "By reading three textbooks simultaneously at high speed."
      },
      {
        "id": "E",
        "text": "By skipping revision sessions altogether."
      }
    ],
    "correct_answer": "B",
    "explanation": {
      "akal_sehat": "Short pauses allow the hippocampus to consolidate memory, refreshing the brain.",
      "jebakan": "Option A introduces external assumptions not supported by the text.",
      "rumus_kunci": "Detail Question = Match the direct cause stated in the passage"
    }
  },
  {
    "subject": "b_inggris",
    "subject_label": "Bahasa Inggris",
    "topic": "Vocabulary in Context",
    "stimulus": "The transition toward renewable energy requires significant capital expenditure. However, the long-term environmental dividends will undoubtedly outweigh the initial fiscal strain.",
    "question": "The word 'dividends' in the sentence is closest in meaning to ....",
    "options": [
      {
        "id": "A",
        "text": "debts"
      },
      {
        "id": "B",
        "text": "benefits"
      },
      {
        "id": "C",
        "text": "penalties"
      },
      {
        "id": "D",
        "text": "barriers"
      },
      {
        "id": "E",
        "text": "taxes"
      }
    ],
    "correct_answer": "B",
    "explanation": {
      "akal_sehat": "In this context, 'environmental dividends' means environmental advantages or long-term positive benefits.",
      "jebakan": "Don't get trapped by the strict accounting definition (stock share payouts); in general prose, 'dividends' means rewards/benefits.",
      "rumus_kunci": "Dividends in figurative context = Rewards, returns, or positive benefits"
    }
  },
  {
    "subject": "b_inggris",
    "subject_label": "Bahasa Inggris",
    "topic": "Author's Purpose",
    "stimulus": "Urban vertical farming utilizes 95% less water and zero synthetic pesticides compared to conventional agriculture. While the upfront infrastructure costs remain steep, integrating vertical farms into metropolitan centers could solve food desert crises and eliminate thousands of tons of shipping emissions.",
    "question": "What is the author's primary purpose in writing this passage?",
    "options": [
      {
        "id": "A",
        "text": "To highlight the sustainable potential of vertical farming despite its initial economic challenge."
      },
      {
        "id": "B",
        "text": "To criticize traditional farmers for wasting water resources."
      },
      {
        "id": "C",
        "text": "To demand an immediate shutdown of all conventional farming in rural areas."
      },
      {
        "id": "D",
        "text": "To advertise a specific brand of metropolitan hydroponic equipment."
      },
      {
        "id": "E",
        "text": "To prove that city food crisis cannot be resolved."
      }
    ],
    "correct_answer": "A",
    "explanation": {
      "akal_sehat": "The author presents the massive eco-benefits (95% less water, solves food deserts) while acknowledging high startup costs, aiming to show its promising potential.",
      "jebakan": "Option B and C are overly hostile and not reflective of the author's constructive tone.",
      "rumus_kunci": "Author's Purpose = Objective summary of the main argument without emotional bias"
    }
  },
  {
    "subject": "b_inggris",
    "subject_label": "Bahasa Inggris",
    "topic": "Reference of Pronoun",
    "stimulus": "Autonomous ocean-cleaning barriers passively harness natural oceanic currents to intercept floating plastic debris before it degrades into harmful microplastics. Their innovative curved design allows marine organisms to swim underneath safely without getting trapped.",
    "question": "The possessive adjective 'Their' in the second sentence refers to ....",
    "options": [
      {
        "id": "A",
        "text": "marine organisms"
      },
      {
        "id": "B",
        "text": "ocean-cleaning barriers"
      },
      {
        "id": "C",
        "text": "floating microplastics"
      },
      {
        "id": "D",
        "text": "oceanic surface currents"
      },
      {
        "id": "E",
        "text": "coastal fishing vessels"
      }
    ],
    "correct_answer": "B",
    "explanation": {
      "akal_sehat": "What has the curved design that lets fish swim underneath? The ocean-cleaning barriers.",
      "jebakan": "Look at the subject of the preceding sentence: 'Autonomous ocean-cleaning barriers'.",
      "rumus_kunci": "Pronoun Reference = Trace back to the primary plural subject of the previous clause"
    }
  },
  {
    "subject": "b_inggris",
    "subject_label": "Bahasa Inggris",
    "topic": "Logical Inference",
    "stimulus": "A recent study revealed that companies requiring employees to be available via email after 7 PM experienced a 35% higher turnover rate and significantly lower employee engagement during regular working hours compared to companies with strict 'right-to-disconnect' policies.",
    "question": "It can be inferred from the passage that ....",
    "options": [
      {
        "id": "A",
        "text": "Enforcing digital availability after hours harms worker retention and engagement."
      },
      {
        "id": "B",
        "text": "Mandatory evening email communication directly maximizes long-term company earnings."
      },
      {
        "id": "C",
        "text": "Corporate employees consistently show superior productivity during late evening hours."
      },
      {
        "id": "D",
        "text": "Workplace email platforms should be completely eliminated across modern industries."
      },
      {
        "id": "E",
        "text": "Increasing staff turnover rates serves as a dependable sign of corporate efficiency."
      }
    ],
    "correct_answer": "A",
    "explanation": {
      "akal_sehat": "Higher turnover (people quitting) + lower engagement = bad for retention and work performance.",
      "jebakan": "Options B, C, and E directly contradict the research findings.",
      "rumus_kunci": "Inference = A logical deduction directly derived from the research correlation"
    }
  },
  {
    "subject": "b_inggris",
    "subject_label": "Bahasa Inggris",
    "topic": "Sentence Sequence & Organization",
    "stimulus": "Consider the following steps: (1) The collected plastic is sorted and washed. (2) Waste is collected from river barriers. (3) Clean flakes are melted and extruded into high-grade polyester yarn. (4) The plastic is shredded into tiny flakes.",
    "question": "Which of the following represents the most logical chronological sequence of the recycling process?",
    "options": [
      {
        "id": "A",
        "text": "(2) - (1) - (4) - (3)"
      },
      {
        "id": "B",
        "text": "(4) - (2) - (1) - (3)"
      },
      {
        "id": "C",
        "text": "(1) - (3) - (2) - (4)"
      },
      {
        "id": "D",
        "text": "(2) - (4) - (3) - (1)"
      },
      {
        "id": "E",
        "text": "(3) - (1) - (2) - (4)"
      }
    ],
    "correct_answer": "A",
    "explanation": {
      "akal_sehat": "First collect from river (2) -> sort and wash (1) -> shred into tiny flakes (4) -> melt and extrude into yarn (3). Order: 2-1-4-3.",
      "jebakan": "You cannot shred plastic before collecting and washing it!",
      "rumus_kunci": "Process Flow: Collection -> Cleaning -> Shredding -> Reprocessing"
    }
  },
  {
    "subject": "b_inggris",
    "subject_label": "Bahasa Inggris",
    "topic": "Tone and Attitude",
    "stimulus": "While solar panels have become remarkably cost-effective over the past decade, disposal protocols for aging photovoltaic cells remain shockingly primitive in many regions. Unless scalable recycling infrastructures are established urgently, we risk swapping a carbon crisis for an electronic wasteland.",
    "question": "What is the author's tone regarding the current state of solar panel disposal?",
    "options": [
      {
        "id": "A",
        "text": "Indifferent and unconcerned"
      },
      {
        "id": "B",
        "text": "Urgent and cautionary"
      },
      {
        "id": "C",
        "text": "Overly optimistic and joyous"
      },
      {
        "id": "D",
        "text": "Dismissive and sarcastic"
      },
      {
        "id": "E",
        "text": "Aggressive and spiteful"
      }
    ],
    "correct_answer": "B",
    "explanation": {
      "akal_sehat": "The author uses words like 'shockingly primitive', 'urgently', and 'risk swapping... for an electronic wasteland'. This is an urgent, cautionary warning.",
      "jebakan": "The author is not anti-solar, but warns against ignoring the waste lifecycle.",
      "rumus_kunci": "Tone = Look at emotive adjectives like 'primitive', 'urgently', 'risk'"
    }
  },
  {
    "subject": "b_inggris",
    "subject_label": "Bahasa Inggris",
    "topic": "Identifying Paraphrase",
    "stimulus": "'Artificial intelligence cannot replicate human empathy, but it can relieve healthcare workers of repetitive administrative burdens.'",
    "question": "Which statement best paraphrases the quoted sentence without altering its core meaning?",
    "options": [
      {
        "id": "A",
        "text": "Although AI lacks emotional compassion, it can effectively assist medical staff by automating routine paperwork."
      },
      {
        "id": "B",
        "text": "Medical workers are completely replaced by empathetic artificial intelligence robots."
      },
      {
        "id": "C",
        "text": "AI is capable of providing human-like empathy while managing hospital paperwork."
      },
      {
        "id": "D",
        "text": "Doctors prefer doing administrative tasks manually rather than relying on computers."
      },
      {
        "id": "E",
        "text": "Neither human doctors nor AI can manage administrative responsibilities."
      }
    ],
    "correct_answer": "A",
    "explanation": {
      "akal_sehat": "'cannot replicate empathy' = 'lacks emotional compassion'; 'relieve repetitive administrative burdens' = 'automating routine paperwork'.",
      "jebakan": "Option C wrongly claims AI has empathy, which contradicts the text.",
      "rumus_kunci": "Paraphrasing = Same meaning expressed through synonymous academic vocabulary"
    }
  },
  {
    "subject": "b_inggris",
    "subject_label": "Bahasa Inggris",
    "topic": "Summary & Synthesis",
    "stimulus": "Urban reforestation initiatives not only reduce surface temperatures through shade and evapotranspiration, but also absorb airborne particulate matter and dampen city noise pollution. Consequently, neighborhoods with dense tree canopies report lower rates of respiratory illness and reduced anxiety levels.",
    "question": "Which of the following best summarizes the overall health and environmental benefits discussed?",
    "options": [
      {
        "id": "A",
        "text": "Urban tree planting initiatives exclusively focus on reducing traffic collision rates."
      },
      {
        "id": "B",
        "text": "Urban tree canopies provide environmental buffers that improve residents' wellbeing."
      },
      {
        "id": "C",
        "text": "Metropolitan noise pollution can only be prevented by constructing solid concrete walls."
      },
      {
        "id": "D",
        "text": "City trees consume substantial groundwater reserves without offering cooling benefits."
      },
      {
        "id": "E",
        "text": "Airborne pollution in metropolitan areas is essentially unaffected by tree coverage."
      }
    ],
    "correct_answer": "B",
    "explanation": {
      "akal_sehat": "Trees cool cities, clean air, cut noise (environmental) -> lower respiratory illness and anxiety (wellbeing). Option B captures the full scope.",
      "jebakan": "Option A uses the word 'exclusively' which is false.",
      "rumus_kunci": "Synthesis Summary = Combines environmental causes with public health outcomes"
    }
  },
  {
    "subject": "fisika",
    "subject_label": "Fisika",
    "topic": "Gerak Melingkar (Hubungan Dua Roda Dihubungkan Rantai)",
    "stimulus": "Dua roda gigi A dan B dihubungkan oleh sebuah rantai sepeda tanpa slip. Roda gigi kecil A memiliki jari-jari 15 cm dan roda gigi besar B memiliki jari-jari 45 cm. Roda A berputar dengan kecepatan sudut 12 rad/s.",
    "question": "Berapakah kecepatan sudut putaran roda gigi besar B?",
    "options": [
      {
        "id": "A",
        "text": "12 rad/s"
      },
      {
        "id": "B",
        "text": "2 rad/s"
      },
      {
        "id": "C",
        "text": "24 rad/s"
      },
      {
        "id": "D",
        "text": "8 rad/s"
      },
      {
        "id": "E",
        "text": "4 rad/s"
      }
    ],
    "correct_answer": "E",
    "explanation": {
      "akal_sehat": "Roda yang terhubung rantai memiliki kelajuan linier tepi yang sama persis (vA = vB). Karena v = ω x r, maka ωA x rA = ωB x rB -> 12 x 15 = ωB x 45 -> 180 = 45 x ωB. Maka ωB = 180 / 45 = 4 rad/s.",
      "jebakan": "Roda yang lebih besar selalu berputar lebih lambat (kecepatan sudut lebih kecil).",
      "rumus_kunci": "ωA · rA = ωB · rB (Dua Roda Dihubungkan Rantai / Bersinggungan)"
    }
  },
  {
    "subject": "fisika",
    "subject_label": "Fisika",
    "topic": "Kinematika (Waktu Berpapasan)",
    "stimulus": "Mobil A melaju dengan kecepatan konstan 15 m/s dari kota P menuju kota Q. Pada saat bersamaan dari arah berlawanan, mobil B melaju dari kota Q menuju kota P dengan kecepatan konstan 10 m/s. Jarak kota P dan Q adalah 100 meter.",
    "question": "Setelah berapa detik kedua mobil tersebut akan berpapasan di jalan?",
    "options": [
      {
        "id": "A",
        "text": "2 detik"
      },
      {
        "id": "B",
        "text": "8 detik"
      },
      {
        "id": "C",
        "text": "4 detik"
      },
      {
        "id": "D",
        "text": "6 detik"
      },
      {
        "id": "E",
        "text": "7 detik"
      }
    ],
    "correct_answer": "C",
    "explanation": {
      "akal_sehat": "Kedua mobil saling mendekat, artinya tiap detik jarak mereka terpangkas sebesar (15 + 10 = 25 meter/detik). Waktu papasan tinggal bagi jarak awal dengan kecepatan gabungan: 100 / 25 = 4 detik.",
      "jebakan": "Karena bergerak berlawanan arah saling mendekat, kecepatannya DIJUMLAHKAN, bukan dikurangkan!",
      "rumus_kunci": "Waktu Berpapasan = Jarak Total / (v₁ + v₂)"
    }
  },
  {
    "subject": "fisika",
    "subject_label": "Fisika",
    "topic": "Momentum & Impuls",
    "stimulus": "Sebuah bola massanya 4 kg diam di lapangan, lalu ditendang dengan gaya rata-rata 50 Newton. Kaki pemain menyentuh bola selama 0.1 detik.",
    "question": "Berapakah besar impuls yang bekerja pada bola tersebut?",
    "options": [
      {
        "id": "A",
        "text": "20 N·s"
      },
      {
        "id": "B",
        "text": "50 N·s"
      },
      {
        "id": "C",
        "text": "1 N·s"
      },
      {
        "id": "D",
        "text": "5 N·s"
      },
      {
        "id": "E",
        "text": "10 N·s"
      }
    ],
    "correct_answer": "D",
    "explanation": {
      "akal_sehat": "Impuls adalah perkalian gaya dengan durasi sentuhan: 50 N x 0.1 s = 5 N·s.",
      "jebakan": "Massa bola di soal ini hanyalah pengecoh.",
      "rumus_kunci": "Impuls = F x Δt"
    }
  },
  {
    "subject": "fisika",
    "subject_label": "Fisika",
    "topic": "Hukum Kekekalan Energi Mekanik",
    "stimulus": "Sebuah kelapa jatuh bebas tanpa kecepatan awal dari pohon setinggi 20 meter di atas tanah (abaikan gesekan udara, g = 10 m/s²).",
    "question": "Berapakah kecepatan kelapa tersebut tepat saat menyentuh tanah?",
    "options": [
      {
        "id": "A",
        "text": "20 m/s"
      },
      {
        "id": "B",
        "text": "16 m/s"
      },
      {
        "id": "C",
        "text": "28 m/s"
      },
      {
        "id": "D",
        "text": "40 m/s"
      },
      {
        "id": "E",
        "text": "25 m/s"
      }
    ],
    "correct_answer": "A",
    "explanation": {
      "akal_sehat": "Energi potensial di atas berubah total menjadi energi gerak di tanah. Rumus kilat: v = √(2 x g x h) = √(2 x 10 x 20) = 20 m/s.",
      "jebakan": "Kecepatan jatuh bebas tidak bergantung pada berat atau massa benda.",
      "rumus_kunci": "v = √(2gh)"
    }
  },
  {
    "subject": "fisika",
    "subject_label": "Fisika",
    "topic": "Gravitasi Newton",
    "stimulus": "Percepatan gravitasi di permukaan bumi bernilai 10 m/s². Sebuah satelit mengorbit pada ketinggian tepat h = 3R di atas permukaan (R = jari-jari bumi).",
    "question": "Berapakah besar percepatan gravitasi bumi yang dirasakan oleh satelit tersebut?",
    "options": [
      {
        "id": "A",
        "text": "0.625 m/s²"
      },
      {
        "id": "B",
        "text": "0.4 m/s²"
      },
      {
        "id": "C",
        "text": "2.5 m/s²"
      },
      {
        "id": "D",
        "text": "5.0 m/s²"
      },
      {
        "id": "E",
        "text": "10.0 m/s²"
      }
    ],
    "correct_answer": "A",
    "explanation": {
      "akal_sehat": "Jarak dari pusat bumi = R + 3R = 4R. Gravitasi berbanding terbalik kuadrat jarak: g' = 10 / (4)² = 10 / 16 = 0.625 m/s².",
      "jebakan": "Opsi 5,0 m/s² itu jebakan kalau kamu lupa menguadratkan jaraknya!",
      "rumus_kunci": "g' = g₀ × R² / (R + h)²"
    }
  },
  {
    "subject": "fisika",
    "subject_label": "Fisika",
    "topic": "Kinematika (Waktu Berpapasan)",
    "stimulus": "Mobil A melaju dengan kecepatan konstan 20 m/s dari kota P menuju kota Q. Pada saat bersamaan dari arah berlawanan, mobil B melaju dari kota Q menuju kota P dengan kecepatan konstan 15 m/s. Jarak kota P dan Q adalah 140 meter.",
    "question": "Setelah berapa detik kedua mobil tersebut akan berpapasan di jalan?",
    "options": [
      {
        "id": "A",
        "text": "9 detik"
      },
      {
        "id": "B",
        "text": "8 detik"
      },
      {
        "id": "C",
        "text": "4 detik"
      },
      {
        "id": "D",
        "text": "2 detik"
      },
      {
        "id": "E",
        "text": "7 detik"
      }
    ],
    "correct_answer": "C",
    "explanation": {
      "akal_sehat": "Kedua mobil saling mendekat, artinya tiap detik jarak mereka terpangkas sebesar (20 + 15 = 35 meter/detik). Waktu papasan tinggal bagi jarak awal dengan kecepatan gabungan: 140 / 35 = 4 detik.",
      "jebakan": "Karena bergerak berlawanan arah saling mendekat, kecepatannya DIJUMLAHKAN, bukan dikurangkan!",
      "rumus_kunci": "Waktu Berpapasan = Jarak Total / (v₁ + v₂)"
    }
  },
  {
    "subject": "fisika",
    "subject_label": "Fisika",
    "topic": "Momentum & Tumbukan (Tumbukan Tidak Lenting Sama Sekali)",
    "stimulus": "Mobil sedan A bermassa 1200 kg bergerak lurus dengan kelajuan 20 m/s dan menabrak mobil boks B bermassa 800 kg yang sedang mogok diam di bahu jalan. Setelah tabrakan, kedua kendaraan saling terkait dan terseret bersama-sama.",
    "question": "Berapakah kelajuan bersama kedua mobil tersebut tepat setelah tabrakan?",
    "options": [
      {
        "id": "A",
        "text": "9 m/s"
      },
      {
        "id": "B",
        "text": "20 m/s"
      },
      {
        "id": "C",
        "text": "17 m/s"
      },
      {
        "id": "D",
        "text": "12 m/s"
      },
      {
        "id": "E",
        "text": "10 m/s"
      }
    ],
    "correct_answer": "D",
    "explanation": {
      "akal_sehat": "Hukum Kekekalan Momentum: Momentum awal mobil A (1200 kg x 20 m/s = 24000 kg·m/s) dibagi rata ke massa total kedua mobil (2000 kg). Kecepatan akhir bersama v' = 24000 / 2000 = 12 m/s.",
      "jebakan": "Karena kedua mobil menempel (tidak lenting sama sekali), kelajuan akhirnya selalu lebih lambat daripada kelajuan mobil awal.",
      "rumus_kunci": "v' = (m₁·v₁ + m₂·v₂) / (m₁ + m₂)"
    }
  },
  {
    "subject": "fisika",
    "subject_label": "Fisika",
    "topic": "Kinematika GLBB (Jarak Pengereman)",
    "stimulus": "Sebuah motor melaju dengan kecepatan awal 30 m/s. Pengendara melihat lampu merah dan mengerem dengan perlambatan konstan 5 m/s² hingga motor berhenti.",
    "question": "Berapakah jarak tempuh motor tersebut dari awal pengereman hingga berhenti total?",
    "options": [
      {
        "id": "A",
        "text": "105 meter"
      },
      {
        "id": "B",
        "text": "80 meter"
      },
      {
        "id": "C",
        "text": "90 meter"
      },
      {
        "id": "D",
        "text": "150 meter"
      },
      {
        "id": "E",
        "text": "180 meter"
      }
    ],
    "correct_answer": "C",
    "explanation": {
      "akal_sehat": "Rumus kilat ngerem sampai berhenti (v_t = 0): Jarak = (Kecepatan Awal)² / (2 x Perlambatan) = (30²) / (2 x 5) = 900 / 10 = 90 meter.",
      "jebakan": "Jangan kalikan kecepatan dengan perlambatan!",
      "rumus_kunci": "Jarak Berhenti = v₀² / (2a)"
    }
  },
  {
    "subject": "fisika",
    "subject_label": "Fisika",
    "topic": "Momentum & Impuls",
    "stimulus": "Sebuah bola massanya 5 kg diam di lapangan, lalu ditendang dengan gaya rata-rata 100 Newton. Kaki pemain menyentuh bola selama 0.2 detik.",
    "question": "Berapakah besar impuls yang bekerja pada bola tersebut?",
    "options": [
      {
        "id": "A",
        "text": "35 N·s"
      },
      {
        "id": "B",
        "text": "20 N·s"
      },
      {
        "id": "C",
        "text": "100 N·s"
      },
      {
        "id": "D",
        "text": "40 N·s"
      },
      {
        "id": "E",
        "text": "12 N·s"
      }
    ],
    "correct_answer": "B",
    "explanation": {
      "akal_sehat": "Impuls adalah perkalian gaya dengan durasi sentuhan: 100 N x 0.2 s = 20 N·s.",
      "jebakan": "Massa bola di soal ini hanyalah pengecoh.",
      "rumus_kunci": "Impuls = F x Δt"
    }
  },
  {
    "subject": "fisika",
    "subject_label": "Fisika",
    "topic": "Impuls & Momentum (Gaya Kontak Rata-rata)",
    "stimulus": "Seorang atlet karate menghantam tumpukan bata beton dengan telapak tangan bermassa efektif 1 kg. Kecepatan telapak tangan sesaat sebelum membentur bata adalah 10 m/s dan berhenti total setelah bata pecah dalam waktu kontak 10 milidetik.",
    "question": "Berapakah besar gaya rata-rata yang dikerahkan tangan pada tumpukan bata selama benturan?",
    "options": [
      {
        "id": "A",
        "text": "3.000 N"
      },
      {
        "id": "B",
        "text": "1.000 N"
      },
      {
        "id": "C",
        "text": "500 N"
      },
      {
        "id": "D",
        "text": "10 N"
      },
      {
        "id": "E",
        "text": "2.000 N"
      }
    ],
    "correct_answer": "B",
    "explanation": {
      "akal_sehat": "Perubahan momentum tangan Δp = m x v = 1 kg x 10 m/s = 10 kg·m/s. Waktu benturan Δt = 10 ms = 0.01 detik. Gaya impuls F = Δp / Δt = 10 / 0.01 = 1.000 N!",
      "jebakan": "Waktu kontak dalam milidetik (ms) WAJIB diubah ke detik (dibagi 1.000) sebelum menghitung gaya Newton.",
      "rumus_kunci": "F = Δp / Δt = (m·v) / Δt"
    }
  },
  {
    "subject": "fisika",
    "subject_label": "Fisika",
    "topic": "Impuls & Momentum (Gaya Kontak Rata-rata)",
    "stimulus": "Seorang atlet karate menghantam tumpukan bata beton dengan telapak tangan bermassa efektif 2 kg. Kecepatan telapak tangan sesaat sebelum membentur bata adalah 20 m/s dan berhenti total setelah bata pecah dalam waktu kontak 10 milidetik.",
    "question": "Berapakah besar gaya rata-rata yang dikerahkan tangan pada tumpukan bata selama benturan?",
    "options": [
      {
        "id": "A",
        "text": "40 N"
      },
      {
        "id": "B",
        "text": "12.000 N"
      },
      {
        "id": "C",
        "text": "4.000 N"
      },
      {
        "id": "D",
        "text": "8.000 N"
      },
      {
        "id": "E",
        "text": "2.000 N"
      }
    ],
    "correct_answer": "C",
    "explanation": {
      "akal_sehat": "Perubahan momentum tangan Δp = m x v = 2 kg x 20 m/s = 40 kg·m/s. Waktu benturan Δt = 10 ms = 0.01 detik. Gaya impuls F = Δp / Δt = 40 / 0.01 = 4.000 N!",
      "jebakan": "Waktu kontak dalam milidetik (ms) WAJIB diubah ke detik (dibagi 1.000) sebelum menghitung gaya Newton.",
      "rumus_kunci": "F = Δp / Δt = (m·v) / Δt"
    }
  },
  {
    "subject": "fisika",
    "subject_label": "Fisika",
    "topic": "Kinematika Vektor (Waktu Tempuh Menyeberangi Sungai)",
    "stimulus": "Sebuah sungai memiliki lebar 90 meter dengan kecepatan arus 8 m/s. Sebuah kapal motor menyeberang tegak lurus arus dengan kelajuan 6 m/s seperti pada diagram berikut.",
    "stimulus_svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 200\" class=\"w-full max-w-sm mx-auto\" style=\"max-width: 100%; height: auto; background: transparent;\">\n  <defs>\n    <marker id=\"arr-vp\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1.5 L 8 5 L 0 8.5 z\" fill=\"#0284c7\"/>\n    </marker>\n    <marker id=\"arr-va\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1.5 L 8 5 L 0 8.5 z\" fill=\"#1e293b\"/>\n    </marker>\n    <marker id=\"arr-vt\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1.5 L 8 5 L 0 8.5 z\" fill=\"#b84f2d\"/>\n    </marker>\n  </defs>\n  <!-- River Banks -->\n  <line x1=\"20\" y1=\"45\" x2=\"300\" y2=\"45\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n  <line x1=\"20\" y1=\"165\" x2=\"300\" y2=\"165\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n  <text x=\"25\" y=\"38\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"600\" fill=\"#64748b\">Tepi Seberang</text>\n  <text x=\"25\" y=\"180\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"600\" fill=\"#64748b\">Tepi Awal</text>\n  <!-- Boat Vector (vertical up) -->\n  <line x1=\"80\" y1=\"165\" x2=\"80\" y2=\"70\" stroke=\"#0284c7\" stroke-width=\"2.5\" marker-end=\"url(#arr-vp)\"/>\n  <text x=\"70\" y=\"115\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0284c7\" text-anchor=\"end\">v_perahu = 6 m/s</text>\n  <!-- Current Vector (horizontal right) -->\n  <line x1=\"80\" y1=\"70\" x2=\"190\" y2=\"70\" stroke=\"#1e293b\" stroke-width=\"2\" marker-end=\"url(#arr-va)\"/>\n  <text x=\"135\" y=\"60\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">v_arus = 8 m/s</text>\n  <!-- Resultant Vector (diagonal) -->\n  <line x1=\"80\" y1=\"165\" x2=\"190\" y2=\"70\" stroke=\"#b84f2d\" stroke-width=\"2.5\" stroke-dasharray=\"4,2\" marker-end=\"url(#arr-vt)\"/>\n  <text x=\"145\" y=\"130\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#b84f2d\">v_total = ?</text>\n  <!-- Right Angle Symbol -->\n  <rect x=\"80\" y=\"70\" width=\"10\" height=\"10\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"1.2\"/>\n</svg>",
    "question": "Berapa lama waktu yang dibutuhkan kapal untuk mencapai tepi seberang sungai?",
    "options": [
      {
        "id": "A",
        "text": "30 detik"
      },
      {
        "id": "B",
        "text": "15 detik"
      },
      {
        "id": "C",
        "text": "11 detik"
      },
      {
        "id": "D",
        "text": "25 detik"
      },
      {
        "id": "E",
        "text": "20 detik"
      }
    ],
    "correct_answer": "B",
    "explanation": {
      "akal_sehat": "Waktu untuk mencapai tepi seberang HANYA dipengaruhi oleh kelajuan perahu pada sumbu tegak lurus (v_perahu = 6 m/s): t = d / v_perahu = 90 / 6 = 15 detik.",
      "jebakan": "Jangan membagi lebar sungai dengan resultan kecepatan; resultan kecepatan hanya untuk panjang lintasan diagonal!",
      "rumus_kunci": "t_seberang = Lebar / v_tegak_lurus"
    }
  },
  {
    "subject": "fisika",
    "subject_label": "Fisika",
    "topic": "Momentum & Impuls",
    "stimulus": "Sebuah bola massanya 5 kg diam di lapangan, lalu ditendang dengan gaya rata-rata 50 Newton. Kaki pemain menyentuh bola selama 0.2 detik.",
    "question": "Berapakah besar impuls yang bekerja pada bola tersebut?",
    "options": [
      {
        "id": "A",
        "text": "2 N·s"
      },
      {
        "id": "B",
        "text": "50 N·s"
      },
      {
        "id": "C",
        "text": "10 N·s"
      },
      {
        "id": "D",
        "text": "25 N·s"
      },
      {
        "id": "E",
        "text": "20 N·s"
      }
    ],
    "correct_answer": "C",
    "explanation": {
      "akal_sehat": "Impuls adalah perkalian gaya dengan durasi sentuhan: 50 N x 0.2 s = 10 N·s.",
      "jebakan": "Massa bola di soal ini hanyalah pengecoh.",
      "rumus_kunci": "Impuls = F x Δt"
    }
  },
  {
    "subject": "fisika",
    "subject_label": "Fisika",
    "topic": "Listrik Dinamis (Rangkaian Resistor Paralel)",
    "stimulus": "Perhatikan rangkaian paralel dua buah hambatan R₁ = 6 Ω dan R₂ = 3 Ω yang dihubungkan ke sumber tegangan 12 Volt berikut.",
    "stimulus_svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 340 200\" class=\"w-full max-w-sm mx-auto\" style=\"max-width: 100%; height: auto; background: transparent;\">\n  <rect x=\"50\" y=\"40\" width=\"240\" height=\"120\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n  <rect x=\"42\" y=\"80\" width=\"16\" height=\"40\" fill=\"#ffffff\" stroke=\"none\"/>\n  <line x1=\"40\" y1=\"92\" x2=\"60\" y2=\"92\" stroke=\"#1e293b\" stroke-width=\"2.5\"/>\n  <line x1=\"45\" y1=\"104\" x2=\"55\" y2=\"104\" stroke=\"#1e293b\" stroke-width=\"3\"/>\n  <text x=\"32\" y=\"103\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#0f172a\" text-anchor=\"end\">12 V</text>\n  <rect x=\"135\" y=\"30\" width=\"100\" height=\"80\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n  <rect x=\"160\" y=\"22\" width=\"48\" height=\"16\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>\n  <text x=\"184\" y=\"15\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#b84f2d\" text-anchor=\"middle\">R₁ = 6 Ω</text>\n  <rect x=\"160\" y=\"102\" width=\"48\" height=\"16\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"1.8\"/>\n  <text x=\"184\" y=\"132\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0284c7\" text-anchor=\"middle\">R₂ = 3 Ω</text>\n</svg>",
    "question": "Berapakah kuat arus total yang keluar dari sumber tegangan?",
    "options": [
      {
        "id": "A",
        "text": "12 Ampere"
      },
      {
        "id": "B",
        "text": "10 Ampere"
      },
      {
        "id": "C",
        "text": "1 Ampere"
      },
      {
        "id": "D",
        "text": "3 Ampere"
      },
      {
        "id": "E",
        "text": "6 Ampere"
      }
    ],
    "correct_answer": "E",
    "explanation": {
      "akal_sehat": "Cari hambatan gabungan paralel: (6 x 3) / (6 + 3) = 2 Ω. Lalu hitung arus total dengan Hukum Ohm: Arus = Tegangan / Hambatan Total = 12 / 2 = 6 Ampere.",
      "jebakan": "Opsi 1 salah karena menganggap rangkaian berupa susunan seri (6+3 Ω).",
      "rumus_kunci": "Hambatan Paralel = (R₁ x R₂) / (R₁ + R₂)"
    }
  },
  {
    "subject": "fisika",
    "subject_label": "Fisika",
    "topic": "Hukum Kekekalan Energi Mekanik",
    "stimulus": "Sebuah kelapa jatuh bebas tanpa kecepatan awal dari pohon setinggi 20 meter di atas tanah (abaikan gesekan udara, g = 10 m/s²).",
    "question": "Berapakah kecepatan kelapa tersebut tepat saat menyentuh tanah?",
    "options": [
      {
        "id": "A",
        "text": "28 m/s"
      },
      {
        "id": "B",
        "text": "40 m/s"
      },
      {
        "id": "C",
        "text": "16 m/s"
      },
      {
        "id": "D",
        "text": "20 m/s"
      },
      {
        "id": "E",
        "text": "25 m/s"
      }
    ],
    "correct_answer": "D",
    "explanation": {
      "akal_sehat": "Energi potensial di atas berubah total menjadi energi gerak di tanah. Rumus kilat: v = √(2 x g x h) = √(2 x 10 x 20) = 20 m/s.",
      "jebakan": "Kecepatan jatuh bebas tidak bergantung pada berat atau massa benda.",
      "rumus_kunci": "v = √(2gh)"
    }
  },
  {
    "subject": "fisika",
    "subject_label": "Fisika",
    "topic": "Gerak Melingkar Beraturan (Kecepatan Sudut)",
    "stimulus": "Sebuah meja pembuat gerabah keramik berputar secara horizontal terhadap sumbu poros di pusatnya. Sebuah titik perkakas yang berjarak 50 cm dari pusat putaran bergerak dengan kecepatan linier tetap 4 m/s.",
    "question": "Berapakah kecepatan sudut putaran meja keramik tersebut?",
    "options": [
      {
        "id": "A",
        "text": "11 rad/s"
      },
      {
        "id": "B",
        "text": "8 rad/s"
      },
      {
        "id": "C",
        "text": "16 rad/s"
      },
      {
        "id": "D",
        "text": "6 rad/s"
      },
      {
        "id": "E",
        "text": "4 rad/s"
      }
    ],
    "correct_answer": "B",
    "explanation": {
      "akal_sehat": "Ubah jarak ke meter: r = 50 cm = 0.5 m. Hubungan kecepatan linier dan sudut: v = ω x r. Maka ω = v / r = 4 / 0.5 = 8 rad/s.",
      "jebakan": "Satuan jari-jari harus dalam meter (SI) agar hasil kecepatan sudut tepat dalam rad/s.",
      "rumus_kunci": "ω = v / r"
    }
  },
  {
    "subject": "fisika",
    "subject_label": "Fisika",
    "topic": "Teorema Usaha-Energi (Arah Balik)",
    "stimulus": "Sebuah mobil bermassa 1000 kg melaju dengan kecepatan 20 m/s. Sopir mengerem sehingga timbul gaya rem tetap sebesar 5000 Newton hingga mobil berhenti.",
    "question": "Berapa jarak yang ditempuh mobil dari saat direm hingga berhenti total?",
    "options": [
      {
        "id": "A",
        "text": "40 meter"
      },
      {
        "id": "B",
        "text": "60 meter"
      },
      {
        "id": "C",
        "text": "20 meter"
      },
      {
        "id": "D",
        "text": "80 meter"
      },
      {
        "id": "E",
        "text": "25 meter"
      }
    ],
    "correct_answer": "A",
    "explanation": {
      "akal_sehat": "Energi gerak mobil harus dihabiskan oleh usaha rem: Ek = 1/2 x 1000 kg x (20 m/s)² = 200000 Joule. Usaha rem = Gaya rem x Jarak. Maka Jarak = Energi / Gaya Rem = 200000 / 5000 = 40 meter.",
      "jebakan": "Jangan lupa kuadratkan kecepatannya saat menghitung energi kinetik!",
      "rumus_kunci": "Jarak Rem = Energi Kinetik / Gaya Pengereman"
    }
  },
  {
    "subject": "fisika",
    "subject_label": "Fisika",
    "topic": "Kinematika Gerak Lurus (Grafik v-t)",
    "stimulus": "Perhatikan grafik kecepatan terhadap waktu (v-t) dari sebuah mobil yang meluncur lurus berikut.",
    "stimulus_svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 360 220\" class=\"w-full max-w-sm mx-auto\" style=\"max-width: 100%; height: auto; background: transparent;\">\n  <defs>\n    <pattern id=\"vt-hatch\" width=\"8\" height=\"8\" patternTransform=\"rotate(45 0 0)\" patternUnits=\"userSpaceOnUse\">\n      <line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"8\" stroke=\"#475569\" stroke-width=\"1.2\" opacity=\"0.6\"/>\n    </pattern>\n    <marker id=\"axis-arr-vt\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1.5 L 8 5 L 0 8.5 z\" fill=\"#1e293b\"/>\n    </marker>\n  </defs>\n  <!-- Shaded Area Under v-t Graph -->\n  <polygon points=\"45.0,185.0 116.2,25.0 258.8,25.0 330.0,185.0\" fill=\"url(#vt-hatch)\" stroke=\"#334155\" stroke-width=\"1.5\" />\n  <!-- Axes -->\n  <line x1=\"35\" y1=\"185\" x2=\"345\" y2=\"185\" stroke=\"#1e293b\" stroke-width=\"1.8\" marker-end=\"url(#axis-arr-vt)\" />\n  <text x=\"336\" y=\"201\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1e293b\">t (s)</text>\n  <line x1=\"45\" y1=\"195\" x2=\"45\" y2=\"15\" stroke=\"#1e293b\" stroke-width=\"1.8\" marker-end=\"url(#axis-arr-vt)\" />\n  <text x=\"41\" y=\"13\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">v (m/s)</text>\n  <!-- Dashed Projection Lines -->\n  <line x1=\"45\" y1=\"25.0\" x2=\"116.2\" y2=\"25.0\" stroke=\"#94a3b8\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\" />\n  <line x1=\"116.2\" y1=\"25.0\" x2=\"116.2\" y2=\"185\" stroke=\"#94a3b8\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\" />\n  <line x1=\"258.8\" y1=\"25.0\" x2=\"258.8\" y2=\"185\" stroke=\"#94a3b8\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\" />\n  <!-- Graph Stroke Line -->\n  <polyline points=\"45.0,185.0 116.2,25.0 258.8,25.0 330.0,185.0\" fill=\"none\" stroke=\"#b84f2d\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <!-- Ticks and Labels -->\n  <text x=\"37\" y=\"29.0\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"end\">20</text>\n  <text x=\"37\" y=\"197\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"600\" fill=\"#64748b\" text-anchor=\"end\">0</text>\n  <text x=\"116.2\" y=\"200\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">2</text>\n  <text x=\"258.8\" y=\"200\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">6</text>\n  <text x=\"330.0\" y=\"200\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">8</text>\n</svg>",
    "question": "Berapa total jarak tempuh mobil selama 8 detik seluruh perjalanan?",
    "options": [
      {
        "id": "A",
        "text": "160 meter"
      },
      {
        "id": "B",
        "text": "100 meter"
      },
      {
        "id": "C",
        "text": "120 meter"
      },
      {
        "id": "D",
        "text": "150 meter"
      },
      {
        "id": "E",
        "text": "170 meter"
      }
    ],
    "correct_answer": "C",
    "explanation": {
      "akal_sehat": "Pecah jadi 3 babak perjalanan: 1. Pas ngegas (10 x 2s = 20m). 2. Pas stabil (20 x 4s = 80m). 3. Pas ngerem (10 x 2s = 20m). Jumlahkan: 20 + 80 + 20 = 120 meter.",
      "jebakan": "Opsi 160 meter itu jebakan kalau kamu anggap mobil melaju kencang terus sepanjang 8 detik.",
      "rumus_kunci": "Total Jarak = Jarak Ngegas + Jarak Stabil + Jarak Ngerem"
    }
  },
  {
    "subject": "fisika",
    "subject_label": "Fisika",
    "topic": "Fluida Statis (Hukum Archimedes)",
    "stimulus": "Sebuah balok dengan volume 0.05 m³ tercelup seluruhnya ke dalam air (massa jenis air = 1.000 kg/m³, g = 10 m/s²).",
    "question": "Berapakah besar gaya apung ke atas yang dialami oleh balok tersebut?",
    "options": [
      {
        "id": "A",
        "text": "250 Newton"
      },
      {
        "id": "B",
        "text": "500 Newton"
      },
      {
        "id": "C",
        "text": "420 Newton"
      },
      {
        "id": "D",
        "text": "600 Newton"
      },
      {
        "id": "E",
        "text": "1000 Newton"
      }
    ],
    "correct_answer": "B",
    "explanation": {
      "akal_sehat": "Hukum Archimedes: Gaya apung = Massa jenis air (1.000) x Gravitasi (10) x Volume tercelup (0.05) = 500 Newton.",
      "jebakan": "Gaya apung hanya tergantung pada volume cairan yang digusur, bukan massa jenis bendanya!",
      "rumus_kunci": "F_A = ρ_cairan x g x V_celup"
    }
  },
  {
    "subject": "fisika",
    "subject_label": "Fisika",
    "topic": "Hukum Kekekalan Energi Mekanik",
    "stimulus": "Sebuah kelapa jatuh bebas tanpa kecepatan awal dari pohon setinggi 45 meter di atas tanah (abaikan gesekan udara, g = 10 m/s²).",
    "question": "Berapakah kecepatan kelapa tersebut tepat saat menyentuh tanah?",
    "options": [
      {
        "id": "A",
        "text": "60 m/s"
      },
      {
        "id": "B",
        "text": "26 m/s"
      },
      {
        "id": "C",
        "text": "38 m/s"
      },
      {
        "id": "D",
        "text": "35 m/s"
      },
      {
        "id": "E",
        "text": "30 m/s"
      }
    ],
    "correct_answer": "E",
    "explanation": {
      "akal_sehat": "Energi potensial di atas berubah total menjadi energi gerak di tanah. Rumus kilat: v = √(2 x g x h) = √(2 x 10 x 45) = 30 m/s.",
      "jebakan": "Kecepatan jatuh bebas tidak bergantung pada berat atau massa benda.",
      "rumus_kunci": "v = √(2gh)"
    }
  },
  {
    "subject": "fisika",
    "subject_label": "Fisika",
    "topic": "Kinematika (Gerak Parabola)",
    "stimulus": "Perhatikan diagram lintasan gerak peluru yang ditembakkan dari tanah dengan kecepatan awal v₀ = 40 m/s dan sudut elevasi 30° berikut (g = 10 m/s²).",
    "stimulus_svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 340 200\" class=\"w-full max-w-sm mx-auto\" style=\"max-width: 100%; height: auto; background: transparent;\">\n  <defs>\n    <marker id=\"arr-v0\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1.5 L 8 5 L 0 8.5 z\" fill=\"#b84f2d\"/>\n    </marker>\n  </defs>\n  <!-- Ground -->\n  <line x1=\"30\" y1=\"160\" x2=\"310\" y2=\"160\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n  <!-- Trajectory Arc -->\n  <path d=\"M 50 160 Q 160 -40 270 160\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2\" stroke-dasharray=\"4,4\" />\n  <!-- Apex Point & h_max -->\n  <line x1=\"160\" y1=\"60\" x2=\"160\" y2=\"160\" stroke=\"#64748b\" stroke-width=\"1.4\" stroke-dasharray=\"3,3\" />\n  <circle cx=\"160\" cy=\"60\" r=\"3.5\" fill=\"#b84f2d\" />\n  <text x=\"168\" y=\"110.0\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#b84f2d\">h_max = ?</text>\n  <!-- Velocity Vector v0 -->\n  <line x1=\"50\" y1=\"160\" x2=\"95\" y2=\"105\" stroke=\"#b84f2d\" stroke-width=\"2.5\" marker-end=\"url(#arr-v0)\" />\n  <text x=\"75\" y=\"95\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#b84f2d\">v₀ = 40 m/s</text>\n  <!-- Angle Arc -->\n  <path d=\"M 75 160 A 25 25 0 0 0 70 142\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"1.5\" />\n  <text x=\"82\" y=\"152\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#0f172a\">30°</text>\n</svg>",
    "question": "Berapakah ketinggian maksimum yang dapat dicapai oleh peluru tersebut?",
    "options": [
      {
        "id": "A",
        "text": "30 meter"
      },
      {
        "id": "B",
        "text": "80 meter"
      },
      {
        "id": "C",
        "text": "40 meter"
      },
      {
        "id": "D",
        "text": "20 meter"
      },
      {
        "id": "E",
        "text": "15 meter"
      }
    ],
    "correct_answer": "D",
    "explanation": {
      "akal_sehat": "Kecepatan vertikal awal = 40 x 0,5 = 20 m/s. Tinggi puncak: (20²) / (2 x 10) = 400 / 20 = 20 meter.",
      "jebakan": "Jangan lupa kuadratkan komponen sin sudut elevasinya!",
      "rumus_kunci": "Tinggi Maksimum = (v₀ · sin α)² / (2g)"
    }
  },
  {
    "subject": "fisika",
    "subject_label": "Fisika",
    "topic": "Impuls & Momentum (Gaya Kontak Rata-rata)",
    "stimulus": "Seorang atlet karate menghantam tumpukan bata beton dengan telapak tangan bermassa efektif 1 kg. Kecepatan telapak tangan sesaat sebelum membentur bata adalah 20 m/s dan berhenti total setelah bata pecah dalam waktu kontak 10 milidetik.",
    "question": "Berapakah besar gaya rata-rata yang dikerahkan tangan pada tumpukan bata selama benturan?",
    "options": [
      {
        "id": "A",
        "text": "2.000 N"
      },
      {
        "id": "B",
        "text": "6.000 N"
      },
      {
        "id": "C",
        "text": "20 N"
      },
      {
        "id": "D",
        "text": "1.000 N"
      },
      {
        "id": "E",
        "text": "4.000 N"
      }
    ],
    "correct_answer": "A",
    "explanation": {
      "akal_sehat": "Perubahan momentum tangan Δp = m x v = 1 kg x 20 m/s = 20 kg·m/s. Waktu benturan Δt = 10 ms = 0.01 detik. Gaya impuls F = Δp / Δt = 20 / 0.01 = 2.000 N!",
      "jebakan": "Waktu kontak dalam milidetik (ms) WAJIB diubah ke detik (dibagi 1.000) sebelum menghitung gaya Newton.",
      "rumus_kunci": "F = Δp / Δt = (m·v) / Δt"
    }
  },
  {
    "subject": "fisika",
    "subject_label": "Fisika",
    "topic": "Fluida Statis (Hukum Archimedes)",
    "stimulus": "Sebuah balok dengan volume 0.05 m³ tercelup seluruhnya ke dalam air (massa jenis air = 1.000 kg/m³, g = 10 m/s²).",
    "question": "Berapakah besar gaya apung ke atas yang dialami oleh balok tersebut?",
    "options": [
      {
        "id": "A",
        "text": "250 Newton"
      },
      {
        "id": "B",
        "text": "420 Newton"
      },
      {
        "id": "C",
        "text": "500 Newton"
      },
      {
        "id": "D",
        "text": "600 Newton"
      },
      {
        "id": "E",
        "text": "1000 Newton"
      }
    ],
    "correct_answer": "C",
    "explanation": {
      "akal_sehat": "Hukum Archimedes: Gaya apung = Massa jenis air (1.000) x Gravitasi (10) x Volume tercelup (0.05) = 500 Newton.",
      "jebakan": "Gaya apung hanya tergantung pada volume cairan yang digusur, bukan massa jenis bendanya!",
      "rumus_kunci": "F_A = ρ_cairan x g x V_celup"
    }
  },
  {
    "subject": "fisika",
    "subject_label": "Fisika",
    "topic": "Hukum Kekekalan Energi Mekanik",
    "stimulus": "Sebuah kelapa jatuh bebas tanpa kecepatan awal dari pohon setinggi 5 meter di atas tanah (abaikan gesekan udara, g = 10 m/s²).",
    "question": "Berapakah kecepatan kelapa tersebut tepat saat menyentuh tanah?",
    "options": [
      {
        "id": "A",
        "text": "10 m/s"
      },
      {
        "id": "B",
        "text": "15 m/s"
      },
      {
        "id": "C",
        "text": "20 m/s"
      },
      {
        "id": "D",
        "text": "6 m/s"
      },
      {
        "id": "E",
        "text": "18 m/s"
      }
    ],
    "correct_answer": "A",
    "explanation": {
      "akal_sehat": "Energi potensial di atas berubah total menjadi energi gerak di tanah. Rumus kilat: v = √(2 x g x h) = √(2 x 10 x 5) = 10 m/s.",
      "jebakan": "Kecepatan jatuh bebas tidak bergantung pada berat atau massa benda.",
      "rumus_kunci": "v = √(2gh)"
    }
  },
  {
    "subject": "fisika",
    "subject_label": "Fisika",
    "topic": "Impuls & Momentum (Gaya Kontak Rata-rata)",
    "stimulus": "Seorang atlet karate menghantam tumpukan bata beton dengan telapak tangan bermassa efektif 2 kg. Kecepatan telapak tangan sesaat sebelum membentur bata adalah 20 m/s dan berhenti total setelah bata pecah dalam waktu kontak 5 milidetik.",
    "question": "Berapakah besar gaya rata-rata yang dikerahkan tangan pada tumpukan bata selama benturan?",
    "options": [
      {
        "id": "A",
        "text": "4.000 N"
      },
      {
        "id": "B",
        "text": "24.000 N"
      },
      {
        "id": "C",
        "text": "16.000 N"
      },
      {
        "id": "D",
        "text": "8.000 N"
      },
      {
        "id": "E",
        "text": "40 N"
      }
    ],
    "correct_answer": "D",
    "explanation": {
      "akal_sehat": "Perubahan momentum tangan Δp = m x v = 2 kg x 20 m/s = 40 kg·m/s. Waktu benturan Δt = 5 ms = 0.005 detik. Gaya impuls F = Δp / Δt = 40 / 0.005 = 8.000 N!",
      "jebakan": "Waktu kontak dalam milidetik (ms) WAJIB diubah ke detik (dibagi 1.000) sebelum menghitung gaya Newton.",
      "rumus_kunci": "F = Δp / Δt = (m·v) / Δt"
    }
  },
  {
    "subject": "mtk_wajib",
    "subject_label": "Matematika Wajib",
    "topic": "Geometri Lingkaran (Sudut Pusat & Keliling)",
    "stimulus": "Perhatikan diagram lingkaran berikut. Titik A, B, dan C terletak pada busur lingkaran berpusat di titik O. Sudut keliling ∠ACB besarnya 35° dan menghadap busur AB yang sama dengan sudut pusat ∠AOB.",
    "stimulus_svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 300 240\" class=\"w-full max-w-sm mx-auto\" style=\"max-width: 100%; height: auto; background: transparent;\">\n  <circle cx=\"150\" cy=\"120\" r=\"80\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n  <circle cx=\"150\" cy=\"120\" r=\"3\" fill=\"#1e293b\"/>\n  <text x=\"160\" y=\"124\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1e293b\">O</text>\n  <line x1=\"150\" y1=\"120\" x2=\"90\" y2=\"173\" stroke=\"#b84f2d\" stroke-width=\"2\"/>\n  <line x1=\"150\" y1=\"120\" x2=\"210\" y2=\"173\" stroke=\"#b84f2d\" stroke-width=\"2\"/>\n  <line x1=\"125\" y1=\"44\" x2=\"90\" y2=\"173\" stroke=\"#0284c7\" stroke-width=\"1.8\"/>\n  <line x1=\"125\" y1=\"44\" x2=\"210\" y2=\"173\" stroke=\"#0284c7\" stroke-width=\"1.8\"/>\n  <text x=\"78\" y=\"187\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#0f172a\">A</text>\n  <text x=\"216\" y=\"187\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#0f172a\">B</text>\n  <text x=\"121\" y=\"36\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#0f172a\">C (35°)</text>\n  <text x=\"150\" y=\"144\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#b84f2d\" text-anchor=\"middle\">?</text>\n</svg>",
    "question": "Berapakah besar sudut pusat ∠AOB?",
    "options": [
      {
        "id": "A",
        "text": "90°"
      },
      {
        "id": "B",
        "text": "40°"
      },
      {
        "id": "C",
        "text": "145°"
      },
      {
        "id": "D",
        "text": "70°"
      },
      {
        "id": "E",
        "text": "35°"
      }
    ],
    "correct_answer": "D",
    "explanation": {
      "akal_sehat": "Jika menghadap busur yang sama, sudut PUSAT selalu DUA KALI LIPAT sudut KELILING: 2 x 35° = 70°.",
      "jebakan": "Sudut pusat berada di tengah lingkaran, bukaan sudutnya pasti lebih besar dari sudut keliling di pinggir.",
      "rumus_kunci": "Sudut Pusat = 2 x Sudut Keliling"
    }
  },
  {
    "subject": "mtk_wajib",
    "subject_label": "Matematika Wajib",
    "topic": "Geometri Lingkaran (Panjang Busur)",
    "stimulus": "Perhatikan diagram juring lingkaran berikut. Sebuah juring lingkaran memiliki sudut pusat 120° dan jari-jari r = 21 cm (gunakan π = 22/7).",
    "stimulus_svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 280 240\" class=\"w-full max-w-sm mx-auto\" style=\"max-width: 100%; height: auto; background: transparent;\">\n  <defs>\n    <pattern id=\"juring-hatch\" width=\"8\" height=\"8\" patternTransform=\"rotate(45 0 0)\" patternUnits=\"userSpaceOnUse\">\n      <line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"8\" stroke=\"#475569\" stroke-width=\"1.2\" opacity=\"0.6\"/>\n    </pattern>\n  </defs>\n  <!-- Full circle outline -->\n  <circle cx=\"140\" cy=\"120\" r=\"80\" fill=\"none\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n  <!-- Shaded Sector -->\n  <path d=\"M 140 120 L 220 120 A 80 80 0 0 0 100.0 50.7 Z\" fill=\"url(#juring-hatch)\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n  <!-- Center O -->\n  <circle cx=\"140\" cy=\"120\" r=\"3\" fill=\"#1e293b\"/>\n  <text x=\"130\" y=\"134\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1e293b\">O</text>\n  <!-- Labels -->\n  <text x=\"180.0\" y=\"136\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1e293b\">r = 21 cm</text>\n  <text x=\"165\" y=\"108\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#b84f2d\">120°</text>\n</svg>",
    "question": "Berapakah panjang busur lingkaran yang membatasi juring tersebut?",
    "options": [
      {
        "id": "A",
        "text": "44 cm"
      },
      {
        "id": "B",
        "text": "36 cm"
      },
      {
        "id": "C",
        "text": "132 cm"
      },
      {
        "id": "D",
        "text": "88 cm"
      },
      {
        "id": "E",
        "text": "55 cm"
      }
    ],
    "correct_answer": "A",
    "explanation": {
      "akal_sehat": "Sudut 120° berarti 120/360 = 1/3 lingkaran. Keliling utuh: 2 x 22/7 x 21 = 132 cm. Ambil jatahnya: 132 / 3 = 44 cm.",
      "jebakan": "Jangan tertukar dengan rumus luas juring (π r²).",
      "rumus_kunci": "Panjang Busur = (Sudut Pusat / 360°) x Keliling Lingkaran"
    }
  },
  {
    "subject": "mtk_wajib",
    "subject_label": "Matematika Wajib",
    "topic": "Deret Geometri Tak Hingga",
    "stimulus": "Sebuah bola dijatuhkan dari ketinggian 12 meter di atas lantai. Setiap kali memantul, bola mencapai ketinggian 3/5 dari tinggi sebelumnya sampai bola akhirnya berhenti.",
    "question": "Berapakah total panjang lintasan yang ditempuh bola tersebut hingga berhenti?",
    "options": [
      {
        "id": "A",
        "text": "96 meter"
      },
      {
        "id": "B",
        "text": "48 meter"
      },
      {
        "id": "C",
        "text": "38 meter"
      },
      {
        "id": "D",
        "text": "62 meter"
      },
      {
        "id": "E",
        "text": "24 meter"
      }
    ],
    "correct_answer": "B",
    "explanation": {
      "akal_sehat": "Trik kilat pantulan bola: kalikan tinggi awal (12 m) dengan (Penyebut + Pembilang) dibagi (Penyebut - Pembilang). Jadi: 12 x (5 + 3) / (5 - 3) = 48 meter.",
      "jebakan": "Jangan cuma hitung lintasan bola turunnya doang, lintasan naik setelah memantul juga harus dihitung!",
      "rumus_kunci": "Panjang Lintasan Bola Pantul = h x (b + a) / (b - a)"
    }
  },
  {
    "subject": "mtk_wajib",
    "subject_label": "Matematika Wajib",
    "topic": "Matematika Finansial (Bunga Tunggal)",
    "stimulus": "Pak Ridwan menabung modal usaha sebesar 5 juta rupiah di bank dengan sistem bunga tunggal 8% per tahun selama 2 tahun.",
    "question": "Berapakah total saldo tabungan akhir Pak Ridwan setelah periode tersebut?",
    "options": [
      {
        "id": "A",
        "text": "7 juta rupiah"
      },
      {
        "id": "B",
        "text": "5.8 juta rupiah"
      },
      {
        "id": "C",
        "text": "5.4 juta rupiah"
      },
      {
        "id": "D",
        "text": "10 juta rupiah"
      },
      {
        "id": "E",
        "text": "8.8 juta rupiah"
      }
    ],
    "correct_answer": "B",
    "explanation": {
      "akal_sehat": "Bunga tunggal selalu sama tiap tahun (8% x 5 juta = 0.4 juta/tahun). Selama 2 tahun, total bunganya: 0.4 x 2 = 0.8 juta. Total uang akhir = 5 + 0.8 = 5.8 juta rupiah.",
      "jebakan": "Bunga tunggal tidak berbunga-bunga seperti bunga majemuk.",
      "rumus_kunci": "Saldo Akhir = Modal Awal + (Modal x Bunga x Waktu)"
    }
  },
  {
    "subject": "mtk_wajib",
    "subject_label": "Matematika Wajib",
    "topic": "Peluang Teoretik (Kejadian Tunggal)",
    "stimulus": "Dalam sebuah kantong terdapat 5 kelereng merah dan 5 kelereng biru. Sebuah kelereng diambil secara acak.",
    "question": "Berapakah peluang terambilnya kelereng berwarna merah?",
    "options": [
      {
        "id": "A",
        "text": "1/10"
      },
      {
        "id": "B",
        "text": "1/2"
      },
      {
        "id": "C",
        "text": "6/11"
      },
      {
        "id": "D",
        "text": "5/12"
      },
      {
        "id": "E",
        "text": "2/5"
      }
    ],
    "correct_answer": "B",
    "explanation": {
      "akal_sehat": "Total kelereng di kantong: 5 + 5 = 10 butir. Kelereng merah yang diincar ada 5 butir. Peluangnya tinggal jatah merah per total kantong: 5/10 = 1/2.",
      "jebakan": "Opsi 5/10 salah karena itu adalah peluang terambilnya kelereng biru, bukan merah!",
      "rumus_kunci": "Peluang = Jumlah Target / Total Seluruh Sampel"
    }
  },
  {
    "subject": "mtk_wajib",
    "subject_label": "Matematika Wajib",
    "topic": "Statistika (Rata-rata Gabungan)",
    "stimulus": "Kelas A terdiri atas 20 siswa dengan nilai rata-rata ujian 75. Kelas B terdiri atas 30 siswa dengan nilai rata-rata ujian 90.",
    "question": "Berapakah nilai rata-rata gabungan seluruh siswa dari kedua kelas tersebut?",
    "options": [
      {
        "id": "A",
        "text": "82"
      },
      {
        "id": "B",
        "text": "84"
      },
      {
        "id": "C",
        "text": "88"
      },
      {
        "id": "D",
        "text": "81"
      },
      {
        "id": "E",
        "text": "90"
      }
    ],
    "correct_answer": "B",
    "explanation": {
      "akal_sehat": "Hitung total skor Kelas A (20 x 75 = 1500) ditambah total skor Kelas B (30 x 90 = 2700) = 4200. Bagi total murid (50): 4200 / 50 = 84.",
      "jebakan": "Opsi 82 salah karena jumlah murid tiap kelas tidak sama banyak.",
      "rumus_kunci": "Rata-rata Gabungan = (n₁ · x̄₁ + n₂ · x̄₂) / (n₁ + n₂)"
    }
  },
  {
    "subject": "mtk_wajib",
    "subject_label": "Matematika Wajib",
    "topic": "Kaidah Pencacahan (Permutasi Jabatan)",
    "stimulus": "Dalam pemilihan pengurus OSIS, terdapat 7 calon siswa yang akan dipilih untuk mengisi 3 posisi berbeda: Ketua, Sekretaris, dan Bendahara.",
    "question": "Berapa banyak susunan kepengurusan berbeda yang mungkin terpilih?",
    "options": [
      {
        "id": "A",
        "text": "420"
      },
      {
        "id": "B",
        "text": "190"
      },
      {
        "id": "C",
        "text": "35"
      },
      {
        "id": "D",
        "text": "21"
      },
      {
        "id": "E",
        "text": "210"
      }
    ],
    "correct_answer": "E",
    "explanation": {
      "akal_sehat": "Karena ada JABATAN (urutan penting), pakai teknik kotak: Kotak Ketua ada 7 pilihan, Sekretaris sisa 6, Bendahara sisa 5. Kalikan: 7 x 6 x 5 = 210 susunan.",
      "jebakan": "Opsi 35 itu Kombinasi (jika tanpa jabatan).",
      "rumus_kunci": "Permutasi = n x (n-1) x (n-2)"
    }
  },
  {
    "subject": "mtk_wajib",
    "subject_label": "Matematika Wajib",
    "topic": "Sistem Persamaan Linear Tiga Variabel (Harga Paket)",
    "stimulus": "Ahmad membayar Rp 16.500 untuk 2 buku, 1 pulpen, dan 1 pensil. Budi membayar Rp 13.000 untuk 1 buku, 2 pulpen, dan 1 pensil. Cici membayar Rp 12.500 untuk 1 buku, 1 pulpen, dan 2 pensil.",
    "question": "Berapakah biaya yang harus dibayar jika seseorang ingin membeli 1 paket (1 buku, 1 pulpen, dan 1 pensil)?",
    "options": [
      {
        "id": "A",
        "text": "Rp 13.500"
      },
      {
        "id": "B",
        "text": "Rp 12.500"
      },
      {
        "id": "C",
        "text": "Rp 9.000"
      },
      {
        "id": "D",
        "text": "Rp 10.500"
      },
      {
        "id": "E",
        "text": "Rp 8.000"
      }
    ],
    "correct_answer": "D",
    "explanation": {
      "akal_sehat": "Trik kilat: Jumlahkan seluruh belanjaan ketiga anak: (2b+p+s) + (b+2p+s) + (b+p+2s) = 4b + 4p + 4s = Rp 42.000. Maka 4(b + p + s) = Rp 42.000. Cukup bagi 4: (b + p + s) = 42000 / 4 = Rp 10.500!",
      "jebakan": "Tidak perlu mencari harga masing-masing barang satu per satu jika yang ditanya adalah jumlah 1 paket simetris!",
      "rumus_kunci": "Trik Penjumlahan Simetris: Jumlahkan seluruh persamaan lalu bagi dengan faktor kelipatan koefisien."
    }
  },
  {
    "subject": "mtk_wajib",
    "subject_label": "Matematika Wajib",
    "topic": "Statistika (Mencari Rata-rata Bagian)",
    "stimulus": "Suatu kelas memiliki 15 siswa laki-laki dengan rata-rata nilai 70 dan 25 siswa perempuan. Jika nilai rata-rata seluruh kelas adalah 75.",
    "question": "Berapakah nilai rata-rata khusus siswa perempuan?",
    "options": [
      {
        "id": "A",
        "text": "75"
      },
      {
        "id": "B",
        "text": "70"
      },
      {
        "id": "C",
        "text": "78"
      },
      {
        "id": "D",
        "text": "81"
      },
      {
        "id": "E",
        "text": "74"
      }
    ],
    "correct_answer": "C",
    "explanation": {
      "akal_sehat": "Total nilai seluruh kelas = 40 anak x 75 = 3000. Total nilai siswa laki-laki = 15 x 70 = 1050. Sisa nilai milik perempuan: 3000 - 1050 = 1950. Bagi dengan jumlah anak perempuan (25): 1950 / 25 = 78.",
      "jebakan": "Kunci menyelesaikan rata-rata gabungan adalah selalu bermain dengan TOTAL SKOR!",
      "rumus_kunci": "Total Skor Bagian = Total Seluruh Kelas - Total Kelompok Lain"
    }
  },
  {
    "subject": "mtk_wajib",
    "subject_label": "Matematika Wajib",
    "topic": "Dimensi Tiga (Jarak Titik ke Diagonal Ruang)",
    "stimulus": "Diketahui kubus ABCD.EFGH memiliki panjang rusuk 6 cm. Sebuah garis diagonal ruang ditarik dari titik B ke titik H.",
    "stimulus_svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 340 260\" class=\"w-full max-w-sm mx-auto\" style=\"max-width: 100%; height: auto; background: transparent;\">\n  <line x1=\"65.0\" y1=\"205.0\" x2=\"120.0\" y2=\"163.0\" stroke=\"#64748b\" stroke-width=\"1.8\" stroke-dasharray=\"4,4\" />\n  <line x1=\"120.0\" y1=\"163.0\" x2=\"245.0\" y2=\"163.0\" stroke=\"#64748b\" stroke-width=\"1.8\" stroke-dasharray=\"4,4\" />\n  <line x1=\"120.0\" y1=\"163.0\" x2=\"120.0\" y2=\"38.0\" stroke=\"#64748b\" stroke-width=\"1.8\" stroke-dasharray=\"4,4\" />\n  <line x1=\"65.0\" y1=\"205.0\" x2=\"190.0\" y2=\"205.0\" stroke=\"#1e293b\" stroke-width=\"2\" />\n  <line x1=\"190.0\" y1=\"205.0\" x2=\"245.0\" y2=\"163.0\" stroke=\"#1e293b\" stroke-width=\"2\" />\n  <line x1=\"65.0\" y1=\"80.0\" x2=\"190.0\" y2=\"80.0\" stroke=\"#1e293b\" stroke-width=\"2\" />\n  <line x1=\"190.0\" y1=\"80.0\" x2=\"245.0\" y2=\"38.0\" stroke=\"#1e293b\" stroke-width=\"2\" />\n  <line x1=\"245.0\" y1=\"38.0\" x2=\"120.0\" y2=\"38.0\" stroke=\"#1e293b\" stroke-width=\"2\" />\n  <line x1=\"120.0\" y1=\"38.0\" x2=\"65.0\" y2=\"80.0\" stroke=\"#1e293b\" stroke-width=\"2\" />\n  <line x1=\"65.0\" y1=\"205.0\" x2=\"65.0\" y2=\"80.0\" stroke=\"#1e293b\" stroke-width=\"2\" />\n  <line x1=\"190.0\" y1=\"205.0\" x2=\"190.0\" y2=\"80.0\" stroke=\"#1e293b\" stroke-width=\"2\" />\n  <line x1=\"245.0\" y1=\"163.0\" x2=\"245.0\" y2=\"38.0\" stroke=\"#1e293b\" stroke-width=\"2\" />\n  <line x1=\"190.0\" y1=\"205.0\" x2=\"120.0\" y2=\"38.0\" stroke=\"#b84f2d\" stroke-width=\"2.6\" stroke-linecap=\"round\" />\n  <circle cx=\"65.0\" cy=\"205.0\" r=\"2.5\" fill=\"#1e293b\" />\n  <text x=\"51.0\" y=\"219.0\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#0f172a\" text-anchor=\"middle\">A</text>\n  <circle cx=\"190.0\" cy=\"205.0\" r=\"4\" fill=\"#b84f2d\" />\n  <text x=\"198.0\" y=\"219.0\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#b84f2d\" text-anchor=\"middle\">B</text>\n  <circle cx=\"245.0\" cy=\"163.0\" r=\"2.5\" fill=\"#1e293b\" />\n  <text x=\"255.0\" y=\"167.0\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#0f172a\" text-anchor=\"middle\">C</text>\n  <circle cx=\"120.0\" cy=\"163.0\" r=\"2.5\" fill=\"#1e293b\" />\n  <text x=\"106.0\" y=\"157.0\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#0f172a\" text-anchor=\"middle\">D</text>\n  <circle cx=\"65.0\" cy=\"80.0\" r=\"2.5\" fill=\"#1e293b\" />\n  <text x=\"51.0\" y=\"72.0\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#0f172a\" text-anchor=\"middle\">E</text>\n  <circle cx=\"190.0\" cy=\"80.0\" r=\"4\" fill=\"#b84f2d\" />\n  <text x=\"198.0\" y=\"72.0\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#b84f2d\" text-anchor=\"middle\">F</text>\n  <circle cx=\"245.0\" cy=\"38.0\" r=\"2.5\" fill=\"#1e293b\" />\n  <text x=\"255.0\" y=\"32.0\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#0f172a\" text-anchor=\"middle\">G</text>\n  <circle cx=\"120.0\" cy=\"38.0\" r=\"4\" fill=\"#b84f2d\" />\n  <text x=\"106.0\" y=\"28.0\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#b84f2d\" text-anchor=\"middle\">H</text>\n  <text x=\"127.5\" y=\"221.0\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#475569\" text-anchor=\"middle\">s = 6 cm</text>\n</svg>",
    "question": "Berapakah jarak terdekat dari titik sudut F ke garis diagonal ruang BH?",
    "options": [
      {
        "id": "A",
        "text": "2√3 cm"
      },
      {
        "id": "B",
        "text": "2√6 cm"
      },
      {
        "id": "C",
        "text": "3√6 cm"
      },
      {
        "id": "D",
        "text": "6√2 cm"
      },
      {
        "id": "E",
        "text": "4√3 cm"
      }
    ],
    "correct_answer": "B",
    "explanation": {
      "akal_sehat": "Segitiga BFH siku-siku di F dengan alas BF = 6 cm, FH = 6√2 cm, dan BH = 6√3 cm. Jarak terdekat d = (BF x FH) / BH = (6 x 6√2) / (6√3) = (6/3)√6 = 2√6 cm.",
      "jebakan": "Jarak terdekat selalu ruas garis yang jatuh TEGAK LURUS terhadap garis diagonal.",
      "rumus_kunci": "Jarak Titik Sudut ke Diagonal Ruang Kubus = (s/3)√6"
    }
  },
  {
    "subject": "mtk_wajib",
    "subject_label": "Matematika Wajib",
    "topic": "Dimensi Tiga (Kedudukan Garis pada Kubus)",
    "stimulus": "Diberikan kubus ABCD.EFGH dengan bidang alas ABCD dan bidang atas EFGH.",
    "stimulus_svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 340 260\" class=\"w-full max-w-sm mx-auto\" style=\"max-width: 100%; height: auto; background: transparent;\">\n  <line x1=\"65.0\" y1=\"205.0\" x2=\"120.0\" y2=\"163.0\" stroke=\"#64748b\" stroke-width=\"1.8\" stroke-dasharray=\"4,4\" />\n  <line x1=\"120.0\" y1=\"163.0\" x2=\"245.0\" y2=\"163.0\" stroke=\"#64748b\" stroke-width=\"1.8\" stroke-dasharray=\"4,4\" />\n  <line x1=\"120.0\" y1=\"163.0\" x2=\"120.0\" y2=\"38.0\" stroke=\"#64748b\" stroke-width=\"1.8\" stroke-dasharray=\"4,4\" />\n  <line x1=\"65.0\" y1=\"205.0\" x2=\"190.0\" y2=\"205.0\" stroke=\"#1e293b\" stroke-width=\"2\" />\n  <line x1=\"190.0\" y1=\"205.0\" x2=\"245.0\" y2=\"163.0\" stroke=\"#1e293b\" stroke-width=\"2\" />\n  <line x1=\"65.0\" y1=\"80.0\" x2=\"190.0\" y2=\"80.0\" stroke=\"#1e293b\" stroke-width=\"2\" />\n  <line x1=\"190.0\" y1=\"80.0\" x2=\"245.0\" y2=\"38.0\" stroke=\"#1e293b\" stroke-width=\"2\" />\n  <line x1=\"245.0\" y1=\"38.0\" x2=\"120.0\" y2=\"38.0\" stroke=\"#1e293b\" stroke-width=\"2\" />\n  <line x1=\"120.0\" y1=\"38.0\" x2=\"65.0\" y2=\"80.0\" stroke=\"#1e293b\" stroke-width=\"2\" />\n  <line x1=\"65.0\" y1=\"205.0\" x2=\"65.0\" y2=\"80.0\" stroke=\"#1e293b\" stroke-width=\"2\" />\n  <line x1=\"190.0\" y1=\"205.0\" x2=\"190.0\" y2=\"80.0\" stroke=\"#1e293b\" stroke-width=\"2\" />\n  <line x1=\"245.0\" y1=\"163.0\" x2=\"245.0\" y2=\"38.0\" stroke=\"#1e293b\" stroke-width=\"2\" />\n  <line x1=\"190.0\" y1=\"205.0\" x2=\"245.0\" y2=\"163.0\" stroke=\"#b84f2d\" stroke-width=\"2.6\" stroke-linecap=\"round\" />\n  <line x1=\"65.0\" y1=\"80.0\" x2=\"120.0\" y2=\"38.0\" stroke=\"#b84f2d\" stroke-width=\"2.6\" stroke-linecap=\"round\" />\n  <circle cx=\"65.0\" cy=\"205.0\" r=\"2.5\" fill=\"#1e293b\" />\n  <text x=\"51.0\" y=\"219.0\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#0f172a\" text-anchor=\"middle\">A</text>\n  <circle cx=\"190.0\" cy=\"205.0\" r=\"4\" fill=\"#b84f2d\" />\n  <text x=\"198.0\" y=\"219.0\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#b84f2d\" text-anchor=\"middle\">B</text>\n  <circle cx=\"245.0\" cy=\"163.0\" r=\"4\" fill=\"#b84f2d\" />\n  <text x=\"255.0\" y=\"167.0\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#b84f2d\" text-anchor=\"middle\">C</text>\n  <circle cx=\"120.0\" cy=\"163.0\" r=\"2.5\" fill=\"#1e293b\" />\n  <text x=\"106.0\" y=\"157.0\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#0f172a\" text-anchor=\"middle\">D</text>\n  <circle cx=\"65.0\" cy=\"80.0\" r=\"4\" fill=\"#b84f2d\" />\n  <text x=\"51.0\" y=\"72.0\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#b84f2d\" text-anchor=\"middle\">E</text>\n  <circle cx=\"190.0\" cy=\"80.0\" r=\"2.5\" fill=\"#1e293b\" />\n  <text x=\"198.0\" y=\"72.0\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#0f172a\" text-anchor=\"middle\">F</text>\n  <circle cx=\"245.0\" cy=\"38.0\" r=\"2.5\" fill=\"#1e293b\" />\n  <text x=\"255.0\" y=\"32.0\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#0f172a\" text-anchor=\"middle\">G</text>\n  <circle cx=\"120.0\" cy=\"38.0\" r=\"4\" fill=\"#b84f2d\" />\n  <text x=\"106.0\" y=\"28.0\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#b84f2d\" text-anchor=\"middle\">H</text>\n</svg>",
    "question": "Bagaimanakah kedudukan geometris antara garis BC dan garis EH?",
    "options": [
      {
        "id": "A",
        "text": "Berimpit"
      },
      {
        "id": "B",
        "text": "Sejajar"
      },
      {
        "id": "C",
        "text": "Berpotongan tegak lurus"
      },
      {
        "id": "D",
        "text": "Bersilangan tidak tegak lurus"
      },
      {
        "id": "E",
        "text": "Bersilangan tegak lurus"
      }
    ],
    "correct_answer": "B",
    "explanation": {
      "akal_sehat": "BC sejajar AD, dan AD sejajar EH pada bidang diagonal, sehingga BC sejajar EH.",
      "jebakan": "Garis yang tidak bertemu di ruang 3 dimensi belum tentu sejajar; jika tidak sebidang, garis tersebut bersilangan.",
      "rumus_kunci": "Dua garis bersilangan jika tidak sejajar dan tidak pernah berpotongan di satu bidang datar."
    }
  },
  {
    "subject": "mtk_wajib",
    "subject_label": "Matematika Wajib",
    "topic": "Geometri Lingkaran (Panjang Busur)",
    "stimulus": "Perhatikan diagram juring lingkaran berikut. Sebuah juring lingkaran memiliki sudut pusat 60° dan jari-jari r = 21 cm (gunakan π = 22/7).",
    "stimulus_svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 280 240\" class=\"w-full max-w-sm mx-auto\" style=\"max-width: 100%; height: auto; background: transparent;\">\n  <defs>\n    <pattern id=\"juring-hatch\" width=\"8\" height=\"8\" patternTransform=\"rotate(45 0 0)\" patternUnits=\"userSpaceOnUse\">\n      <line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"8\" stroke=\"#475569\" stroke-width=\"1.2\" opacity=\"0.6\"/>\n    </pattern>\n  </defs>\n  <!-- Full circle outline -->\n  <circle cx=\"140\" cy=\"120\" r=\"80\" fill=\"none\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n  <!-- Shaded Sector -->\n  <path d=\"M 140 120 L 220 120 A 80 80 0 0 0 180.0 50.7 Z\" fill=\"url(#juring-hatch)\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n  <!-- Center O -->\n  <circle cx=\"140\" cy=\"120\" r=\"3\" fill=\"#1e293b\"/>\n  <text x=\"130\" y=\"134\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1e293b\">O</text>\n  <!-- Labels -->\n  <text x=\"180.0\" y=\"136\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1e293b\">r = 21 cm</text>\n  <text x=\"165\" y=\"108\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#b84f2d\">60°</text>\n</svg>",
    "question": "Berapakah panjang busur lingkaran yang membatasi juring tersebut?",
    "options": [
      {
        "id": "A",
        "text": "33 cm"
      },
      {
        "id": "B",
        "text": "14 cm"
      },
      {
        "id": "C",
        "text": "22 cm"
      },
      {
        "id": "D",
        "text": "132 cm"
      },
      {
        "id": "E",
        "text": "44 cm"
      }
    ],
    "correct_answer": "C",
    "explanation": {
      "akal_sehat": "Sudut 60° berarti 60/360 = 1/6 lingkaran. Keliling utuh: 2 x 22/7 x 21 = 132 cm. Ambil jatahnya: 132 / 6 = 22 cm.",
      "jebakan": "Jangan tertukar dengan rumus luas juring (π r²).",
      "rumus_kunci": "Panjang Busur = (Sudut Pusat / 360°) x Keliling Lingkaran"
    }
  },
  {
    "subject": "mtk_wajib",
    "subject_label": "Matematika Wajib",
    "topic": "Fungsi Komposisi (Menyelesaikan Persamaan)",
    "stimulus": "Diketahui f(x) = 2x + 2 dan g(x) = 2x - 1. Jika (f ∘ g)(x) = 8.",
    "question": "Berapakah nilai x yang memenuhi persamaan tersebut?",
    "options": [
      {
        "id": "A",
        "text": "5"
      },
      {
        "id": "B",
        "text": "4"
      },
      {
        "id": "C",
        "text": "1"
      },
      {
        "id": "D",
        "text": "3"
      },
      {
        "id": "E",
        "text": "2"
      }
    ],
    "correct_answer": "E",
    "explanation": {
      "akal_sehat": "Urai dari luar: f(g(x)) = 8 -> 2·g(x) + 2 = 8 -> 2·g(x) = 6 -> g(x) = 3. Masukkan rumus g(x): 2x - 1 = 3 -> 2x = 4 -> x = 2.",
      "jebakan": "Kupas fungsi dari kulit paling luar dulu sebelum menyentuh fungsi dalamnya.",
      "rumus_kunci": "Selesaikan f(...) = target terlebih dahulu, lalu selesaikan g(x)"
    }
  },
  {
    "subject": "mtk_wajib",
    "subject_label": "Matematika Wajib",
    "topic": "Kaidah Pencacahan (Permutasi Jabatan)",
    "stimulus": "Dalam pemilihan pengurus OSIS, terdapat 5 calon siswa yang akan dipilih untuk mengisi 3 posisi berbeda: Ketua, Sekretaris, dan Bendahara.",
    "question": "Berapa banyak susunan kepengurusan berbeda yang mungkin terpilih?",
    "options": [
      {
        "id": "A",
        "text": "60"
      },
      {
        "id": "B",
        "text": "15"
      },
      {
        "id": "C",
        "text": "10"
      },
      {
        "id": "D",
        "text": "120"
      },
      {
        "id": "E",
        "text": "40"
      }
    ],
    "correct_answer": "A",
    "explanation": {
      "akal_sehat": "Karena ada JABATAN (urutan penting), pakai teknik kotak: Kotak Ketua ada 5 pilihan, Sekretaris sisa 4, Bendahara sisa 3. Kalikan: 5 x 4 x 3 = 60 susunan.",
      "jebakan": "Opsi 10 itu Kombinasi (jika tanpa jabatan).",
      "rumus_kunci": "Permutasi = n x (n-1) x (n-2)"
    }
  },
  {
    "subject": "mtk_wajib",
    "subject_label": "Matematika Wajib",
    "topic": "Dimensi Tiga (Kedudukan Garis pada Kubus)",
    "stimulus": "Diberikan kubus ABCD.EFGH dengan bidang alas ABCD dan bidang atas EFGH.",
    "stimulus_svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 340 260\" class=\"w-full max-w-sm mx-auto\" style=\"max-width: 100%; height: auto; background: transparent;\">\n  <line x1=\"65.0\" y1=\"205.0\" x2=\"120.0\" y2=\"163.0\" stroke=\"#64748b\" stroke-width=\"1.8\" stroke-dasharray=\"4,4\" />\n  <line x1=\"120.0\" y1=\"163.0\" x2=\"245.0\" y2=\"163.0\" stroke=\"#64748b\" stroke-width=\"1.8\" stroke-dasharray=\"4,4\" />\n  <line x1=\"120.0\" y1=\"163.0\" x2=\"120.0\" y2=\"38.0\" stroke=\"#64748b\" stroke-width=\"1.8\" stroke-dasharray=\"4,4\" />\n  <line x1=\"65.0\" y1=\"205.0\" x2=\"190.0\" y2=\"205.0\" stroke=\"#1e293b\" stroke-width=\"2\" />\n  <line x1=\"190.0\" y1=\"205.0\" x2=\"245.0\" y2=\"163.0\" stroke=\"#1e293b\" stroke-width=\"2\" />\n  <line x1=\"65.0\" y1=\"80.0\" x2=\"190.0\" y2=\"80.0\" stroke=\"#1e293b\" stroke-width=\"2\" />\n  <line x1=\"190.0\" y1=\"80.0\" x2=\"245.0\" y2=\"38.0\" stroke=\"#1e293b\" stroke-width=\"2\" />\n  <line x1=\"245.0\" y1=\"38.0\" x2=\"120.0\" y2=\"38.0\" stroke=\"#1e293b\" stroke-width=\"2\" />\n  <line x1=\"120.0\" y1=\"38.0\" x2=\"65.0\" y2=\"80.0\" stroke=\"#1e293b\" stroke-width=\"2\" />\n  <line x1=\"65.0\" y1=\"205.0\" x2=\"65.0\" y2=\"80.0\" stroke=\"#1e293b\" stroke-width=\"2\" />\n  <line x1=\"190.0\" y1=\"205.0\" x2=\"190.0\" y2=\"80.0\" stroke=\"#1e293b\" stroke-width=\"2\" />\n  <line x1=\"245.0\" y1=\"163.0\" x2=\"245.0\" y2=\"38.0\" stroke=\"#1e293b\" stroke-width=\"2\" />\n  <line x1=\"65.0\" y1=\"205.0\" x2=\"190.0\" y2=\"205.0\" stroke=\"#b84f2d\" stroke-width=\"2.6\" stroke-linecap=\"round\" />\n  <line x1=\"190.0\" y1=\"205.0\" x2=\"245.0\" y2=\"163.0\" stroke=\"#b84f2d\" stroke-width=\"2.6\" stroke-linecap=\"round\" />\n  <circle cx=\"65.0\" cy=\"205.0\" r=\"4\" fill=\"#b84f2d\" />\n  <text x=\"51.0\" y=\"219.0\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#b84f2d\" text-anchor=\"middle\">A</text>\n  <circle cx=\"190.0\" cy=\"205.0\" r=\"4\" fill=\"#b84f2d\" />\n  <text x=\"198.0\" y=\"219.0\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#b84f2d\" text-anchor=\"middle\">B</text>\n  <circle cx=\"245.0\" cy=\"163.0\" r=\"4\" fill=\"#b84f2d\" />\n  <text x=\"255.0\" y=\"167.0\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#b84f2d\" text-anchor=\"middle\">C</text>\n  <circle cx=\"120.0\" cy=\"163.0\" r=\"2.5\" fill=\"#1e293b\" />\n  <text x=\"106.0\" y=\"157.0\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#0f172a\" text-anchor=\"middle\">D</text>\n  <circle cx=\"65.0\" cy=\"80.0\" r=\"2.5\" fill=\"#1e293b\" />\n  <text x=\"51.0\" y=\"72.0\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#0f172a\" text-anchor=\"middle\">E</text>\n  <circle cx=\"190.0\" cy=\"80.0\" r=\"2.5\" fill=\"#1e293b\" />\n  <text x=\"198.0\" y=\"72.0\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#0f172a\" text-anchor=\"middle\">F</text>\n  <circle cx=\"245.0\" cy=\"38.0\" r=\"2.5\" fill=\"#1e293b\" />\n  <text x=\"255.0\" y=\"32.0\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#0f172a\" text-anchor=\"middle\">G</text>\n  <circle cx=\"120.0\" cy=\"38.0\" r=\"2.5\" fill=\"#1e293b\" />\n  <text x=\"106.0\" y=\"28.0\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"800\" fill=\"#0f172a\" text-anchor=\"middle\">H</text>\n</svg>",
    "question": "Bagaimanakah kedudukan geometris antara garis AB dan garis BC?",
    "options": [
      {
        "id": "A",
        "text": "Sejajar"
      },
      {
        "id": "B",
        "text": "Berpotongan tegak lurus"
      },
      {
        "id": "C",
        "text": "Bersilangan tegak lurus"
      },
      {
        "id": "D",
        "text": "Berimpit"
      },
      {
        "id": "E",
        "text": "Bersilangan tidak tegak lurus"
      }
    ],
    "correct_answer": "B",
    "explanation": {
      "akal_sehat": "Garis AB dan BC terletak pada bidang alas ABCD yang sama dan bertemu di titik sudut B membentuk sudut siku-siku 90°.",
      "jebakan": "Garis yang tidak bertemu di ruang 3 dimensi belum tentu sejajar; jika tidak sebidang, garis tersebut bersilangan.",
      "rumus_kunci": "Dua garis bersilangan jika tidak sejajar dan tidak pernah berpotongan di satu bidang datar."
    }
  },
  {
    "subject": "mtk_wajib",
    "subject_label": "Matematika Wajib",
    "topic": "Statistika (Rata-rata Gabungan)",
    "stimulus": "Kelas A terdiri atas 20 siswa dengan nilai rata-rata ujian 70. Kelas B terdiri atas 30 siswa dengan nilai rata-rata ujian 80.",
    "question": "Berapakah nilai rata-rata gabungan seluruh siswa dari kedua kelas tersebut?",
    "options": [
      {
        "id": "A",
        "text": "75"
      },
      {
        "id": "B",
        "text": "80"
      },
      {
        "id": "C",
        "text": "70"
      },
      {
        "id": "D",
        "text": "76"
      },
      {
        "id": "E",
        "text": "73"
      }
    ],
    "correct_answer": "D",
    "explanation": {
      "akal_sehat": "Hitung total skor Kelas A (20 x 70 = 1400) ditambah total skor Kelas B (30 x 80 = 2400) = 3800. Bagi total murid (50): 3800 / 50 = 76.",
      "jebakan": "Opsi 75 salah karena jumlah murid tiap kelas tidak sama banyak.",
      "rumus_kunci": "Rata-rata Gabungan = (n₁ · x̄₁ + n₂ · x̄₂) / (n₁ + n₂)"
    }
  },
  {
    "subject": "mtk_wajib",
    "subject_label": "Matematika Wajib",
    "topic": "Fungsi Invers (Pecahan Linear)",
    "stimulus": "Fungsi rasional didefinisikan sebagai f(x) = (3x + 2) / (1x - 4), untuk x ≠ 4.",
    "question": "Berapakah nilai dari f⁻¹(4)?",
    "options": [
      {
        "id": "A",
        "text": "14"
      },
      {
        "id": "B",
        "text": "26"
      },
      {
        "id": "C",
        "text": "36"
      },
      {
        "id": "D",
        "text": "18"
      },
      {
        "id": "E",
        "text": "21"
      }
    ],
    "correct_answer": "D",
    "explanation": {
      "akal_sehat": "Trik kilat invers pecahan (ax+b)/(cx-d): tukar posisi angka kiri-atas (3) dan kanan-bawah (-4) lalu balik tandanya! Jadi f⁻¹(x) = (4x + 2) / (1x - 3). Masukkan x = 4: (4(4) + 2) / (1(4) - 3) = 18.",
      "jebakan": "Jangan sampai lupa membalik tanda minus/plus saat menukar posisi a dan d.",
      "rumus_kunci": "Invers (ax+b)/(cx+d) = (-dx+b)/(cx-a)"
    }
  },
  {
    "subject": "mtk_wajib",
    "subject_label": "Matematika Wajib",
    "topic": "Fungsi Invers (Substitusi Nilai)",
    "stimulus": "Sebuah rumus fungsi dituliskan: f(x) = (3x + 5) / 2.",
    "question": "Jika f⁻¹(k) = 3, maka berapakah nilai k?",
    "options": [
      {
        "id": "A",
        "text": "7"
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "14"
      },
      {
        "id": "D",
        "text": "3"
      },
      {
        "id": "E",
        "text": "9"
      }
    ],
    "correct_answer": "A",
    "explanation": {
      "akal_sehat": "f⁻¹(k) = 3 itu artinya f(3) = k! Langsung masukkan x = 3 ke rumus fungsi f: (3 x 3 + 5) / 2 = 14 / 2 = 7. Gak perlu cari rumus invers x.",
      "jebakan": "Banyak yang ribet pindah ruas mencari f⁻¹(x) panjang-panjang, padahal tinggal cemplungin angkanya!",
      "rumus_kunci": "f⁻¹(k) = p ekuivalen dengan f(p) = k"
    }
  },
  {
    "subject": "mtk_wajib",
    "subject_label": "Matematika Wajib",
    "topic": "Statistika (Mencari Rata-rata Bagian)",
    "stimulus": "Suatu kelas memiliki 20 siswa laki-laki dengan rata-rata nilai 70 dan 20 siswa perempuan. Jika nilai rata-rata seluruh kelas adalah 80.",
    "question": "Berapakah nilai rata-rata khusus siswa perempuan?",
    "options": [
      {
        "id": "A",
        "text": "93"
      },
      {
        "id": "B",
        "text": "80"
      },
      {
        "id": "C",
        "text": "90"
      },
      {
        "id": "D",
        "text": "70"
      },
      {
        "id": "E",
        "text": "86"
      }
    ],
    "correct_answer": "C",
    "explanation": {
      "akal_sehat": "Total nilai seluruh kelas = 40 anak x 80 = 3200. Total nilai siswa laki-laki = 20 x 70 = 1400. Sisa nilai milik perempuan: 3200 - 1400 = 1800. Bagi dengan jumlah anak perempuan (20): 1800 / 20 = 90.",
      "jebakan": "Kunci menyelesaikan rata-rata gabungan adalah selalu bermain dengan TOTAL SKOR!",
      "rumus_kunci": "Total Skor Bagian = Total Seluruh Kelas - Total Kelompok Lain"
    }
  },
  {
    "subject": "mtk_wajib",
    "subject_label": "Matematika Wajib",
    "topic": "Matematika Finansial (Bunga Tunggal)",
    "stimulus": "Pak Ridwan menabung modal usaha sebesar 10 juta rupiah di bank dengan sistem bunga tunggal 8% per tahun selama 3 tahun.",
    "question": "Berapakah total saldo tabungan akhir Pak Ridwan setelah periode tersebut?",
    "options": [
      {
        "id": "A",
        "text": "20 juta rupiah"
      },
      {
        "id": "B",
        "text": "10.8 juta rupiah"
      },
      {
        "id": "C",
        "text": "12.4 juta rupiah"
      },
      {
        "id": "D",
        "text": "15.4 juta rupiah"
      },
      {
        "id": "E",
        "text": "14.9 juta rupiah"
      }
    ],
    "correct_answer": "C",
    "explanation": {
      "akal_sehat": "Bunga tunggal selalu sama tiap tahun (8% x 10 juta = 0.8 juta/tahun). Selama 3 tahun, total bunganya: 0.8 x 3 = 2.4000000000000004 juta. Total uang akhir = 10 + 2.4000000000000004 = 12.4 juta rupiah.",
      "jebakan": "Bunga tunggal tidak berbunga-bunga seperti bunga majemuk.",
      "rumus_kunci": "Saldo Akhir = Modal Awal + (Modal x Bunga x Waktu)"
    }
  },
  {
    "subject": "mtk_wajib",
    "subject_label": "Matematika Wajib",
    "topic": "Kaidah Pencacahan (Permutasi Jabatan)",
    "stimulus": "Dalam pemilihan pengurus OSIS, terdapat 7 calon siswa yang akan dipilih untuk mengisi 3 posisi berbeda: Ketua, Sekretaris, dan Bendahara.",
    "question": "Berapa banyak susunan kepengurusan berbeda yang mungkin terpilih?",
    "options": [
      {
        "id": "A",
        "text": "21"
      },
      {
        "id": "B",
        "text": "420"
      },
      {
        "id": "C",
        "text": "35"
      },
      {
        "id": "D",
        "text": "210"
      },
      {
        "id": "E",
        "text": "190"
      }
    ],
    "correct_answer": "D",
    "explanation": {
      "akal_sehat": "Karena ada JABATAN (urutan penting), pakai teknik kotak: Kotak Ketua ada 7 pilihan, Sekretaris sisa 6, Bendahara sisa 5. Kalikan: 7 x 6 x 5 = 210 susunan.",
      "jebakan": "Opsi 35 itu Kombinasi (jika tanpa jabatan).",
      "rumus_kunci": "Permutasi = n x (n-1) x (n-2)"
    }
  },
  {
    "subject": "mtk_wajib",
    "subject_label": "Matematika Wajib",
    "topic": "Geometri Lingkaran (Sudut Pusat & Keliling)",
    "stimulus": "Perhatikan diagram lingkaran berikut. Titik A, B, dan C terletak pada busur lingkaran berpusat di titik O. Sudut keliling ∠ACB besarnya 45° dan menghadap busur AB yang sama dengan sudut pusat ∠AOB.",
    "stimulus_svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 300 240\" class=\"w-full max-w-sm mx-auto\" style=\"max-width: 100%; height: auto; background: transparent;\">\n  <circle cx=\"150\" cy=\"120\" r=\"80\" fill=\"#ffffff\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n  <circle cx=\"150\" cy=\"120\" r=\"3\" fill=\"#1e293b\"/>\n  <text x=\"160\" y=\"124\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1e293b\">O</text>\n  <line x1=\"150\" y1=\"120\" x2=\"90\" y2=\"173\" stroke=\"#b84f2d\" stroke-width=\"2\"/>\n  <line x1=\"150\" y1=\"120\" x2=\"210\" y2=\"173\" stroke=\"#b84f2d\" stroke-width=\"2\"/>\n  <line x1=\"125\" y1=\"44\" x2=\"90\" y2=\"173\" stroke=\"#0284c7\" stroke-width=\"1.8\"/>\n  <line x1=\"125\" y1=\"44\" x2=\"210\" y2=\"173\" stroke=\"#0284c7\" stroke-width=\"1.8\"/>\n  <text x=\"78\" y=\"187\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#0f172a\">A</text>\n  <text x=\"216\" y=\"187\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#0f172a\">B</text>\n  <text x=\"121\" y=\"36\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#0f172a\">C (45°)</text>\n  <text x=\"150\" y=\"144\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#b84f2d\" text-anchor=\"middle\">?</text>\n</svg>",
    "question": "Berapakah besar sudut pusat ∠AOB?",
    "options": [
      {
        "id": "A",
        "text": "110°"
      },
      {
        "id": "B",
        "text": "135°"
      },
      {
        "id": "C",
        "text": "60°"
      },
      {
        "id": "D",
        "text": "45°"
      },
      {
        "id": "E",
        "text": "90°"
      }
    ],
    "correct_answer": "E",
    "explanation": {
      "akal_sehat": "Jika menghadap busur yang sama, sudut PUSAT selalu DUA KALI LIPAT sudut KELILING: 2 x 45° = 90°.",
      "jebakan": "Sudut pusat berada di tengah lingkaran, bukaan sudutnya pasti lebih besar dari sudut keliling di pinggir.",
      "rumus_kunci": "Sudut Pusat = 2 x Sudut Keliling"
    }
  },
  {
    "subject": "mtk_wajib",
    "subject_label": "Matematika Wajib",
    "topic": "Deret Geometri Tak Hingga",
    "stimulus": "Sebuah bola dijatuhkan dari ketinggian 8 meter di atas lantai. Setiap kali memantul, bola mencapai ketinggian 3/5 dari tinggi sebelumnya sampai bola akhirnya berhenti.",
    "question": "Berapakah total panjang lintasan yang ditempuh bola tersebut hingga berhenti?",
    "options": [
      {
        "id": "A",
        "text": "46 meter"
      },
      {
        "id": "B",
        "text": "32 meter"
      },
      {
        "id": "C",
        "text": "22 meter"
      },
      {
        "id": "D",
        "text": "64 meter"
      },
      {
        "id": "E",
        "text": "16 meter"
      }
    ],
    "correct_answer": "B",
    "explanation": {
      "akal_sehat": "Trik kilat pantulan bola: kalikan tinggi awal (8 m) dengan (Penyebut + Pembilang) dibagi (Penyebut - Pembilang). Jadi: 8 x (5 + 3) / (5 - 3) = 32 meter.",
      "jebakan": "Jangan cuma hitung lintasan bola turunnya doang, lintasan naik setelah memantul juga harus dihitung!",
      "rumus_kunci": "Panjang Lintasan Bola Pantul = h x (b + a) / (b - a)"
    }
  },
  {
    "subject": "mtk_wajib",
    "subject_label": "Matematika Wajib",
    "topic": "Program Linear (Nilai Optimum Titik Pojok)",
    "stimulus": "Perhatikan daerah himpunan penyelesaian yang diarsir pada sistem koordinat Cartesius berikut.",
    "stimulus_svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 360 260\" class=\"w-full max-w-sm mx-auto\" style=\"max-width: 100%; height: auto; background: transparent;\">\n  \n    <defs>\n      <pattern id=\"dhp-hatch\" width=\"8\" height=\"8\" patternTransform=\"rotate(45 0 0)\" patternUnits=\"userSpaceOnUse\">\n        <line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"8\" stroke=\"#475569\" stroke-width=\"1.2\" opacity=\"0.6\"/>\n      </pattern>\n      <marker id=\"axis-arrow\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n        <path d=\"M 0 1.5 L 8 5 L 0 8.5 z\" fill=\"#1e293b\"/>\n      </marker>\n    </defs>\n    \n  <polygon points=\"45.0,225.0 190.0,225.0 103.0,129.0 45.0,97.0\" fill=\"url(#dhp-hatch)\" stroke=\"#334155\" stroke-width=\"1.5\" stroke-dasharray=\"3,2\" />\n  <line x1=\"30\" y1=\"225.0\" x2=\"350\" y2=\"225.0\" stroke=\"#1e293b\" stroke-width=\"1.8\" marker-end=\"url(#axis-arrow)\" />\n  <text x=\"356\" y=\"229.0\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\">X</text>\n  <line x1=\"45.0\" y1=\"240.0\" x2=\"45.0\" y2=\"15\" stroke=\"#1e293b\" stroke-width=\"1.8\" marker-end=\"url(#axis-arrow)\" />\n  <text x=\"41.0\" y=\"9\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">Y</text>\n  <text x=\"35.0\" y=\"240.0\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"600\" fill=\"#475569\">0</text>\n  <line x1=\"27.6\" y1=\"45.8\" x2=\"211.8\" y2=\"249.0\" stroke=\"#1e293b\" stroke-width=\"2\" />\n  <line x1=\"190.0\" y1=\"222.0\" x2=\"190.0\" y2=\"228.0\" stroke=\"#1e293b\" stroke-width=\"1.5\" />\n  <text x=\"190.0\" y=\"242.0\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">5</text>\n  <line x1=\"42.0\" y1=\"65.0\" x2=\"48.0\" y2=\"65.0\" stroke=\"#1e293b\" stroke-width=\"1.5\" />\n  <text x=\"37.0\" y=\"69.0\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"end\">5</text>\n  <line x1=\"17.2\" y1=\"81.6\" x2=\"311.8\" y2=\"244.2\" stroke=\"#334155\" stroke-width=\"2\" />\n  <line x1=\"277.0\" y1=\"222.0\" x2=\"277.0\" y2=\"228.0\" stroke=\"#1e293b\" stroke-width=\"1.5\" />\n  <text x=\"277.0\" y=\"242.0\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"middle\">8</text>\n  <line x1=\"42.0\" y1=\"97.0\" x2=\"48.0\" y2=\"97.0\" stroke=\"#1e293b\" stroke-width=\"1.5\" />\n  <text x=\"37.0\" y=\"101.0\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1e293b\" text-anchor=\"end\">4</text>\n  <circle cx=\"103.0\" cy=\"129.0\" r=\"3.5\" fill=\"#b84f2d\" stroke=\"#1e293b\" stroke-width=\"1.2\" />\n  <text x=\"109.0\" y=\"123.0\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">(2, 3)</text>\n</svg>",
    "question": "Nilai maksimum dari fungsi objektif Z = 5x + 4y pada daerah yang diarsir adalah...",
    "options": [
      {
        "id": "A",
        "text": "16"
      },
      {
        "id": "B",
        "text": "22"
      },
      {
        "id": "C",
        "text": "33"
      },
      {
        "id": "D",
        "text": "29"
      },
      {
        "id": "E",
        "text": "25"
      }
    ],
    "correct_answer": "E",
    "explanation": {
      "akal_sehat": "Uji seluruh titik pojok daerah arsiran: O(0,0) → 0, A(5,0) → 5(5) = 25, B(2,3) → 5(2) + 4(3) = 22, C(0,4) → 4(4) = 16. Nilai maksimumnya adalah 25.",
      "jebakan": "Jangan lupa menguji titik potong (2, 3); titik potong seringkali menghasilkan nilai maksimum fungsi tujuan.",
      "rumus_kunci": "Nilai optimum selalu dicapai pada salah satu titik pojok (ekstrem) daerah fisibel."
    }
  },
  {
    "subject": "mtk_wajib",
    "subject_label": "Matematika Wajib",
    "topic": "Deret Geometri Tak Hingga",
    "stimulus": "Sebuah bola dijatuhkan dari ketinggian 10 meter di atas lantai. Setiap kali memantul, bola mencapai ketinggian 1/2 dari tinggi sebelumnya sampai bola akhirnya berhenti.",
    "question": "Berapakah total panjang lintasan yang ditempuh bola tersebut hingga berhenti?",
    "options": [
      {
        "id": "A",
        "text": "60 meter"
      },
      {
        "id": "B",
        "text": "15 meter"
      },
      {
        "id": "C",
        "text": "44 meter"
      },
      {
        "id": "D",
        "text": "30 meter"
      },
      {
        "id": "E",
        "text": "20 meter"
      }
    ],
    "correct_answer": "D",
    "explanation": {
      "akal_sehat": "Trik kilat pantulan bola: kalikan tinggi awal (10 m) dengan (Penyebut + Pembilang) dibagi (Penyebut - Pembilang). Jadi: 10 x (2 + 1) / (2 - 1) = 30 meter.",
      "jebakan": "Jangan cuma hitung lintasan bola turunnya doang, lintasan naik setelah memantul juga harus dihitung!",
      "rumus_kunci": "Panjang Lintasan Bola Pantul = h x (b + a) / (b - a)"
    }
  },
  {
    "subject": "mtk_lanjut",
    "subject_label": "Matematika Tingkat Lanjut",
    "topic": "Turunan Fungsi (Nilai Ekstrim)",
    "stimulus": "Persamaan keuntungan sebuah UMKM dimodelkan oleh K(x) = -x² + 8x - 10 (dalam ratusan ribu rupiah), dengan x jumlah produksi.",
    "question": "Berapa unit produksi x agar keuntungan mencapai nilai maksimum?",
    "options": [
      {
        "id": "A",
        "text": "5"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "8"
      },
      {
        "id": "D",
        "text": "4"
      },
      {
        "id": "E",
        "text": "7"
      }
    ],
    "correct_answer": "D",
    "explanation": {
      "akal_sehat": "Puncak grafik tercapai saat turunan pertama bernilai nol (K'(x) = 0). Turunkan: -2x + 8 = 0 -> 2x = 8 -> x = 4 unit.",
      "jebakan": "Jangan masukkan x = 0, cari titik stasionernya.",
      "rumus_kunci": "Maksimum/Minimum -> f'(x) = 0"
    }
  },
  {
    "subject": "mtk_lanjut",
    "subject_label": "Matematika Tingkat Lanjut",
    "topic": "Geometri Analitik Lingkaran (Konstanta Jari-jari Kuadrat)",
    "stimulus": "Perhatikan diagram lingkaran pada bidang Cartesius berikut. Sebuah lingkaran memiliki titik pusat di P(2, -1) dan memiliki jari-jari r = 5.",
    "stimulus_svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 260\" class=\"w-full max-w-sm mx-auto\" style=\"max-width: 100%; height: auto; background: transparent;\">\n  <line x1=\"25\" y1=\"130\" x2=\"295\" y2=\"130\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  <line x1=\"160\" y1=\"240\" x2=\"160\" y2=\"20\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  <text x=\"305\" y=\"144\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#64748b\">X</text>\n  <text x=\"152\" y=\"15\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#64748b\">Y</text>\n  <circle cx=\"196.0\" cy=\"148.0\" r=\"90.0\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n  <circle cx=\"196.0\" cy=\"148.0\" r=\"3.5\" fill=\"#b84f2d\"/>\n  <text x=\"202.0\" y=\"142.0\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#b84f2d\">P(2, -1)</text>\n  <line x1=\"196.0\" y1=\"148.0\" x2=\"286.0\" y2=\"148.0\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\"/>\n  <text x=\"241.0\" y=\"144.0\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#64748b\">r = 5</text>\n</svg>",
    "question": "Jika persamaan lingkaran ditulis dalam bentuk standar (x - 2)² + (y + 1)² = K, berapakah nilai konstanta K?",
    "options": [
      {
        "id": "A",
        "text": "10"
      },
      {
        "id": "B",
        "text": "29"
      },
      {
        "id": "C",
        "text": "25"
      },
      {
        "id": "D",
        "text": "20"
      },
      {
        "id": "E",
        "text": "5"
      }
    ],
    "correct_answer": "C",
    "explanation": {
      "akal_sehat": "Persamaan baku lingkaran berpusat di (a, b) dengan jari-jari r adalah (x - a)² + (y - b)² = r². Karena r = 5, maka nilai konstanta K = r² = (5)² = 25.",
      "jebakan": "Ruas kanan persamaan lingkaran baku selalu merupakan kuadrat dari jari-jari (r²), bukan r!",
      "rumus_kunci": "(x - a)² + (y - b)² = r²"
    }
  },
  {
    "subject": "mtk_lanjut",
    "subject_label": "Matematika Tingkat Lanjut",
    "topic": "Matriks (Determinan 2x2)",
    "stimulus": "Diketahui matriks A = [[3, 2], [1, 4]].",
    "question": "Berapakah nilai determinan dari matriks A (det A)?",
    "options": [
      {
        "id": "A",
        "text": "14"
      },
      {
        "id": "B",
        "text": "13"
      },
      {
        "id": "C",
        "text": "6"
      },
      {
        "id": "D",
        "text": "17"
      },
      {
        "id": "E",
        "text": "10"
      }
    ],
    "correct_answer": "E",
    "explanation": {
      "akal_sehat": "Kali silang utama (3 x 4 = 12) DIKURANGI kali silang samping (2 x 1 = 2): 12 - 2 = 10.",
      "jebakan": "Silang samping dikurangkan, bukan dijumlahkan!",
      "rumus_kunci": "det A = ad - bc"
    }
  },
  {
    "subject": "mtk_lanjut",
    "subject_label": "Matematika Tingkat Lanjut",
    "topic": "Geometri Analitik Lingkaran (Jari-Jari Bentuk Umum)",
    "stimulus": "Perhatikan grafik lingkaran pada bidang Cartesius berikut. Diberikan persamaan lingkaran bentuk umum: x² + y² -8x -6y = 0.",
    "stimulus_svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 260\" class=\"w-full max-w-sm mx-auto\" style=\"max-width: 100%; height: auto; background: transparent;\">\n  <line x1=\"25\" y1=\"130\" x2=\"295\" y2=\"130\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  <line x1=\"160\" y1=\"240\" x2=\"160\" y2=\"20\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  <text x=\"305\" y=\"144\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#64748b\">X</text>\n  <text x=\"152\" y=\"15\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#64748b\">Y</text>\n  <circle cx=\"232.0\" cy=\"76.0\" r=\"90.0\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n  <circle cx=\"232.0\" cy=\"76.0\" r=\"3.5\" fill=\"#b84f2d\"/>\n  <text x=\"238.0\" y=\"70.0\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#b84f2d\">P(4, 3)</text>\n  <line x1=\"232.0\" y1=\"76.0\" x2=\"322.0\" y2=\"76.0\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\"/>\n  <text x=\"277.0\" y=\"72.0\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#64748b\">r = ?</text>\n</svg>",
    "question": "Berapakah panjang jari-jari (r) dari lingkaran tersebut?",
    "options": [
      {
        "id": "A",
        "text": "5 satuan"
      },
      {
        "id": "B",
        "text": "10 satuan"
      },
      {
        "id": "C",
        "text": "25 satuan"
      },
      {
        "id": "D",
        "text": "4 satuan"
      },
      {
        "id": "E",
        "text": "7 satuan"
      }
    ],
    "correct_answer": "A",
    "explanation": {
      "akal_sehat": "1. Pusat lingkaran P = (-A/2, -B/2) = (4, 3). 2. Kuadrat pusat = (4)² + (3)² = 25. 3. Jari-jari r = √(Pusat² - C) = √(25 - (0)) = √25 = 5 satuan.",
      "jebakan": "Ingat rumus jari-jari adalah akar dari (-A/2)² + (-B/2)² MINUS C (jangan sampai salah tanda minus).",
      "rumus_kunci": "r = √((-A/2)² + (-B/2)² - C)"
    }
  },
  {
    "subject": "mtk_lanjut",
    "subject_label": "Matematika Tingkat Lanjut",
    "topic": "Vektor (Saling Tegak Lurus)",
    "stimulus": "Perhatikan diagram pasangan vektor tegak lurus berikut. Dua vektor u = (1, 2) dan v = (x, -4) saling tegak lurus (ortogonal).",
    "stimulus_svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 300 240\" class=\"w-full max-w-sm mx-auto\" style=\"max-width: 100%; height: auto; background: transparent;\">\n  <defs>\n    <marker id=\"arr-u\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1.5 L 8 5 L 0 8.5 z\" fill=\"#b84f2d\"/>\n    </marker>\n    <marker id=\"arr-v\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1.5 L 8 5 L 0 8.5 z\" fill=\"#0284c7\"/>\n    </marker>\n    <marker id=\"arr-axis-vec\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1.5 L 8 5 L 0 8.5 z\" fill=\"#94a3b8\"/>\n    </marker>\n  </defs>\n  <!-- Axes -->\n  <line x1=\"25\" y1=\"120\" x2=\"275\" y2=\"120\" stroke=\"#94a3b8\" stroke-width=\"1.4\" marker-end=\"url(#arr-axis-vec)\"/>\n  <line x1=\"150\" y1=\"220\" x2=\"150\" y2=\"20\" stroke=\"#94a3b8\" stroke-width=\"1.4\" marker-end=\"url(#arr-axis-vec)\"/>\n  <text x=\"285\" y=\"134\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#64748b\">X</text>\n  <text x=\"142\" y=\"15\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#64748b\">Y</text>\n  <!-- Vector u -->\n  <line x1=\"150\" y1=\"120\" x2=\"161.9\" y2=\"96.2\" stroke=\"#b84f2d\" stroke-width=\"2.5\" marker-end=\"url(#arr-u)\"/>\n  <text x=\"167.9\" y=\"92.2\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#b84f2d\">u(1, 2)</text>\n  <!-- Vector v -->\n  <line x1=\"150\" y1=\"120\" x2=\"245.0\" y2=\"167.5\" stroke=\"#0284c7\" stroke-width=\"2.5\" marker-end=\"url(#arr-v)\"/>\n  <text x=\"251.0\" y=\"163.5\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#0284c7\">v(x, -4)</text>\n</svg>",
    "question": "Berapakah nilai x?",
    "options": [
      {
        "id": "A",
        "text": "6"
      },
      {
        "id": "B",
        "text": "-8"
      },
      {
        "id": "C",
        "text": "16"
      },
      {
        "id": "D",
        "text": "8"
      },
      {
        "id": "E",
        "text": "11"
      }
    ],
    "correct_answer": "D",
    "explanation": {
      "akal_sehat": "Dua vektor saling tegak lurus artinya DOT PRODUCT-NYA NOL! (u · v = 0). Kalikan: 1(x) + 2(-4) = 0 -> 1x - 8 = 0 -> 1x = 8 -> x = 8.",
      "jebakan": "Kata kuncinya: Tegak Lurus = Hasil Kali Titik (Dot Product) bernilai 0.",
      "rumus_kunci": "Vektor Tegak Lurus -> u · v = 0"
    }
  },
  {
    "subject": "mtk_lanjut",
    "subject_label": "Matematika Tingkat Lanjut",
    "topic": "Fungsi Trigonometri (Nilai Maksimum & Minimum)",
    "stimulus": "Perhatikan grafik osilasi cosinus berikut. Perhatikan fungsi gelombang f(x) = 4 cos(3x + 60°) + 2.",
    "stimulus_svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 360 200\" class=\"w-full max-w-sm mx-auto\" style=\"max-width: 100%; height: auto; background: transparent;\">\n  <!-- X / Center Axis -->\n  <line x1=\"35\" y1=\"100\" x2=\"345\" y2=\"100\" stroke=\"#1e293b\" stroke-width=\"1.8\" />\n  <text x=\"336\" y=\"114\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1e293b\">x</text>\n  <text x=\"37\" y=\"104\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"600\" fill=\"#64748b\" text-anchor=\"end\">2</text>\n  <!-- X Ticks -->\n  <line x1=\"45\" y1=\"96\" x2=\"45\" y2=\"104\" stroke=\"#1e293b\" stroke-width=\"1.2\"/>\n  <text x=\"45\" y=\"116\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"600\" fill=\"#64748b\" text-anchor=\"middle\">0</text>\n  <line x1=\"187.5\" y1=\"96\" x2=\"187.5\" y2=\"104\" stroke=\"#1e293b\" stroke-width=\"1.2\"/>\n  <text x=\"187.5\" y=\"116\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"600\" fill=\"#64748b\" text-anchor=\"middle\">π rad</text>\n  <line x1=\"330\" y1=\"96\" x2=\"330\" y2=\"104\" stroke=\"#1e293b\" stroke-width=\"1.2\"/>\n  <text x=\"330\" y=\"116\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"600\" fill=\"#64748b\" text-anchor=\"middle\">2π rad</text>\n  <!-- Peak and trough dashed lines -->\n  <line x1=\"45\" y1=\"65.0\" x2=\"330\" y2=\"65.0\" stroke=\"#94a3b8\" stroke-width=\"1\" stroke-dasharray=\"3,3\" />\n  <text x=\"37\" y=\"69.0\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#b84f2d\" text-anchor=\"end\">6</text>\n  <line x1=\"45\" y1=\"135.0\" x2=\"330\" y2=\"135.0\" stroke=\"#94a3b8\" stroke-width=\"1\" stroke-dasharray=\"3,3\" />\n  <text x=\"37\" y=\"139.0\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#b84f2d\" text-anchor=\"end\">-2</text>\n  <!-- Wave curve -->\n  <polyline points=\"45.0,65.0 49.0,66.2 52.9,69.7 56.9,75.3 60.8,82.5 64.8,90.9 68.8,100.0 72.7,109.1 76.7,117.5 80.6,124.7 84.6,130.3 88.5,133.8 92.5,135.0 96.5,133.8 100.4,130.3 104.4,124.7 108.3,117.5 112.3,109.1 116.2,100.0 120.2,90.9 124.2,82.5 128.1,75.3 132.1,69.7 136.0,66.2 140.0,65.0 144.0,66.2 147.9,69.7 151.9,75.3 155.8,82.5 159.8,90.9 163.8,100.0 167.7,109.1 171.7,117.5 175.6,124.7 179.6,130.3 183.5,133.8 187.5,135.0 191.5,133.8 195.4,130.3 199.4,124.7 203.3,117.5 207.3,109.1 211.2,100.0 215.2,90.9 219.2,82.5 223.1,75.3 227.1,69.7 231.0,66.2 235.0,65.0 239.0,66.2 242.9,69.7 246.9,75.3 250.8,82.5 254.8,90.9 258.8,100.0 262.7,109.1 266.7,117.5 270.6,124.7 274.6,130.3 278.5,133.8 282.5,135.0 286.5,133.8 290.4,130.3 294.4,124.7 298.3,117.5 302.3,109.1 306.2,100.0 310.2,90.9 314.2,82.5 318.1,75.3 322.1,69.7 326.0,66.2 330.0,65.0\" fill=\"none\" stroke=\"#b84f2d\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <text x=\"187.5\" y=\"25\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#0f172a\" text-anchor=\"middle\">Grafik Gelombang Cosinus</text>\n</svg>",
    "question": "Berapakah nilai maksimum dan nilai minimum berturut-turut yang dapat dicapai fungsi tersebut?",
    "options": [
      {
        "id": "A",
        "text": "Maksimum = 8, Minimum = -3"
      },
      {
        "id": "B",
        "text": "Maksimum = 8, Minimum = -8"
      },
      {
        "id": "C",
        "text": "Maksimum = 4, Minimum = -4"
      },
      {
        "id": "D",
        "text": "Maksimum = 6, Minimum = -2"
      },
      {
        "id": "E",
        "text": "Maksimum = 7, Minimum = -3"
      }
    ],
    "correct_answer": "D",
    "explanation": {
      "akal_sehat": "Nilai fungsi cosinus selalu berosilasi antara -1 sampai +1. Nilai Maksimum = 4(+1) + 2 = 6. Nilai Minimum = 4(-1) + 2 = -2.",
      "jebakan": "Jangan lupa menambahkan pergeseran vertikal konstanta C = 2 pada kedua nilai ekstrim!",
      "rumus_kunci": "y_max = |A| + C, dan y_min = -|A| + C"
    }
  },
  {
    "subject": "mtk_lanjut",
    "subject_label": "Matematika Tingkat Lanjut",
    "topic": "Matriks (Determinan 2x2)",
    "stimulus": "Diketahui matriks A = [[4, 2], [1, 3]].",
    "question": "Berapakah nilai determinan dari matriks A (det A)?",
    "options": [
      {
        "id": "A",
        "text": "13"
      },
      {
        "id": "B",
        "text": "10"
      },
      {
        "id": "C",
        "text": "17"
      },
      {
        "id": "D",
        "text": "14"
      },
      {
        "id": "E",
        "text": "6"
      }
    ],
    "correct_answer": "B",
    "explanation": {
      "akal_sehat": "Kali silang utama (4 x 3 = 12) DIKURANGI kali silang samping (2 x 1 = 2): 12 - 2 = 10.",
      "jebakan": "Silang samping dikurangkan, bukan dijumlahkan!",
      "rumus_kunci": "det A = ad - bc"
    }
  },
  {
    "subject": "mtk_lanjut",
    "subject_label": "Matematika Tingkat Lanjut",
    "topic": "Kalkulus (Limit Menuju Tak Hingga)",
    "stimulus": "Perhatikan bentuk limit: lim (x → ∞) [(12x² + 4x - 1) / (4x² + 5)].",
    "question": "Berapakah nilai dari limit menuju tak hingga tersebut?",
    "options": [
      {
        "id": "A",
        "text": "∞"
      },
      {
        "id": "B",
        "text": "0"
      },
      {
        "id": "C",
        "text": "6"
      },
      {
        "id": "D",
        "text": "3"
      },
      {
        "id": "E",
        "text": "5"
      }
    ],
    "correct_answer": "D",
    "explanation": {
      "akal_sehat": "Karena pangkat tertinggi di atas dan bawah sama-sama x², abaikan ekor angka kecil di belakangnya! Cukup bagi angka koefisien paling depan: 12 / 4 = 3.",
      "jebakan": "Tidak perlu membagi satu per satu suku dengan x kuadrat, langsung bandingkan koefisien pangkat tertinggi!",
      "rumus_kunci": "Limit Tak Hingga Pangkat Sama = Koefisien Atas / Koefisien Bawah"
    }
  },
  {
    "subject": "mtk_lanjut",
    "subject_label": "Matematika Tingkat Lanjut",
    "topic": "Polinomial (Arah Balik Konstanta)",
    "stimulus": "Suku banyak P(x) = x³ + px² - 4x + 6 dibagi oleh (x - 2) menghasilkan sisa 18.",
    "question": "Berapakah nilai konstanta p?",
    "options": [
      {
        "id": "A",
        "text": "6"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "18"
      },
      {
        "id": "D",
        "text": "9"
      },
      {
        "id": "E",
        "text": "3"
      }
    ],
    "correct_answer": "E",
    "explanation": {
      "akal_sehat": "Masukkan x = 2: P(2) = (2³) + p(2²) - 4(2) + 6 = 8 + 4p - 8 + 6 = 4p + 6. Karena sisanya adalah 18, maka 4p + 6 = 18 -> 4p = 12 -> p = 3.",
      "jebakan": "Sisa pembagian itu adalah hasil substitusi pembuat nol pembaginya.",
      "rumus_kunci": "P(k) = Sisa"
    }
  },
  {
    "subject": "mtk_lanjut",
    "subject_label": "Matematika Tingkat Lanjut",
    "topic": "Matriks (Matriks Singular)",
    "stimulus": "Diketahui matriks M = [[x, 6], [3, 2]]. Jika matriks M merupakan matriks singular (tidak memiliki invers).",
    "question": "Berapakah nilai x?",
    "options": [
      {
        "id": "A",
        "text": "18"
      },
      {
        "id": "B",
        "text": "11"
      },
      {
        "id": "C",
        "text": "9"
      },
      {
        "id": "D",
        "text": "8"
      },
      {
        "id": "E",
        "text": "14"
      }
    ],
    "correct_answer": "C",
    "explanation": {
      "akal_sehat": "Matriks singular itu artinya DETERMINANNYA NOL (det M = 0). Kali silang: (x x 2) - (6 x 3) = 0 -> 2x - 18 = 0 -> 2x = 18 -> x = 9.",
      "jebakan": "Kata 'singular' artinya determinan = 0.",
      "rumus_kunci": "Matriks Singular = Determinan bernilai 0 (ad - bc = 0)"
    }
  },
  {
    "subject": "mtk_lanjut",
    "subject_label": "Matematika Tingkat Lanjut",
    "topic": "Fungsi Trigonometri (Amplitudo Simpangan)",
    "stimulus": "Perhatikan grafik fungsi simpangan osilasi berikut. Sebuah gelombang osilasi dimodelkan dengan persamaan f(x) = 3 sin(3x - 60°) + 3.",
    "stimulus_svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 360 200\" class=\"w-full max-w-sm mx-auto\" style=\"max-width: 100%; height: auto; background: transparent;\">\n  <!-- X / Center Axis -->\n  <line x1=\"35\" y1=\"100\" x2=\"345\" y2=\"100\" stroke=\"#1e293b\" stroke-width=\"1.8\" />\n  <text x=\"336\" y=\"114\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1e293b\">x</text>\n  <text x=\"37\" y=\"104\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"600\" fill=\"#64748b\" text-anchor=\"end\">3</text>\n  <!-- X Ticks -->\n  <line x1=\"45\" y1=\"96\" x2=\"45\" y2=\"104\" stroke=\"#1e293b\" stroke-width=\"1.2\"/>\n  <text x=\"45\" y=\"116\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"600\" fill=\"#64748b\" text-anchor=\"middle\">0</text>\n  <line x1=\"187.5\" y1=\"96\" x2=\"187.5\" y2=\"104\" stroke=\"#1e293b\" stroke-width=\"1.2\"/>\n  <text x=\"187.5\" y=\"116\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"600\" fill=\"#64748b\" text-anchor=\"middle\">π rad</text>\n  <line x1=\"330\" y1=\"96\" x2=\"330\" y2=\"104\" stroke=\"#1e293b\" stroke-width=\"1.2\"/>\n  <text x=\"330\" y=\"116\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"600\" fill=\"#64748b\" text-anchor=\"middle\">2π rad</text>\n  <!-- Peak and trough dashed lines -->\n  <line x1=\"45\" y1=\"65.0\" x2=\"330\" y2=\"65.0\" stroke=\"#94a3b8\" stroke-width=\"1\" stroke-dasharray=\"3,3\" />\n  <text x=\"37\" y=\"69.0\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#b84f2d\" text-anchor=\"end\">6</text>\n  <line x1=\"45\" y1=\"135.0\" x2=\"330\" y2=\"135.0\" stroke=\"#94a3b8\" stroke-width=\"1\" stroke-dasharray=\"3,3\" />\n  <text x=\"37\" y=\"139.0\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#b84f2d\" text-anchor=\"end\">0</text>\n  <!-- Wave curve -->\n  <polyline points=\"45.0,100.0 49.0,90.9 52.9,82.5 56.9,75.3 60.8,69.7 64.8,66.2 68.8,65.0 72.7,66.2 76.7,69.7 80.6,75.3 84.6,82.5 88.5,90.9 92.5,100.0 96.5,109.1 100.4,117.5 104.4,124.7 108.3,130.3 112.3,133.8 116.2,135.0 120.2,133.8 124.2,130.3 128.1,124.7 132.1,117.5 136.0,109.1 140.0,100.0 144.0,90.9 147.9,82.5 151.9,75.3 155.8,69.7 159.8,66.2 163.8,65.0 167.7,66.2 171.7,69.7 175.6,75.3 179.6,82.5 183.5,90.9 187.5,100.0 191.5,109.1 195.4,117.5 199.4,124.7 203.3,130.3 207.3,133.8 211.2,135.0 215.2,133.8 219.2,130.3 223.1,124.7 227.1,117.5 231.0,109.1 235.0,100.0 239.0,90.9 242.9,82.5 246.9,75.3 250.8,69.7 254.8,66.2 258.8,65.0 262.7,66.2 266.7,69.7 270.6,75.3 274.6,82.5 278.5,90.9 282.5,100.0 286.5,109.1 290.4,117.5 294.4,124.7 298.3,130.3 302.3,133.8 306.2,135.0 310.2,133.8 314.2,130.3 318.1,124.7 322.1,117.5 326.0,109.1 330.0,100.0\" fill=\"none\" stroke=\"#b84f2d\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <text x=\"187.5\" y=\"25\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#0f172a\" text-anchor=\"middle\">Grafik Simpangan Gelombang</text>\n</svg>",
    "question": "Berapakah nilai amplitudo (simpangan terjauh dari garis tengah) fungsi tersebut?",
    "options": [
      {
        "id": "A",
        "text": "6 satuan"
      },
      {
        "id": "B",
        "text": "5 satuan"
      },
      {
        "id": "C",
        "text": "3 satuan"
      },
      {
        "id": "D",
        "text": "7 satuan"
      },
      {
        "id": "E",
        "text": "2 satuan"
      }
    ],
    "correct_answer": "C",
    "explanation": {
      "akal_sehat": "Amplitudo adalah nilai mutlak pengali di depan fungsi trigonometri: Amplitudo = |3| = 3 satuan.",
      "jebakan": "Amplitudo murni mengukur jarak puncak ke garis tengah osilasi, tidak terpengaruh pergeseran vertikal +{C}.",
      "rumus_kunci": "Amplitudo = |A|"
    }
  },
  {
    "subject": "mtk_lanjut",
    "subject_label": "Matematika Tingkat Lanjut",
    "topic": "Matriks (Matriks Singular)",
    "stimulus": "Diketahui matriks M = [[x, 9], [2, 3]]. Jika matriks M merupakan matriks singular (tidak memiliki invers).",
    "question": "Berapakah nilai x?",
    "options": [
      {
        "id": "A",
        "text": "5"
      },
      {
        "id": "B",
        "text": "8"
      },
      {
        "id": "C",
        "text": "6"
      },
      {
        "id": "D",
        "text": "12"
      },
      {
        "id": "E",
        "text": "18"
      }
    ],
    "correct_answer": "C",
    "explanation": {
      "akal_sehat": "Matriks singular itu artinya DETERMINANNYA NOL (det M = 0). Kali silang: (x x 3) - (9 x 2) = 0 -> 3x - 18 = 0 -> 3x = 18 -> x = 6.",
      "jebakan": "Kata 'singular' artinya determinan = 0.",
      "rumus_kunci": "Matriks Singular = Determinan bernilai 0 (ad - bc = 0)"
    }
  },
  {
    "subject": "mtk_lanjut",
    "subject_label": "Matematika Tingkat Lanjut",
    "topic": "Kalkulus (Limit Pemfaktoran 0/0)",
    "stimulus": "Perhatikan bentuk limit fungsi aljabar: lim (x → 4) [(x² - 16) / (x - 4)].",
    "question": "Berapakah nilai dari limit tersebut?",
    "options": [
      {
        "id": "A",
        "text": "16"
      },
      {
        "id": "B",
        "text": "0"
      },
      {
        "id": "C",
        "text": "4"
      },
      {
        "id": "D",
        "text": "8"
      },
      {
        "id": "E",
        "text": "12"
      }
    ],
    "correct_answer": "D",
    "explanation": {
      "akal_sehat": "Faktorkan pembilang: (x² - 16) = (x - 4)(x + 4). Coret pembuat nol (x - 4). Sisanya tinggal (x + 4). Masukkan x = 4: 4 + 4 = 8.",
      "jebakan": "Bentuk 0/0 wajib difaktorkan dan dicoret.",
      "rumus_kunci": "Coret faktor pembuat nol di atas dan bawah"
    }
  },
  {
    "subject": "mtk_lanjut",
    "subject_label": "Matematika Tingkat Lanjut",
    "topic": "Vektor (Perkalian Titik Dot Product)",
    "stimulus": "Perhatikan diagram Cartesius dua vektor berikut. Diketahui dua vektor: u = (2, 3) dan v = (3, 2).",
    "stimulus_svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 300 240\" class=\"w-full max-w-sm mx-auto\" style=\"max-width: 100%; height: auto; background: transparent;\">\n  <defs>\n    <marker id=\"arr-u\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1.5 L 8 5 L 0 8.5 z\" fill=\"#b84f2d\"/>\n    </marker>\n    <marker id=\"arr-v\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1.5 L 8 5 L 0 8.5 z\" fill=\"#0284c7\"/>\n    </marker>\n    <marker id=\"arr-axis-vec\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1.5 L 8 5 L 0 8.5 z\" fill=\"#94a3b8\"/>\n    </marker>\n  </defs>\n  <!-- Axes -->\n  <line x1=\"25\" y1=\"120\" x2=\"275\" y2=\"120\" stroke=\"#94a3b8\" stroke-width=\"1.4\" marker-end=\"url(#arr-axis-vec)\"/>\n  <line x1=\"150\" y1=\"220\" x2=\"150\" y2=\"20\" stroke=\"#94a3b8\" stroke-width=\"1.4\" marker-end=\"url(#arr-axis-vec)\"/>\n  <text x=\"285\" y=\"134\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#64748b\">X</text>\n  <text x=\"142\" y=\"15\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#64748b\">Y</text>\n  <!-- Vector u -->\n  <line x1=\"150\" y1=\"120\" x2=\"194.0\" y2=\"54.0\" stroke=\"#b84f2d\" stroke-width=\"2.5\" marker-end=\"url(#arr-u)\"/>\n  <text x=\"200.0\" y=\"50.0\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#b84f2d\">u(2, 3)</text>\n  <!-- Vector v -->\n  <line x1=\"150\" y1=\"120\" x2=\"216.0\" y2=\"76.0\" stroke=\"#0284c7\" stroke-width=\"2.5\" marker-end=\"url(#arr-v)\"/>\n  <text x=\"222.0\" y=\"72.0\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#0284c7\">v(3, 2)</text>\n</svg>",
    "question": "Berapakah hasil perkalian titik (u · v)?",
    "options": [
      {
        "id": "A",
        "text": "13"
      },
      {
        "id": "B",
        "text": "17"
      },
      {
        "id": "C",
        "text": "9"
      },
      {
        "id": "D",
        "text": "10"
      },
      {
        "id": "E",
        "text": "12"
      }
    ],
    "correct_answer": "E",
    "explanation": {
      "akal_sehat": "Kalikan komponen seposisi: sumbu X (2 x 3 = 6) ditambah sumbu Y (3 x 2 = 6) = 12.",
      "jebakan": "Hasil dot product berupa ANGKA skalar, bukan vektor lagi.",
      "rumus_kunci": "u · v = u_x v_x + u_y v_y"
    }
  },
  {
    "subject": "mtk_lanjut",
    "subject_label": "Matematika Tingkat Lanjut",
    "topic": "Transformasi Geometri (Translasi Garis)",
    "stimulus": "Sebuah garis lurus memiliki persamaan 2x - 1y + 10 = 0. Garis tersebut ditranslasikan oleh matriks T = (2, -2).",
    "question": "Berapakah persamaan garis bayangan hasil translasi tersebut?",
    "options": [
      {
        "id": "A",
        "text": "2x - 1y - 2 = 0"
      },
      {
        "id": "B",
        "text": "2x - 1y + 4 = 0"
      },
      {
        "id": "C",
        "text": "2x - 1y + 10 = 0"
      },
      {
        "id": "D",
        "text": "2x - 1y + 16 = 0"
      },
      {
        "id": "E",
        "text": "2x + 1y + 4 = 0"
      }
    ],
    "correct_answer": "B",
    "explanation": {
      "akal_sehat": "Translasi titik: x' = x + 2 -> x = x' - 2, dan y' = y + -2 -> y = y' - -2. Substitusikan ke garis awal dan sederhanakan: diperoleh 2x - 1y + 4 = 0.",
      "jebakan": "Jangan menambahkan nilai p dan q langsung ke konstanta c; substitusi variabel selalu berlawanan tanda: x diganti (x - p)!",
      "rumus_kunci": "Bayangan Translasi: f(x - p, y - q) = 0"
    }
  },
  {
    "subject": "mtk_lanjut",
    "subject_label": "Matematika Tingkat Lanjut",
    "topic": "Geometri Analitik Lingkaran (Garis Singgung di Titik Singgung)",
    "stimulus": "Perhatikan diagram garis singgung lingkaran berikut. Titik P(4, -3) terletak tepat pada lingkaran dengan persamaan x² + y² = 25.",
    "stimulus_svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 260\" class=\"w-full max-w-sm mx-auto\" style=\"max-width: 100%; height: auto; background: transparent;\">\n  <line x1=\"25\" y1=\"130\" x2=\"295\" y2=\"130\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  <line x1=\"160\" y1=\"240\" x2=\"160\" y2=\"20\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  <text x=\"305\" y=\"144\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#64748b\">X</text>\n  <text x=\"152\" y=\"15\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#64748b\">Y</text>\n  <circle cx=\"160.0\" cy=\"130.0\" r=\"90.0\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n  <circle cx=\"160.0\" cy=\"130.0\" r=\"3.5\" fill=\"#b84f2d\"/>\n  <text x=\"166.0\" y=\"124.0\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#b84f2d\">P(0, 0)</text>\n  <line x1=\"160.0\" y1=\"130.0\" x2=\"250.0\" y2=\"130.0\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\"/>\n  <text x=\"205.0\" y=\"126.0\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#64748b\">r = 5</text>\n  <circle cx=\"232.0\" cy=\"184.0\" r=\"4\" fill=\"#0284c7\"/>\n  <text x=\"238.0\" y=\"178.0\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#0284c7\">(4, -3)</text>\n  <line x1=\"202.0\" y1=\"224.0\" x2=\"262.0\" y2=\"144.0\" stroke=\"#0284c7\" stroke-width=\"1.8\"/>\n</svg>",
    "question": "Berapakah persamaan garis singgung yang melalui titik P tersebut?",
    "options": [
      {
        "id": "A",
        "text": "4x + 3y = 25"
      },
      {
        "id": "B",
        "text": "4x + 3y = 35"
      },
      {
        "id": "C",
        "text": "4x - 3y = 5"
      },
      {
        "id": "D",
        "text": "4x - 3y = 25"
      },
      {
        "id": "E",
        "text": "-3x + 4y = 25"
      }
    ],
    "correct_answer": "D",
    "explanation": {
      "akal_sehat": "Rumus bagi adil garis singgung lingkaran x² + y² = r² pada titik (x₁, y₁): x₁·x + y₁·y = r². Substitusi langsung: (4)x + (-3)y = 25 -> 4x - 3y = 25.",
      "jebakan": "Tidak perlu turunan rumit; untuk titik tepat pada lingkaran, gunakan metode 'Bagi Adil'!",
      "rumus_kunci": "Garis Singgung Lingkaran Pusat O: x₁·x + y₁·y = r²"
    }
  },
  {
    "subject": "mtk_lanjut",
    "subject_label": "Matematika Tingkat Lanjut",
    "topic": "Kalkulus (Limit Menuju Tak Hingga)",
    "stimulus": "Perhatikan bentuk limit: lim (x → ∞) [(8x² + 4x - 1) / (2x² + 5)].",
    "question": "Berapakah nilai dari limit menuju tak hingga tersebut?",
    "options": [
      {
        "id": "A",
        "text": "8"
      },
      {
        "id": "B",
        "text": "6"
      },
      {
        "id": "C",
        "text": "∞"
      },
      {
        "id": "D",
        "text": "0"
      },
      {
        "id": "E",
        "text": "4"
      }
    ],
    "correct_answer": "E",
    "explanation": {
      "akal_sehat": "Karena pangkat tertinggi di atas dan bawah sama-sama x², abaikan ekor angka kecil di belakangnya! Cukup bagi angka koefisien paling depan: 8 / 2 = 4.",
      "jebakan": "Tidak perlu membagi satu per satu suku dengan x kuadrat, langsung bandingkan koefisien pangkat tertinggi!",
      "rumus_kunci": "Limit Tak Hingga Pangkat Sama = Koefisien Atas / Koefisien Bawah"
    }
  },
  {
    "subject": "mtk_lanjut",
    "subject_label": "Matematika Tingkat Lanjut",
    "topic": "Kalkulus (Integral Tentu)",
    "stimulus": "Perhatikan persamaan integral tentu: ∫ dari 1 sampai 2 untuk fungsi (2x + 2) dx.",
    "question": "Berapakah nilai hasil integral tentu tersebut?",
    "options": [
      {
        "id": "A",
        "text": "8"
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "2"
      },
      {
        "id": "D",
        "text": "9"
      },
      {
        "id": "E",
        "text": "10"
      }
    ],
    "correct_answer": "B",
    "explanation": {
      "akal_sehat": "Integralkan fungsinya: [x² + 2x]. Batas atas (2): 8. Batas bawah (1): 3. Kurangkan: 8 - 3 = 5.",
      "jebakan": "Jangan lupa kurangkan nilai fungsi di batas bawahnya!",
      "rumus_kunci": "Integral Tentu = F(atas) - F(bawah)"
    }
  },
  {
    "subject": "mtk_lanjut",
    "subject_label": "Matematika Tingkat Lanjut",
    "topic": "Geometri Analitik Lingkaran (Jari-Jari Bentuk Umum)",
    "stimulus": "Perhatikan grafik lingkaran pada bidang Cartesius berikut. Diberikan persamaan lingkaran bentuk umum: x² + y² -4x -6y - 3 = 0.",
    "stimulus_svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 260\" class=\"w-full max-w-sm mx-auto\" style=\"max-width: 100%; height: auto; background: transparent;\">\n  <line x1=\"25\" y1=\"130\" x2=\"295\" y2=\"130\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  <line x1=\"160\" y1=\"240\" x2=\"160\" y2=\"20\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  <text x=\"305\" y=\"144\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#64748b\">X</text>\n  <text x=\"152\" y=\"15\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#64748b\">Y</text>\n  <circle cx=\"196.0\" cy=\"76.0\" r=\"72.0\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n  <circle cx=\"196.0\" cy=\"76.0\" r=\"3.5\" fill=\"#b84f2d\"/>\n  <text x=\"202.0\" y=\"70.0\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#b84f2d\">P(2, 3)</text>\n  <line x1=\"196.0\" y1=\"76.0\" x2=\"268.0\" y2=\"76.0\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\"/>\n  <text x=\"232.0\" y=\"72.0\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#64748b\">r = ?</text>\n</svg>",
    "question": "Berapakah panjang jari-jari (r) dari lingkaran tersebut?",
    "options": [
      {
        "id": "A",
        "text": "3 satuan"
      },
      {
        "id": "B",
        "text": "8 satuan"
      },
      {
        "id": "C",
        "text": "16 satuan"
      },
      {
        "id": "D",
        "text": "6 satuan"
      },
      {
        "id": "E",
        "text": "4 satuan"
      }
    ],
    "correct_answer": "E",
    "explanation": {
      "akal_sehat": "1. Pusat lingkaran P = (-A/2, -B/2) = (2, 3). 2. Kuadrat pusat = (2)² + (3)² = 13. 3. Jari-jari r = √(Pusat² - C) = √(13 - (-3)) = √16 = 4 satuan.",
      "jebakan": "Ingat rumus jari-jari adalah akar dari (-A/2)² + (-B/2)² MINUS C (jangan sampai salah tanda minus).",
      "rumus_kunci": "r = √((-A/2)² + (-B/2)² - C)"
    }
  },
  {
    "subject": "mtk_lanjut",
    "subject_label": "Matematika Tingkat Lanjut",
    "topic": "Geometri Analitik Lingkaran (Garis Singgung di Titik Singgung)",
    "stimulus": "Perhatikan diagram garis singgung lingkaran berikut. Titik P(3, 4) terletak tepat pada lingkaran dengan persamaan x² + y² = 25.",
    "stimulus_svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 260\" class=\"w-full max-w-sm mx-auto\" style=\"max-width: 100%; height: auto; background: transparent;\">\n  <line x1=\"25\" y1=\"130\" x2=\"295\" y2=\"130\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  <line x1=\"160\" y1=\"240\" x2=\"160\" y2=\"20\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  <text x=\"305\" y=\"144\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#64748b\">X</text>\n  <text x=\"152\" y=\"15\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#64748b\">Y</text>\n  <circle cx=\"160.0\" cy=\"130.0\" r=\"90.0\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n  <circle cx=\"160.0\" cy=\"130.0\" r=\"3.5\" fill=\"#b84f2d\"/>\n  <text x=\"166.0\" y=\"124.0\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#b84f2d\">P(0, 0)</text>\n  <line x1=\"160.0\" y1=\"130.0\" x2=\"250.0\" y2=\"130.0\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\"/>\n  <text x=\"205.0\" y=\"126.0\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#64748b\">r = 5</text>\n  <circle cx=\"214.0\" cy=\"58.0\" r=\"4\" fill=\"#0284c7\"/>\n  <text x=\"220.0\" y=\"52.0\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#0284c7\">(3, 4)</text>\n  <line x1=\"254.0\" y1=\"88.0\" x2=\"174.0\" y2=\"28.0\" stroke=\"#0284c7\" stroke-width=\"1.8\"/>\n</svg>",
    "question": "Berapakah persamaan garis singgung yang melalui titik P tersebut?",
    "options": [
      {
        "id": "A",
        "text": "4x + 3y = 25"
      },
      {
        "id": "B",
        "text": "3x - 4y = 25"
      },
      {
        "id": "C",
        "text": "3x + 4y = 35"
      },
      {
        "id": "D",
        "text": "3x + 4y = 25"
      },
      {
        "id": "E",
        "text": "3x + 4y = 5"
      }
    ],
    "correct_answer": "D",
    "explanation": {
      "akal_sehat": "Rumus bagi adil garis singgung lingkaran x² + y² = r² pada titik (x₁, y₁): x₁·x + y₁·y = r². Substitusi langsung: (3)x + (4)y = 25 -> 3x + 4y = 25.",
      "jebakan": "Tidak perlu turunan rumit; untuk titik tepat pada lingkaran, gunakan metode 'Bagi Adil'!",
      "rumus_kunci": "Garis Singgung Lingkaran Pusat O: x₁·x + y₁·y = r²"
    }
  },
  {
    "subject": "mtk_lanjut",
    "subject_label": "Matematika Tingkat Lanjut",
    "topic": "Fungsi Trigonometri (Nilai Maksimum & Minimum)",
    "stimulus": "Perhatikan grafik osilasi cosinus berikut. Perhatikan fungsi gelombang f(x) = 4 cos(2x + 60°) + 4.",
    "stimulus_svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 360 200\" class=\"w-full max-w-sm mx-auto\" style=\"max-width: 100%; height: auto; background: transparent;\">\n  <!-- X / Center Axis -->\n  <line x1=\"35\" y1=\"100\" x2=\"345\" y2=\"100\" stroke=\"#1e293b\" stroke-width=\"1.8\" />\n  <text x=\"336\" y=\"114\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1e293b\">x</text>\n  <text x=\"37\" y=\"104\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"600\" fill=\"#64748b\" text-anchor=\"end\">4</text>\n  <!-- X Ticks -->\n  <line x1=\"45\" y1=\"96\" x2=\"45\" y2=\"104\" stroke=\"#1e293b\" stroke-width=\"1.2\"/>\n  <text x=\"45\" y=\"116\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"600\" fill=\"#64748b\" text-anchor=\"middle\">0</text>\n  <line x1=\"187.5\" y1=\"96\" x2=\"187.5\" y2=\"104\" stroke=\"#1e293b\" stroke-width=\"1.2\"/>\n  <text x=\"187.5\" y=\"116\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"600\" fill=\"#64748b\" text-anchor=\"middle\">π rad</text>\n  <line x1=\"330\" y1=\"96\" x2=\"330\" y2=\"104\" stroke=\"#1e293b\" stroke-width=\"1.2\"/>\n  <text x=\"330\" y=\"116\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"600\" fill=\"#64748b\" text-anchor=\"middle\">2π rad</text>\n  <!-- Peak and trough dashed lines -->\n  <line x1=\"45\" y1=\"65.0\" x2=\"330\" y2=\"65.0\" stroke=\"#94a3b8\" stroke-width=\"1\" stroke-dasharray=\"3,3\" />\n  <text x=\"37\" y=\"69.0\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#b84f2d\" text-anchor=\"end\">8</text>\n  <line x1=\"45\" y1=\"135.0\" x2=\"330\" y2=\"135.0\" stroke=\"#94a3b8\" stroke-width=\"1\" stroke-dasharray=\"3,3\" />\n  <text x=\"37\" y=\"139.0\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#b84f2d\" text-anchor=\"end\">0</text>\n  <!-- Wave curve -->\n  <polyline points=\"45.0,65.0 49.0,65.5 52.9,67.1 56.9,69.7 60.8,73.2 64.8,77.5 68.8,82.5 72.7,88.0 76.7,93.9 80.6,100.0 84.6,106.1 88.5,112.0 92.5,117.5 96.5,122.5 100.4,126.8 104.4,130.3 108.3,132.9 112.3,134.5 116.2,135.0 120.2,134.5 124.2,132.9 128.1,130.3 132.1,126.8 136.0,122.5 140.0,117.5 144.0,112.0 147.9,106.1 151.9,100.0 155.8,93.9 159.8,88.0 163.8,82.5 167.7,77.5 171.7,73.2 175.6,69.7 179.6,67.1 183.5,65.5 187.5,65.0 191.5,65.5 195.4,67.1 199.4,69.7 203.3,73.2 207.3,77.5 211.2,82.5 215.2,88.0 219.2,93.9 223.1,100.0 227.1,106.1 231.0,112.0 235.0,117.5 239.0,122.5 242.9,126.8 246.9,130.3 250.8,132.9 254.8,134.5 258.8,135.0 262.7,134.5 266.7,132.9 270.6,130.3 274.6,126.8 278.5,122.5 282.5,117.5 286.5,112.0 290.4,106.1 294.4,100.0 298.3,93.9 302.3,88.0 306.2,82.5 310.2,77.5 314.2,73.2 318.1,69.7 322.1,67.1 326.0,65.5 330.0,65.0\" fill=\"none\" stroke=\"#b84f2d\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <text x=\"187.5\" y=\"25\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#0f172a\" text-anchor=\"middle\">Grafik Gelombang Cosinus</text>\n</svg>",
    "question": "Berapakah nilai maksimum dan nilai minimum berturut-turut yang dapat dicapai fungsi tersebut?",
    "options": [
      {
        "id": "A",
        "text": "Maksimum = 4, Minimum = -4"
      },
      {
        "id": "B",
        "text": "Maksimum = 10, Minimum = -1"
      },
      {
        "id": "C",
        "text": "Maksimum = 9, Minimum = -1"
      },
      {
        "id": "D",
        "text": "Maksimum = 8, Minimum = -8"
      },
      {
        "id": "E",
        "text": "Maksimum = 8, Minimum = 0"
      }
    ],
    "correct_answer": "E",
    "explanation": {
      "akal_sehat": "Nilai fungsi cosinus selalu berosilasi antara -1 sampai +1. Nilai Maksimum = 4(+1) + 4 = 8. Nilai Minimum = 4(-1) + 4 = 0.",
      "jebakan": "Jangan lupa menambahkan pergeseran vertikal konstanta C = 4 pada kedua nilai ekstrim!",
      "rumus_kunci": "y_max = |A| + C, dan y_min = -|A| + C"
    }
  },
  {
    "subject": "mtk_lanjut",
    "subject_label": "Matematika Tingkat Lanjut",
    "topic": "Vektor (Perkalian Titik Dot Product)",
    "stimulus": "Perhatikan diagram Cartesius dua vektor berikut. Diketahui dua vektor: u = (3, 1) dan v = (3, -1).",
    "stimulus_svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 300 240\" class=\"w-full max-w-sm mx-auto\" style=\"max-width: 100%; height: auto; background: transparent;\">\n  <defs>\n    <marker id=\"arr-u\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1.5 L 8 5 L 0 8.5 z\" fill=\"#b84f2d\"/>\n    </marker>\n    <marker id=\"arr-v\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1.5 L 8 5 L 0 8.5 z\" fill=\"#0284c7\"/>\n    </marker>\n    <marker id=\"arr-axis-vec\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1.5 L 8 5 L 0 8.5 z\" fill=\"#94a3b8\"/>\n    </marker>\n  </defs>\n  <!-- Axes -->\n  <line x1=\"25\" y1=\"120\" x2=\"275\" y2=\"120\" stroke=\"#94a3b8\" stroke-width=\"1.4\" marker-end=\"url(#arr-axis-vec)\"/>\n  <line x1=\"150\" y1=\"220\" x2=\"150\" y2=\"20\" stroke=\"#94a3b8\" stroke-width=\"1.4\" marker-end=\"url(#arr-axis-vec)\"/>\n  <text x=\"285\" y=\"134\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#64748b\">X</text>\n  <text x=\"142\" y=\"15\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#64748b\">Y</text>\n  <!-- Vector u -->\n  <line x1=\"150\" y1=\"120\" x2=\"216.0\" y2=\"98.0\" stroke=\"#b84f2d\" stroke-width=\"2.5\" marker-end=\"url(#arr-u)\"/>\n  <text x=\"222.0\" y=\"94.0\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#b84f2d\">u(3, 1)</text>\n  <!-- Vector v -->\n  <line x1=\"150\" y1=\"120\" x2=\"216.0\" y2=\"142.0\" stroke=\"#0284c7\" stroke-width=\"2.5\" marker-end=\"url(#arr-v)\"/>\n  <text x=\"222.0\" y=\"138.0\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#0284c7\">v(3, -1)</text>\n</svg>",
    "question": "Berapakah hasil perkalian titik (u · v)?",
    "options": [
      {
        "id": "A",
        "text": "5"
      },
      {
        "id": "B",
        "text": "0"
      },
      {
        "id": "C",
        "text": "6"
      },
      {
        "id": "D",
        "text": "13"
      },
      {
        "id": "E",
        "text": "8"
      }
    ],
    "correct_answer": "E",
    "explanation": {
      "akal_sehat": "Kalikan komponen seposisi: sumbu X (3 x 3 = 9) ditambah sumbu Y (1 x -1 = -1) = 8.",
      "jebakan": "Hasil dot product berupa ANGKA skalar, bukan vektor lagi.",
      "rumus_kunci": "u · v = u_x v_x + u_y v_y"
    }
  },
  {
    "subject": "mtk_lanjut",
    "subject_label": "Matematika Tingkat Lanjut",
    "topic": "Geometri Analitik Lingkaran (Garis Singgung di Titik Singgung)",
    "stimulus": "Perhatikan diagram garis singgung lingkaran berikut. Titik P(3, 4) terletak tepat pada lingkaran dengan persamaan x² + y² = 25.",
    "stimulus_svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 260\" class=\"w-full max-w-sm mx-auto\" style=\"max-width: 100%; height: auto; background: transparent;\">\n  <line x1=\"25\" y1=\"130\" x2=\"295\" y2=\"130\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  <line x1=\"160\" y1=\"240\" x2=\"160\" y2=\"20\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n  <text x=\"305\" y=\"144\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#64748b\">X</text>\n  <text x=\"152\" y=\"15\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#64748b\">Y</text>\n  <circle cx=\"160.0\" cy=\"130.0\" r=\"90.0\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"2\"/>\n  <circle cx=\"160.0\" cy=\"130.0\" r=\"3.5\" fill=\"#b84f2d\"/>\n  <text x=\"166.0\" y=\"124.0\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#b84f2d\">P(0, 0)</text>\n  <line x1=\"160.0\" y1=\"130.0\" x2=\"250.0\" y2=\"130.0\" stroke=\"#64748b\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\"/>\n  <text x=\"205.0\" y=\"126.0\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#64748b\">r = 5</text>\n  <circle cx=\"214.0\" cy=\"58.0\" r=\"4\" fill=\"#0284c7\"/>\n  <text x=\"220.0\" y=\"52.0\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#0284c7\">(3, 4)</text>\n  <line x1=\"254.0\" y1=\"88.0\" x2=\"174.0\" y2=\"28.0\" stroke=\"#0284c7\" stroke-width=\"1.8\"/>\n</svg>",
    "question": "Berapakah persamaan garis singgung yang melalui titik P tersebut?",
    "options": [
      {
        "id": "A",
        "text": "3x + 4y = 25"
      },
      {
        "id": "B",
        "text": "3x + 4y = 5"
      },
      {
        "id": "C",
        "text": "3x - 4y = 25"
      },
      {
        "id": "D",
        "text": "3x + 4y = 35"
      },
      {
        "id": "E",
        "text": "4x + 3y = 25"
      }
    ],
    "correct_answer": "A",
    "explanation": {
      "akal_sehat": "Rumus bagi adil garis singgung lingkaran x² + y² = r² pada titik (x₁, y₁): x₁·x + y₁·y = r². Substitusi langsung: (3)x + (4)y = 25 -> 3x + 4y = 25.",
      "jebakan": "Tidak perlu turunan rumit; untuk titik tepat pada lingkaran, gunakan metode 'Bagi Adil'!",
      "rumus_kunci": "Garis Singgung Lingkaran Pusat O: x₁·x + y₁·y = r²"
    }
  },
  {
    "subject": "mtk_lanjut",
    "subject_label": "Matematika Tingkat Lanjut",
    "topic": "Vektor (Panjang Vektor 3D)",
    "stimulus": "Sebuah vektor pada ruang tiga dimensi dinyatakan oleh koordinat: v = (1i + 4j + 8k).",
    "question": "Berapakah panjang (modulus) dari vektor v tersebut (|v|)?",
    "options": [
      {
        "id": "A",
        "text": "9"
      },
      {
        "id": "B",
        "text": "7"
      },
      {
        "id": "C",
        "text": "18"
      },
      {
        "id": "D",
        "text": "12"
      },
      {
        "id": "E",
        "text": "13"
      }
    ],
    "correct_answer": "A",
    "explanation": {
      "akal_sehat": "Pythagoras 3D: |v| = √(1² + 4² + 8²) = √(1 + 16 + 64) = √81 = 9.",
      "jebakan": "Kuadratkan dulu semua sumbunya sebelum ditarik akar.",
      "rumus_kunci": "|v| = √(x² + y² + z²)"
    }
  },
  {
    "subject": "mtk_lanjut",
    "subject_label": "Matematika Tingkat Lanjut",
    "topic": "Vektor (Saling Tegak Lurus)",
    "stimulus": "Perhatikan diagram pasangan vektor tegak lurus berikut. Dua vektor u = (3, 2) dan v = (x, -6) saling tegak lurus (ortogonal).",
    "stimulus_svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 300 240\" class=\"w-full max-w-sm mx-auto\" style=\"max-width: 100%; height: auto; background: transparent;\">\n  <defs>\n    <marker id=\"arr-u\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1.5 L 8 5 L 0 8.5 z\" fill=\"#b84f2d\"/>\n    </marker>\n    <marker id=\"arr-v\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1.5 L 8 5 L 0 8.5 z\" fill=\"#0284c7\"/>\n    </marker>\n    <marker id=\"arr-axis-vec\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1.5 L 8 5 L 0 8.5 z\" fill=\"#94a3b8\"/>\n    </marker>\n  </defs>\n  <!-- Axes -->\n  <line x1=\"25\" y1=\"120\" x2=\"275\" y2=\"120\" stroke=\"#94a3b8\" stroke-width=\"1.4\" marker-end=\"url(#arr-axis-vec)\"/>\n  <line x1=\"150\" y1=\"220\" x2=\"150\" y2=\"20\" stroke=\"#94a3b8\" stroke-width=\"1.4\" marker-end=\"url(#arr-axis-vec)\"/>\n  <text x=\"285\" y=\"134\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#64748b\">X</text>\n  <text x=\"142\" y=\"15\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#64748b\">Y</text>\n  <!-- Vector u -->\n  <line x1=\"150\" y1=\"120\" x2=\"197.5\" y2=\"88.3\" stroke=\"#b84f2d\" stroke-width=\"2.5\" marker-end=\"url(#arr-u)\"/>\n  <text x=\"203.5\" y=\"84.3\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#b84f2d\">u(3, 2)</text>\n  <!-- Vector v -->\n  <line x1=\"150\" y1=\"120\" x2=\"213.3\" y2=\"215.0\" stroke=\"#0284c7\" stroke-width=\"2.5\" marker-end=\"url(#arr-v)\"/>\n  <text x=\"219.3\" y=\"211.0\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"800\" fill=\"#0284c7\">v(x, -6)</text>\n</svg>",
    "question": "Berapakah nilai x?",
    "options": [
      {
        "id": "A",
        "text": "7"
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "4"
      },
      {
        "id": "D",
        "text": "-4"
      },
      {
        "id": "E",
        "text": "8"
      }
    ],
    "correct_answer": "C",
    "explanation": {
      "akal_sehat": "Dua vektor saling tegak lurus artinya DOT PRODUCT-NYA NOL! (u · v = 0). Kalikan: 3(x) + 2(-6) = 0 -> 3x - 12 = 0 -> 3x = 12 -> x = 4.",
      "jebakan": "Kata kuncinya: Tegak Lurus = Hasil Kali Titik (Dot Product) bernilai 0.",
      "rumus_kunci": "Vektor Tegak Lurus -> u · v = 0"
    }
  }
];
