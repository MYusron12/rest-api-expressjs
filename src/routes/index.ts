import { Application, Router } from 'express'
import { PeopleRouter } from './people'
import { CarRouter } from './car'
import { ProductRouter } from './product'

const _routes: Array<[string, Router]> = [
  ['/people', PeopleRouter],
  ['/car', CarRouter],
  ['/product', ProductRouter]
]

export const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [url, router] = route
    app.use(url, router)
  })
}
