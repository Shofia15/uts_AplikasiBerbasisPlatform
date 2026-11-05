const form = document.getElementById('formPenyewaan');

if (form) {
  const nama = document.getElementById('nama');
  const mobil = document.getElementById('mobil');
  const lamaSewa = document.getElementById('lamaSewa');
  const hasil = document.getElementById('hasil');

  // Isi pilihan mobil otomatis jika halaman dibuka dari katalog.
  const params = new URLSearchParams(window.location.search);
  const mobilDariKatalog = params.get('mobil');
  if (mobilDariKatalog) mobil.value = mobilDariKatalog;

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    document.getElementById('namaError').textContent = '';
    document.getElementById('mobilError').textContent = '';
    document.getElementById('lamaError').textContent = '';
    hasil.textContent = '';
    hasil.className = 'form-result';

    let valid = true;
    const namaValue = nama.value.trim();
    const lamaValue = Number(lamaSewa.value);

    if (namaValue === '') {
      document.getElementById('namaError').textContent = 'Nama lengkap wajib diisi.';
      valid = false;
    }
    if (mobil.value === '') {
      document.getElementById('mobilError').textContent = 'Silakan pilih mobil.';
      valid = false;
    }
    if (lamaSewa.value === '' || !Number.isInteger(lamaValue) || lamaValue < 1) {
      document.getElementById('lamaError').textContent = 'Lama sewa minimal 1 hari.';
      valid = false;
    }

    if (!valid) {
      hasil.textContent = 'Periksa kembali data yang belum sesuai.';
      hasil.classList.add('failure');
      return;
    }

    hasil.textContent = `Penyewaan berhasil divalidasi! Nama: ${namaValue} 037 | Mobil: ${mobil.value} | Lama sewa: ${lamaValue} hari.`;
    hasil.classList.add('success');
  });
}
