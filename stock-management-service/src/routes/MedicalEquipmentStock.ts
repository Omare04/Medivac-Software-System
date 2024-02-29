import express, { query } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import pool from "../db"

const app = express();

app.use(express.json());

const MedEquipmentRouter = express.Router();
MedEquipmentRouter.use(bodyParser.urlencoded({ extended: true }));
MedEquipmentRouter.use(bodyParser.json());



export default MedEquipmentRouter;