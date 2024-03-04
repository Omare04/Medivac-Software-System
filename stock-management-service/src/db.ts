import { Pool } from "pg";
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env file in the config folder
dotenv.config({ path: path.resolve(__dirname, '../config/.env') });

const pool = new Pool({
  user: "postgres",
  host: "postgres" ,
  database: "medivacappDB" ,
  password: "Omardomingues1",
  port: parseInt(process.env.DB_PORT || '5432', 10)
});

export default pool;
