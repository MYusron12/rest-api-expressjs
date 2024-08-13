import { logger } from '../utils/logger'
import pasienModel from '../models/pasien.model'
import Pasien from '../types/pasien.type'

// Menambahkan pasien ke database
export const addPasienToDB = async (payload: Pasien) => {
  const existingPasien = await pasienModel.findOne({ email: payload.email })
  if (existingPasien) {
    throw new Error('Email already exists.')
  }
  try {
    return await pasienModel.create(payload)
  } catch (error) {
    logger.info('Cannot add data to DB')
    logger.error(error)
  }
}

// Mengambil semua pasien dari database
export const getPasienFromDb = async () => {
  try {
    return await pasienModel.find()
  } catch (error) {
    logger.info('Cannot get data from DB')
    logger.error(error)
  }
}

// Mengambil pasien berdasarkan ID
export const getPasienById = async (id: string) => {
  try {
    return await pasienModel.findOne({ id_pasien: id })
  } catch (error) {
    logger.info('Cannot get data from DB')
    logger.error(error)
  }
}

// Memperbarui pasien berdasarkan ID
export const updatePasienById = async (id: string, payload: Pasien) => {
  try {
    const result = await pasienModel.findOneAndUpdate({ id_pasien: id }, { $set: payload }, { new: true })
    return result
  } catch (error) {
    logger.info('Cannot update data in DB')
    logger.error(error)
  }
}

// Menghapus pasien berdasarkan ID
export const deletePasienById = async (id: string) => {
  try {
    const result = await pasienModel.findOneAndDelete({ id_pasien: id })
    return result
  } catch (error) {
    logger.info('Cannot delete data from DB')
    logger.error(error)
  }
}
