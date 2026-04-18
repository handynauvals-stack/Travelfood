const DATA = {
  Malang: {
    emoji: "🌋",
    desc: "Kota apel yang kaya tradisi kuliner Jawa Timur",
    stats: { resto: 48, makanan: 120, ulasan: "14k" },
    restaurants: [
      {
        id: "r1",
        name: "Bakso President Malang",
        category: "Bakso & Mie",
        sub: "Jl. Batanghari No.5, Malang",
        rating: 4.9,
        reviews: 3241,
        price: "Rp 15k–35k",
        badge: "🔥 Trending",
        rank: 1,
        tags: ["Halal", "Parkir Luas", "Ramah Anak"],
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAo9FYX0eUuh4cbJ6hJXauCNxoNRId7Ul5Og&s",
        desc: "Bakso legendaris Malang sejak 1977. Sajian kuah bening segar dengan daging sapi pilihan, sudah dikunjungi ratusan ribu wisatawan. Wajib coba bakso bakar dan bakso isinya!",
        address: "Jl. Batanghari No.5, Klojen, Malang",
        opens: "08.00 – 22.00",
        menu: [
          { name: "Bakso Biasa", price: "Rp 15.000" },
          { name: "Bakso Bakar", price: "Rp 20.000" },
          { name: "Bakso Isi Daging", price: "Rp 25.000" },
          { name: "Mie Ayam Bakso", price: "Rp 18.000" },
        ]
      },
      {
        id: "r2",
        name: "Warung Rawon Nguling",
        category: "Masakan Jawa Timur",
        sub: "Jl. Nguling, Malang",
        rating: 4.8,
        reviews: 2108,
        price: "Rp 25k–55k",
        badge: "⭐ Terpopuler",
        rank: 2,
        tags: ["Signature Dish", "Dine-in", "Takeaway"],
        img: "https://cnc-magazine.oramiland.com/parenting/images/Cimory-restoran-keluarga.width-800.format-webp.webp",
        desc: "Rawon khas Malang dengan bumbu kluwek asli yang kaya rasa. Kuah hitam pekat, daging empuk, dan telur asin—paduan sempurna yang membuat ketagihan.",
        address: "Jl. Nguling Raya No.12, Blimbing, Malang",
        opens: "07.00 – 20.00",
        menu: [
          { name: "Rawon Daging Sapi", price: "Rp 30.000" },
          { name: "Rawon Iga", price: "Rp 45.000" },
          { name: "Nasi Pecel", price: "Rp 20.000" },
          { name: "Es Campur", price: "Rp 12.000" },
        ]
      },
      {
        id: "r3",
        name: "Depot Soto Dok-dok",
        category: "Soto & Sup",
        sub: "Jl. Jaksa Agung Suprapto, Malang",
        rating: 4.7,
        reviews: 1574,
        price: "Rp 12k–28k",
        badge: "💬 Viral",
        rank: 3,
        tags: ["Murah", "Porsi Besar", "Buka Pagi"],
        img: "https://cdn-assets.jawapos.com/images/4/2025/05/07/FotoJet-1-721183192.jpg",
        desc: "Soto ayam kampung dengan bumbu rempah yang kuat. Kuah bening kuning keemasan dengan irisan ayam suwir, tauge, dan perasan jeruk nipis segar.",
        address: "Jl. Jaksa Agung Suprapto No.7, Klojen, Malang",
        opens: "06.00 – 14.00",
        menu: [
          { name: "Soto Ayam Biasa", price: "Rp 15.000" },
          { name: "Soto + Nasi", price: "Rp 20.000" },
          { name: "Soto Campur", price: "Rp 22.000" },
          { name: "Jeruk Hangat", price: "Rp 5.000" },
        ]
      },
      {
        id: "r4",
        name: "Nasi Pecel Bu Tinuk",
        category: "Masakan Jawa",
        sub: "Pasar Besar, Malang",
        rating: 4.8,
        reviews: 987,
        price: "Rp 10k–22k",
        badge: "🆕 Favorit",
        rank: 4,
        tags: ["Sarapan", "Murah Meriah", "Otentik"],
        img: "https://blog.higo.id/_next/image?url=https%3A%2F%2Fimgblog.higo.id%2F1702539033-d.webp&w=1920&q=75",
        desc: "Nasi pecel dengan sambel kacang rumahan yang khas Malang. Dilengkapi rempeyek, tempe goreng, dan lauk pelengkap lainnya.",
        address: "Pasar Besar Malang, Los F Blok 12",
        opens: "05.30 – 11.00",
        menu: [
          { name: "Nasi Pecel + Ayam", price: "Rp 20.000" },
          { name: "Nasi Pecel + Tempe", price: "Rp 12.000" },
          { name: "Rempeyek", price: "Rp 3.000" },
          { name: "Es Teh Manis", price: "Rp 4.000" },
        ]
      },
      {
        id: "r5",
        name: "Pondok Ronde Titoni",
        category: "Minuman & Jajanan",
        sub: "Jl. Zainul Arifin, Malang",
        rating: 4.6,
        reviews: 1203,
        price: "Rp 8k–18k",
        badge: "🔥 Trending",
        rank: 5,
        tags: ["Malam", "Hangat", "Khas Malang"],
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/60/b5/6c/penthouse-on-19th.jpg?w=600&h=600&s=1",
        desc: "Ronde hangat khas Malang yang cocok dinikmati malam hari. Bola-bola ketan isi kacang dalam kuah jahe harum dengan tambahan kolang-kaling.",
        address: "Jl. Zainul Arifin No.23, Kiduldalem, Malang",
        opens: "17.00 – 23.00",
        menu: [
          { name: "Ronde Biasa", price: "Rp 10.000" },
          { name: "Ronde Komplit", price: "Rp 15.000" },
          { name: "Wedang Jahe", price: "Rp 8.000" },
          { name: "Es Krim Ronde", price: "Rp 18.000" },
        ]
      },
      {
        id: "r6",
        name: "Depot Cwie Mie Malang",
        category: "Mie & Noodle",
        sub: "Jl. Semeru, Malang",
        rating: 4.7,
        reviews: 2543,
        price: "Rp 20k–40k",
        badge: "⭐ Terpopuler",
        rank: 6,
        tags: ["Ikonik", "Must Try", "Foto-Instagramable"],
        img: "https://assets.pikiran-rakyat.com/crop/0x0:0x0/720x0/webp/photo/2025/04/24/774658488.jpg",
        desc: "Cwie mie atau mie ayam Malang yang sudah legendaris. Mie kuning kenyal dengan ayam cincang berbumbu, jamur, dan pangsit goreng yang renyah.",
        address: "Jl. Semeru No.44, Klojen, Malang",
        opens: "08.00 – 15.00",
        menu: [
          { name: "Cwie Mie Biasa", price: "Rp 20.000" },
          { name: "Cwie Mie + Pangsit", price: "Rp 28.000" },
          { name: "Cwie Mie Spesial", price: "Rp 35.000" },
          { name: "Pangsit Goreng", price: "Rp 10.000" },
        ]
      }
    ],
    foods: [
      {
        id: "f1",
        name: "Bakso Malang",
        category: "Kuliner Ikonik",
        sub: "Bakso President · Depot Pak Man · Cak Kar",
        rating: 4.9,
        reviews: 8823,
        price: "Rp 15k–30k",
        badge: "🔥 #1 Trending",
        rank: 1,
        tags: ["Wajib Coba", "Halal", "Semua Usia"],
        img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&q=80",
        desc: "Bakso Malang adalah ikon kuliner yang wajib dicoba. Berbeda dari bakso daerah lain, disajikan dengan pangsit, tahu, dan mi kuning dalam kuah kaldu yang kaya.",
        address: "Tersebar di seluruh Kota Malang",
        opens: "07.00 – 22.00",
        menu: []
      },
      {
        id: "f2",
        name: "Rawon",
        category: "Sup Khas Jatim",
        sub: "Warung Nguling · RM Dua Saudara",
        rating: 4.8,
        reviews: 5441,
        price: "Rp 25k–50k",
        badge: "⭐ Favorit Turis",
        rank: 2,
        tags: ["Unik", "Bumbu Kluwek", "Daging Sapi"],
        img: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=600&q=80",
        desc: "Rawon adalah sup hitam khas Jawa Timur menggunakan kluwek sebagai bahan utama. Rasanya gurih dan kaya rempah, dihidangkan dengan nasi dan sambal terasi.",
        address: "Berbagai warung rawon di Kota Malang",
        opens: "07.00 – 20.00",
        menu: []
      },
      {
        id: "f3",
        name: "Cwie Mie (Mie Ayam)",
        category: "Mie Khas Malang",
        sub: "Depot Semeru · Gang Sapi",
        rating: 4.8,
        reviews: 4230,
        price: "Rp 18k–35k",
        badge: "💬 Viral",
        rank: 3,
        tags: ["Khas Malang", "Kenyang", "Terjangkau"],
        img: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=600&q=80",
        desc: "Cwie mie adalah sebutan mie ayam khas Malang dengan ciri khas mie kuning yang kenyal dengan topping ayam cincang berbumbu manis-gurih yang lezat.",
        address: "Jl. Semeru & sekitarnya",
        opens: "07.00 – 15.00",
        menu: []
      },
      {
        id: "f4",
        name: "Nasi Pecel",
        category: "Makanan Tradisional",
        sub: "Bu Tinuk · Pasar Besar · Bu Khotimah",
        rating: 4.7,
        reviews: 3120,
        price: "Rp 10k–20k",
        badge: "🍃 Sehat & Murah",
        rank: 4,
        tags: ["Vegan Friendly", "Sarapan", "Murah"],
        img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
        desc: "Nasi dengan berbagai sayuran rebus disiram saus kacang yang khas Malang—lebih kering dan pekat dari versi daerah lain. Dilengkapi rempeyek dan peyek teri.",
        address: "Pasar tradisional & warung sekitar kota",
        opens: "05.30 – 11.00",
        menu: []
      },
      {
        id: "f5",
        name: "Ronde Malang",
        category: "Jajanan Tradisional",
        sub: "Pondok Ronde Titoni · Alun-Alun",
        rating: 4.6,
        reviews: 2345,
        price: "Rp 8k–18k",
        badge: "🌙 Jajanan Malam",
        rank: 5,
        tags: ["Hangat", "Unik", "Malam Hari"],
        img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80",
        desc: "Minuman hangat berisi bola-bola ketan manis isi kacang dalam kuah jahe harum. Sempurna dinikmati malam hari di kota Malang yang sejuk.",
        address: "Alun-Alun Malang & sekitarnya",
        opens: "17.00 – 23.00",
        menu: []
      },
      {
        id: "f6",
        name: "Tahu Campur",
        category: "Sup & Gorengan",
        sub: "Warung Khas Malang",
        rating: 4.7,
        reviews: 1876,
        price: "Rp 15k–25k",
        badge: "🔥 Trending",
        rank: 6,
        tags: ["Kenyang", "Gurih", "Suasana Lokal"],
        img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
        desc: "Tahu goreng, lentho, mi kuning, dan daging sapi dalam kuah bumbu petis yang khas Jawa Timur. Kaya rasa dan sangat mengenyangkan.",
        address: "Warung tahu campur di berbagai sudut kota",
        opens: "09.00 – 21.00",
        menu: []
      }
    ]
  },
  Bali: {
    emoji: "🌴",
    desc: "Surga wisata dengan kekayaan kuliner lokal dan internasional",
    stats: { resto: 210, makanan: 580, ulasan: "92k" },
    restaurants: [
      {
        id: "b1",
        name: "Warung Babi Guling Ibu Oka",
        category: "Babi Guling",
        sub: "Jl. Suweta, Ubud, Bali",
        rating: 4.9,
        reviews: 12450,
        price: "Rp 50k–120k",
        badge: "🔥 #1 Trending",
        rank: 1,
        tags: ["Ikonik", "Wajib Coba", "Non-Halal"],
        img: "https://images.unsplash.com/photo-1583835746434-cf1534674b41?w=600&q=80",
        desc: "Warung babi guling paling terkenal di Bali, sudah diulas banyak media internasional. Rasakan babi guling khas Bali dengan kulit yang renyah dan bumbu base genep yang kaya.",
        address: "Jl. Suweta No.2, Ubud, Gianyar, Bali",
        opens: "11.00 – 17.00",
        menu: [
          { name: "Nasi Babi Guling", price: "Rp 65.000" },
          { name: "Nasi Babi Guling Spesial", price: "Rp 90.000" },
          { name: "Es Kelapa Muda", price: "Rp 20.000" },
        ]
      },
      {
        id: "b2",
        name: "Warung Lawar Nyoman",
        category: "Masakan Bali",
        sub: "Denpasar, Bali",
        rating: 4.8,
        reviews: 4320,
        price: "Rp 25k–60k",
        badge: "⭐ Favorit",
        rank: 2,
        tags: ["Autentik", "Tradisional", "Foto-Instagramable"],
        img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80",
        desc: "Lawar khas Bali dengan campuran sayuran, kelapa parut, dan bumbu base genep. Tersedia lawar putih dan lawar merah yang kaya cita rasa.",
        address: "Jl. Diponegoro No.45, Denpasar, Bali",
        opens: "08.00 – 20.00",
        menu: [
          { name: "Lawar Putih", price: "Rp 30.000" },
          { name: "Lawar Merah", price: "Rp 35.000" },
          { name: "Nasi Lawar Komplit", price: "Rp 55.000" },
        ]
      },
      {
        id: "b3",
        name: "Sate Lilit Pak Malen",
        category: "Sate Khas Bali",
        sub: "Seminyak, Bali",
        rating: 4.7,
        reviews: 3100,
        price: "Rp 30k–80k",
        badge: "💬 Viral",
        rank: 3,
        tags: ["Seafood", "Pantai", "Romantis"],
        img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80",
        desc: "Sate lilit berbahan ikan segar dililitkan pada batang sereh, dengan bumbu Bali yang harum dan kaya rasa. Dipanggang sempurna di tepi pantai Seminyak.",
        address: "Jl. Drupadi No.8, Seminyak, Badung, Bali",
        opens: "12.00 – 22.00",
        menu: [
          { name: "Sate Lilit Ikan (10 pcs)", price: "Rp 45.000" },
          { name: "Sate Lilit Campur", price: "Rp 60.000" },
          { name: "Nasi Campur Bali", price: "Rp 55.000" },
        ]
      },
      {
        id: "b4",
        name: "Bebek Bengil (Dirty Duck)",
        category: "Bebek Goreng",
        sub: "Ubud, Bali",
        rating: 4.8,
        reviews: 8900,
        price: "Rp 120k–300k",
        badge: "🔥 Trending",
        rank: 4,
        tags: ["Premium", "View Sawah", "Instagramable"],
        img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=600&q=80",
        desc: "Bebek goreng crispy khas Bali dengan pemandangan sawah hijau nan indah. Menjadi destinasi kuliner wajib para traveler yang datang ke Ubud.",
        address: "Jl. Hanoman, Padang Tegal, Ubud, Bali",
        opens: "10.00 – 22.00",
        menu: [
          { name: "Bebek Goreng Crispy", price: "Rp 180.000" },
          { name: "Ayam Betutu", price: "Rp 150.000" },
          { name: "Nasi Campur Premium", price: "Rp 120.000" },
        ]
      }
    ],
    foods: [
      {
        id: "bf1",
        name: "Babi Guling",
        category: "Kuliner Khas Bali",
        sub: "Ibu Oka · Chandra · Pak Malen",
        rating: 4.9,
        reviews: 18000,
        price: "Rp 50k–130k",
        badge: "🔥 #1 Trending",
        rank: 1,
        tags: ["Non-Halal", "Ikonik", "Wajib Coba"],
        img: "https://images.unsplash.com/photo-1583835746434-cf1534674b41?w=600&q=80",
        desc: "Hidangan seremonial Bali yang kini menjadi kuliner wisata utama. Babi guling dengan bumbu base genep yang kaya rempah, kulit renyah dan daging juicy.",
        address: "Tersebar di seluruh Bali",
        opens: "Siang hari",
        menu: []
      },
      {
        id: "bf2",
        name: "Nasi Campur Bali",
        category: "Nasi Komplit Khas Bali",
        sub: "Berbagai warung di Bali",
        rating: 4.8,
        reviews: 9500,
        price: "Rp 30k–75k",
        badge: "⭐ Populer",
        rank: 2,
        tags: ["Komplit", "Variasi", "Halal Ada"],
        img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80",
        desc: "Nasi putih disajikan dengan berbagai lauk khas Bali: lawar, sate lilit, ayam betutu, dan sambal matah. Pengalaman rasa Bali dalam satu piring.",
        address: "Warung makan di seluruh Bali",
        opens: "08.00 – 21.00",
        menu: []
      },
      {
        id: "bf3",
        name: "Ayam Betutu",
        category: "Ayam Berbumbu",
        sub: "Betutu Men Tempeh · Warung Kaja",
        rating: 4.8,
        reviews: 7230,
        price: "Rp 60k–200k",
        badge: "💬 Viral",
        rank: 3,
        tags: ["Pedas", "Aromatik", "Tradisional"],
        img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=600&q=80",
        desc: "Ayam utuh yang dilumuri bumbu genep dan daun pisang, dipanggang atau dikukus berjam-jam hingga meresap sempurna. Sangat aromatik dan bercita rasa tinggi.",
        address: "Gilimanuk, Ubud, dan sekitarnya",
        opens: "10.00 – 20.00",
        menu: []
      },
      {
        id: "bf4",
        name: "Sambal Matah",
        category: "Sambal Khas Bali",
        sub: "Disajikan di hampir semua warung Bali",
        rating: 4.7,
        reviews: 5430,
        price: "Rp 5k–15k",
        badge: "🌶 Pedas Segar",
        rank: 4,
        tags: ["Segar", "Pedas", "Pelengkap"],
        img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80",
        desc: "Sambal mentah khas Bali dari irisan sereh, bawang merah, cabai, dan minyak kelapa. Segar, pedas, dan harum—pelengkap sempurna untuk semua hidangan.",
        address: "Di seluruh warung khas Bali",
        opens: "Semua jam makan",
        menu: []
      }
    ]
  },
  Yogyakarta: {
    emoji: "🏯",
    desc: "Kota budaya dengan kuliner tradisional Jawa yang kaya",
    stats: { resto: 85, makanan: 200, ulasan: "31k" },
    restaurants: [
      {
        id: "y1",
        name: "Gudeg Yu Djum",
        category: "Gudeg Khas Jogja",
        sub: "Jl. Kaliurang, Yogyakarta",
        rating: 4.9,
        reviews: 9800,
        price: "Rp 20k–60k",
        badge: "🔥 #1 Trending",
        rank: 1,
        tags: ["Legendaris", "Halal", "Wajib Coba"],
        img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80",
        desc: "Gudeg paling terkenal di Yogyakarta dengan rasa manis yang khas. Dimasak dengan nangka muda dalam santan dan gula jawa selama berjam-jam. Sudah berdiri sejak 1950.",
        address: "Jl. Kaliurang KM 4, Yogyakarta",
        opens: "06.00 – 22.00",
        menu: [
          { name: "Nasi Gudeg + Ayam", price: "Rp 35.000" },
          { name: "Nasi Gudeg + Telor", price: "Rp 25.000" },
          { name: "Nasi Gudeg Komplit", price: "Rp 55.000" },
          { name: "Krecek Pedas", price: "Rp 10.000" },
        ]
      },
      {
        id: "y2",
        name: "Sate Klathak Pak Pong",
        category: "Sate Khas Jogja",
        sub: "Jl. Imogiri Timur, Bantul",
        rating: 4.8,
        reviews: 5600,
        price: "Rp 30k–80k",
        badge: "⭐ Ikonik",
        rank: 2,
        tags: ["Unik", "Jeruji Besi", "Viral"],
        img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80",
        desc: "Sate kambing unik khas Bantul yang ditusuk menggunakan jeruji sepeda. Dibakar dengan arang batok kelapa tanpa bumbu kecap, menghasilkan rasa yang autentik dan berbeda.",
        address: "Jl. Imogiri Timur KM 10, Bantul, Yogyakarta",
        opens: "17.00 – 23.00",
        menu: [
          { name: "Sate Klathak (2 tusuk)", price: "Rp 35.000" },
          { name: "Sate Klathak + Gulai", price: "Rp 55.000" },
          { name: "Tongseng Kambing", price: "Rp 40.000" },
        ]
      },
      {
        id: "y3",
        name: "Angkringan Lik Man",
        category: "Angkringan Legendaris",
        sub: "Dekat Stasiun Tugu, Yogyakarta",
        rating: 4.7,
        reviews: 6200,
        price: "Rp 2k–15k",
        badge: "🌙 Malam",
        rank: 3,
        tags: ["Murah", "Unik", "Ngopi Malam"],
        img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
        desc: "Angkringan paling terkenal di Jogja. Nikmati nasi kucing, gorengan, dan wedang jahe/kopi jos sambil duduk di pinggir jalan dekat Stasiun Tugu—pengalaman kuliner malam khas Jogja.",
        address: "Jl. Wongsodirjan, dekat Stasiun Tugu Yogyakarta",
        opens: "17.00 – 03.00",
        menu: [
          { name: "Nasi Kucing", price: "Rp 3.000" },
          { name: "Sate Usus", price: "Rp 2.000" },
          { name: "Kopi Jos", price: "Rp 4.000" },
          { name: "Wedang Jahe", price: "Rp 5.000" },
        ]
      }
    ],
    foods: [
      {
        id: "yf1",
        name: "Gudeg Jogja",
        category: "Masakan Tradisional",
        sub: "Yu Djum · Bu Lies · Pawon Gudeg",
        rating: 4.9,
        reviews: 15000,
        price: "Rp 20k–55k",
        badge: "🔥 #1 Trending",
        rank: 1,
        tags: ["Manis", "Halal", "Ikonik"],
        img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80",
        desc: "Masakan nangka muda yang dimasak dengan santan dan gula jawa hingga menghasilkan rasa manis legit yang khas. Disajikan dengan ayam, telur, dan krecek pedas.",
        address: "Tersebar di seluruh Yogyakarta",
        opens: "06.00 – 22.00",
        menu: []
      },
      {
        id: "yf2",
        name: "Sate Klathak",
        category: "Sate Kambing Unik",
        sub: "Pak Pong · Pak Bari · Bu Jono",
        rating: 4.8,
        reviews: 8900,
        price: "Rp 30k–80k",
        badge: "⭐ Viral",
        rank: 2,
        tags: ["Unik", "Kambing", "Non-MSG"],
        img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80",
        desc: "Sate kambing ditusuk jeruji besi dan dibakar polos tanpa kecap. Teknik memasak yang berbeda menghasilkan daging yang matang sempurna dari dalam ke luar.",
        address: "Kawasan Imogiri, Bantul, Yogyakarta",
        opens: "17.00 – 23.00",
        menu: []
      },
      {
        id: "yf3",
        name: "Nasi Kucing Angkringan",
        category: "Jajanan Malam",
        sub: "Angkringan di seluruh Jogja",
        rating: 4.7,
        reviews: 7200,
        price: "Rp 2k–5k",
        badge: "🌙 Jajanan Malam",
        rank: 3,
        tags: ["Murah Banget", "Unik", "Pengalaman Lokal"],
        img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
        desc: "Nasi bungkus kecil dengan lauk seadanya, dinikmati di gerobak angkringan. Porsi mini ini adalah simbol keakraban dan kesederhanaan budaya Jogja.",
        address: "Hampir di setiap sudut Kota Yogyakarta",
        opens: "17.00 – 03.00",
        menu: []
      }
    ]
  },
  Surabaya: {
    emoji: "🦈",
    desc: "Kota pahlawan dengan kuliner Jawa Timur yang autentik",
    stats: { resto: 72, makanan: 170, ulasan: "28k" },
    restaurants: [
      {
        id: "s1",
        name: "Soto Ayam Pak Sadi",
        category: "Soto Lamongan",
        sub: "Jl. Pahlawan, Surabaya",
        rating: 4.8,
        reviews: 4500,
        price: "Rp 18k–35k",
        badge: "🔥 Trending",
        rank: 1,
        tags: ["Khas Surabaya", "Murah", "Halal"],
        img: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=600&q=80",
        desc: "Soto ayam khas Lamongan dengan kuah kuning bening yang gurih, disajikan dengan tauge, telur rebus, dan perkedel jagung yang harum.",
        address: "Jl. Pahlawan No.12, Pabean Cantian, Surabaya",
        opens: "07.00 – 15.00",
        menu: [
          { name: "Soto Ayam", price: "Rp 18.000" },
          { name: "Soto Komplit", price: "Rp 28.000" },
          { name: "Perkedel", price: "Rp 5.000" },
        ]
      },
      {
        id: "s2",
        name: "Lontong Balap Pak Gendut",
        category: "Lontong Balap",
        sub: "Jl. Wonokromo, Surabaya",
        rating: 4.9,
        reviews: 7800,
        price: "Rp 20k–35k",
        badge: "🔥 #1 Trending",
        rank: 2,
        tags: ["Ikonik", "Halal", "Wajib Coba"],
        img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
        desc: "Lontong balap khas Surabaya dengan kuah petis yang harum. Kombinasi tahu goreng, lontong, tauge, dan lentho dalam kuah petis yang menggugah selera.",
        address: "Jl. Wonokromo No.77, Surabaya",
        opens: "08.00 – 20.00",
        menu: [
          { name: "Lontong Balap", price: "Rp 20.000" },
          { name: "Lontong Balap Spesial", price: "Rp 30.000" },
          { name: "Sate Kerang", price: "Rp 15.000" },
        ]
      }
    ],
    foods: [
      {
        id: "sf1",
        name: "Rawon Surabaya",
        category: "Sup Hitam Khas",
        sub: "Warung Rawon di seluruh Surabaya",
        rating: 4.9,
        reviews: 9200,
        price: "Rp 25k–55k",
        badge: "🔥 #1 Trending",
        rank: 1,
        tags: ["Ikonik", "Halal", "Kaya Rasa"],
        img: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=600&q=80",
        desc: "Rawon Surabaya dengan kuah kluwek yang lebih pekat dan daging sapi yang lebih banyak dibandingkan daerah lain. Disajikan dengan sambal terasi dan taoge mentah.",
        address: "Berbagai warung di Surabaya",
        opens: "07.00 – 21.00",
        menu: []
      },
      {
        id: "sf2",
        name: "Lontong Balap",
        category: "Kuliner Ikonik Surabaya",
        sub: "Pak Gendut · Pak Qomar",
        rating: 4.8,
        reviews: 7600,
        price: "Rp 18k–35k",
        badge: "⭐ Favorit Turis",
        rank: 2,
        tags: ["Unik", "Kuah Petis", "Halal"],
        img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
        desc: "Kuliner khas Surabaya berupa lontong, tauge, dan lentho dalam kuah petis yang harum dan gurih. Nama 'balap' berasal dari cara penjual berlomba melayani pembeli di masa lalu.",
        address: "Tersebar di seluruh Surabaya",
        opens: "08.00 – 20.00",
        menu: []
      }
    ]
  },
  Jakarta: {
    emoji: "🏙️",
    desc: "Ibu kota yang menjadi melting pot kuliner nusantara",
    stats: { resto: 520, makanan: 1200, ulasan: "180k" },
    restaurants: [
      {
        id: "j1",
        name: "Soto Betawi H. Ma'ruf",
        category: "Soto Betawi",
        sub: "Monas, Jakarta Pusat",
        rating: 4.8,
        reviews: 12300,
        price: "Rp 45k–90k",
        badge: "🔥 Trending",
        rank: 1,
        tags: ["Legendaris", "Halal", "Betawi Asli"],
        img: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=600&q=80",
        desc: "Soto Betawi asli dengan kuah santan kental yang gurih dan daging sapi empuk. Sudah melayani pelanggan sejak 1972 dan menjadi benchmark soto Betawi di Jakarta.",
        address: "Jl. Budi Kemuliaan No.2, Jakarta Pusat",
        opens: "10.00 – 22.00",
        menu: [
          { name: "Soto Betawi Daging", price: "Rp 55.000" },
          { name: "Soto Betawi Campur", price: "Rp 70.000" },
          { name: "Emping Goreng", price: "Rp 10.000" },
        ]
      },
      {
        id: "j2",
        name: "Kerak Telor Monas",
        category: "Makanan Betawi",
        sub: "Kawasan Monas, Jakarta",
        rating: 4.6,
        reviews: 6700,
        price: "Rp 25k–45k",
        badge: "⭐ Warisan Budaya",
        rank: 2,
        tags: ["Betawi", "Unik", "Street Food"],
        img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
        desc: "Omelet unik khas Betawi terbuat dari telur bebek atau ayam, beras ketan, dan serundeng kelapa. Dimasak terbalik di atas bara arang dengan cara yang sangat tradisional.",
        address: "Area Monas & Kota Tua, Jakarta",
        opens: "09.00 – 18.00",
        menu: [
          { name: "Kerak Telor Bebek", price: "Rp 40.000" },
          { name: "Kerak Telor Ayam", price: "Rp 30.000" },
        ]
      }
    ],
    foods: [
      {
        id: "jf1",
        name: "Soto Betawi",
        category: "Sup Khas Betawi",
        sub: "H. Ma'ruf · Soto Gebrak · Soto S. Parman",
        rating: 4.8,
        reviews: 15600,
        price: "Rp 40k–90k",
        badge: "🔥 #1 Trending",
        rank: 1,
        tags: ["Ikonik", "Santan", "Halal"],
        img: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=600&q=80",
        desc: "Soto dengan kuah santan kental dan susu yang gurih, berisi daging sapi, jeroan, tomat, dan kentang. Rasa santan yang gurih menjadi ciri khas yang tidak ditemukan di daerah lain.",
        address: "Tersebar di seluruh Jakarta",
        opens: "09.00 – 22.00",
        menu: []
      },
      {
        id: "jf2",
        name: "Kerak Telor",
        category: "Street Food Betawi",
        sub: "Kawasan Monas & Kota Tua",
        rating: 4.6,
        reviews: 8900,
        price: "Rp 25k–45k",
        badge: "⭐ Warisan Budaya",
        rank: 2,
        tags: ["Unik", "Tradisional", "Foto-Instagramable"],
        img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
        desc: "Street food legendaris Betawi yang jarang ditemukan di luar Jakarta. Proses memasaknya yang unik dan rasa serundengnya yang harum menjadi daya tarik tersendiri.",
        address: "Monas, Kota Tua, PRJ Kemayoran",
        opens: "09.00 – 18.00",
        menu: []
      }
    ]
  }
};

