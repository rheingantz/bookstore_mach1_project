import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
});

async function executeQuery(query:string, params:any[]){
    const client = await pool.connect();
    try{
      const result = await client.query(query, params)
      return result.rows;
    } finally {
      client.release()
    }
  };

export {executeQuery};