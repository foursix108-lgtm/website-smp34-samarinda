/* ====================================
   SMPN 34 SAMARINDA — PORTAL AKADEMIK
   app.js — Application Logic (Alpine.js)
   ==================================== */

/* ── Default Data ── */
const DEFAULT_COURSES = [
  { nama: 'Pendidikan Agama & Budi Pekerti', kode: 'PAI', image: 'https://images.unsplash.com/photo-1544716278-e513176f20b5?auto=format&fit=crop&q=80&w=600', warna: '#2563eb',
    syllabus: [
      { topic: 'Iman kepada Allah SWT', desc: 'Memahami rukun iman dan artinya', hasTask: true, submitted: false, attended: false, type: 'materi', content: 'Iman kepada Allah adalah rukun iman yang pertama...' },
      { topic: 'Al-Qur\'an dan Hadits', desc: 'Membaca, memahami, dan mengamalkan Al-Qur\'an', hasTask: false, submitted: false, attended: false, type: 'materi', content: 'Al-Qur\'an adalah kitab suci umat Islam...' },
      { topic: 'Akhlak Mulia', desc: 'Perilaku terpuji dalam kehidupan sehari-hari', hasTask: true, submitted: false, attended: false, type: 'materi', content: 'Akhlak mulia mencakup sikap jujur, amanah, dan tanggung jawab...' },
      { topic: 'Ibadah & Muamalah', desc: 'Tata cara ibadah dan hubungan sosial', hasTask: false, submitted: false, attended: false, type: 'materi', content: 'Ibadah meliputi sholat, puasa, zakat, dan haji...' },
      { topic: 'Sejarah Peradaban Islam', desc: 'Perkembangan Islam dari masa ke masa', hasTask: true, submitted: false, attended: false, type: 'materi', content: 'Islam berkembang sejak zaman Rasulullah SAW...' },
      { topic: 'Ulangan Harian', desc: 'Evaluasi materi BAB 1–5', hasTask: false, submitted: false, attended: false, type: 'exam', content: 'Ujian mencakup seluruh materi yang telah dipelajari.' },
    ],
    schedule: [{ day: 'Senin', time: '07:00' }, { day: 'Kamis', time: '10:00' }]
  },
  { nama: 'Pendidikan Pancasila & Kewarganegaraan', kode: 'PPKn', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=600', warna: '#dc2626',
    syllabus: [
      { topic: 'Pancasila sebagai Dasar Negara', desc: 'Makna dan kedudukan Pancasila', hasTask: true, submitted: false, attended: false, type: 'materi', content: 'Pancasila adalah dasar negara Indonesia yang terdiri dari lima sila...' },
      { topic: 'UUD 1945', desc: 'Konstitusi dan pokok-pokok pemerintahan', hasTask: false, submitted: false, attended: false, type: 'materi', content: 'UUD 1945 adalah konstitusi negara Indonesia...' },
      { topic: 'Bhinneka Tunggal Ika', desc: 'Keberagaman dalam persatuan Indonesia', hasTask: true, submitted: false, attended: false, type: 'materi', content: 'Indonesia terdiri dari berbagai suku, agama, ras, dan golongan...' },
      { topic: 'Norma & Hukum', desc: 'Norma dalam kehidupan bermasyarakat', hasTask: false, submitted: false, attended: false, type: 'materi', content: 'Norma adalah aturan yang mengatur perilaku manusia...' },
      { topic: 'Hak & Kewajiban Warga Negara', desc: 'Hak dan kewajiban dalam kehidupan bernegara', hasTask: true, submitted: false, attended: false, type: 'materi', content: 'Setiap warga negara memiliki hak dan kewajiban...' },
      { topic: 'Ujian Tengah Semester', desc: 'Evaluasi komprehensif PPKn', hasTask: false, submitted: false, attended: false, type: 'exam', content: 'UTS mencakup seluruh materi Semester Genap.' },
    ],
    schedule: [{ day: 'Selasa', time: '09:00' }]
  },
  { nama: 'Bahasa Indonesia', kode: 'B.IND', image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=600', warna: '#16a34a',
    syllabus: [
      { topic: 'Teks Narasi', desc: 'Menulis dan menganalisis teks narasi', hasTask: true, submitted: false, attended: false, type: 'materi', content: 'Teks narasi adalah teks yang menceritakan rangkaian peristiwa secara kronologis...' },
      { topic: 'Teks Deskripsi', desc: 'Mendeskripsikan objek secara detail', hasTask: false, submitted: false, attended: false, type: 'materi', content: 'Teks deskripsi bertujuan melukiskan atau menggambarkan suatu objek...' },
      { topic: 'Teks Eksposisi', desc: 'Memaparkan informasi secara faktual', hasTask: true, submitted: false, attended: false, type: 'materi', content: 'Teks eksposisi berisi paparan gagasan atau pendapat yang disertai fakta...' },
      { topic: 'Puisi & Prosa', desc: 'Apresiasi sastra Indonesia', hasTask: true, submitted: false, attended: false, type: 'materi', content: 'Puisi adalah karya sastra yang menggunakan kata-kata indah dan bermakna...' },
      { topic: 'Menulis Surat Resmi', desc: 'Penulisan surat dinas dan formal', hasTask: true, submitted: false, attended: false, type: 'materi', content: 'Surat resmi menggunakan bahasa formal dan struktur baku...' },
      { topic: 'Ulangan Harian', desc: 'Evaluasi materi Bahasa Indonesia', hasTask: false, submitted: false, attended: false, type: 'exam', content: 'Ujian mencakup teks narasi, deskripsi, dan eksposisi.' },
    ],
    schedule: [{ day: 'Senin', time: '09:00' }, { day: 'Rabu', time: '07:00' }]
  },
  { nama: 'Matematika', kode: 'MTK', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=600', warna: '#7c3aed',
    syllabus: [
      { topic: 'Bilangan Bulat & Pecahan', desc: 'Operasi hitung bilangan bulat dan pecahan', hasTask: true, submitted: false, attended: false, type: 'materi', content: 'Bilangan bulat mencakup bilangan positif, negatif, dan nol...' },
      { topic: 'Aljabar & Persamaan Linear', desc: 'Persamaan dan pertidaksamaan linear', hasTask: true, submitted: false, attended: false, type: 'materi', content: 'Aljabar menggunakan variabel untuk mewakili bilangan...' },
      { topic: 'Geometri Bangun Datar', desc: 'Luas dan keliling bangun datar', hasTask: false, submitted: false, attended: false, type: 'materi', content: 'Bangun datar meliputi segitiga, persegi, lingkaran, dan lainnya...' },
      { topic: 'Geometri Bangun Ruang', desc: 'Volume dan luas permukaan bangun ruang', hasTask: true, submitted: false, attended: false, type: 'materi', content: 'Bangun ruang meliputi kubus, balok, prisma, kerucut, dan bola...' },
      { topic: 'Statistika & Peluang', desc: 'Mengolah dan menyajikan data', hasTask: true, submitted: false, attended: false, type: 'materi', content: 'Statistika mempelajari cara mengumpulkan, mengolah, dan menyajikan data...' },
      { topic: 'Fungsi & Grafik', desc: 'Konsep fungsi dan representasi grafik', hasTask: true, submitted: false, attended: false, type: 'materi', content: 'Fungsi adalah relasi yang menghubungkan setiap anggota domain ke codomain...' },
      { topic: 'Ulangan Harian', desc: 'Evaluasi materi Matematika', hasTask: false, submitted: false, attended: false, type: 'exam', content: 'Ujian mencakup aljabar, geometri, dan statistika.' },
    ],
    schedule: [{ day: 'Selasa', time: '07:00' }, { day: 'Jumat', time: '08:00' }]
  },
  { nama: 'Ilmu Pengetahuan Alam', kode: 'IPA', image: 'https://images.unsplash.com/photo-1532094349884-543559c8f9e6?auto=format&fit=crop&q=80&w=600', warna: '#059669',
    syllabus: [
      { topic: 'Sel & Organisasi Kehidupan', desc: 'Struktur sel dan jaringan makhluk hidup', hasTask: true, submitted: false, attended: false, type: 'materi', content: 'Sel adalah unit terkecil penyusun makhluk hidup...' },
      { topic: 'Sistem Gerak & Otot', desc: 'Tulang, sendi, dan otot manusia', hasTask: false, submitted: false, attended: false, type: 'materi', content: 'Sistem gerak manusia terdiri dari tulang, sendi, dan otot...' },
      { topic: 'Zat & Perubahan Materi', desc: 'Sifat dan perubahan fisika-kimia', hasTask: true, submitted: false, attended: false, type: 'materi', content: 'Materi adalah segala sesuatu yang memiliki massa dan menempati ruang...' },
      { topic: 'Energi & Usaha', desc: 'Konsep energi dalam kehidupan', hasTask: true, submitted: false, attended: false, type: 'materi', content: 'Energi adalah kemampuan untuk melakukan usaha...' },
      { topic: 'Gelombang & Cahaya', desc: 'Sifat gelombang dan optik', hasTask: false, submitted: false, attended: false, type: 'materi', content: 'Gelombang adalah gangguan yang merambat membawa energi...' },
      { topic: 'Ekosistem', desc: 'Hubungan makhluk hidup dengan lingkungan', hasTask: true, submitted: false, attended: false, type: 'materi', content: 'Ekosistem terdiri dari komponen biotik dan abiotik...' },
      { topic: 'Praktikum & Ulangan', desc: 'Praktikum sains & evaluasi', hasTask: false, submitted: false, attended: false, type: 'exam', content: 'Praktikum dan ujian IPA semester ini.' },
    ],
    schedule: [{ day: 'Rabu', time: '09:00' }, { day: 'Sabtu', time: '07:00' }]
  },
  { nama: 'Ilmu Pengetahuan Sosial', kode: 'IPS', image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=600', warna: '#d97706',
    syllabus: [
      { topic: 'Keruangan & Konektivitas Wilayah', desc: 'Konsep ruang dan interaksi antarwilayah', hasTask: true, submitted: false, attended: false, type: 'materi', content: 'Konsep ruang berkaitan dengan tempat tinggal manusia...' },
      { topic: 'Sejarah Indonesia', desc: 'Masa pra-aksara hingga kemerdekaan', hasTask: false, submitted: false, attended: false, type: 'materi', content: 'Sejarah Indonesia dimulai dari zaman prasejarah...' },
      { topic: 'Ekonomi & Perdagangan', desc: 'Kegiatan ekonomi dan perdagangan', hasTask: true, submitted: false, attended: false, type: 'materi', content: 'Ekonomi mempelajari bagaimana manusia memenuhi kebutuhan...' },
      { topic: 'Sosiologi & Budaya', desc: 'Kehidupan sosial dan kebudayaan', hasTask: false, submitted: false, attended: false, type: 'materi', content: 'Sosiologi mempelajari kehidupan masyarakat dan interaksi sosial...' },
      { topic: 'Geografi Indonesia', desc: 'Kondisi alam dan potensi wilayah', hasTask: true, submitted: false, attended: false, type: 'materi', content: 'Indonesia memiliki kondisi geografis yang beragam...' },
      { topic: 'Ulangan Harian', desc: 'Evaluasi materi IPS', hasTask: false, submitted: false, attended: false, type: 'exam', content: 'Ujian mencakup seluruh materi IPS semester ini.' },
    ],
    schedule: [{ day: 'Kamis', time: '08:00' }, { day: 'Sabtu', time: '10:00' }]
  },
  { nama: 'Bahasa Inggris', kode: 'B.ING', image: 'https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?auto=format&fit=crop&q=80&w=600', warna: '#0891b2',
    syllabus: [
      { topic: 'Introduction & Greeting', desc: 'Expressions for daily communication', hasTask: false, submitted: false, attended: false, type: 'materi', content: 'Learn how to greet people formally and informally in English...' },
      { topic: 'Simple Present Tense', desc: 'Grammar: present tense usage', hasTask: true, submitted: false, attended: false, type: 'materi', content: 'The simple present tense is used for habitual actions...' },
      { topic: 'Descriptive Text', desc: 'Describing people, places, and things', hasTask: true, submitted: false, attended: false, type: 'materi', content: 'A descriptive text describes the features of a particular object...' },
      { topic: 'Narrative Text', desc: 'Storytelling in English', hasTask: true, submitted: false, attended: false, type: 'materi', content: 'A narrative text tells a story with a problem and resolution...' },
      { topic: 'Vocabulary & Reading', desc: 'Expanding vocabulary and reading comprehension', hasTask: false, submitted: false, attended: false, type: 'materi', content: 'Reading comprehension involves understanding the main idea...' },
      { topic: 'Speaking Practice', desc: 'Conversation and pronunciation', hasTask: false, submitted: false, attended: false, type: 'materi', content: 'Practice English conversation with everyday topics...' },
      { topic: 'Written Test', desc: 'Grammar and reading comprehension test', hasTask: false, submitted: false, attended: false, type: 'exam', content: 'Test covers grammar, vocabulary, and comprehension.' },
    ],
    schedule: [{ day: 'Rabu', time: '11:00' }, { day: 'Jumat', time: '10:00' }]
  },
  { nama: 'Seni Budaya', kode: 'SBK', image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=600', warna: '#be185d',
    syllabus: [
      { topic: 'Seni Rupa Nusantara', desc: 'Mengenal ragam seni rupa daerah', hasTask: true, submitted: false, attended: false, type: 'materi', content: 'Seni rupa Nusantara mencakup berbagai karya seni dari seluruh Indonesia...' },
      { topic: 'Menggambar & Melukis', desc: 'Teknik dasar menggambar ekspresif', hasTask: true, submitted: false, attended: false, type: 'materi', content: 'Menggambar adalah kegiatan menuangkan ide melalui media gambar...' },
      { topic: 'Seni Musik', desc: 'Teori musik dan alat musik daerah', hasTask: false, submitted: false, attended: false, type: 'materi', content: 'Seni musik meliputi teori musik, ritme, melodi, dan harmoni...' },
      { topic: 'Seni Tari', desc: 'Gerakan tari tradisional Indonesia', hasTask: true, submitted: false, attended: false, type: 'materi', content: 'Tari tradisional Indonesia mencerminkan kebudayaan daerah...' },
      { topic: 'Apresiasi Karya Seni', desc: 'Menilai dan mengapresiasi karya seni', hasTask: false, submitted: false, attended: false, type: 'materi', content: 'Apresiasi seni adalah kemampuan menilai karya seni secara estetis...' },
      { topic: 'Pameran Karya', desc: 'Penilaian karya seni semester ini', hasTask: true, submitted: false, attended: false, type: 'exam', content: 'Siswa diminta mengumpulkan satu karya seni terbaik.' },
    ],
    schedule: [{ day: 'Kamis', time: '12:00' }]
  },
  { nama: 'Pendidikan Jasmani, Olahraga & Kesehatan', kode: 'PJOK', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600', warna: '#ea580c',
    syllabus: [
      { topic: 'Atletik: Lari & Lompat', desc: 'Teknik dasar atletik dan nomor lari', hasTask: false, submitted: false, attended: false, type: 'materi', content: 'Atletik adalah olahraga yang meliputi lari, lompat, dan lempar...' },
      { topic: 'Permainan Bola Besar', desc: 'Sepak bola, basket, voli', hasTask: false, submitted: false, attended: false, type: 'materi', content: 'Permainan bola besar membutuhkan kerja tim dan koordinasi...' },
      { topic: 'Permainan Bola Kecil', desc: 'Bulutangkis dan tenis meja', hasTask: false, submitted: false, attended: false, type: 'materi', content: 'Bulutangkis adalah olahraga menggunakan raket dan shuttlecock...' },
      { topic: 'Senam & Kebugaran', desc: 'Senam lantai dan tes kebugaran', hasTask: true, submitted: false, attended: false, type: 'materi', content: 'Senam lantai melatih keseimbangan, kelenturan, dan kekuatan...' },
      { topic: 'Kesehatan & Gizi', desc: 'Pola hidup sehat dan nutrisi', hasTask: true, submitted: false, attended: false, type: 'materi', content: 'Kesehatan adalah keadaan sejahtera fisik, mental, dan sosial...' },
      { topic: 'Penilaian Praktik', desc: 'Ujian praktik olahraga', hasTask: false, submitted: false, attended: false, type: 'exam', content: 'Penilaian mencakup lari 60m, lompat jauh, dan push-up.' },
    ],
    schedule: [{ day: 'Jumat', time: '07:00' }]
  },
  { nama: 'Prakarya & Kewirausahaan', kode: 'PKWU', image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&q=80&w=600', warna: '#0d9488',
    syllabus: [
      { topic: 'Kerajinan Tangan', desc: 'Membuat produk kerajinan berbahan lokal', hasTask: true, submitted: false, attended: false, type: 'materi', content: 'Kerajinan tangan memanfaatkan bahan alami dan daur ulang...' },
      { topic: 'Teknologi & Rekayasa', desc: 'Prinsip dasar teknologi sederhana', hasTask: false, submitted: false, attended: false, type: 'materi', content: 'Teknologi adalah penerapan ilmu pengetahuan untuk memecahkan masalah...' },
      { topic: 'Pengolahan Pangan', desc: 'Mengolah bahan pangan menjadi produk', hasTask: true, submitted: false, attended: false, type: 'materi', content: 'Pengolahan pangan mencakup pembuatan makanan dan minuman...' },
      { topic: 'Kewirausahaan', desc: 'Konsep berwirausaha dan pemasaran', hasTask: true, submitted: false, attended: false, type: 'materi', content: 'Wirausaha adalah orang yang menciptakan peluang bisnis...' },
      { topic: 'Proyek Akhir', desc: 'Membuat dan memasarkan produk sendiri', hasTask: true, submitted: false, attended: false, type: 'exam', content: 'Siswa membuat produk dan mempresentasikan proses produksinya.' },
    ],
    schedule: [{ day: 'Senin', time: '12:00' }]
  },
  { nama: 'Teknologi Informasi & Komunikasi', kode: 'TIK', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600', warna: '#1d4ed8',
    syllabus: [
      { topic: 'Pengenalan Komputer', desc: 'Sejarah, komponen, dan jenis komputer', hasTask: false, submitted: false, attended: false, type: 'materi', content: 'Komputer adalah alat elektronik yang dapat menerima, memproses, dan menghasilkan data...' },
      { topic: 'Sistem Operasi', desc: 'Windows, fungsi dasar, dan manajemen file', hasTask: true, submitted: false, attended: false, type: 'materi', content: 'Sistem operasi adalah perangkat lunak yang mengelola perangkat keras komputer...' },
      { topic: 'Pengolah Kata (Word)', desc: 'Membuat dokumen profesional', hasTask: true, submitted: false, attended: false, type: 'materi', content: 'Microsoft Word adalah aplikasi pengolah kata yang populer...' },
      { topic: 'Spreadsheet (Excel)', desc: 'Tabel, rumus, dan grafik data', hasTask: true, submitted: false, attended: false, type: 'materi', content: 'Microsoft Excel digunakan untuk mengolah data numerik...' },
      { topic: 'Internet & Keamanan Digital', desc: 'Penggunaan internet yang aman', hasTask: true, submitted: false, attended: false, type: 'materi', content: 'Internet adalah jaringan global yang menghubungkan jutaan komputer...' },
      { topic: 'Pemrograman Dasar', desc: 'Logika dan algoritma sederhana', hasTask: false, submitted: false, attended: false, type: 'materi', content: 'Pemrograman adalah proses menulis instruksi untuk komputer...' },
      { topic: 'Ujian Praktik TIK', desc: 'Praktik komputer dan evaluasi', hasTask: false, submitted: false, attended: false, type: 'exam', content: 'Ujian meliputi penggunaan Word, Excel, dan browsing aman.' },
    ],
    schedule: [{ day: 'Selasa', time: '12:00' }, { day: 'Kamis', time: '14:00' }]
  },
  { nama: 'Bimbingan Konseling', kode: 'BK', image: 'https://images.unsplash.com/photo-1573497491765-dccce02b29df?auto=format&fit=crop&q=80&w=600', warna: '#9333ea',
    syllabus: [
      { topic: 'Mengenal Diri Sendiri', desc: 'Potensi, minat, dan bakat', hasTask: false, submitted: false, attended: false, type: 'materi', content: 'Setiap siswa memiliki potensi unik yang perlu dikembangkan...' },
      { topic: 'Keterampilan Belajar', desc: 'Strategi belajar efektif dan manajemen waktu', hasTask: true, submitted: false, attended: false, type: 'materi', content: 'Belajar yang efektif membutuhkan perencanaan dan disiplin...' },
      { topic: 'Pengembangan Karir', desc: 'Mengenal profesi dan pilihan karir', hasTask: false, submitted: false, attended: false, type: 'materi', content: 'Pemilihan karir yang tepat didasarkan pada minat dan bakat...' },
      { topic: 'Layanan Konseling', desc: 'Dukungan sosial dan emosional siswa', hasTask: false, submitted: false, attended: false, type: 'materi', content: 'Konseling membantu siswa mengatasi masalah pribadi dan sosial...' },
    ],
    schedule: [{ day: 'Jumat', time: '13:00' }]
  },
];

