import { loginUserModel } from '../models/userModel.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const login = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await loginUserModel(email)
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' })
    }
    const isPasswordValid = bcrypt.compareSync(password, user.password)
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Unauthorized' })
    }
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '60s' })
    res.status(200).json({ token })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
