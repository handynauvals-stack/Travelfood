// =============================================
// DATA KULINER PER KOTA
// =============================================

const dataKota = {
  Malang: {
    emoji: "🌋",
    deskripsi: "Kota apel yang kaya tradisi kuliner Jawa Timur",
    jumlahResto: 48,
    jumlahMenu: 120,
    jumlahUlasan: "14rb",
    restoran: [
      {
        id: "m1",
        nama: "Bakso President Malang",
        kategori: "Bakso & Mie",
        lokasi: "Jl. Batanghari No.5, Malang",
        rating: 4.9,
        ulasan: 3241,
        harga: "Rp 15k–35k",
        badge: "🔥 Trending",
        nomor: 1,
        tags: ["Halal", "Parkir Luas", "Ramah Anak"],
        gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAo9FYX0eUuh4cbJ6hJXauCNxoNRId7Ul5Og&s",
        deskripsi: "Bakso legendaris Malang sejak 1977. Sajian kuah bening segar dengan daging sapi pilihan. Wajib coba bakso bakar dan bakso isinya!",
        alamat: "Jl. Batanghari No.5, Klojen, Malang",
        jamBuka: "08.00 – 22.00",
        menu: [
          { nama: "Bakso Biasa", harga: "Rp 15.000" },
          { nama: "Bakso Bakar", harga: "Rp 20.000" },
          { nama: "Bakso Isi Daging", harga: "Rp 25.000" },
          { nama: "Mie Ayam Bakso", harga: "Rp 18.000" }
        ]
      },
      {
        id: "m2",
        nama: "Warung Rawon Nguling",
        kategori: "Masakan Jawa Timur",
        lokasi: "Jl. Nguling, Malang",
        rating: 4.8,
        ulasan: 2108,
        harga: "Rp 25k–55k",
        badge: "⭐ Terpopuler",
        nomor: 2,
        tags: ["Signature Dish", "Dine-in", "Takeaway"],
        gambar: "https://cnc-magazine.oramiland.com/parenting/images/Cimory-restoran-keluarga.width-800.format-webp.webp",
        deskripsi: "Rawon khas Malang dengan bumbu kluwek asli yang kaya rasa. Kuah hitam pekat, daging empuk, dan telur asin.",
        alamat: "Jl. Nguling Raya No.12, Blimbing, Malang",
        jamBuka: "07.00 – 20.00",
        menu: [
          { nama: "Rawon Daging Sapi", harga: "Rp 30.000" },
          { nama: "Rawon Iga", harga: "Rp 45.000" },
          { nama: "Nasi Pecel", harga: "Rp 20.000" }
        ]
      },
      {
        id: "m3",
        nama: "Depot Soto Dok-dok",
        kategori: "Soto & Sup",
        lokasi: "Jl. Jaksa Agung Suprapto, Malang",
        rating: 4.7,
        ulasan: 1574,
        harga: "Rp 12k–28k",
        badge: "💬 Viral",
        nomor: 3,
        tags: ["Murah", "Porsi Besar", "Buka Pagi"],
        gambar: "https://cdn-assets.jawapos.com/images/4/2025/05/07/FotoJet-1-721183192.jpg",
        deskripsi: "Soto ayam kampung dengan bumbu rempah yang kuat. Kuah bening kuning keemasan dengan irisan ayam suwir dan tauge.",
        alamat: "Jl. Jaksa Agung Suprapto No.7, Klojen, Malang",
        jamBuka: "06.00 – 14.00",
        menu: [
          { nama: "Soto Ayam Biasa", harga: "Rp 15.000" },
          { nama: "Soto + Nasi", harga: "Rp 20.000" },
          { nama: "Soto Campur", harga: "Rp 22.000" }
        ]
      },
      {
        id: "m4",
        nama: "Nasi Pecel Bu Tinuk",
        kategori: "Masakan Jawa",
        lokasi: "Pasar Besar, Malang",
        rating: 4.8,
        ulasan: 987,
        harga: "Rp 10k–22k",
        badge: "🍃 Favorit",
        nomor: 4,
        tags: ["Sarapan", "Murah Meriah", "Otentik"],
        gambar: "https://blog.higo.id/_next/image?url=https%3A%2F%2Fimgblog.higo.id%2F1702539033-d.webp&w=1920&q=75",
        deskripsi: "Nasi pecel dengan sambel kacang rumahan khas Malang. Dilengkapi rempeyek, tempe goreng, dan lauk pelengkap.",
        alamat: "Pasar Besar Malang, Los F Blok 12",
        jamBuka: "05.30 – 11.00",
        menu: [
          { nama: "Nasi Pecel + Ayam", harga: "Rp 20.000" },
          { nama: "Nasi Pecel + Tempe", harga: "Rp 12.000" },
          { nama: "Rempeyek", harga: "Rp 3.000" }
        ]
      },
      {
        id: "m5",
        nama: "Depot Cwie Mie Malang",
        kategori: "Mie & Noodle",
        lokasi: "Jl. Semeru, Malang",
        rating: 4.7,
        ulasan: 2543,
        harga: "Rp 20k–40k",
        badge: "⭐ Terpopuler",
        nomor: 5,
        tags: ["Ikonik", "Must Try", "Instagramable"],
        gambar: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/60/b5/6c/penthouse-on-19th.jpg?w=600&h=600&s=1",
        deskripsi: "Cwie mie atau mie ayam Malang yang sudah legendaris. Mie kuning kenyal dengan ayam cincang berbumbu dan pangsit goreng renyah.",
        alamat: "Jl. Semeru No.44, Klojen, Malang",
        jamBuka: "08.00 – 15.00",
        menu: [
          { nama: "Cwie Mie Biasa", harga: "Rp 20.000" },
          { nama: "Cwie Mie + Pangsit", harga: "Rp 28.000" },
          { nama: "Cwie Mie Spesial", harga: "Rp 35.000" }
        ]
      },
      {
        id: "m6",
        nama: "Pondok Ronde Titoni",
        kategori: "Minuman & Jajanan",
        lokasi: "Jl. Zainul Arifin, Malang",
        rating: 4.6,
        ulasan: 1203,
        harga: "Rp 8k–18k",
        badge: "🔥 Trending",
        nomor: 6,
        tags: ["Malam", "Hangat", "Khas Malang"],
        gambar: "https://assets.pikiran-rakyat.com/crop/0x0:0x0/720x0/webp/photo/2025/04/24/774658488.jpg",
        deskripsi: "Ronde hangat khas Malang yang cocok dinikmati malam hari. Bola-bola ketan isi kacang dalam kuah jahe harum.",
        alamat: "Jl. Zainul Arifin No.23, Kiduldalem, Malang",
        jamBuka: "17.00 – 23.00",
        menu: [
          { nama: "Ronde Biasa", harga: "Rp 10.000" },
          { nama: "Ronde Komplit", harga: "Rp 15.000" },
          { nama: "Wedang Jahe", harga: "Rp 8.000" }
        ]
      }
    ],




    
    makanan: [
      {
        id: "mf1",
        nama: "Bakso Malang",
        kategori: "Kuliner Ikonik",
        lokasi: "Bakso President · Depot Pak Man · Cak Kar",
        rating: 4.9,
        ulasan: 8823,
        harga: "Rp 15k–30k",
        badge: "🔥 #1 Trending",
        nomor: 1,
        tags: ["Wajib Coba", "Halal", "Semua Usia"],
        gambar: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&q=80",
        deskripsi: "Bakso Malang disajikan dengan pangsit, tahu, dan mie kuning dalam kuah kaldu yang kaya. Berbeda dari bakso daerah lain.",
        alamat: "Tersebar di seluruh Kota Malang",
        jamBuka: "07.00 – 22.00",
        menu: []
      },
      {
        id: "mf2",
        nama: "Rawon",
        kategori: "Sup Khas Jatim",
        lokasi: "Warung Nguling · RM Dua Saudara",
        rating: 4.8,
        ulasan: 5441,
        harga: "Rp 25k–50k",
        badge: "⭐ Favorit Turis",
        nomor: 2,
        tags: ["Unik", "Bumbu Kluwek", "Daging Sapi"],
        gambar: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=600&q=80",
        deskripsi: "Sup hitam khas Jawa Timur menggunakan kluwek. Rasanya gurih dan kaya rempah, dihidangkan dengan nasi dan sambal terasi.",
        alamat: "Berbagai warung rawon di Kota Malang",
        jamBuka: "07.00 – 20.00",
        menu: []
      },
      {
        id: "mf3",
        nama: "Cwie Mie (Mie Ayam)",
        kategori: "Mie Khas Malang",
        lokasi: "Depot Semeru · Gang Sapi",
        rating: 4.8,
        ulasan: 4230,
        harga: "Rp 18k–35k",
        badge: "💬 Viral",
        nomor: 3,
        tags: ["Khas Malang", "Kenyang", "Terjangkau"],
        gambar: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=600&q=80",
        deskripsi: "Mie ayam khas Malang dengan mie kuning kenyal dan topping ayam cincang berbumbu manis-gurih yang lezat.",
        alamat: "Jl. Semeru & sekitarnya",
        jamBuka: "07.00 – 15.00",
        menu: []
      },
      {
        id: "mf4",
        nama: "Nasi Pecel",
        kategori: "Makanan Tradisional",
        lokasi: "Bu Tinuk · Pasar Besar · Bu Khotimah",
        rating: 4.7,
        ulasan: 3120,
        harga: "Rp 10k–20k",
        badge: "🍃 Sehat & Murah",
        nomor: 4,
        tags: ["Vegan Friendly", "Sarapan", "Murah"],
        gambar: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
        deskripsi: "Nasi dengan sayuran rebus disiram saus kacang khas Malang yang lebih kering dan pekat. Dilengkapi rempeyek dan peyek teri.",
        alamat: "Pasar tradisional & warung sekitar kota",
        jamBuka: "05.30 – 11.00",
        menu: []
      },
      {
        id: "mf5",
        nama: "Tahu Campur",
        kategori: "Sup & Gorengan",
        lokasi: "Warung Khas Malang",
        rating: 4.7,
        ulasan: 1876,
        harga: "Rp 15k–25k",
        badge: "🔥 Trending",
        nomor: 5,
        tags: ["Kenyang", "Gurih", "Suasana Lokal"],
        gambar: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
        deskripsi: "Tahu goreng, lentho, mie kuning, dan daging sapi dalam kuah bumbu petis khas Jawa Timur. Kaya rasa dan mengenyangkan.",
        alamat: "Warung tahu campur di berbagai sudut kota",
        jamBuka: "09.00 – 21.00",
        menu: []
      }
    ]
  },
  Bali: {
    emoji: "🌴",
    deskripsi: "Surga wisata dengan kuliner lokal dan internasional yang kaya",
    jumlahResto: 210,
    jumlahMenu: 580,
    jumlahUlasan: "92rb",
    restoran: [
      {
        id: "b1",
        nama: "Warung Babi Guling Ibu Oka",
        kategori: "Babi Guling",
        lokasi: "Jl. Suweta, Ubud, Bali",
        rating: 4.9,
        ulasan: 12450,
        harga: "Rp 50k–120k",
        badge: "🔥 #1 Trending",
        nomor: 1,
        tags: ["Ikonik", "Wajib Coba", "Non-Halal"],
        gambar: "https://images.unsplash.com/photo-1583835746434-cf1534674b41?w=600&q=80",
        deskripsi: "Warung babi guling paling terkenal di Bali. Kulit renyah dan bumbu base genep yang kaya. Sudah diulas banyak media internasional.",
        alamat: "Jl. Suweta No.2, Ubud, Gianyar, Bali",
        jamBuka: "11.00 – 17.00",
        menu: [
          { nama: "Nasi Babi Guling", harga: "Rp 65.000" },
          { nama: "Nasi Babi Guling Spesial", harga: "Rp 90.000" },
          { nama: "Es Kelapa Muda", harga: "Rp 20.000" }
        ]
      },
      {
        id: "b2",
        nama: "Bebek Bengil (Dirty Duck)",
        kategori: "Bebek Goreng",
        lokasi: "Ubud, Bali",
        rating: 4.8,
        ulasan: 8900,
        harga: "Rp 120k–300k",
        badge: "🔥 Trending",
        nomor: 2,
        tags: ["Premium", "View Sawah", "Instagramable"],
        gambar: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=600&q=80",
        deskripsi: "Bebek goreng crispy khas Bali dengan pemandangan sawah hijau yang indah. Destinasi kuliner wajib para traveler di Ubud.",
        alamat: "Jl. Hanoman, Padang Tegal, Ubud, Bali",
        jamBuka: "10.00 – 22.00",
        menu: [
          { nama: "Bebek Goreng Crispy", harga: "Rp 180.000" },
          { nama: "Ayam Betutu", harga: "Rp 150.000" },
          { nama: "Nasi Campur Premium", harga: "Rp 120.000" }
        ]
      },
      {
        id: "b3",
        nama: "Sate Lilit Pak Malen",
        kategori: "Sate Khas Bali",
        lokasi: "Seminyak, Bali",
        rating: 4.7,
        ulasan: 3100,
        harga: "Rp 30k–80k",
        badge: "💬 Viral",
        nomor: 3,
        tags: ["Seafood", "Pantai", "Romantis"],
        gambar: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80",
        deskripsi: "Sate lilit ikan segar dililitkan pada batang sereh, dengan bumbu Bali yang harum. Dipanggang sempurna di tepi pantai Seminyak.",
        alamat: "Jl. Drupadi No.8, Seminyak, Badung, Bali",
        jamBuka: "12.00 – 22.00",
        menu: [
          { nama: "Sate Lilit Ikan (10 pcs)", harga: "Rp 45.000" },
          { nama: "Nasi Campur Bali", harga: "Rp 55.000" }
        ]
      }
    ],
    makanan: [
      {
        id: "bf1",
        nama: "Babi Guling",
        kategori: "Kuliner Khas Bali",
        lokasi: "Ibu Oka · Chandra · Pak Malen",
        rating: 4.9,
        ulasan: 18000,
        harga: "Rp 50k–130k",
        badge: "🔥 #1 Trending",
        nomor: 1,
        tags: ["Non-Halal", "Ikonik", "Wajib Coba"],
        gambar: "https://images.unsplash.com/photo-1583835746434-cf1534674b41?w=600&q=80",
        deskripsi: "Hidangan seremonial Bali yang kini jadi kuliner wisata utama. Bumbu base genep kaya rempah, kulit renyah dan daging juicy.",
        alamat: "Tersebar di seluruh Bali",
        jamBuka: "Siang hari",
        menu: []
      },
      {
        id: "bf2",
        nama: "Nasi Campur Bali",
        kategori: "Nasi Komplit Khas Bali",
        lokasi: "Berbagai warung di Bali",
        rating: 4.8,
        ulasan: 9500,
        harga: "Rp 30k–75k",
        badge: "⭐ Populer",
        nomor: 2,
        tags: ["Komplit", "Variasi", "Halal Ada"],
        gambar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80",
        deskripsi: "Nasi putih dengan berbagai lauk khas Bali: lawar, sate lilit, ayam betutu, dan sambal matah. Pengalaman rasa Bali dalam satu piring.",
        alamat: "Warung makan di seluruh Bali",
        jamBuka: "08.00 – 21.00",
        menu: []
      },
      {
        id: "bf3",
        nama: "Ayam Betutu",
        kategori: "Ayam Berbumbu",
        lokasi: "Betutu Men Tempeh · Warung Kaja",
        rating: 4.8,
        ulasan: 7230,
        harga: "Rp 60k–200k",
        badge: "💬 Viral",
        nomor: 3,
        tags: ["Pedas", "Aromatik", "Tradisional"],
        gambar: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=600&q=80",
        deskripsi: "Ayam utuh dilumuri bumbu genep dan dibungkus daun pisang, dipanggang berjam-jam hingga bumbu meresap sempurna.",
        alamat: "Gilimanuk, Ubud, dan sekitarnya",
        jamBuka: "10.00 – 20.00",
        menu: []
      }
    ]
  },
  Yogyakarta: {
    emoji: "🏯",
    deskripsi: "Kota budaya dengan kuliner tradisional Jawa yang kaya",
    jumlahResto: 85,
    jumlahMenu: 200,
    jumlahUlasan: "31rb",
    restoran: [
      {
        id: "y1",
        nama: "Gudeg Yu Djum",
        kategori: "Gudeg Khas Jogja",
        lokasi: "Jl. Kaliurang, Yogyakarta",
        rating: 4.9,
        ulasan: 9800,
        harga: "Rp 20k–60k",
        badge: "🔥 #1 Trending",
        nomor: 1,
        tags: ["Legendaris", "Halal", "Wajib Coba"],
        gambar: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80",
        deskripsi: "Gudeg paling terkenal di Yogyakarta dengan rasa manis khas. Dimasak dengan nangka muda dan gula jawa selama berjam-jam. Berdiri sejak 1950.",
        alamat: "Jl. Kaliurang KM 4, Yogyakarta",
        jamBuka: "06.00 – 22.00",
        menu: [
          { nama: "Nasi Gudeg + Ayam", harga: "Rp 35.000" },
          { nama: "Nasi Gudeg + Telor", harga: "Rp 25.000" },
          { nama: "Nasi Gudeg Komplit", harga: "Rp 55.000" }
        ]
      },
      {
        id: "y2",
        nama: "Sate Klathak Pak Pong",
        kategori: "Sate Khas Jogja",
        lokasi: "Jl. Imogiri Timur, Bantul",
        rating: 4.8,
        ulasan: 5600,
        harga: "Rp 30k–80k",
        badge: "⭐ Ikonik",
        nomor: 2,
        tags: ["Unik", "Jeruji Besi", "Viral"],
        gambar: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80",
        deskripsi: "Sate kambing unik khas Bantul yang ditusuk menggunakan jeruji sepeda. Dibakar dengan arang batok kelapa tanpa bumbu kecap.",
        alamat: "Jl. Imogiri Timur KM 10, Bantul, Yogyakarta",
        jamBuka: "17.00 – 23.00",
        menu: [
          { nama: "Sate Klathak (2 tusuk)", harga: "Rp 35.000" },
          { nama: "Tongseng Kambing", harga: "Rp 40.000" }
        ]
      },
      {
        id: "y3",
        nama: "Angkringan Lik Man",
        kategori: "Angkringan Legendaris",
        lokasi: "Dekat Stasiun Tugu, Yogyakarta",
        rating: 4.7,
        ulasan: 6200,
        harga: "Rp 2k–15k",
        badge: "🌙 Malam",
        nomor: 3,
        tags: ["Murah Banget", "Unik", "Ngopi Malam"],
        gambar: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
        deskripsi: "Angkringan paling terkenal di Jogja. Nikmati nasi kucing, gorengan, dan kopi jos sambil duduk di pinggir jalan dekat Stasiun Tugu.",
        alamat: "Jl. Wongsodirjan, dekat Stasiun Tugu Yogyakarta",
        jamBuka: "17.00 – 03.00",
        menu: [
          { nama: "Nasi Kucing", harga: "Rp 3.000" },
          { nama: "Sate Usus", harga: "Rp 2.000" },
          { nama: "Kopi Jos", harga: "Rp 4.000" }
        ]
      }
    ],
    makanan: [
      {
        id: "yf1",
        nama: "Gudeg Jogja",
        kategori: "Masakan Tradisional",
        lokasi: "Yu Djum · Bu Lies · Pawon Gudeg",
        rating: 4.9,
        ulasan: 15000,
        harga: "Rp 20k–55k",
        badge: "🔥 #1 Trending",
        nomor: 1,
        tags: ["Manis", "Halal", "Ikonik"],
        gambar: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80",
        deskripsi: "Nangka muda dimasak dengan santan dan gula jawa hingga rasa manis legit khas. Disajikan dengan ayam, telur, dan krecek pedas.",
        alamat: "Tersebar di seluruh Yogyakarta",
        jamBuka: "06.00 – 22.00",
        menu: []
      },
      {
        id: "yf2",
        nama: "Sate Klathak",
        kategori: "Sate Kambing Unik",
        lokasi: "Pak Pong · Pak Bari · Bu Jono",
        rating: 4.8,
        ulasan: 8900,
        harga: "Rp 30k–80k",
        badge: "⭐ Viral",
        nomor: 2,
        tags: ["Unik", "Kambing", "Non-MSG"],
        gambar: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80",
        deskripsi: "Sate kambing ditusuk jeruji besi dan dibakar polos tanpa kecap. Teknik unik ini menghasilkan daging matang sempurna dari dalam ke luar.",
        alamat: "Kawasan Imogiri, Bantul, Yogyakarta",
        jamBuka: "17.00 – 23.00",
        menu: []
      },
      {
        id: "yf3",
        nama: "Nasi Kucing Angkringan",
        kategori: "Jajanan Malam",
        lokasi: "Angkringan di seluruh Jogja",
        rating: 4.7,
        ulasan: 7200,
        harga: "Rp 2k–5k",
        badge: "🌙 Jajanan Malam",
        nomor: 3,
        tags: ["Murah Banget", "Unik", "Pengalaman Lokal"],
        gambar: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
        deskripsi: "Nasi bungkus kecil dengan lauk seadanya, dinikmati di gerobak angkringan. Simbol keakraban dan kesederhanaan budaya Jogja.",
        alamat: "Hampir di setiap sudut Kota Yogyakarta",
        jamBuka: "17.00 – 03.00",
        menu: []
      }
    ]
  },
  Surabaya: {
    emoji: "🦈",
    deskripsi: "Kota pahlawan dengan kuliner Jawa Timur yang autentik",
    jumlahResto: 72,
    jumlahMenu: 170,
    jumlahUlasan: "28rb",
    restoran: [
      {
        id: "s1",
        nama: "Lontong Balap Pak Gendut",
        kategori: "Lontong Balap",
        lokasi: "Jl. Wonokromo, Surabaya",
        rating: 4.9,
        ulasan: 7800,
        harga: "Rp 20k–35k",
        badge: "🔥 #1 Trending",
        nomor: 1,
        tags: ["Ikonik", "Halal", "Wajib Coba"],
        gambar: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
        deskripsi: "Lontong balap khas Surabaya dengan kuah petis yang harum. Kombinasi tahu goreng, lontong, tauge, dan lentho yang menggugah selera.",
        alamat: "Jl. Wonokromo No.77, Surabaya",
        jamBuka: "08.00 – 20.00",
        menu: [
          { nama: "Lontong Balap", harga: "Rp 20.000" },
          { nama: "Lontong Balap Spesial", harga: "Rp 30.000" },
          { nama: "Sate Kerang", harga: "Rp 15.000" }
        ]
      },
      {
        id: "s2",
        nama: "Soto Ayam Pak Sadi",
        kategori: "Soto Lamongan",
        lokasi: "Jl. Pahlawan, Surabaya",
        rating: 4.8,
        ulasan: 4500,
        harga: "Rp 18k–35k",
        badge: "⭐ Terpopuler",
        nomor: 2,
        tags: ["Khas Surabaya", "Murah", "Halal"],
        gambar: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=600&q=80",
        deskripsi: "Soto ayam khas Lamongan dengan kuah kuning bening yang gurih. Disajikan dengan tauge, telur rebus, dan perkedel jagung.",
        alamat: "Jl. Pahlawan No.12, Pabean Cantian, Surabaya",
        jamBuka: "07.00 – 15.00",
        menu: [
          { nama: "Soto Ayam", harga: "Rp 18.000" },
          { nama: "Soto Komplit", harga: "Rp 28.000" }
        ]
      }
    ],
    makanan: [
      {
        id: "sf1",
        nama: "Rawon Surabaya",
        kategori: "Sup Hitam Khas",
        lokasi: "Warung Rawon di seluruh Surabaya",
        rating: 4.9,
        ulasan: 9200,
        harga: "Rp 25k–55k",
        badge: "🔥 #1 Trending",
        nomor: 1,
        tags: ["Ikonik", "Halal", "Kaya Rasa"],
        gambar: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=600&q=80",
        deskripsi: "Rawon Surabaya dengan kuah kluwek lebih pekat dan daging sapi yang lebih banyak. Disajikan dengan sambal terasi dan taoge mentah.",
        alamat: "Berbagai warung di Surabaya",
        jamBuka: "07.00 – 21.00",
        menu: []
      },
      {
        id: "sf2",
        nama: "Lontong Balap",
        kategori: "Kuliner Ikonik Surabaya",
        lokasi: "Pak Gendut · Pak Qomar",
        rating: 4.8,
        ulasan: 7600,
        harga: "Rp 18k–35k",
        badge: "⭐ Favorit Turis",
        nomor: 2,
        tags: ["Unik", "Kuah Petis", "Halal"],
        gambar: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
        deskripsi: "Lontong, tauge, dan lentho dalam kuah petis yang harum dan gurih. Nama 'balap' berasal dari cara penjual berlomba melayani pembeli di masa lalu.",
        alamat: "Tersebar di seluruh Surabaya",
        jamBuka: "08.00 – 20.00",
        menu: []
      }
    ]
  },
  Jakarta: {
    emoji: "🏙️",
    deskripsi: "Ibu kota yang menjadi melting pot kuliner nusantara",
    jumlahResto: 520,
    jumlahMenu: 1200,
    jumlahUlasan: "180rb",
    restoran: [
      {
        id: "j1",
        nama: "Soto Betawi H. Ma'ruf",
        kategori: "Soto Betawi",
        lokasi: "Monas, Jakarta Pusat",
        rating: 4.8,
        ulasan: 12300,
        harga: "Rp 45k–90k",
        badge: "🔥 #1 Trending",
        nomor: 1,
        tags: ["Legendaris", "Halal", "Betawi Asli"],
        gambar: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=600&q=80",
        deskripsi: "Soto Betawi asli dengan kuah santan kental yang gurih dan daging sapi empuk. Melayani pelanggan sejak 1972.",
        alamat: "Jl. Budi Kemuliaan No.2, Jakarta Pusat",
        jamBuka: "10.00 – 22.00",
        menu: [
          { nama: "Soto Betawi Daging", harga: "Rp 55.000" },
          { nama: "Soto Betawi Campur", harga: "Rp 70.000" }
        ]
      },
      {
        id: "j2",
        nama: "Kerak Telor Monas",
        kategori: "Makanan Betawi",
        lokasi: "Kawasan Monas, Jakarta",
        rating: 4.6,
        ulasan: 6700,
        harga: "Rp 25k–45k",
        badge: "⭐ Warisan Budaya",
        nomor: 2,
        tags: ["Betawi", "Unik", "Street Food"],
        gambar: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
        deskripsi: "Omelet unik khas Betawi dari telur bebek, beras ketan, dan serundeng kelapa. Dimasak terbalik di atas bara arang dengan cara sangat tradisional.",
        alamat: "Area Monas & Kota Tua, Jakarta",
        jamBuka: "09.00 – 18.00",
        menu: [
          { nama: "Kerak Telor Bebek", harga: "Rp 40.000" },
          { nama: "Kerak Telor Ayam", harga: "Rp 30.000" }
        ]
      }
    ],
    makanan: [
      {
        id: "jf1",
        nama: "Soto Betawi",
        kategori: "Sup Khas Betawi",
        lokasi: "H. Ma'ruf · Soto Gebrak · S. Parman",
        rating: 4.8,
        ulasan: 15600,
        harga: "Rp 40k–90k",
        badge: "🔥 #1 Trending",
        nomor: 1,
        tags: ["Ikonik", "Santan", "Halal"],
        gambar: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=600&q=80",
        deskripsi: "Soto dengan kuah santan kental dan susu yang gurih. Berisi daging sapi, tomat, dan kentang. Ciri khas yang tidak ditemukan di daerah lain.",
        alamat: "Tersebar di seluruh Jakarta",
        jamBuka: "09.00 – 22.00",
        menu: []
      },
      {
        id: "jf2",
        nama: "Kerak Telor",
        kategori: "Street Food Betawi",
        lokasi: "Kawasan Monas & Kota Tua",
        rating: 4.6,
        ulasan: 8900,
        harga: "Rp 25k–45k",
        badge: "⭐ Warisan Budaya",
        nomor: 2,
        tags: ["Unik", "Tradisional", "Instagramable"],
        gambar: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
        deskripsi: "Street food legendaris Betawi yang jarang ditemukan di luar Jakarta. Proses memasak yang unik dengan serundeng harum jadi daya tarik tersendiri.",
        alamat: "Monas, Kota Tua, PRJ Kemayoran",
        jamBuka: "09.00 – 18.00",
        menu: []
      }
    ]
  }
};

