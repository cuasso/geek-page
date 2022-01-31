import { Router } from 'express'
import {
    getAllPost,
    create,
    remove,
    update
} from '../controllers/post'

import { validateJwt } from '../middlewares'

const router = new Router()

router.get('/', validateJwt, getAllPost)
router.post('/', validateJwt, create)
router.put('/', update)
router.delete('/', remove)


export default router