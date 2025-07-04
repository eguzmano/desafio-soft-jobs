import jwt from 'jsonwebtoken'
import 'dotenv/config'

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.header('Authorization')
    if (!token) {
      return res.status(400).json({ message: 'Token is necessary' })
    }
    const extractToken = token.split(' ')[1]
    const decoded = jwt.verify(extractToken, process.env.JWT_SECRET)
    req.user = decoded.email
    next()
  } catch (error) {
    return res.status(400).json({ message: 'Invalid token' })
  }
}
