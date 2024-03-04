"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
// Load environment variables from .env file in the config folder
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../config/.env') });
const pool = new pg_1.Pool({
    user: "postgres",
    host: "postgres",
    database: "medivacappDB",
    password: "Omardomingues1",
    port: parseInt(process.env.DB_PORT || '5432', 10)
});
exports.default = pool;
