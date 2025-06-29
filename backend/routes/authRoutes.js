import { Router } from 'express'
import { login } from '../src/controllers/authController.js'

const router = Router()

router.post('/login', login)

export default router
