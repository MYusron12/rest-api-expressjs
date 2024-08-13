import { Request, Response } from 'express'
import { createPasienValidation, updatePasienValidation } from '../validations/pasien.validation'
import { logger } from '../utils/logger'
import {
  addPasienToDB,
  deletePasienById,
  getPasienById,
  getPasienFromDb,
  updatePasienById
} from '../services/pasien.service'
import { v4 as uuidv4 } from 'uuid'

export const createPasien = async (req: Request, res: Response) => {
  req.body.id_pasien = uuidv4() // Menggunakan uuid untuk ID pasien
  const { error, value } = createPasienValidation(req.body)
  if (error) {
    logger.error('ERR: pasien - create = ', error.details[0].message)
    return res.status(422).send({
      status: false,
      statusCode: 422,
      message: error.details[0].message
    })
  }
  try {
    await addPasienToDB(value)
    logger.info('Success add pasien')
    return res.status(201).send({
      status: true,
      statusCode: 201,
      message: 'Success add pasien'
    })
  } catch (error) {
    logger.error('ERR: pasien - create = ', error)
    return res.status(422).send({
      status: false,
      statusCode: 422,
      message: error
    })
  }
}

export const getPasien = async (req: Request, res: Response) => {
  const {
    params: { id }
  } = req
  if (id) {
    const pasien = await getPasienById(id)
    if (pasien) {
      logger.info('Success get pasien')
      return res.status(200).send({
        status: true,
        statusCode: 200,
        data: pasien
      })
    } else {
      logger.info('Failed get pasien')
      return res.status(404).send({
        status: true,
        statusCode: 404,
        message: 'Data Not Found',
        data: {}
      })
    }
  } else {
    const pasiens: any = await getPasienFromDb()
    logger.info('Success get pasien')
    return res.status(200).send({
      status: true,
      statusCode: 200,
      data: pasiens
    })
  }
}

export const updatePasien = async (req: Request, res: Response) => {
  const {
    params: { id }
  } = req
  const { error, value } = updatePasienValidation(req.body)
  if (error) {
    logger.error('ERR: pasien - update = ', error.details[0].message)
    return res.status(422).send({
      status: false,
      statusCode: 422,
      message: error.details[0].message
    })
  }
  try {
    const result = await updatePasienById(id, value)
    if (result) {
      logger.info('Success update pasien')
      return res.status(200).send({
        status: true,
        statusCode: 200,
        message: 'Success update pasien'
      })
    } else {
      logger.info('Data not found')
      return res.status(404).send({
        status: false,
        statusCode: 404,
        message: 'Failed update pasien'
      })
    }
  } catch (error) {
    logger.error('ERR: pasien - update = ', error)
    return res.status(422).send({
      status: false,
      statusCode: 422,
      message: error
    })
  }
}

export const deletePasien = async (req: Request, res: Response) => {
  const {
    params: { id }
  } = req
  try {
    const result = await deletePasienById(id)
    if (result) {
      logger.info('Success delete pasien')
      return res.status(200).send({
        status: true,
        statusCode: 200,
        message: 'Success delete pasien'
      })
    } else {
      logger.info('Data not found')
      return res.status(404).send({
        status: false,
        statusCode: 404,
        message: 'Failed delete pasien'
      })
    }
  } catch (error) {
    logger.error('ERR: pasien - delete = ', error)
    return res.status(422).send({
      status: false,
      statusCode: 422,
      message: error
    })
  }
}
