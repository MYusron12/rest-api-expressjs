import Joi from 'joi'
import PasienType from '../types/pasien.type'

export const createPasienValidation = (payload: PasienType) => {
  const schema = Joi.object({
    id_pasien: Joi.string().required(),
    nama_lengkap: Joi.string().required(),
    tanggal_lahir: Joi.date().iso().required(),
    jenis_kelamin: Joi.string().valid('Laki-laki', 'Perempuan').required(),
    alamat: Joi.string().required(),
    nomor_telepon: Joi.string().pattern(/^[0-9]{10,13}$/).required(), // Format telepon yang umum
    email: Joi.string().email().required(),
    nomor_identitas: Joi.string().required(),
    riwayat_medis: Joi.string().allow('', null),
    golongan_darah: Joi.string().valid('A', 'B', 'AB', 'O').allow('', null),
    status_perkawinan: Joi.string().valid('Belum Menikah', 'Menikah', 'Cerai', 'Duda/Janda').allow('', null),
    tanggal_pendaftaran: Joi.date().iso().required(),
    dokter_utama: Joi.string().allow('', null),
    akun_asuransi: Joi.string().allow('', null)
  })
  return schema.validate(payload)
}

export const updatePasienValidation = (payload: Partial<PasienType>) => {
  const schema = Joi.object({
    nama_lengkap: Joi.string().allow('', null),
    tanggal_lahir: Joi.date().iso().allow('', null),
    jenis_kelamin: Joi.string().valid('Laki-laki', 'Perempuan').allow('', null),
    alamat: Joi.string().allow('', null),
    nomor_telepon: Joi.string().pattern(/^[0-9]{10,13}$/).allow('', null),
    email: Joi.string().email().allow('', null),
    nomor_identitas: Joi.string().allow('', null),
    riwayat_medis: Joi.string().allow('', null),
    golongan_darah: Joi.string().valid('A', 'B', 'AB', 'O').allow('', null),
    status_perkawinan: Joi.string().valid('Belum Menikah', 'Menikah', 'Cerai', 'Duda/Janda').allow('', null),
    tanggal_pendaftaran: Joi.date().iso().allow('', null),
    dokter_utama: Joi.string().allow('', null),
    akun_asuransi: Joi.string().allow('', null)
  })
  return schema.validate(payload)
}
