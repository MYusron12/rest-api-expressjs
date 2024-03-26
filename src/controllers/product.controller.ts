import { Request, Response } from 'express'
import { createProductValidation, updateProductValidation } from '../validations/product.validation'
import { logger } from '../utils/logger'
import {
  addProductToDB,
  deleteProductById,
  getProductById,
  getProductFromDb,
  updateProductById
} from '../services/product.service'
import { v4 as uuidv4 } from 'uuid'

export const createProduct = async (req: Request, res: Response) => {
  req.body.product_id = uuidv4()
  const { error, value } = createProductValidation(req.body)
  if (error) {
    logger.error('ERR: product - create = ', error.details[0].message)
    return res.status(422).send({
      status: false,
      statusCode: 422,
      message: error.details[0].message
    })
  }
  try {
    await addProductToDB(value)
    logger.info('Success add product')
    return res.status(201).send({
      status: true,
      statusCode: 201,
      message: 'Success add product'
    })
  } catch (error) {
    logger.error('ERR: product - create = ', error)
    return res.status(422).send({
      status: false,
      statusCode: 422,
      message: error
    })
  }
}

export const getProduct = async (req: Request, res: Response) => {
  const {
    params: { id }
  } = req
  if (id) {
    const product = await getProductById(id)
    if (product) {
      logger.info('Success get product')
      return res.status(200).send({
        status: true,
        statusCode: 200,
        data: product
      })
    } else {
      logger.info('Failed get product')
      return res.status(404).send({
        status: true,
        statusCode: 404,
        message: 'Data Not Found',
        data: {}
      })
    }
  } else {
    const products: any = await getProductFromDb()
    logger.info('Success get product')
    return res.status(200).send({
      status: true,
      statusCode: 200,
      data: products
    })
  }
}

export const updateProduct = async (req: Request, res: Response) => {
  const {
    params: { id }
  } = req
  const { error, value } = updateProductValidation(req.body)
  if (error) {
    logger.error('ERR: product - update = ', error.details[0].message)
    return res.status(422).send({
      status: false,
      statusCode: 422,
      message: error.details[0].message
    })
  }
  try {
    const result = await updateProductById(id, value)
    if (result) {
      logger.info('Success update product')
      return res.status(200).send({
        status: true,
        statusCode: 200,
        message: 'Success update product'
      })
    } else {
      logger.info('Data not found')
      return res.status(404).send({
        status: false,
        statusCode: 404,
        message: 'Failed update product'
      })
    }
  } catch (error) {
    logger.error('ERR: product - update = ', error)
    return res.status(422).send({
      status: false,
      statusCode: 422,
      message: error
    })
  }
}

export const deleteProduct = async (req: Request, res: Response) => {
  const {
    params: { id }
  } = req
  try {
    const result = await deleteProductById(id)
    if (result) {
      logger.info('Success delete product')
      return res.status(200).send({
        status: true,
        statusCode: 200,
        message: 'Success delete product'
      })
    } else {
      logger.info('Data not found')
      return res.status(404).send({
        status: false,
        statusCode: 404,
        message: 'Failed delete product'
      })
    }
  } catch (error) {
    logger.error('ERR: product - delete = ', error)
    return res.status(422).send({
      status: false,
      statusCode: 422,
      message: error
    })
  }
}