const DEFAULT_STUDENTS = [
  { name: 'Misael Apriansyah Alniko', nis: '2024001', kelas: 'VIII-A', password: 'siswa123', photo: 'https://ui-avatars.com/api/?name=Misael+Apriansyah&background=2563eb&color=fff&size=128', email: 'misael@smpn34.sch.id', phone: '081234567890', alamat: 'Kutai Barat, Kalimantan Timur' },
  { name: 'Febrian', nis: '2024002', kelas: 'VIII-A', password: 'siswa123', photo: 'https://ui-avatars.com/api/?name=Febrian&background=7c3aed&color=fff&size=128', email: 'febrian@smpn34.sch.id', phone: '081234567891', alamat: 'Samarinda, Kalimantan Timur' },
  { name: 'Denia', nis: '2024003', kelas: 'VIII-B', password: 'siswa123', photo: 'https://ui-avatars.com/api/?name=Denia&background=be185d&color=fff&size=128', email: 'denia@smpn34.sch.id', phone: '081234567892', alamat: 'Samarinda, Kalimantan Timur' },
  { name: 'Ahmad Fajri', nis: '2024004', kelas: 'VIII-B', password: 'siswa123', photo: 'https://ui-avatars.com/api/?name=Ahmad+Fajri&background=059669&color=fff&size=128', email: 'ahmad@smpn34.sch.id', phone: '081234567893', alamat: 'Samarinda, Kalimantan Timur' },
  { name: 'Siti Rahayu', nis: '2024005', kelas: 'VIII-C', password: 'siswa123', photo: 'https://ui-avatars.com/api/?name=Siti+Rahayu&background=d97706&color=fff&size=128', email: 'siti@smpn34.sch.id', phone: '081234567894', alamat: 'Balikpapan, Kalimantan Timur' },
];

