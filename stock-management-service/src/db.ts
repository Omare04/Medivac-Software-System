import { Pool } from "pg";
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env file in the config folder
dotenv.config({ path: path.resolve(__dirname, '../config/.env') });

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST ,
  database: process.env.DB_DATABASE ,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || '5432', 10)
});

export default pool;
