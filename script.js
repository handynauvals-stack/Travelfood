// =============================================
// DATA KULINER KOTA MALANG
// =============================================

const dataRestoran = [
  {
    id: "r1",
    nama: "Bakso President Malang",
    kategori: "Bakso & Mie",
    lokasi: "Jl. Batanghari No.5, Malang",
    rating: 4.9,
    ulasan: 3241,
    harga: "Rp 15k–35k",
    badge: "🔥 Trending",
    nomor: 1,
    tags: ["Halal", "Parkir Luas", "Ramah Anak"],
    gambar: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&q=80",
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
    id: "r2",
    nama: "Warung Rawon Nguling",
    kategori: "Masakan Jawa Timur",
    lokasi: "Jl. Nguling, Malang",
    rating: 4.8,
    ulasan: 2108,
    harga: "Rp 25k–55k",
    badge: "⭐ Terpopuler",
    nomor: 2,
    tags: ["Signature Dish", "Dine-in", "Takeaway"],
    gambar: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=600&q=80",
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
    id: "r3",
    nama: "Depot Soto Dok-dok",
    kategori: "Soto & Sup",
    lokasi: "Jl. Jaksa Agung Suprapto, Malang",
    rating: 4.7,
    ulasan: 1574,
    harga: "Rp 12k–28k",
    badge: "💬 Viral",
    nomor: 3,
    tags: ["Murah", "Porsi Besar", "Buka Pagi"],
    gambar: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=600&q=80",
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
    id: "r4",
    nama: "Nasi Pecel Bu Tinuk",
    kategori: "Masakan Jawa",
    lokasi: "Pasar Besar, Malang",
    rating: 4.8,
    ulasan: 987,
    harga: "Rp 10k–22k",
    badge: "🍃 Favorit",
    nomor: 4,
    tags: ["Sarapan", "Murah Meriah", "Otentik"],
    gambar: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
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
    id: "r5",
    nama: "Depot Cwie Mie Malang",
    kategori: "Mie & Noodle",
    lokasi: "Jl. Semeru, Malang",
    rating: 4.7,
    ulasan: 2543,
    harga: "Rp 20k–40k",
    badge: "⭐ Terpopuler",
    nomor: 5,
    tags: ["Ikonik", "Must Try", "Instagramable"],
    gambar: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=600&q=80",
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
    id: "r6",
    nama: "Pondok Ronde Titoni",
    kategori: "Minuman & Jajanan",
    lokasi: "Jl. Zainul Arifin, Malang",
    rating: 4.6,
    ulasan: 1203,
    harga: "Rp 8k–18k",
    badge: "🔥 Trending",
    nomor: 6,
    tags: ["Malam", "Hangat", "Khas Malang"],
    gambar: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80",
    deskripsi: "Ronde hangat khas Malang yang cocok dinikmati malam hari. Bola-bola ketan isi kacang dalam kuah jahe harum.",
    alamat: "Jl. Zainul Arifin No.23, Kiduldalem, Malang",
    jamBuka: "17.00 – 23.00",
    menu: [
      { nama: "Ronde Biasa", harga: "Rp 10.000" },
      { nama: "Ronde Komplit", harga: "Rp 15.000" },
      { nama: "Wedang Jahe", harga: "Rp 8.000" }
    ]
  }
];

const dataMakanan = [
  {
    id: "f1",
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
    id: "f2",
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
    id: "f3",
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
    id: "f4",
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
    id: "f5",
    nama: "Ronde Malang",
    kategori: "Jajanan Tradisional",
    lokasi: "Pondok Ronde Titoni · Alun-Alun",
    rating: 4.6,
    ulasan: 2345,
    harga: "Rp 8k–18k",
    badge: "🌙 Jajanan Malam",
    nomor: 5,
    tags: ["Hangat", "Unik", "Malam Hari"],
    gambar: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80",
    deskripsi: "Minuman hangat berisi bola-bola ketan manis isi kacang dalam kuah jahe harum. Sempurna dinikmati malam hari di Malang yang sejuk.",
    alamat: "Alun-Alun Malang & sekitarnya",
    jamBuka: "17.00 – 23.00",
    menu: []
  },
  {
    id: "f6",
    nama: "Tahu Campur",
    kategori: "Sup & Gorengan",
    lokasi: "Warung Khas Malang",
    rating: 4.7,
    ulasan: 1876,
    harga: "Rp 15k–25k",
    badge: "🔥 Trending",
    nomor: 6,
    tags: ["Kenyang", "Gurih", "Suasana Lokal"],
    gambar: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
    deskripsi: "Tahu goreng, lentho, mie kuning, dan daging sapi dalam kuah bumbu petis khas Jawa Timur. Kaya rasa dan mengenyangkan.",
    alamat: "Warung tahu campur di berbagai sudut kota",
    jamBuka: "09.00 – 21.00",
    menu: []
  }
];

// =============================================
// VARIABEL STATUS
// =============================================

let tabAktif = "resto";
let filterAktif = "semua";
let kataCari = "";

// =============================================
// FUNGSI UTAMA
// =============================================

// Jalankan saat halaman pertama kali dibuka
window.onload = function () {
  tampilkanKartu();
};

// Dipanggil saat tombol "Cari" diklik
function cariItem() {
  kataCari = document.getElementById("inputCari").value.trim().toLowerCase();
  filterAktif = "semua";
  tampilkanKartu();
  document.getElementById("trending").scrollIntoView({ behavior: "smooth" });
}

// Juga bisa cari dengan tekan Enter
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("inputCari").addEventListener("keydown", function (e) {
    if (e.key === "Enter") cariItem();
  });
});

// Dipanggil saat tab diklik
function gantiTab(tab, tombol) {
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("aktif"));
  tombol.classList.add("aktif");
  tabAktif = tab;
  filterAktif = "semua";
  kataCari = "";
  document.getElementById("inputCari").value = "";
  tampilkanKartu();
}

// Tampilkan kartu sesuai tab, filter, dan kata cari
function tampilkanKartu() {
  const semuaItem = tabAktif === "resto" ? dataRestoran : dataMakanan;

  buatFilterChips(semuaItem);

  let filtered = semuaItem;

  if (filterAktif !== "semua") {
    filtered = filtered.filter(item => item.kategori === filterAktif);
  }

  if (kataCari !== "") {
    filtered = filtered.filter(item =>
      item.nama.toLowerCase().includes(kataCari) ||
      item.kategori.toLowerCase().includes(kataCari) ||
      item.lokasi.toLowerCase().includes(kataCari)
    );
  }

  const grid = document.getElementById("kartuGrid");
  const kosong = document.getElementById("kosong");

  if (filtered.length === 0) {
    grid.innerHTML = "";
    kosong.style.display = "block";
    return;
  }

  kosong.style.display = "none";
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

// Buat tombol filter berdasarkan kategori
function buatFilterChips(items) {
  const kategori = [...new Set(items.map(i => i.kategori))];
  const baris = document.getElementById("filterBaris");
  baris.innerHTML = `
    <button class="filter-chip ${filterAktif === 'semua' ? 'aktif' : ''}" onclick="filterKartu('semua', this)">Semua</button>
    ${kategori.map(k => `
      <button class="filter-chip ${filterAktif === k ? 'aktif' : ''}" onclick="filterKartu('${k}', this)">${k}</button>
    `).join("")}
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
  const semuaItem = [...dataRestoran, ...dataMakanan];
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

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") tutupModal();
});
