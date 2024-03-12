import { Request, Response, NextFunction, Router } from 'express'
import { logger } from '../utils/logger'
import { createProduct } from '../controllers/product.controller'

export const ProductRouter: Router = Router()

ProductRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  logger.info('Success get product')
  return res.status(200).send({
    status: true,
    statusCode: 200,
    data: [
      {
        name: 'Sepatu Adidas',
        price: 500000
      }
    ]
  })
})

ProductRouter.post('/', createProduct)
