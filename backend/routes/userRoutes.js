import { Router } from 'express'
import { getUser, registerUser } from '../src/controllers/userController.js'
import { verifyToken } from '../middleware/veryfyToken.js'

const router = Router()

router.post('/usuarios', registerUser)
router.get('/usuarios', verifyToken, getUser)

export default router