let activeCity = "Malang";
let activeTab = "restaurants";
let activeFilter = "all";

function init() {
  setupCityChips();
  setupSearch();
  setupTabs();
  loadCity("Malang");
  renderCitiesGrid();
}

function setupCityChips() {
  document.querySelectorAll(".city-chip").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".city-chip").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const city = btn.dataset.city;
      document.getElementById("citySearch").value = city;
      loadCity(city);
      document.getElementById("trending").scrollIntoView({ behavior: "smooth" });
    });
  });
}

function setupSearch() {
  const input = document.getElementById("citySearch");
  const suggestions = document.getElementById("searchSuggestions");
  const btn = document.getElementById("searchBtn");

  const cities = Object.keys(DATA);

  input.addEventListener("input", () => {
    const val = input.value.trim().toLowerCase();
    if (!val) { suggestions.classList.remove("open"); return; }
    const matches = cities.filter(c => c.toLowerCase().includes(val));
    if (matches.length === 0) { suggestions.classList.remove("open"); return; }
    suggestions.innerHTML = matches.map(c =>
      `<div class="suggestion-item" data-city="${c}">${DATA[c].emoji} ${c}<span style="margin-left:8px;font-size:0.78rem;color:#B8A090">${DATA[c].desc}</span></div>`
    ).join("");
    suggestions.classList.add("open");
    suggestions.querySelectorAll(".suggestion-item").forEach(item => {
      item.addEventListener("click", () => {
        input.value = item.dataset.city;
        suggestions.classList.remove("open");
        loadCity(item.dataset.city);
        updateCityChips(item.dataset.city);
        document.getElementById("trending").scrollIntoView({ behavior: "smooth" });
      });
    });
  });

  btn.addEventListener("click", () => {
    const val = input.value.trim();
    const match = Object.keys(DATA).find(c => c.toLowerCase() === val.toLowerCase());
    if (match) {
      loadCity(match);
      updateCityChips(match);
      document.getElementById("trending").scrollIntoView({ behavior: "smooth" });
    }
    suggestions.classList.remove("open");
  });

  document.addEventListener("click", e => {
    if (!e.target.closest(".search-wrap")) suggestions.classList.remove("open");
  });
}

