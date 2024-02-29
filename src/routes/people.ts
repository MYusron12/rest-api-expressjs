import { Request,Response,NextFunction, Router } from "express";

export const PeopleRouter: Router = Router()

PeopleRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send(
    {
      status: '200',
      data: [
        {
          id: 1,
          nama:"Yusron"
        },
        {
          id: 2,
          nama:"Baim"
        }
      ],
      responseMessage: 'Success'
    }
  )
})