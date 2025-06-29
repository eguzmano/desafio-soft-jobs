import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import postRouter from './routes/userRoutes.js'
import authRouter from './routes/authRoutes.js'
import { logger } from './middleware/logger.js'

const app = express()
const PORT = process.env.PORT ?? 3000

app.use(express.json())
app.use(cors())
app.use(logger)

app.use(postRouter)
app.use(authRouter)

app.listen(PORT, () => {
  console.log(`Server on http://localhost:${PORT}`)
})
