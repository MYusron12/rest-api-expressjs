import Joi from 'joi'
import PasienType from '../types/pasien.type'

export const createPasienValidation = (payload: PasienType) => {
  const schema = Joi.object({
    id_pasien: Joi.string().required(),
    nama_lengkap: Joi.string().required(),
    tanggal_lahir: Joi.date().required(),
    jenis_kelamin: Joi.string().required(),
    alamat: Joi.string().required(),
    nomor_telepon: Joi.string().required(), 
    email: Joi.string().email().required(),
    nomor_identitas: Joi.string().required(),
    riwayat_medis: Joi.string().allow('', null),
    golongan_darah: Joi.string().allow('', null),
    status_perkawinan: Joi.string().allow('', null),
    tanggal_pendaftaran: Joi.date().required(),
    dokter_utama: Joi.string().allow('', null),
    akun_asuransi: Joi.string().allow('', null)
  })
  return schema.validate(payload)
}

export const updatePasienValidation = (payload: Partial<PasienType>) => {
  const schema = Joi.object({
    nama_lengkap: Joi.string().allow('', null),
    tanggal_lahir: Joi.date().allow('', null),
    jenis_kelamin: Joi.string().allow('', null),
    alamat: Joi.string().allow('', null),
    nomor_telepon: Joi.string().allow('', null),
    email: Joi.string().email().allow('', null),
    nomor_identitas: Joi.string().allow('', null),
    riwayat_medis: Joi.string().allow('', null),
    golongan_darah: Joi.string().allow('', null),
    status_perkawinan: Joi.string().allow('', null),
    tanggal_pendaftaran: Joi.date().allow('', null),
    dokter_utama: Joi.string().allow('', null),
    akun_asuransi: Joi.string().allow('', null)
  })
  return schema.validate(payload)
}
