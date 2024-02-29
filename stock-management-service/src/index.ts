import express from 'express';
import dotenv from 'dotenv';
import pool from './db';


const app = express();
const port = 3000;

app.get('/', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM companion');
      res.json(result.rows);
    } catch (error) {
      console.error('Error executing query:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
