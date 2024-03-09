import PDFDocument from "pdfkit";
import express from "express";
import mysql from "mysql2";
import fs from "fs";
import axios from "axios";

const pdfRoute = express.Router();

pdfRoute.route("/").get((req, res) => {
  const { type, item, info, user, Supplier } = req.query;

  let order = JSON.parse(item);
  let doc = null;

  if (type == "Medicine") {
    doc = createPO(type, order, JSON.parse(info), user);
  } else {
    doc = createPO(type, order, info, user, Supplier);
  }

  // Pipe the PDF document to a buffer
  const buffers = [];
  doc.on("data", (chunk) => buffers.push(chunk));
  doc.on("end", () => {
    const pdfBuffer = Buffer.concat(buffers);

    // Set the response headers for PDF download
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${order[0].PO}.pdf`
    );

    // Send the PDF buffer as the response
    res.send(pdfBuffer);
  });

  doc.end();
});

pdfRoute.route("/ExportTables").get((req, res) => {
  const { td, th, title, reference } = req.query;

  const doc = createExportPdf(td, th, title, reference);

  const buffers = [];
  doc.on("data", (chunk) => buffers.push(chunk));
  doc.on("end", () => {
    const pdfBuffer = Buffer.concat(buffers);

    // Set the response headers for PDF download
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${reference}.pdf`
    );

    // Send the PDF buffer as the response
    res.send(pdfBuffer);
  });

  doc.end();
});

function createPO(type, po, info, user, Supplier) {
  const doc = new PDFDocument({ size: "A4", margin: 50 });
  generateHeader(doc, user, type);
  generateCustomerInformation(type, doc, info, po, Supplier);
  generatePOTable(doc, po, type);

  return doc;
}

export function generateHeader(doc, user, type) {
  if (type == "Medicine") {
    doc
      .image(
        "/Users/omarelmasaoudi/Desktop/aom/server/Images/aomAmbulance.png",
        40,
        45,
        { width: 150 }
      )
      .fillColor("#444444")
      .fontSize(18)
      .fontSize(10)
      .text("Air Ocean Maroc", 200, 50, { align: "right" })
      .text("1, Rue Maamar Al Battani", 200, 65, { align: "right" })
      .text("Rabat Morocco", 200, 80, { align: "right" })
      .text(user[0].email, 200, 95, { align: "right" })
      .text(user[0].phoneNumber, 200, 110, { align: "right" })
      .moveDown();
  } else {
    doc
      .image(
        "/Users/omarelmasaoudi/Desktop/aom/server/Images/aomlogo.png",
        50,
        45,
        { width: 50 }
      )
      .fillColor("#444444")
      .fontSize(18)
      .text("Air Ocean Maroc", 112, 62)
      .fontSize(10)
      .text("Air Ocean Maroc", 200, 50, { align: "right" })
      .text("1, Rue Maamar Al Battani", 200, 65, { align: "right" })
      .text("Rabat Morocco", 200, 80, { align: "right" })
      .text(user[0].email, 200, 95, { align: "right" })
      .text(user[0].phoneNumber, 200, 110, { align: "right" })
      .moveDown();
  }
}

//generates the Suppliers details
export function generateCustomerInformation(type, doc, info, po, Supplier) {
  if (type == "Maintenance") {
    doc
      .fillColor("#444444")
      .fontSize(20)
      .text("Purchase Order: " + po[0].OrderCode, 50, 160);

    generateHr(doc, 185);

    const customerInformationTop = 200;

    if (Supplier.address != undefined && Supplier.address.length > 50) {
      doc
        .fontSize(10)
        .text("Email: ", 50, customerInformationTop)
        .text("Web: ", 50, customerInformationTop + 15)
        .text("Total: ", 50, customerInformationTop + 30)
        .font("Helvetica-Bold")
        .font("Helvetica")

        .text("Phone:", 240, customerInformationTop + 43)
        .text("Address:", 240, customerInformationTop + 15)
        .text("Company:", 240, customerInformationTop)

        //This is where the Supplier details lie
        .font("Helvetica-Bold")
        .text(Supplier.email, 84, customerInformationTop)
        .text(Supplier.Supplier, 290, customerInformationTop)
        .text(
          Supplier.address + ", " + Supplier.Country,
          290,
          customerInformationTop + 15
        )
        .text(Supplier.PhoneNumber, 290, customerInformationTop + 43)
        .text("USD " + calculateTotal(po), 81, customerInformationTop + 30)
        .text("www.airoceangroup.ma", 80, customerInformationTop + 15)
        .link(170, 50, 100, 15, "https://www.airoceangroup.ma/")
        .moveDown();

      generateHr(doc, 258);
    } else {
      const addressText =
        Supplier.address !== undefined
          ? Supplier.address + ", " + Supplier.Country
          : "-";
      const phoneText =
        Supplier.PhoneNumber != undefined ? Supplier.PhoneNumber : "-";
      doc
        .fontSize(10)
        .text("Email: ", 50, customerInformationTop)
        .text("Web: ", 50, customerInformationTop + 15)
        .text("Total: ", 50, customerInformationTop + 30)
        .font("Helvetica-Bold")
        .font("Helvetica")

        .text("Phone:", 240, customerInformationTop + 30)
        .text("Address:", 240, customerInformationTop + 15)
        .text("Company:", 240, customerInformationTop)

        //This is where the Supplier details lie
        .font("Helvetica-Bold")
        .text(Supplier.email, 84, customerInformationTop)
        .text(Supplier.Supplier, 290, customerInformationTop)
        .text(addressText, 290, customerInformationTop + 15)
        .text(phoneText, 290, customerInformationTop + 30)
        .text("USD " + calculateTotal(po), 81, customerInformationTop + 30)
        .text("www.airoceangroup.ma", 80, customerInformationTop + 15)
        .link(170, 50, 100, 15, "https://www.airoceangroup.ma/")
        .moveDown();

      generateHr(doc, 252);
    }
  } else {
    doc.fillColor("#444444").fontSize(20).text("Medicinal consumables", 50, 160);
    generateHr(doc, 185);

    let totalQty = 0;

    for (let i = 0; i < po.length; i++) {
      totalQty += po[i].Qty
    }

    const customerInformationTop = 200;
    doc
      .fontSize(10)
      .text("File Number:", 50, customerInformationTop)
      .font("Helvetica-Bold")
      .text(po[0].PO, 150, customerInformationTop)
      .font("Helvetica")
      .text("Date:", 50, customerInformationTop + 15)
      .text(info.DateOrdered, 150, customerInformationTop + 15)
      .text("Total Quantity: ", 50, customerInformationTop + 30)
      .text(totalQty, 150, customerInformationTop + 30)

      //This is where the Supplier details lie
      .font("Helvetica-Bold")
      .text("Clinical Manager Signature:", 300, customerInformationTop)
      .font("Helvetica")
      .moveDown();
  }
}