function updateCityChips(city) {
  document.querySelectorAll(".city-chip").forEach(b => {
    b.classList.toggle("active", b.dataset.city === city);
  });
}

function setupTabs() {
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeTab = btn.dataset.tab;
      activeFilter = "all";
      renderCards();
    });
  });
}

function loadCity(city) {
  if (!DATA[city]) return;
  activeCity = city;
  activeFilter = "all";

  document.getElementById("activeCityName").textContent = city;
  document.getElementById("cityDesc").textContent = DATA[city].desc;

  const stats = DATA[city].stats;
  document.getElementById("cityStats").innerHTML = `
    <div class="cstat"><div class="cstat-num">${stats.resto}+</div><div class="cstat-label">Restoran</div></div>
    <div class="cstat"><div class="cstat-num">${stats.makanan}+</div><div class="cstat-label">Menu</div></div>
    <div class="cstat"><div class="cstat-num">${stats.ulasan}</div><div class="cstat-label">Ulasan</div></div>
  `;

  renderCards();
}

function getCategories() {
  const items = activeTab === "restaurants" ? DATA[activeCity].restaurants : DATA[activeCity].foods;
  const cats = [...new Set(items.map(i => i.category))];
  return cats;
}

function renderFilters() {
  const cats = getCategories();
  const row = document.getElementById("filterRow");
  row.innerHTML = `<button class="filter-chip ${activeFilter === 'all' ? 'active' : ''}" data-filter="all">Semua</button>` +
    cats.map(c => `<button class="filter-chip ${activeFilter === c ? 'active' : ''}" data-filter="${c}">${c}</button>`).join("");
  row.querySelectorAll(".filter-chip").forEach(btn => {
    btn.addEventListener("click", () => {
      activeFilter = btn.dataset.filter;
      renderCards();
    });
  });
}

