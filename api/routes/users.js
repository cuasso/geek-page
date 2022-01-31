import { Router } from 'express'
import { userValidator, loginValidator } from '../middlewares'
import { create, login } from '../controllers/users'

const router = new Router()

router.post('/', userValidator, create)
router.post('/login', loginValidator, login)

export default router