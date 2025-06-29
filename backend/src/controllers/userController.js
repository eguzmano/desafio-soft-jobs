import { createUserModel, getUserByEmailModel } from '../models/userModel.js'

export const getUser = async (req, res) => {
  try {
    const email = req.user
    const user = await getUserByEmailModel(email)
    if (!user) return res.status(404).json({ message: 'User not found' })
    res.json({ user })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const registerUser = async (req, res) => {
  try {
    const { email, password, rol, lenguage } = req.body
    const user = await createUserModel(email, password, rol, lenguage)
    res.status(201).json({ message: 'User created', user })
  } catch (error) {
    return res.status(500).json(error)
  }
}