function renderCards() {
  renderFilters();
  const items = activeTab === "restaurants" ? DATA[activeCity].restaurants : DATA[activeCity].foods;
  const filtered = activeFilter === "all" ? items : items.filter(i => i.category === activeFilter);

  const grid = document.getElementById("cardsGrid");
  const empty = document.getElementById("emptyState");

  if (filtered.length === 0) {
    grid.innerHTML = "";
    empty.style.display = "block";
    return;
  }
  empty.style.display = "none";

  grid.innerHTML = filtered.map((item, idx) => `
    <div class="card" data-id="${item.id}" data-tab="${activeTab}" style="animation-delay:${idx * 0.07}s">
      <div class="card-thumb">
        <img src="${item.img}" alt="${item.name}" loading="lazy" />
        <div class="card-badge ${activeTab === 'foods' ? 'badge-food' : ''}">${item.badge}</div>
        <div class="card-rank">#${item.rank}</div>
      </div>
      <div class="card-body">
        <div class="card-category">${item.category}</div>
        <div class="card-name">${item.name}</div>
        <div class="card-sub">${item.sub}</div>
        <div class="card-footer">
          <div class="card-rating">
            <span class="star">★</span> ${item.rating}
            <span class="card-reviews">(${item.reviews.toLocaleString()})</span>
          </div>
          <div class="card-price">${item.price}</div>
        </div>
        <div class="card-tags">${item.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
      </div>
    </div>
  `).join("");

  grid.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
      const id = card.dataset.id;
      const tab = card.dataset.tab;
      const items = tab === "restaurants" ? DATA[activeCity].restaurants : DATA[activeCity].foods;
      const item = items.find(i => i.id === id);
      if (item) openModal(item, tab);
    });
  });
}

