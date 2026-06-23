import {pool} from "./database.js"
import "./dotenv.js"
import "../data/stocks.js"
import stockData from "../data/stocks.js"

const createStocksTable = async () => {
    const createTableQuery = `
    DROP TABLE IF EXISTS stocks;

    CREATE TABLE IF NOT EXISTS stocks (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        earningDate VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        submittedOn TIMESTAMP NOT NULL)
    `

    try {
        const res = await pool.query(createTableQuery)
        console.log('🎉 stocks table created successfully')
    } catch (err) {
        console.error('⚠️ error creating stocks table', err)
    }
}

const seedStocksTable = async () => {
    await createStocksTable()
    stockData.forEach((stock) => {
        const insertQuery = {
            text: 'INSERT INTO stocks (name, earningDate, image, description, submittedOn) VALUES ($1, $2, $3, $4, $5)'
        }

        const values = [
            stock.name,
            stock.earningDate,
            stock.image,
            stock.description,
            stock.submittedOn
        ]
    
        pool.query(insertQuery, values, (err,res) => {
            if (err) {
                console.error('⚠️ error inserting stock', err)
                return
            }
            console.log(`✅ ${stock.name} added successfully`)
        })
    })
}

seedStocksTable()