import { Router } from 'express'
import {
  createPasien,
  deletePasien,
  getPasien,
  updatePasien
} from '../controllers/pasien.controller'
import { requireAdmin, requireUser } from '../middleware/auth'

export const PasienRouter: Router = Router()

PasienRouter.get('/', getPasien) // Mendapatkan semua pasien
PasienRouter.get('/:id', getPasien) // Mendapatkan pasien berdasarkan ID
PasienRouter.post('/', requireAdmin, createPasien) // Menambahkan pasien baru
PasienRouter.put('/:id', requireAdmin, updatePasien) // Memperbarui pasien berdasarkan ID
PasienRouter.delete('/:id', requireAdmin, deletePasien) // Menghapus pasien berdasarkan ID
