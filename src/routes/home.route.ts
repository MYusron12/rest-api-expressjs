import { Router, Request, Response, NextFunction } from 'express';

export const Home: Router = Router();

Home.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({
    status: true,
    statusCode: 200,
    message: 'Server is running!'
  });
});
