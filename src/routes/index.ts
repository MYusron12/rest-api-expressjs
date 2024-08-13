import { Application, Router } from 'express'
import { ProductRouter } from './product.route'
import { PasienRouter } from './pasien.route'
import { AuthRouter } from './auth.route'
import { Home } from './home.route'

const _routes: Array<[string, Router]> = [
  ['/', Home],
  ['/product', ProductRouter],
  ['/pasien', PasienRouter],
  ['/auth', AuthRouter]
]

export const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [url, router] = route
    app.use(url, router)
  })
}