function openModal(item, tab) {
  const menuHtml = item.menu && item.menu.length > 0 ? `
    <div class="modal-menu-section">
      <h4>Menu Populer</h4>
      ${item.menu.map(m => `
        <div class="menu-item">
          <span class="menu-item-name">${m.name}</span>
          <span class="menu-item-price">${m.price}</span>
        </div>
      `).join("")}
    </div>
  ` : "";

  document.getElementById("modalContent").innerHTML = `
    <img class="modal-img" src="${item.img}" alt="${item.name}" />
    <div class="modal-body">
      <div class="modal-category">${item.category}</div>
      <div class="modal-title">${item.name}</div>
      <div class="modal-sub">${item.sub}</div>
      <div class="modal-stats">
        <div class="mstat"><div class="mstat-num">★ ${item.rating}</div><div class="mstat-label">Rating</div></div>
        <div class="mstat"><div class="mstat-num">${item.reviews.toLocaleString()}</div><div class="mstat-label">Ulasan</div></div>
        <div class="mstat"><div class="mstat-num">${item.price}</div><div class="mstat-label">Harga</div></div>
      </div>
      <div class="modal-desc">${item.desc}</div>
      <div class="modal-tags">${item.tags.map(t => `<span class="modal-tag">${t}</span>`).join("")}</div>
      <div class="modal-address">📍 ${item.address} · 🕐 ${item.opens}</div>
      ${menuHtml}
    </div>
  `;

  document.getElementById("modalOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modalOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalOverlay").addEventListener("click", e => {
  if (e.target === document.getElementById("modalOverlay")) closeModal();
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

function renderCitiesGrid() {
  const cityImages = {
    Malang: "https://images.unsplash.com/photo-1623479322729-28b25c16b011?w=400&q=80",
    Bali: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=400&q=80",
    Yogyakarta: "https://images.unsplash.com/photo-1555400082-595f9b3f3e38?w=400&q=80",
    Surabaya: "https://images.unsplash.com/photo-1570521462033-3015e76e7432?w=400&q=80",
    Jakarta: "https://images.unsplash.com/photo-1555400082-595f9b3f3e38?w=400&q=80"
  };

  const cityImagesAlt = {
    Jakarta: "https://images.unsplash.com/photo-1568793929728-daa1e2ea7d7b?w=400&q=80",
    Surabaya: "https://images.unsplash.com/photo-1610633389918-7d5b62977dc3?w=400&q=80",
    Yogyakarta: "https://images.unsplash.com/photo-1570521462033-3015e76e7432?w=400&q=80"
  };

  const finalImgs = {
    Malang: "https://images.unsplash.com/photo-1543470373-e055b73a8f29?w=400&q=80",
    Bali: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&q=80",
    Yogyakarta: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400&q=80",
    Surabaya: "https://images.unsplash.com/photo-1590674899484-13da0d5449ba?w=400&q=80",
    Jakarta: "https://images.unsplash.com/photo-1555899434-94d1368aa7af?w=400&q=80"
  };

  const grid = document.getElementById("citiesGrid");
  grid.innerHTML = Object.keys(DATA).map(city => `
    <div class="city-card" data-city="${city}">
      <img src="${finalImgs[city]}" alt="${city}" loading="lazy" />
      <div class="city-card-overlay">
        <div class="city-card-name">${DATA[city].emoji} ${city}</div>
        <div class="city-card-info">${DATA[city].stats.resto}+ Resto · ${DATA[city].stats.makanan}+ Menu</div>
      </div>
    </div>
  `).join("");

  grid.querySelectorAll(".city-card").forEach(card => {
    card.addEventListener("click", () => {
      const city = card.dataset.city;
      loadCity(city);
      updateCityChips(city);
      document.getElementById("citySearch").value = city;
      document.getElementById("trending").scrollIntoView({ behavior: "smooth" });
    });
  });
}



document.addEventListener("DOMContentLoaded", init);
