import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import spotData from '../data/spots.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json(spotData)
})

router.get('/:spotId', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/spot.html'))
})

export default router