const ADMIN_ACCOUNTS = [
  { name: 'Administrator', username: 'admin', password: 'admin123', role: 'Admin', photo: 'https://ui-avatars.com/api/?name=Admin&background=1a3c72&color=fff&size=128' },
  { name: 'Kepala Sekolah', username: 'kepsek', password: 'kepsek123', role: 'Admin', photo: 'https://ui-avatars.com/api/?name=Kepala+Sekolah&background=dc2626&color=fff&size=128' },
];

const DAYS_ID = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
const MONTHS_ID = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];

/* ── Alpine.js App ── */
function schoolApp() {
  return {
    // ── State ──
    schoolName: 'SMPN 34 Samarinda',
    appLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Camponotus_flavomarginatus_ant.jpg/640px-Camponotus_flavomarginatus_ant.jpg',

    authMode: 'login', // 'login' | 'register'
    showLogin: false,
    loginTab: 'siswa', // 'siswa' | 'admin'
    loginForm: { u: '', p: '' },
    registerForm: { name:'', nis:'', kelas:'VIII-A', password:'', confirm:'', email:'', phone:'', alamat:'' },
    loginError: '',
    registerError: '',
    showPassword: false,

    isLoggedIn: false,
    role: '',
    user: null,
    view: 'home',
    selectedCourse: null,

    // Admin state
    adminSearch: '',
    studentSearch: '',
    monitoringSearch: '',

    // Modal state
    showMaterialModal: false,
    activeMaterial: null,
    showCourseModal: false,
    courseForm: null,
    isEditingCourse: false,
    editingCourseIndex: null,
    showConfirmModal: false,
    confirmAction: null,
    confirmMsg: '',
    showStudentModal: false,
    studentForm: null,
    isEditingStudent: false,
    editingStudentIndex: null,
    showBroadcastModal: false,
    broadcastMsg: '',

    // Toast
    toast: null,
    toastTimer: null,

    // Profile
    profileNewPassword: '',
    profileConfirmPassword: '',

    // Data
    courses: [],
    studentDatabase: [],
    notifications: [],
    historyTasks: [],

    // ── Init ──
    init() {
      this.loadState();
      this.setupHeroLogo();
      setInterval(() => { this._tick = Date.now(); }, 30000);
    },

    setupHeroLogo() {
      const stored = localStorage.getItem('smpn34_logo');
      if (stored) this.appLogo = stored;
    },

    loadState() {
      try {
        const raw = localStorage.getItem('smpn34_state');
        if (raw) {
          const s = JSON.parse(raw);
          if (s.courses?.length) this.courses = s.courses;
          else this.courses = JSON.parse(JSON.stringify(DEFAULT_COURSES));
          if (s.studentDatabase?.length) this.studentDatabase = s.studentDatabase;
          else this.studentDatabase = JSON.parse(JSON.stringify(DEFAULT_STUDENTS));
          this.notifications = s.notifications || [];
          this.historyTasks = s.historyTasks || [];
          if (s.appLogo) this.appLogo = s.appLogo;
        } else {
          this.courses = JSON.parse(JSON.stringify(DEFAULT_COURSES));
          this.studentDatabase = JSON.parse(JSON.stringify(DEFAULT_STUDENTS));
        }
      } catch (e) {
        this.courses = JSON.parse(JSON.stringify(DEFAULT_COURSES));
        this.studentDatabase = JSON.parse(JSON.stringify(DEFAULT_STUDENTS));
      }
    },

    saveState() {
      try {
        localStorage.setItem('smpn34_state', JSON.stringify({
          courses: this.courses,
          studentDatabase: this.studentDatabase,
          notifications: this.notifications,
          historyTasks: this.historyTasks,
          appLogo: this.appLogo,
        }));
      } catch(e) { console.warn('Save failed', e); }
    },

    // ── Auth ──
    login() {
      this.loginError = '';
      const u = this.loginForm.u.trim();
      const p = this.loginForm.p;
      if (!u || !p) { this.loginError = 'Username dan password wajib diisi.'; return; }

      // Admin check
      const admin = ADMIN_ACCOUNTS.find(a => a.username === u && a.password === p);
      if (admin) {
        this.isLoggedIn = true; this.role = 'Admin';
        this.user = { ...admin }; this.view = 'admin-web';
        this.showLogin = false; this.loginForm = { u:'', p:'' };
        this.showToast('Selamat datang, ' + admin.name + '!', 'success');
        return;
      }

      // Siswa check by NIS or name
      const siswa = this.studentDatabase.find(s =>
        (s.nis === u || s.name.toLowerCase() === u.toLowerCase()) && s.password === p
      );
      if (siswa) {
        this.isLoggedIn = true; this.role = 'Siswa';
        this.user = { ...siswa }; this.view = 'home';
        this.showLogin = false; this.loginForm = { u:'', p:'' };
        this.showToast('Selamat datang, ' + siswa.name + '!', 'success');
        return;
      }

      this.loginError = 'Username atau password salah. Silakan coba lagi.';
    },

    logout() {
      this.isLoggedIn = false; this.role = ''; this.user = null;
      this.selectedCourse = null; this.view = 'home';
      this.showToast('Berhasil logout.', '');
    },

    // ── Navigation ──
    goView(v) { this.view = v; this.selectedCourse = null; },
    openCourse(c) { this.selectedCourse = c; },
    openLogin(tab = 'siswa') { this.authMode = 'login'; this.showLogin = true; this.loginTab = tab; this.loginError = ''; this.registerError = ''; },
    openRegister() { this.authMode = 'register'; this.showLogin = true; this.loginTab = 'siswa'; this.loginError = ''; this.registerError = ''; },
    register() {
      this.registerError = '';
      const name = this.registerForm.name.trim();
      const nis = this.registerForm.nis.trim();
      const password = this.registerForm.password;
      const confirm = this.registerForm.confirm;
      if (!name || !nis || !password || !confirm) { this.registerError = 'Semua kolom wajib diisi.'; return; }
      if (password.length < 6) { this.registerError = 'Password minimal 6 karakter.'; return; }
      if (password !== confirm) { this.registerError = 'Konfirmasi password tidak cocok.'; return; }
      if (this.studentDatabase.some(s => s.nis === nis || s.name.toLowerCase() === name.toLowerCase())) {
        this.registerError = 'NIS atau nama sudah terdaftar.'; return;
      }
      const photo = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(name) + '&background=2563eb&color=fff&size=128';
      const student = {
        name,
        nis,
        kelas: this.registerForm.kelas || 'VIII-A',
        password,
        photo,
        email: this.registerForm.email,
        phone: this.registerForm.phone,
        alamat: this.registerForm.alamat,
      };
      this.studentDatabase.push(student);
      this.saveState();
      this.isLoggedIn = true;
      this.role = 'Siswa';
      this.user = { ...student };
      this.view = 'home';
      this.showLogin = false;
      this.loginForm = { u:'', p:'' };
      this.registerForm = { name:'', nis:'', kelas:'VIII-A', password:'', confirm:'', email:'', phone:'', alamat:'' };
      this.showToast('Akun baru berhasil dibuat dan Anda sudah masuk.', 'success');
    },

    // ── Toast ──
    showToast(msg, type = '') {
      this.toast = { msg, type };
      clearTimeout(this.toastTimer);
      this.toastTimer = setTimeout(() => { this.toast = null; }, 3500);
    },

    // ── Date/Time Helpers ──
    now() { return new Date(); },
    getTodayName() { return DAYS_ID[new Date().getDay()]; },
    getGreeting() {
      const h = new Date().getHours();
      if (h < 11) return 'Selamat Pagi';
      if (h < 15) return 'Selamat Siang';
      if (h < 18) return 'Selamat Sore';
      return 'Selamat Malam';
    },
    getFormattedDate() {
      const d = new Date();
      return DAYS_ID[d.getDay()] + ', ' + d.getDate() + ' ' + MONTHS_ID[d.getMonth()] + ' ' + d.getFullYear();
    },

    // ── Schedule Helpers ──
    getTodaySchedule() {
      const today = this.getTodayName();
      const sessions = [];
      this.courses.forEach(c => {
        (c.schedule || []).forEach(s => {
          if (s.day === today) sessions.push({ ...s, course: c.nama, kode: c.kode });
        });
      });
      return sessions.sort((a, b) => a.time.localeCompare(b.time));
    },

    getWeeklySchedule() {
      const week = [];
      DAYS_ID.slice(1, 7).forEach(day => { // Mon-Sat
        const sessions = [];
        this.courses.forEach(c => {
          (c.schedule || []).forEach(s => {
            if (s.day === day) sessions.push({ ...s, course: c.nama, kode: c.kode });
          });
        });
        week.push({ day, sessions: sessions.sort((a,b) => a.time.localeCompare(b.time)) });
      });
      return week;
    },

    parseTime(t) { const [h, m] = t.split(':').map(Number); return h * 60 + m; },
    isSessionActive(s) {
      const now = new Date(); const cur = now.getHours() * 60 + now.getMinutes();
      const start = this.parseTime(s.time); return cur >= start && cur < start + 90;
    },
    isSessionDone(s) {
      const now = new Date(); const cur = now.getHours() * 60 + now.getMinutes();
      return cur >= this.parseTime(s.time) + 90;
    },

    // ── Absen ──
    doAbsen(s) {
      if (!this.isSessionActive(s)) return;
      const now = new Date();
      const time = now.getHours().toString().padStart(2,'0') + ':' + now.getMinutes().toString().padStart(2,'0');
      s.attended = true; s.markedAt = time;
      // Mark syllabus attended
      const course = this.courses.find(c => c.nama === s.course);
      if (course) {
        const today = this.getTodayName();
        course.syllabus.forEach(m => { if (!m.attended) m.attended = true; });
      }
      this.saveState();
      this.showToast('Absen berhasil! ' + s.course + ' – ' + time, 'success');
    },

    // ── Notifications ──
    getUnreadCount() { return this.notifications.filter(n => !n.read && (n.to === this.user?.name || n.to === 'all')).length; },
    getMyNotifs() { return this.notifications.filter(n => n.to === this.user?.name || n.to === 'all').reverse(); },
    markRead(n) { n.read = true; this.saveState(); },
    markAllRead() { this.getMyNotifs().forEach(n => n.read = true); this.saveState(); },
    sendBroadcast() {
      if (!this.broadcastMsg.trim()) return;
      const n = { to: 'all', from: this.user.name, message: this.broadcastMsg.trim(), time: this.getFormattedDate(), read: false, type: 'broadcast' };
      this.notifications.push(n); this.saveState();
      this.broadcastMsg = ''; this.showBroadcastModal = false;
      this.showToast('Pemberitahuan dikirim ke semua siswa.', 'success');
    },
    sendReminder(studentName, courseName) {
      const n = { to: studentName, from: this.user.name, message: 'Pengingat: Ada tugas pada mata pelajaran ' + courseName + ' yang belum dikumpulkan.', time: this.getFormattedDate(), read: false, type: 'reminder', course: courseName };
      this.notifications.push(n); this.saveState();
      this.showToast('Pengingat dikirim ke ' + studentName, 'success');
    },

    // ── Course Helpers ──
    countPending(course) { return (course.syllabus || []).filter(s => s.hasTask && !s.submitted).length; },
    openMaterial(m) { this.activeMaterial = m; this.showMaterialModal = true; },
    submitTask(m) {
      m.submitted = true;
      // log
      const entry = { student: this.user?.name, course: this.selectedCourse?.nama, meeting: m.topic, status: 'Sudah', time: this.getFormattedDate() };
      this.historyTasks.push(entry);
      this.saveState();
      this.showToast('Tugas berhasil dikumpulkan!', 'success');
    },

    // ── Admin: Course CRUD ──
    openAddCourse() { this.courseForm = { nama:'', kode:'', image:'', schedule:[] }; this.isEditingCourse = false; this.editingCourseIndex = null; this.showCourseModal = true; },
    openEditCourse(c, i) { this.courseForm = { nama:c.nama, kode:c.kode, image:c.image||'', schedule: JSON.parse(JSON.stringify(c.schedule||[])) }; this.isEditingCourse = true; this.editingCourseIndex = i; this.showCourseModal = true; },
    closeCourseModal() { this.showCourseModal = false; this.courseForm = null; },
    saveCourse() {
      if (!this.courseForm?.nama || !this.courseForm?.kode) { this.showToast('Isi nama dan kode mapel.', 'error'); return; }
      if (this.isEditingCourse) {
        const c = this.courses[this.editingCourseIndex];
        c.nama = this.courseForm.nama; c.kode = this.courseForm.kode;
        if (this.courseForm.image) c.image = this.courseForm.image;
        c.schedule = this.courseForm.schedule || [];
      } else {
        this.courses.push({ nama: this.courseForm.nama, kode: this.courseForm.kode, image: this.courseForm.image || 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=600', syllabus: [], schedule: this.courseForm.schedule || [], warna: '#2563eb' });
      }
      this.saveState(); this.closeCourseModal();
      this.showToast('Mapel berhasil disimpan.', 'success');
    },
    deleteCourse(i) {
      this.confirmMsg = 'Hapus mapel "' + this.courses[i].nama + '"?';
      this.confirmAction = () => { this.courses.splice(i, 1); this.saveState(); this.showToast('Mapel dihapus.', ''); };
      this.showConfirmModal = true;
    },
    addScheduleEntry() { this.courseForm.schedule.push({ day: 'Senin', time: '07:00' }); },
    removeScheduleEntry(i) { this.courseForm.schedule.splice(i, 1); },
    handleCourseImageUpload(e) { const f = e.target.files[0]; if(!f) return; const r = new FileReader(); r.onload = ev => { if(this.courseForm) this.courseForm.image = ev.target.result; }; r.readAsDataURL(f); },

    // ── Admin: Student CRUD ──
    filteredStudents() { const q = (this.studentSearch||'').toLowerCase(); return this.studentDatabase.filter(s => s.name.toLowerCase().includes(q) || s.nis.includes(q) || (s.kelas||'').toLowerCase().includes(q)); },
    openAddStudent() { this.studentForm = { name:'', nis:'', kelas:'', password:'siswa123', email:'', phone:'', alamat:'', photo:'' }; this.isEditingStudent = false; this.editingStudentIndex = null; this.showStudentModal = true; },
    openEditStudent(s, i) { this.studentForm = { ...s }; this.isEditingStudent = true; this.editingStudentIndex = i; this.showStudentModal = true; },
    closeStudentModal() { this.showStudentModal = false; this.studentForm = null; },
    saveStudent() {
      if (!this.studentForm?.name || !this.studentForm?.nis) { this.showToast('Nama dan NIS wajib diisi.', 'error'); return; }
      if (this.isEditingStudent) {
        this.studentDatabase[this.editingStudentIndex] = { ...this.studentForm };
      } else {
        const photo = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(this.studentForm.name) + '&background=2563eb&color=fff&size=128';
        this.studentDatabase.push({ ...this.studentForm, photo: this.studentForm.photo || photo });
      }
      this.saveState(); this.closeStudentModal();
      this.showToast('Data siswa berhasil disimpan.', 'success');
    },
    deleteStudent(i) {
      this.confirmMsg = 'Hapus siswa "' + this.studentDatabase[i].name + '"?';
      this.confirmAction = () => { this.studentDatabase.splice(i, 1); this.saveState(); this.showToast('Data siswa dihapus.', ''); };
      this.showConfirmModal = true;
    },

    // ── Admin: Monitoring ──
    filteredCoursesMonitoring() { const q = (this.monitoringSearch||'').toLowerCase(); return this.courses.filter(c => c.nama.toLowerCase().includes(q) || (c.kode||'').toLowerCase().includes(q)); },
    getCourseStats(course) {
      const total = (course.syllabus||[]).filter(s => s.hasTask).length * Math.max(1, this.studentDatabase.length);
      const collected = this.historyTasks.filter(h => h.course === course.nama && h.status === 'Sudah').length;
      const pct = total ? Math.round(collected / total * 100) : 0;
      return { total, collected, pct };
    },

    // ── Profile ──
    handleProfilePhotoUpload(e) { const f = e.target.files[0]; if(!f) return; const r = new FileReader(); r.onload = ev => { this.user.photo = ev.target.result; const s = this.studentDatabase.find(st => st.nis === this.user.nis); if(s) s.photo = ev.target.result; this.saveState(); }; r.readAsDataURL(f); },
    saveProfile() {
      if (this.profileNewPassword) {
        if (this.profileNewPassword !== this.profileConfirmPassword) { this.showToast('Password tidak cocok.', 'error'); return; }
        if (this.profileNewPassword.length < 6) { this.showToast('Password minimal 6 karakter.', 'error'); return; }
        this.user.password = this.profileNewPassword;
        const s = this.studentDatabase.find(st => st.nis === this.user.nis);
        if (s) s.password = this.profileNewPassword;
        this.profileNewPassword = ''; this.profileConfirmPassword = '';
      }
      const s = this.studentDatabase.find(st => st.nis === this.user.nis);
      if (s) { s.name = this.user.name; s.email = this.user.email; s.phone = this.user.phone; s.alamat = this.user.alamat; }
      this.saveState();
      this.showToast('Profil berhasil disimpan.', 'success');
    },

    // ── Logo/Image Upload ──
    handleLogoUpload(e) { const f = e.target.files[0]; if(!f) return; const r = new FileReader(); r.onload = ev => { this.appLogo = ev.target.result; this.saveState(); }; r.readAsDataURL(f); },

    // ── Confirm ──
    doConfirm() { if (this.confirmAction) this.confirmAction(); this.showConfirmModal = false; this.confirmAction = null; },
    cancelConfirm() { this.showConfirmModal = false; this.confirmAction = null; },

    // ── Admin Web Settings ──
    schoolInfo: {
      nama: 'SMPN 34 Samarinda',
      alamat: 'G524+GGR, Jl. Aminah Syukur, Sungai Pinang Luar, Kec. Samarinda Kota',
      telepon: '(0541) 123456',
      email: 'info@smpn34samarinda.sch.id',
      akreditasi: 'A',
      npsn: '30401029',
    },
    saveSchoolInfo() { this.schoolName = this.schoolInfo.nama; this.saveState(); this.showToast('Informasi sekolah disimpan.', 'success'); },
  };
}