// Foto untuk setiap kota di bagian "Jelajahi Kota Lain"
const fotoKota = {
  Malang: "https://images.unsplash.com/photo-1543470373-e055b73a8f29?w=400&q=80",
  Bali: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&q=80",
  Yogyakarta: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400&q=80",
  Surabaya: "https://images.unsplash.com/photo-1590674899484-13da0d5449ba?w=400&q=80",
  Jakarta: "https://images.unsplash.com/photo-1555899434-94d1368aa7af?w=400&q=80"
};

// =============================================
// VARIABEL STATUS HALAMAN
// =============================================

let kotaAktif = "Malang";
let tabAktif = "resto";
let filterAktif = "semua";

// =============================================
// FUNGSI UTAMA
// =============================================

// Jalankan saat halaman pertama kali dibuka
window.onload = function () {
  tampilkanKota("Malang");
  buatGridKota();
};

// Dipanggil saat tombol "Cari" diklik
function cariKota() {
  const input = document.getElementById("inputKota").value.trim();
  const kotaDitemukan = Object.keys(dataKota).find(
    k => k.toLowerCase() === input.toLowerCase()
  );
  if (kotaDitemukan) {
    pilihKota(kotaDitemukan, null);
    document.getElementById("trending").scrollIntoView({ behavior: "smooth" });
  } else {
    alert("Kota tidak ditemukan. Coba: Malang, Bali, Yogyakarta, Surabaya, atau Jakarta.");
  }
}

