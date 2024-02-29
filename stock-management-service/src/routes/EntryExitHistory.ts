// import express, { query } from "express";
// import bodyParser from "body-parser";
// import dotenv from "dotenv";
// import pool from "../db"


// const ERHistory = express.Router();
// ERHistory.use(bodyParser.urlencoded({ extended: true }));
// ERHistory.use(bodyParser.json());

// ERHistory.route("/StockEntries").post((req, res) => {
//     const query =
//       "INSERT INTO ExitEntryMedHistory (product_id, uid, quantity, FlightNum,type, added_at) VALUES \
//       ((SELECT product_id FROM Drug_stock WHERE product_name = ? LIMIT 1), ?, ?, ' ', ?, CURRENT_DATE)";
  
//     const { product_name, uid, quantity, type } = req.body.data;
  
//     pool.query(query, [product_name, uid, quantity, type], (err: any, result: any) => {
//       if (err) {
//         res.status(500).json({ error: "Error occurred while inserting data." });
//         console.log(err);
//       } else {
//         res.status(200).json({ message: "Data inserted successfully." });
//       }
//     });
//   });
  

// ERHistory.route("/History").get((req, res) => {
//     const joinQuery =
//       "SELECT fname, lname,product_name, ExitEntryMedHistory.quantity, type, FlightNum, CONCAT(DATE_FORMAT(added_at, '%Y-%m-%d'), ' , At: ',DATE_FORMAT(added_at, '%H:%i'))\
//       AS formatted_added_at FROM ExitEntryMedHistory \
//       INNER JOIN Drug_stock ON ExitEntryMedHistory.product_id = Drug_stock.product_id \
//       INNER JOIN users ON ExitEntryMedHistory.uid = users.id";
  
//     pool.query(joinQuery, (err: any, result: any) => {
//       if (err) {
//         console.log(err);
//         res.sendStatus(200).send({ message: "Error" });
//       } else {
//         res.send(result);
//       }
//     });
//   });
  
//   ERHistory.route("/History/Entries").get((req, res) => {
//     const joinQuery =
//       "SELECT fname, lname, product_name, ExitEntryMedHistory.quantity, type, FlightNum, CONCAT(DATE_FORMAT(added_at, '%Y-%m-%d'), ', At: ', DATE_FORMAT(added_at, '%H:%i')) AS formatted_added_at FROM ExitEntryMedHistory \
//      INNER JOIN Drug_stock ON ExitEntryMedHistory.product_id = Drug_stock.product_id \
//      INNER JOIN users ON ExitEntryMedHistory.uid = users.id \
//      WHERE ExitEntryMedHistory.type = 'Enter'";
  
//     pool.query(joinQuery, (err: any, result: any) => {
//       if (err) {
//         res.sendStatus(200).send({ message: "Error" });
//       } else {
//         res.send(result);
//       }
//     });
//   });
  
//   ERHistory.route("/History/Removal").get((req, res) => {
//     const joinQuery =
//       "SELECT fname, lname, product_name, ExitEntryMedHistory.quantity, type, FlightNum, CONCAT(DATE_FORMAT(added_at, '%Y-%m-%d'), ', At: ', DATE_FORMAT(added_at, '%H:%i')) AS formatted_added_at FROM ExitEntryMedHistory \
//      INNER JOIN Drug_stock ON ExitEntryMedHistory.product_id = Drug_stock.product_id \
//      INNER JOIN users ON ExitEntryMedHistory.uid = users.id \
//      WHERE ExitEntryMedHistory.type = 'Remove'";
  
//     pool.query(joinQuery, (err: any, result: any) => {
//       if (err) {
//         console.log(err);
//         res.sendStatus(200).send({ message: "Error" });
//       } else {
//         res.send(result);
//       }
//     });
//   });

//   ERHistory.route("/UpdateEvent").post((req, res) => {
//     const query =
//       "INSERT INTO ExitEntryMedHistory(product_id, uid, quantity, FlightNum, type) VALUES (?, ?, ?, ?, ?)";
  
//     pool.query(query, req.body.data, (err: any, result: any) => {
//       if (err) {
//         console.log(err);
//         res.status(500).send("Error updating event");
//       } else {
//         console.log("Event updated successfully");
//         res.sendStatus(200);
//       }
//     });
//   });
  
//   ERHistory.route("/DateEntered/:ProductID").get((req, res) => {
//     const query =
//       "SELECT DATE_FORMAT(added_at, '%Y-%m-%d') AS dateAdded FROM ExitEntryMedHistory WHERE product_id = ?";
  
//     pool.query(query, req.params.ProductID, (err: any, result: any) => {
//       if (err) {
//         res.status(500);
//       } else {
//         res.status(200).send(result);
//       }
//     });
//   });
  
//   ERHistory.route("/EntryExit/:type").get((req, res) => {
//     let query = "SELECT product_name, product_type,ExitEntryMedHistory.quantity";
  
//     if (req.params.type === "Remove") {
//       query += ", FlightNum";
//     }
  
//     query +=
//       ", CONCAT(DATE_FORMAT(added_at, '%Y-%m-%d'), ', At: ', DATE_FORMAT(added_at, '%H:%i')) AS formatted_added_at \
//       FROM ExitEntryMedHistory \
//       INNER JOIN Drug_stock ON ExitEntryMedHistory.product_id = Drug_stock.product_id WHERE type = ?";
  
//     pool.query(query, req.params.type, (err: any, result: any) => {
//       if (err) {
//         res.status(500).send({ Error: "Error Fetching" });
//       } else {
//         res.status(200).send({ message: "Success", payload: result });
//       }
//     });
//   });
  

//   export default ERHistory