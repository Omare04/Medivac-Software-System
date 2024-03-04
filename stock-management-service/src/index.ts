import express from 'express';
import dotenv from 'dotenv';
import pool from './db';
import cors from 'cors'


const app = express();
app.use(cors())
const port = 5000;

app.get('/hi', async (req, res) => {
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