// Dipanggil saat chip kota diklik
function pilihKota(namaKota, tombol) {
  document.querySelectorAll(".chip").forEach(c => c.classList.remove("aktif"));
  if (tombol) tombol.classList.add("aktif");
  document.getElementById("inputKota").value = namaKota;
  tampilkanKota(namaKota);
  document.getElementById("trending").scrollIntoView({ behavior: "smooth" });
}

// Tampilkan data untuk kota yang dipilih
function tampilkanKota(namaKota) {
  if (!dataKota[namaKota]) return;

  kotaAktif = namaKota;
  filterAktif = "semua";

  const kota = dataKota[namaKota];
  document.getElementById("namaKota").textContent = namaKota;
  document.getElementById("deskKota").textContent = kota.deskripsi;
  document.getElementById("statKota").innerHTML = `
    <div class="stat-item">
      <div class="stat-angka">${kota.jumlahResto}+</div>
      <div class="stat-label">Restoran</div>
    </div>
    <div class="stat-item">
      <div class="stat-angka">${kota.jumlahMenu}+</div>
      <div class="stat-label">Menu</div>
    </div>
    <div class="stat-item">
      <div class="stat-angka">${kota.jumlahUlasan}</div>
      <div class="stat-label">Ulasan</div>
    </div>
  `;

  tampilkanKartu();
}

