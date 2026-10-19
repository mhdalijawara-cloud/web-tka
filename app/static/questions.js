// Bank Soal TKA Resmi (Fisika, MTK Wajib, MTK Lanjut, B. Indonesia, B. Inggris)
const QUESTIONS_DATA = [
  // ================= FISIKA =================
  {
    id: "fis_01",
    subject: "fisika",
    subject_label: "Fisika",
    topic: "Kinematika Gerak (Grafik v - t)",
    type: "single",
    stimulus: "Sebuah mobil bergerak lurus. Kecepatan naik dari 0 ke 20 m/s dalam 4 detik, melaju stabil 20 m/s selama 6 detik (detik 4 ke 10), lalu direm hingga berhenti di detik ke-12.",
    question: "Berapa jarak yang ditempuh mobil selama melaju dengan kecepatan stabil (konstan)?",
    options: [
      { id: "A", text: "80 meter" },
      { id: "B", text: "120 meter" },
      { id: "C", text: "180 meter" },
      { id: "D", text: "200 meter" },
      { id: "E", text: "240 meter" }
    ],
    correct_answer: "B",
    explanation: {
      akal_sehat: "Kecepatan stabil cuma berlangsung dari detik ke-4 sampai detik ke-10, artinya mobil hanya melaju stabil selama 6 detik (10 - 4 = 6). Jarak = 20 m/s x 6 s = 120 meter.",
      jebakan: "Opsi D (200 m) adalah jebakan klasik bagi yang mengalikan 20 dengan angka 10 di sumbu waktu.",
      rumus_kunci: "Jarak Kecepatan Konstan = Kecepatan x Durasi Interval (Δt = t_akhir - t_awal)"
    }
  },
  {
    id: "fis_02",
    subject: "fisika",
    subject_label: "Fisika",
    topic: "Dinamika Gerak (Hukum II Newton)",
    type: "single",
    stimulus: "Sebuah balok bermassa 4 kg berada di atas lantai datar licin (tanpa gesekan). Balok ditarik oleh gaya horizontal F1 = 30 N ke kanan dan dihambat oleh gaya F2 = 10 N ke kiri.",
    question: "Berapakah besar percepatan gerak balok tersebut?",
    options: [
      { id: "A", text: "2,5 m/s²" },
      { id: "B", text: "5,0 m/s²" },
      { id: "C", text: "7,5 m/s²" },
      { id: "D", text: "10,0 m/s²" },
      { id: "E", text: "20,0 m/s²" }
    ],
    correct_answer: "B",
    explanation: {
      akal_sehat: "Tarik ke kanan 30 N, ditahan ke kiri 10 N, berarti gaya menangnya cuma 20 N ke kanan (30 - 10 = 20). Beban massanya 4 kg. Percepatan = Gaya Menang / Massa = 20 / 4 = 5 m/s².",
      jebakan: "Opsi D (10 m/s²) terjadi jika gaya kedua dijumlahkan bukannya dikurangi, atau Opsi C (7,5 m/s²) jika langsung membagi 30 / 4 tanpa menghitung gaya lawan.",
      rumus_kunci: "a = ΣF / m = (F_kanan - F_kiri) / m"
    }
  },
  {
    id: "fis_03",
    subject: "fisika",
    subject_label: "Fisika",
    topic: "Usaha dan Energi",
    type: "single",
    stimulus: "Sebuah benda bermassa 2 kg meluncur di lantai datar dari keadaan diam. Gaya dorong konstan sebesar 10 N bekerja pada benda tersebut sejauh 5 meter.",
    question: "Berapakah energi kinetik akhir benda tersebut setelah berpindah sejauh 5 meter?",
    options: [
      { id: "A", text: "20 Joule" },
      { id: "B", text: "25 Joule" },
      { id: "C", text: "50 Joule" },
      { id: "D", text: "100 Joule" },
      { id: "E", text: "250 Joule" }
    ],
    correct_answer: "C",
    explanation: {
      akal_sehat: "Semua usaha (kerja dorong) yang diberikan akan berubah utuh menjadi energi gerak (energi kinetik). Usaha = Gaya x Jarak = 10 N x 5 m = 50 Joule. Maka energi kinetiknya pasti 50 Joule.",
      jebakan: "Opsi B (25 Joule) terjadi jika membagi hasil dengan massa benda (mengira mencari kecepatan kuadrat).",
      rumus_kunci: "Usaha (W) = Perubahan Energi Kinetik (ΔEk) = Gaya (F) x Jarak (s)"
    }
  },
  {
    id: "fis_04",
    subject: "fisika",
    subject_label: "Fisika",
    topic: "Termodinamika (Kalor)",
    type: "single",
    stimulus: "Air sebanyak 500 gram (0,5 kg) bersuhu 20°C dipanaskan hingga suhunya naik menjadi 60°C. Diketahui kalor jenis air adalah 4.200 J/kg°C.",
    question: "Berapakah jumlah kalor yang diserap oleh air tersebut?",
    options: [
      { id: "A", text: "42.000 Joule" },
      { id: "B", text: "84.000 Joule" },
      { id: "C", text: "126.000 Joule" },
      { id: "D", text: "168.000 Joule" },
      { id: "E", text: "210.000 Joule" }
    ],
    correct_answer: "B",
    explanation: {
      akal_sehat: "Kenaikan suhu dari 20 ke 60 adalah 40°C. Massa air 0,5 kg (setengah kg). Kalor = 0,5 x 4.200 x 40 = 2.100 x 40 = 84.000 Joule.",
      jebakan: "Opsi D (168.000 Joule) adalah jebakan jika lupa mengalikan massa 0,5 kg (menganggap airnya 1 kg).",
      rumus_kunci: "Q = m . c . ΔT (Kalor = Massa x Kalor Jenis x Kenaikan Suhu)"
    }
  },

  // ================= MATEMATIKA WAJIB =================
  {
    id: "mtkw_01",
    subject: "mtk_wajib",
    subject_label: "Matematika Wajib",
    topic: "Fungsi Komposisi",
    type: "single",
    stimulus: "Diketahui dua buah fungsi: f(x) = 3x - 1 dan g(x) = 2x + 5.",
    question: "Nilai dari (f ∘ g)(2) adalah ....",
    options: [
      { id: "A", text: "15" },
      { id: "B", text: "21" },
      { id: "C", text: "26" },
      { id: "D", text: "29" },
      { id: "E", text: "35" }
    ],
    correct_answer: "C",
    explanation: {
      akal_sehat: "Baca dari kanan ke kiri (yang nempel angka 2 dikerjakan duluan, yaitu g). Masukkan 2 ke g: 2(2) + 5 = 4 + 5 = 9. Lalu lempar angka 9 ke f: 3(9) - 1 = 27 - 1 = 26.",
      jebakan: "Opsi A (15) adalah jebakan terbalik jika f(2) dikerjakan duluan: f(2) = 5 -> g(5) = 2(5) + 5 = 15.",
      rumus_kunci: "(f ∘ g)(x) = f(g(x)) -> Kerjakan fungsi yang paling dekat dengan angka duluan!"
    }
  },
  {
    id: "mtkw_02",
    subject: "mtk_wajib",
    subject_label: "Matematika Wajib",
    topic: "Fungsi Invers",
    type: "single",
    stimulus: "Sebuah fungsi ditentukan oleh rumus: f(x) = (2x + 7) / 3.",
    question: "Jika f⁻¹(a) = 4, maka nilai a adalah ....",
    options: [
      { id: "A", text: "3" },
      { id: "B", text: "5" },
      { id: "C", text: "7" },
      { id: "D", text: "9" },
      { id: "E", text: "15" }
    ],
    correct_answer: "B",
    explanation: {
      akal_sehat: "Invers itu pembalik alur. Jika f⁻¹(a) = 4, artinya f(4) = a! Jadi tinggal masukkan angka 4 ke rumus f(x): (2(4) + 7) / 3 = (8 + 7) / 3 = 15 / 3 = 5.",
      jebakan: "Mencari rumus invers manual f⁻¹(x) = (3x - 7)/2 yang memakan waktu dan rentan salah tanda aljabar.",
      rumus_kunci: "Jika f⁻¹(a) = b, maka f(b) = a (Langsung substitusi b ke fungsi asli!)"
    }
  },
  {
    id: "mtkw_03",
    subject: "mtk_wajib",
    subject_label: "Matematika Wajib",
    topic: "Barisan Aritmatika",
    type: "single",
    stimulus: "Suku ke-3 suatu barisan aritmatika adalah 11 dan suku ke-7 adalah 23.",
    question: "Berapakah suku ke-10 dari barisan tersebut?",
    options: [
      { id: "A", text: "29" },
      { id: "B", text: "32" },
      { id: "C", text: "35" },
      { id: "D", text: "38" },
      { id: "E", text: "41" }
    ],
    correct_answer: "B",
    explanation: {
      akal_sehat: "Dari suku ke-3 ke suku ke-7 berjarak 4 langkah (7 - 3 = 4 langkah). Nilainya naik dari 11 ke 23 (naik 12). Artinya tiap 1 langkah naik 3 (12 / 4 = 3). Dari suku ke-7 ke suku ke-10 berjarak 3 langkah lagi, jadi nilainya tambah 3 x 3 = 9. Nilai suku ke-10 = 23 + 9 = 32.",
      jebakan: "Menulis eliminasi rumus a + 2b = 11 dan a + 6b = 23 secara panjang yang membuang waktu ujian.",
      rumus_kunci: "Beda (b) = Selisih Nilai / Selisih Suku. Nilai Suku Baru = Suku Acuan + (Langkah x b)"
    }
  },
  {
    id: "mtkw_04",
    subject: "mtk_wajib",
    subject_label: "Matematika Wajib",
    topic: "Statistika Deskriptif",
    type: "single",
    stimulus: "Nilai ulangan 5 orang siswa adalah: 6, 8, 7, 9, x. Jika rata-rata nilai kelima siswa tersebut adalah 8.",
    question: "Berapakah nilai x?",
    options: [
      { id: "A", text: "8" },
      { id: "B", text: "9" },
      { id: "C", text: "10" },
      { id: "D", text: "11" },
      { id: "E", text: "12" }
    ],
    correct_answer: "C",
    explanation: {
      akal_sehat: "Rata-rata 8 untuk 5 orang artinya total nilai mereka berlima harus 40 (5 x 8 = 40). Nilai 4 siswa yang ada dijumlahkan: 6 + 8 + 7 + 9 = 30. Agar jadi 40, maka nilai x harus 10 (40 - 30 = 10).",
      jebakan: "Opsi B (9) atau A (8) karena menduga x harus mirip dengan angka yang dominan.",
      rumus_kunci: "Total Nilai = Jumlah Siswa x Rata-rata. Nilai Penggenap = Total Nilai - Jumlah yang Ada."
    }
  },

  // ================= MATEMATIKA TINGKAT LANJUT =================
  {
    id: "mtkl_01",
    subject: "mtk_lanjut",
    subject_label: "Matematika Tingkat Lanjut",
    topic: "Polinomial (Teorema Sisa)",
    type: "single",
    stimulus: "Suku banyak P(x) = x³ - 3x² + 5x - 2 dibagi oleh (x - 2).",
    question: "Sisa pembagian suku banyak tersebut adalah ....",
    options: [
      { id: "A", text: "2" },
      { id: "B", text: "4" },
      { id: "C", text: "6" },
      { id: "D", text: "8" },
      { id: "E", text: "12" }
    ],
    correct_answer: "B",
    explanation: {
      akal_sehat: "Jangan dibagi porogapit! Balik tanda pembagi (x - 2 = 0 -> x = 2). Ganti semua huruf x dengan angka 2: 2³ - 3(2²) + 5(2) - 2 = 8 - 12 + 10 - 2 = -4 + 10 - 2 = 4.",
      jebakan: "Opsi C atau D jika salah menghitung tanda minus atau memakai x = -2.",
      rumus_kunci: "Teorema Sisa: Sisa pembagian P(x) oleh (x - k) adalah P(k)."
    }
  },
  {
    id: "mtkl_02",
    subject: "mtk_lanjut",
    subject_label: "Matematika Tingkat Lanjut",
    topic: "Polinomial (Teorema Faktor)",
    type: "single",
    stimulus: "Diketahui (x - 3) merupakan faktor dari suku banyak P(x) = 2x³ - 5x² - 4x + k.",
    question: "Nilai k yang memenuhi adalah ....",
    options: [
      { id: "A", text: "-3" },
      { id: "B", text: "3" },
      { id: "C", text: "-6" },
      { id: "D", text: "6" },
      { id: "E", text: "-12" }
    ],
    correct_answer: "B",
    explanation: {
      akal_sehat: "Kata 'faktor' artinya sisanya nol jika dibagi (x - 3)! Balik tanda pembagi jadi x = 3, lalu substitusikan dan hasilnya wajib 0. 2(3³) - 5(3²) - 4(3) + k = 0 -> 2(27) - 5(9) - 12 + k = 0 -> 54 - 45 - 12 + k = 0 -> -3 + k = 0 -> k = 3.",
      jebakan: "Opsi A (-3) karena salah pindah ruas tanda minus.",
      rumus_kunci: "Jika (x - a) adalah FAKTOR dari P(x), maka P(a) = 0."
    }
  },
  {
    id: "mtkl_03",
    subject: "mtk_lanjut",
    subject_label: "Matematika Tingkat Lanjut",
    topic: "Matriks (Determinan 2x2)",
    type: "single",
    stimulus: "Diketahui matriks A = [[4, 2], [3, 5]].",
    question: "Determinan dari matriks A (det A) adalah ....",
    options: [
      { id: "A", text: "14" },
      { id: "B", text: "20" },
      { id: "C", text: "26" },
      { id: "D", text: "-14" },
      { id: "E", text: "10" }
    ],
    correct_answer: "A",
    explanation: {
      akal_sehat: "Determinan matriks 2x2 adalah kali silang utama dikurangi kali silang samping: (4 x 5) - (2 x 3) = 20 - 6 = 14.",
      jebakan: "Opsi C (26) terjadi jika silangannya dijumlahkan bukannya dikurangi.",
      rumus_kunci: "det [[a, b], [c, d]] = ad - bc"
    }
  },
  {
    id: "mtkl_04",
    subject: "mtk_lanjut",
    subject_label: "Matematika Tingkat Lanjut",
    topic: "Matriks (Invers 2x2)",
    type: "single",
    stimulus: "Jika matriks P = [[3, 1], [5, 2]], maka invers matriks P (P⁻¹) adalah ....",
    options: [
      { id: "A", text: "[[2, -1], [-5, 3]]" },
      { id: "B", text: "[[-2, 1], [5, -3]]" },
      { id: "C", text: "[[3, -1], [-5, 2]]" },
      { id: "D", text: "[[2, 1], [5, 3]]" },
      { id: "E", text: "[[1, -1], [-5, 3]]" }
    ],
    correct_answer: "A",
    explanation: {
      akal_sehat: "Determinan P = (3 x 2) - (1 x 5) = 6 - 5 = 1. Karena determinannya 1, rumus invers cukup: TUKAR posisi diagonal utama (3 dan 2 bertukar jadi 2 dan 3), dan KASIH MINUS diagonal samping (1 dan 5 jadi -1 dan -5). Hasilnya: [[2, -1], [-5, 3]].",
      jebakan: "Opsi D lupa memberi minus pada diagonal samping, atau Opsi B memberi minus pada semua angka.",
      rumus_kunci: "Invers 2x2 = 1/det x [[d, -b], [-c, a]] (Tukar a dan d, beri minus pada b dan c)."
    }
  },

  // ================= BAHASA INDONESIA =================
  {
    id: "ind_01",
    subject: "b_indo",
    subject_label: "Bahasa Indonesia",
    topic: "Literasi Membaca (Ide Pokok Paragraf)",
    type: "single",
    stimulus: "Peralihan menuju energi terbarukan di Indonesia menghadapi sejumlah tantangan infrastruktur yang signifikan. Ketergantungan terhadap pembangkit batu bara yang masih memiliki kontrak jangka panjang menjadi kendala utama. Selain itu, jaringan transmisi antarpulau belum terintegrasi secara optimal untuk menyalurkan energi surya dan panas bumi dari daerah terpencil ke pusat industri.",
    question: "Gagasan utama (ide pokok) dari paragraf di atas adalah ....",
    options: [
      { id: "A", text: "Ketergantungan Indonesia pada energi batu bara." },
      { id: "B", text: "Penyaluran energi surya dari pulau terpencil." },
      { id: "C", text: "Tantangan infrastruktur dalam transisi energi terbarukan di Indonesia." },
      { id: "D", text: "Kontrak jangka panjang pembangkit listrik konvensional." },
      { id: "E", text: "Perlunya pembangunan jaringan transmisi antarpulau." }
    ],
    correct_answer: "C",
    explanation: {
      akal_sehat: "Ide pokok paragraf deduktif hampir selalu berada di kalimat pertama (induk kalimat). Kalimat pertama memayungi seluruh paragraf: 'Peralihan energi terbarukan menghadapi tantangan infrastruktur'. Kalimat berikutnya hanya contoh rinciannya (batu bara & kabel antarpulau).",
      jebakan: "Opsi A, B, D, E hanyalah rincian penjelas kalimat pembantu, bukan gagasan utama yang memayungi teks.",
      rumus_kunci: "Ide Pokok = Kalimat Utama yang memayungi (umum) vs Kalimat Penjelas (khusus/contoh)."
    }
  },
  {
    id: "ind_02",
    subject: "b_indo",
    subject_label: "Bahasa Indonesia",
    topic: "Kalimat Efektif & Tata Kata",
    type: "single",
    stimulus: "Perhatikan kalimat berikut: 'Bagi seluruh para peserta ujian wajib membawa kartu identitas pengenal.'",
    question: "Perbaikan kalimat di atas agar menjadi kalimat efektif yang baku adalah ....",
    options: [
      { id: "A", text: "Bagi para peserta ujian diwajibkan membawa kartu identitas pengenal." },
      { id: "B", text: "Seluruh peserta ujian wajib membawa kartu identitas." },
      { id: "C", text: "Untuk seluruh para peserta ujian wajib membawa kartu tanda identitas." },
      { id: "D", text: "Para peserta ujian semuanya wajib membawa kartu pengenal identitas." },
      { id: "E", text: "Bagi peserta-peserta ujian wajib membawa kartu identitas." }
    ],
    correct_answer: "B",
    explanation: {
      akal_sehat: "Kalimat aslinya mengalami pemborosan kata (pleonasme) parah: ada kata 'Bagi', ada 'seluruh', ada 'para' (dobel jamak), dan 'identitas pengenal' (maknanya sama). Hapus kata depan 'Bagi' agar ada Subjek yang jelas, dan buang salah satu kata jamak: 'Seluruh peserta ujian wajib membawa kartu identitas.'",
      jebakan: "Opsi A masih menyisakan kata depan 'Bagi' di awal kalimat yang menghilangkan fungsi Subjek.",
      rumus_kunci: "Kalimat Efektif = Subjek Jelas (tanpa kata depan di awal) + Hemat Kata (tanpa pleonasme dobel jamak)."
    }
  },

  // ================= BAHASA INGGRIS =================
  {
    id: "ing_01",
    subject: "b_inggris",
    subject_label: "Bahasa Inggris",
    topic: "Reading Comprehension (Main Idea)",
    type: "single",
    stimulus: "Artificial intelligence has rapidly transformed modern agriculture through precision farming. Autonomous drones equipped with multispectral sensors now monitor crop health and identify weed infestations with pinpoint accuracy. Furthermore, automated irrigation systems analyze real-time soil moisture data to distribute water efficiently, drastically reducing waste and operational costs for farmers.",
    question: "What is the main topic of the passage?",
    options: [
      { id: "A", text: "The environmental impact of autonomous drones." },
      { id: "B", text: "How artificial intelligence transforms modern agriculture." },
      { id: "C", text: "The operational costs of automated irrigation systems." },
      { id: "D", text: "Methods for identifying weed infestations." },
      { id: "E", text: "Soil moisture data analysis in rural farming." }
    ],
    correct_answer: "B",
    explanation: {
      akal_sehat: "Cari kalimat topik (Topic Sentence) di baris pertama: 'AI has rapidly transformed modern agriculture'. Kalimat selanjutnya tentang drone dan sistem irigasi hanyalah contoh implementasi dari transformasi AI tersebut.",
      jebakan: "Opsi A, C, D, E adalah 'supporting details' (contoh kecil), bukan topik payung utama teks.",
      rumus_kunci: "Main Idea Passage = First Sentence Overview (General) vs Specific Supporting Details."
    }
  },
  {
    id: "ing_02",
    subject: "b_inggris",
    subject_label: "Bahasa Inggris",
    topic: "Vocabulary in Context (Reference Words)",
    type: "single",
    stimulus: "Electric vehicles are gaining popularity worldwide due to zero direct carbon emissions. However, battery production requires scarce raw materials like lithium and cobalt. Extracting *them* often leads to habitat destruction and high water consumption in mining regions.",
    question: "The italicized word 'them' in the passage refers to ....",
    options: [
      { id: "A", text: "Electric vehicles" },
      { id: "B", text: "Carbon emissions" },
      { id: "C", text: "Mining regions" },
      { id: "D", text: "Lithium and cobalt (scarce raw materials)" },
      { id: "E", text: "Battery production systems" }
    ],
    correct_answer: "D",
    explanation: {
      akal_sehat: "Lihat kata kerja sebelum kata 'them': 'Extracting them' (Mengekstraksi/menambang mereka). Apa yang ditambang/diekstraksi di kalimat persis sebelumnya? Yaitu 'lithium and cobalt' (bahan mentah langka). Jadi 'them' merujuk ke bahan tambang lithium dan cobalt.",
      jebakan: "Opsi A (Electric vehicles) salah karena mobil listrik tidak diekstraksi/ditambang dari tanah.",
      rumus_kunci: "Pronoun Reference = Baca 1 kalimat persis sebelumnya dan cocokkan logika kata kerjanya."
    }
  }
];
