import { Request, Response, NextFunction, Router } from 'express'

export const CarRouter: Router = Router()

CarRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({
    status: 200,
    data: 'Ok',
    responseMessage: 'Success'
  })
})
