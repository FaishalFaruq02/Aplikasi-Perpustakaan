// ===== Data foto =====
// Taruh foto di folder img/ lalu sesuaikan nama dan keterangan di sini.
const dokumentasi = [
  { file: 'dok-01.jpg', cap: 'Dokumentasi Posyandu' },
  { file: 'dok-02.jpg', cap: 'Posyandu Remaja' },
  { file: 'dok-03.jpg', cap: 'Posyandu Remaja' },
  { file: 'dok-04.jpg', cap: 'Posyandu Balita' },
  { file: 'dok-05.jpg', cap: 'Posyandu Lansia' },
  { file: 'dok-06.jpg', cap: 'Kegiatan PSN' },
  { file: 'dok-07.jpg', cap: 'Kegiatan PSN' },
  { file: 'dok-08.jpg', cap: 'Kegiatan PSN' },
  { file: 'dok-09.jpg', cap: 'Kegiatan BKR' },
  { file: 'dok-10.jpg', cap: 'Kegiatan BKR' },
  { file: 'dok-11.jpg', cap: 'Kegiatan BKR' },
  { file: 'dok-12.jpg', cap: 'Kegiatan Posyandu' },
  { file: 'dok-13.jpg', cap: 'Kegiatan Posyandu' },
  { file: 'dok-14.jpg', cap: 'Kegiatan Posyandu' },
  { file: 'dok-15.jpg', cap: 'Kegiatan Posyandu' },
  { file: 'dok-16.jpg', cap: 'Kegiatan Posyandu' },
  { file: 'dok-17.jpg', cap: 'Kegiatan Posyandu' },
  { file: 'dok-18.jpg', cap: 'Kegiatan Posyandu' },
  { file: 'dok-19.jpg', cap: 'Kegiatan Posyandu' },
  { file: 'dok-20.jpg', cap: 'Kegiatan Posyandu' },
  { file: 'dok-21.jpg', cap: 'Kegiatan Posyandu' },
  { file: 'dok-22.jpg', cap: 'Kegiatan Posyandu' },
  { file: 'dok-23.jpg', cap: 'Kegiatan Posyandu' },
  { file: 'dok-24.jpg', cap: 'Kegiatan Posyandu' },
];
const sertifikat = [
  { file: 'sertifikat-1.jpg', cap: 'Sertifikat Penghargaan' },
  { file: 'sertifikat-2.jpg', cap: 'Sertifikat Penghargaan' },
  { file: 'sertifikat-3.jpg', cap: 'Sertifikat Penghargaan' },
];

// ===== Galeri + lightbox =====
const all = [...dokumentasi, ...sertifikat];
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
const lbCap = document.getElementById('lbCap');
let current = 0, opener = null;

function render(list, target, offset) {
  const el = document.getElementById(target);
  list.forEach((item, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.dataset.index = offset + i;
    b.setAttribute('aria-label', 'Perbesar: ' + item.cap);
    b.innerHTML = `<img loading="lazy" src="img/${item.file}" alt="${item.cap}"><span>${item.cap}</span>`;
    b.addEventListener('click', () => open(offset + i, b));
    el.appendChild(b);
  });
}
render(dokumentasi, 'gallery', 0);
render(sertifikat, 'certs', dokumentasi.length);

function show(i) {
  current = (i + all.length) % all.length;
  lbImg.src = 'img/' + all[current].file;
  lbImg.alt = all[current].cap;
  lbCap.textContent = all[current].cap;
}
function open(i, btn) { opener = btn; show(i); lb.hidden = false; document.body.style.overflow = 'hidden'; document.getElementById('lbClose').focus(); }
function close() { lb.hidden = true; document.body.style.overflow = ''; if (opener) opener.focus(); }
document.getElementById('lbClose').onclick = close;
document.getElementById('lbPrev').onclick = () => show(current - 1);
document.getElementById('lbNext').onclick = () => show(current + 1);
lb.addEventListener('click', e => { if (e.target === lb) close(); });
document.addEventListener('keydown', e => {
  if (lb.hidden) return;
  if (e.key === 'Escape') close();
  if (e.key === 'ArrowLeft') show(current - 1);
  if (e.key === 'ArrowRight') show(current + 1);
});

// ===== Tab Tugas / Fungsi =====
const tabs = document.querySelectorAll('.tabs button');
tabs.forEach(t => t.addEventListener('click', () => {
  tabs.forEach(x => {
    const on = x === t;
    x.setAttribute('aria-selected', on);
    document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
  });
}));

// ===== Menu mobile =====
const menu = document.getElementById('menu');
const menuBtn = document.getElementById('menuBtn');
menuBtn.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});
menu.addEventListener('click', e => { if (e.target.tagName === 'A') { menu.classList.remove('open'); menuBtn.setAttribute('aria-expanded', false); } });

// ===== Menu aktif saat scroll =====
const links = [...menu.querySelectorAll('a')];
const sections = links.map(a => document.querySelector(a.getAttribute('href')));
function spy() {
  const y = window.scrollY + 120;
  let idx = 0;
  sections.forEach((s, i) => { if (s.offsetTop <= y) idx = i; });
  links.forEach((a, i) => a.classList.toggle('active', i === idx));
}
window.addEventListener('scroll', spy, { passive: true });
spy();
