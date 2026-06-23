import pg from 'pg'

const config = {
    user: process.env.USERPG,
    password: process.env.PASSWORDPG,
    host: process.env.HOSTPG,
    port: process.env.PORTPG,
    database: process.env.DATABASEPG,
    ssl:{
        rejectUnauthorized: false
    }
}

export const pool = new pg.Pool(config)