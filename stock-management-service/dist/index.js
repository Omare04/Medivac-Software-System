"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const port = 3000;
app.get('/hi', async (req, res) => {
    // try {
    //   const result = await pool.query('SELECT * FROM companion');
    //   res.json(result.rows);
    // } catch (error) {
    //   console.error('Error executing query:', error);
    //   res.status(500).send('Internal Server Error');
    // }
});
app.get('/', (req, res) => {
    res.send("hi");
});
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
