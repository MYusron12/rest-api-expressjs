import mongoose from 'mongoose'

// Definisikan skema pasien
const pasienSchema = new mongoose.Schema(
  {
    id_pasien: {
      type: String,
      unique: true,
      required: true
    },
    nama_lengkap: {
      type: String,
      required: true
    },
    tanggal_lahir: {
      type: Date,
      required: true
    },
    jenis_kelamin: {
      type: String,
      required: true
    },
    alamat: {
      type: String,
      required: true
    },
    nomor_telepon: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    nomor_identitas: {
      type: String,
      required: true,
      unique: true
    },
    riwayat_medis: {
      type: String
    },
    golongan_darah: {
      type: String
    },
    status_perkawinan: {
      type: String
    },
    tanggal_pendaftaran: {
      type: Date,
      required: true
    },
    dokter_utama: {
      type: String
    },
    akun_asuransi: {
      type: String
    }
  },
  { timestamps: true }
)

// Buat model pasien
const pasienModel = mongoose.model('pasien', pasienSchema)

export default pasienModel
