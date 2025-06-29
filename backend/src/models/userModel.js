import pool from '../../db/config.js'
import bcrypt from 'bcryptjs'

export const getUserByEmailModel = async (email) => {
  const query = {
    text: 'SELECT email, rol, lenguage FROM usuarios WHERE email = $1',
    values: [email]
  }
  const res = await pool.query(query)
  return res.rows[0]
}

export const createUserModel = async (email, password, rol, lenguage) => {
  const hashedPassword = bcrypt.hashSync(password)
  const query = {
    text: 'INSERT INTO usuarios (email, password, rol, lenguage) VALUES ($1, $2, $3, $4) RETURNING email',
    values: [email, hashedPassword, rol, lenguage]
  }
  const res = await pool.query(query)
  return res.rows[0]
}

export const loginUserModel = async (email) => {
  const query = {
    text: 'SELECT * FROM usuarios WHERE email = $1',
    values: [email]
  }
  const res = await pool.query(query)
  return res.rows[0]
}