// Dipanggil saat tab "Resto Trending" atau "Makanan Trending" diklik
function gantiTab(tab, tombol) {
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("aktif"));
  tombol.classList.add("aktif");
  tabAktif = tab;
  filterAktif = "semua";
  tampilkanKartu();
}

// Tampilkan kartu restoran atau makanan
function tampilkanKartu() {
  const items = tabAktif === "resto"
    ? dataKota[kotaAktif].restoran
    : dataKota[kotaAktif].makanan;

  buatFilterChips(items);

  const filtered = filterAktif === "semua"
    ? items
    : items.filter(item => item.kategori === filterAktif);

  const grid = document.getElementById("kartuGrid");
  grid.innerHTML = filtered.map(item => `
    <div class="kartu" onclick="bukaModal('${item.id}')">
      <div class="kartu-gambar">
        <img src="${item.gambar}" alt="${item.nama}" loading="lazy" />
        <div class="badge ${tabAktif === 'makanan' ? 'makanan' : ''}">${item.badge}</div>
        <div class="nomor">#${item.nomor}</div>
      </div>
      <div class="kartu-isi">
        <div class="kartu-kategori">${item.kategori}</div>
        <div class="kartu-nama">${item.nama}</div>
        <div class="kartu-sub">${item.lokasi}</div>
        <div class="kartu-bawah">
          <div class="rating"><span>★</span> ${item.rating} <span class="ulasan">(${item.ulasan.toLocaleString()})</span></div>
          <div class="harga">${item.harga}</div>
        </div>
        <div class="tag-list">
          ${item.tags.map(t => `<span class="tag">${t}</span>`).join("")}
        </div>
      </div>
    </div>
  `).join("");
}

