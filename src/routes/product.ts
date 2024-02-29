import { Request,Response,NextFunction, Router } from "express";

export const ProductRouter: Router = Router()

ProductRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send(
    {
      status: true,
      statusCode: 200,
      data: [
        {
          name: 'Sepatu Adidas',
          price: 500000
        }
      ],
      responseMessage: 'Success'
    }
  )
})