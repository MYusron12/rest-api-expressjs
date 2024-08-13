export default interface PasienType {
  id_pasien: string
  nama_lengkap: string
  tanggal_lahir: string // Anda mungkin ingin menggunakan tipe Date jika format tanggal sudah dikelola
  jenis_kelamin: 'L' | 'P' // L = Laki-laki, P = Perempuan
  alamat: string
  nomor_telepon: string
  email: string
  nomor_identitas: string
  riwayat_medis: string
  golongan_darah: 'A' | 'B' | 'AB' | 'O' // Anda bisa menyesuaikan sesuai kebutuhan
  status_perkawinan: 'Belum Menikah' | 'Menikah' | 'Cerai' // Sesuaikan jika perlu
  tanggal_pendaftaran: string // Sama dengan tanggal lahir, bisa menggunakan tipe Date
  dokter_utama: string // Anda mungkin ingin menggunakan tipe lain untuk menyimpan referensi ke dokter
  akun_asuransi: string
}
