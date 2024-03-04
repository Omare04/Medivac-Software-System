"use strict";
// import express, { query } from "express";
// import bodyParser from "body-parser";
// import dotenv from "dotenv";
// import pool from "../db"
// const app = express();
// app.use(express.json());
// const DrugRouter = express.Router();
// DrugRouter.use(bodyParser.urlencoded({ extended: true }));
// dotenv.config();
// DrugRouter.use(bodyParser.json());
// DrugRouter.route("/")
//     .get((req, res) => {
//         pool.query(
//             "SELECT product_name, product_id FROM Drug_stock ORDER BY Quantity DESC",
//             (err: any, response: any) => {
//                 if (err) {
//                     res.send(err);
//                 } else {
//                     res.send(response);
//                 }
//             }
//         );
//     })
//     .post((req, res) => {
//         pool.query(
//             "INSERT INTO Drug_stock (product_type, product_name, Date_Of_Expiry, location_flightnum, user_id, Quantity) VALUES(?,?,?,?,?,?)",
//             req.body.data,
//             (err: any, result: any) => {
//                 if (err) {
//                     console.error(err);
//                     res
//                         .status(500)
//                         .send({ message: "Error inserting data into the database." });
//                 } else {
//                     res.status(200).send({
//                         message: `${req.body.data[1]} has been added to the Drug stock`,
//                     });
//                 }
//             }
//         );
//     });
// DrugRouter.route("/ListOfDrugs").get((req, res) => {
//     pool.query(
//         "SELECT * FROM Drug_stock ORDER BY Quantity DESC",
//         (err: any, response: any) => {
//             if (err) {
//                 res.send(err);
//             } else {
//                 res.send(response);
//             }
//         }
//     );
// });
// DrugRouter.route("/Stock").get((req, res) => {
//     pool.query(
//         "SELECT COUNT(*) FROM Drug_stock WHERE quantity = 0",
//         (err: any, response: any) => {
//             if (err) {
//                 res.send(err);
//             } else {
//                 res.send(response);
//             }
//         }
//     );
// });
// DrugRouter.route("/Out_Of_Stock").get((req, res) => {
//     const query = `Select * from Drug_Stock WHERE Quantity = 0`;
//     pool.query(query, (err: any, response: any) => {
//         if (err) {
//             res.send(err);
//         } else {
//             res.send(response);
//         }
//     });
// });
// DrugRouter.route("/Expired").get((req, res) => {
//     const { days } = req.params;
//     const query = `SELECT * Drug_stock where Date_Of_Expiry = 'Expired'`;
//     pool.query(query, (err: any, result: any) => {
//         if (err) {
//             res.send(err);
//         } else {
//             res.send({ result: result, exp: days });
//         }
//     });
// });
// DrugRouter.route("/GetOrderItems").post((req, res) => {
//     const query = "SELECT * FROM Drug_stock WHERE product_id IN (?)";
//     const productIds = req.body.item;
//     pool.query(query, productIds, (err: any, result: any) => {
//         if (err) {
//             res.send(err);
//         } else {
//             res.send(result);
//         }
//     });
// });
// DrugRouter.route("/getProduct/:ID").get((req, res) => {
//     const query = "SELECT product_name FROM Drug_stock WHERE product_id = ?";
//     pool.query(query, req.params.ID, (err: any, result: any) => {
//         if (err) {
//             res.status(500).send({ message: "Error Fetching product name" });
//         } else {
//             res.status(200).send(result);
//         }
//     });
// });
// DrugRouter.route("/TotalStock").get((req, res) => {
//     const query = "SELECT COUNT(*) AS total FROM Drug_stock";
//     pool.query(query, (err: any, result: any) => {
//         if (err) {
//             res.status(500).send({ error: "Error fetching total stock count" });
//         } else {
//             res.status(200).send(result);
//         }
//     });
// });
// DrugRouter.route("/StockRemoval").put((req, res) => {
//     const updatedVal = req.body.currentQty - req.body.RemovalQty;
//     const query = `UPDATE Drug_stock SET Quantity = ${updatedVal} 
//     WHERE product_id = ${req.body.productID}`;
//     pool.query(query, (err: string, result: any) => {
//         if (err) {
//             res.send({ message: "error " + err });
//         } else {
//             res.send({ message: req.body.productName + " has been updated." });
//         }
//     });
// });
// DrugRouter.route("/StockUpdate").put((req, res) => {
//     const updatedVal =
//         parseInt(req.body.currentQty) + parseInt(req.body.RemovalQty);
//     const query = `UPDATE Drug_stock SET Quantity = ${updatedVal} 
//     WHERE product_id = ${req.body.productID}`;
//     pool.query(query, (err: string, result: any) => {
//         if (err) {
//             res.send({ message: "error " + err });
//         } else {
//             res.send({ message: req.body.productName + " has been updated." });
//         }
//     });
// });
// DrugRouter.route("/StockUpdateMission/:ID").put((req, res) => {
//     const query = "SELECT quantity FROM Drug_stock WHERE product_id = ?";
//     pool.query(query, req.params.ID, (err: any, result: { quantity: any; }[]) => {
//         if (err) {
//             res.status(500);
//         } else {
//             const productOldQty = result[0].quantity;
//             const productRemoveQty = req.body.quantity;
//             const newQty = productOldQty - productRemoveQty;
//             const updateStockQuery = `UPDATE Drug_stock SET quantity = ${newQty} WHERE product_id = ? `;
//             pool.query(updateStockQuery, req.params.ID, (error: any, resposne: any) => {
//                 if (error) {
//                     res.send({ message: "Error Updating the value" }).status(500);
//                 } else {
//                     const insertIntoERHistoryQuery =
//                         "INSERT INTO ExitEntryMedHistory(product_id, uid, quantity, FlightNum, type, added_at) VALUES (?,?,?,?,?,?)";
//                     const currentDate = new Date();
//                     const year = currentDate.getFullYear();
//                     const month = String(currentDate.getMonth() + 1).padStart(2, "0");
//                     const day = String(currentDate.getDate()).padStart(2, "0");
//                     const formattedDate = `${year}-${month}-${day}`;
//                     pool.query(
//                         insertIntoERHistoryQuery,
//                         [
//                             req.params.ID,
//                             1684438793,
//                             productRemoveQty,
//                             req.body.flightNumber,
//                             "Remove",
//                             formattedDate,
//                         ],
//                         (ErERR: any, ErResult: any) => {
//                             if (ErERR) {
//                                 res.status(500);
//                             } else {
//                                 res.status(200);
//                             }
//                         }
//                     );
//                 }
//             });
//         }
//     });
// });
// DrugRouter.route("/DeleteItem/:ID").delete((req, res) => {
//     const query = "DELETE FROM Drug_stock WHERE product_id = ?";
//     pool.query(query, [req.params.ID], (err: { errno: number }) => {
//         if (err) {
//             if (err.errno == 1451) {
//                 res.send({ message: `${req.query.productName} Cannot Be Removed` });
//             }
//         } else {
//             res
//                 .status(200)
//                 .send({ message: `${req.query.productName} has been removed` });
//         }
//     });
// });
// export default DrugRouter