// Buat tombol filter berdasarkan kategori yang ada
function buatFilterChips(items) {
  const kategori = [...new Set(items.map(i => i.kategori))];
  const baris = document.getElementById("filterBaris");
  baris.innerHTML = `
    <button class="filter-chip aktif" onclick="filterKartu('semua', this)">Semua</button>
    ${kategori.map(k => `<button class="filter-chip" onclick="filterKartu('${k}', this)">${k}</button>`).join("")}
  `;
}

// Filter kartu berdasarkan kategori
function filterKartu(kategori, tombol) {
  document.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("aktif"));
  tombol.classList.add("aktif");
  filterAktif = kategori;
  tampilkanKartu();
}

// =============================================
// MODAL DETAIL
// =============================================

function bukaModal(idItem) {
  const semuaItem = [
    ...dataKota[kotaAktif].restoran,
    ...dataKota[kotaAktif].makanan
  ];
  const item = semuaItem.find(i => i.id === idItem);
  if (!item) return;

  const menuHtml = item.menu.length > 0 ? `
    <div class="modal-menu">
      <h4>Menu Populer</h4>
      ${item.menu.map(m => `
        <div class="menu-item">
          <span>${m.nama}</span>
          <span class="menu-harga">${m.harga}</span>
        </div>
      `).join("")}
    </div>
  ` : "";

  document.getElementById("modalIsi").innerHTML = `
    <img class="modal-gambar" src="${item.gambar}" alt="${item.nama}" />
    <div class="modal-body">
      <div class="modal-kategori">${item.kategori}</div>
      <div class="modal-nama">${item.nama}</div>
      <div class="modal-sub">${item.lokasi}</div>
      <div class="modal-stats">
        <div class="modal-stat-item">
          <div class="modal-stat-angka">★ ${item.rating}</div>
          <div class="modal-stat-label">Rating</div>
        </div>
        <div class="modal-stat-item">
          <div class="modal-stat-angka">${item.ulasan.toLocaleString()}</div>
          <div class="modal-stat-label">Ulasan</div>
        </div>
        <div class="modal-stat-item">
          <div class="modal-stat-angka">${item.harga}</div>
          <div class="modal-stat-label">Harga</div>
        </div>
      </div>
      <div class="modal-deskripsi">${item.deskripsi}</div>
      <div class="modal-tag-list">
        ${item.tags.map(t => `<span class="modal-tag">${t}</span>`).join("")}
      </div>
      <div class="modal-alamat">📍 ${item.alamat} &nbsp;|&nbsp; 🕐 ${item.jamBuka}</div>
      ${menuHtml}
    </div>
  `;

  document.getElementById("modalLatar").classList.add("buka");
  document.body.style.overflow = "hidden";
}

function tutupModal(event) {
  if (!event || event.target === document.getElementById("modalLatar") || event.target.classList.contains("modal-tutup")) {
    document.getElementById("modalLatar").classList.remove("buka");
    document.body.style.overflow = "";
  }
}

// Tutup modal dengan tombol Escape
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") tutupModal();
});

// =============================================
// GRID KOTA
// =============================================

function buatGridKota() {
  const grid = document.getElementById("kotaGrid");
  grid.innerHTML = Object.keys(dataKota).map(kota => `
    <div class="kartu-kota" onclick="pilihKotaDariGrid('${kota}')">
      <img src="${fotoKota[kota]}" alt="${kota}" loading="lazy" />
      <div class="overlay-kota">
        <strong>${dataKota[kota].emoji} ${kota}</strong>
        <span>${dataKota[kota].jumlahResto}+ Resto</span>
      </div>
    </div>
  `).join("");
}

function pilihKotaDariGrid(namaKota) {
  document.querySelectorAll(".chip").forEach(c => {
    c.classList.toggle("aktif", c.textContent.includes(namaKota));
  });
  document.getElementById("inputKota").value = namaKota;
  tampilkanKota(namaKota);
  document.getElementById("trending").scrollIntoView({ behavior: "smooth" });
}
