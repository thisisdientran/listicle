import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import stockData from '../data/stocks.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()
router.get('/', (req,res) => {
    res.status(200).json(stockData)
})

router.get('/:stockId', (req,res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/stock.html'))
})

export default router