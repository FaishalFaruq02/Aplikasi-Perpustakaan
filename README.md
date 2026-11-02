# Posyandu Gilangharjo

Website profil **Posyandu (Pos Pelayanan Keluarga Berencana - Kesehatan Terpadu) Kalurahan Gilangharjo**, dibangun dengan HTML, CSS, dan JavaScript murni tanpa framework.

Repositori ini adalah versi kode dari website yang sebelumnya dibuat di Google Sites.

## Versi Google Sites

Versi asli website ini dibuat dengan Google Sites dan bisa dibuka di sini:

**https://sites.google.com/view/posyandugilangharjo/beranda**

Halaman lainnya: [Dokumentasi](https://sites.google.com/view/posyandugilangharjo/dokumentasi) dan [Lokasi](https://sites.google.com/view/posyandugilangharjo/lokasi).

## Isi Website

- **Beranda**: pengenalan Posyandu, tiga jenis Posyandu (Balita, Remaja, Lansia), tugas dan fungsi, serta visi dan misi.
- **Dokumentasi**: galeri foto kegiatan dan sertifikat penghargaan.
- **Lokasi**: peta lokasi kegiatan dengan Google Maps.

## Fitur

- Satu halaman dengan menu navigasi yang menandai bagian yang sedang dilihat.
- Tab Tugas dan Fungsi di halaman Beranda.
- Galeri foto dengan fitur perbesar (lightbox), bisa dinavigasi dengan tombol panah dan Esc.
- Tampilan responsif untuk HP, tablet, dan komputer.
- Mendukung navigasi keyboard dan pengguna yang memilih mengurangi animasi.

## Struktur Folder

```
posyandu-gilangharjo/
├── index.html      # Struktur halaman
├── style.css       # Tampilan dan warna
├── script.js       # Galeri, lightbox, tab, dan menu
├── README.md
└── img/            # Folder foto
```

## Cara Menjalankan

1. Unduh atau clone repositori ini:
   ```bash
   git clone https://github.com/USERNAME/posyandu-gilangharjo.git
   ```
2. Buka `index.html` langsung di browser, atau jalankan server lokal:
   ```bash
   python -m http.server 8000
   ```
   lalu buka `http://localhost:8000`.

## Menambahkan Foto

Taruh foto di folder `img/` dengan nama berikut:

| Kegunaan | Nama file |
|---|---|
| Foto banner | `hero.jpg` |
| Posyandu Balita, Remaja, Lansia | `balita.jpg`, `remaja.jpg`, `lansia.jpg` |
| Galeri dokumentasi | `dok-01.jpg` sampai `dok-24.jpg` |
| Sertifikat | `sertifikat-1.jpg` sampai `sertifikat-3.jpg` |

Keterangan foto galeri diatur di bagian atas `script.js` (array `dokumentasi` dan `sertifikat`). Untuk menambah atau mengurangi foto, ubah daftar tersebut.

## Kustomisasi

- **Warna**: ubah variabel di bagian `:root` pada `style.css` (misalnya `--sky`, `--leaf`, `--gold`).
- **Peta**: ganti `src` pada `<iframe>` di bagian Lokasi dengan kode sematan dari Google Maps (Bagikan, lalu Sematkan peta).

## Publikasi dengan GitHub Pages

1. Push semua file ke repositori GitHub.
2. Buka **Settings**, lalu **Pages**.
3. Pada **Source**, pilih branch `main` dan folder `/ (root)`, lalu simpan.
4. Website akan aktif di `https://USERNAME.github.io/posyandu-gilangharjo/`.

## Tautan Terkait

- [Website Kalurahan Gilangharjo](https://gilangharjo.id/)
- [Instagram Kalurahan Gilangharjo](https://www.instagram.com/kalurahan_gilangharjo)
- [YouTube Kalurahan Gilangharjo](https://www.youtube.com/channel/UC271tA71FsK11X66ftGSzOw)
- [Pelayanan Online](https://egilang.gilangharjo.id/)
