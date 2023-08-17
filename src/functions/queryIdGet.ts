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

async function executeIdGet(query:string, params:any[]){
    const client = await pool.connect();
    try{
      const result = await client.query(query+` RETURNING id`, params)
      return result.rows[0].id;
    } finally {
      client.release()
    }
  };

export {pool, executeIdGet};