//This is the main table displaying the row information
function generatePOTable(doc, po, type) {
  const invoiceTableTop = 300;
  doc.font("Helvetica-Bold");

  if (type === "Medicine") {
    generateTableRow(doc, invoiceTableTop, ["Item", "Type", "Quantity"]);

    generateHr(doc, invoiceTableTop + 20);
    generateHr(doc, invoiceTableTop - 48);
    doc.font("Helvetica");

    let index = 0;
    let invoiceTable = true;
    let position = 0;

    for (let i = 0; i < po.length; i++) {
      const item = po[i];

      if (invoiceTable == true) {
        position = invoiceTableTop + (index + 1) * 30;
      } else {
        position = (index + 1) * 30;
      }

      if (position > 800) {
        index = 0;
        position = (index + 1) * 30;
        invoiceTable = false;
        doc.addPage();
        generateHr(doc, position + 20);
        doc.font("Helvetica");
      }

      generateTableRow(doc, position, [
        item.Product,
        item.ProductType,
        item.Qty,
      ]);

      generateHr(doc, position + 20);
      index++;
    }

    doc.font("Helvetica-Bold");
    doc.font("Helvetica");
  } else if (type === "Maintenance") {
    const headers = ["Item", "P/N", "U.P(net)", "Quantity", "Total(net)"];
    generateTableRow(doc, invoiceTableTop, headers, true);
    generateHr(doc, invoiceTableTop + 20);
    doc.font("Helvetica");

    let index = 0;
    let currentPage = 1;
    let invoiceTable = true;
    let position = 0;

    for (let i = 0; i < po.length; i++) {
      const item = po[i];

      if (invoiceTable) {
        position = invoiceTableTop + (i + 1) * 30;
      } else {
        position = invoiceTableTop + (i + 1 - index) * 30;
      }

      if (currentPage > 1) {
        if (position > 800) {
          index = 0;
          currentPage++;
          position = invoiceTableTop;
          invoiceTable = false;
          doc.addPage();
          doc.font("Helvetica");
        }
      }

      generateTableRow(doc, position, [
        item.Product,
        item.pn,
        item.price,
        item.Qty,
        item.price * item.Qty,
      ]);

      generateHr(doc, position + 20);

      if (!invoiceTable) {
        index++;
      }
    }

    const subtotalPosition = invoiceTableTop + (po.length + 1 - index) * 30;

    generateTableRow(doc, subtotalPosition, [
      "",
      "",
      "",
      "Subtotal: ",
      "USD " + calculateTotal(po),
    ]);

    doc.font("Helvetica-Bold");
    doc.font("Helvetica");
  }
}

//function that calculates the order total
function calculateTotal(po) {
  let total = 0;

  for (let i = 0; i < po.length; i++) {
    const item = po[i];
    total += item.price * item.Qty;
  }
  return total;
}

function generateTableRow(doc, y, items, isHeader) {
  doc.fontSize(9);

  if (isHeader) {
    doc.font("Helvetica-Bold");
    const columnWidths = [200, 100, 65, 50, 50];
    let position = 50;

    let i = 0;
    for (i = 0; i < items.length; i++) {
      doc.text(items[i], position, y, {
        width: columnWidths[i],
        align: "left",
      });
      position += columnWidths[i];
    }
  } else {
    doc.font("Helvetica");
    const columnWidths = [200, 100, 65, 50, 50];
    let position = 50;

    for (let i = 0; i < items.length; i++) {
      const textOptions = { width: columnWidths[i], align: "left" };

      if (items.length > 15) {
        add;
      }

      if (i === 0) {
        const adjustedWidth = Math.min(
          columnWidths[i],
          doc.widthOfString(items[i], textOptions)
        );
        doc.fontSize(9).text(items[i], position, y, {
          ...textOptions,
          width: adjustedWidth,
        });
      } else {
        doc.fontSize(9).text(items[i], position, y, textOptions);
      }

      position += columnWidths[i];
    }
  }
}

function generateHr(doc, y) {
  doc.strokeColor("#aaaaaa").lineWidth(1).moveTo(50, y).lineTo(550, y).stroke();
}

export default pdfRoute;
