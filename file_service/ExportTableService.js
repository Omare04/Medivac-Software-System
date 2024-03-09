import PDFDocument from "pdfkit";
import fs from "fs";
import express from "express";

const generateTableRoute = express.Router();

generateTableRoute.route("/").get((req, res) => {
  const { type, td, headers, user, columnWidths, title } = req.query;
  const doc = generatePDF(type, td, headers, columnWidths, user, title);

  const buffers = [];
  doc.on("data", (chunk) => buffers.push(chunk));
  doc.on("end", () => {
    const pdfBuffer = Buffer.concat(buffers);
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${td[0].PO}.pdf`
    );

    // Send the PDF buffer as the response
    res.send(pdfBuffer);
  });

  doc.end();
});

generateTableRoute.route("/EntryExit").get((req, res) => {
  const { type, td, columnWidths, headers, user, title } = req.query;
  const doc = generatePDF(type, td, headers, columnWidths, user, title);

  const buffers = [];
  doc.on("data", (chunk) => buffers.push(chunk));
  doc.on("end", () => {
    const pdfBuffer = Buffer.concat(buffers);
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${td[0].PO}.pdf`
    );

    // Send the PDF buffer as the response
    res.send(pdfBuffer);
  });

  doc.end();
});

function generatePDF(type, td, headers, columnWidths, user, title) {
  const doc = new PDFDocument({ size: "A4", margin: 50 });

  generateTableTitle(doc, user, title);
  generatePoTable(doc, td, columnWidths, headers, type);

  return doc;
}

function generateTableTitle(doc, user, title, logo, company, address, cityCountry) {
  doc
    .image(
      logo,
      50,
      45,
      { width: 50 }
    )
    .fillColor("#444444")
    .fontSize(18)
    .text(title, 112, 62)
    .fontSize(10)
    .text(company, 200, 50, { align: "right" })
    .text(address, 200, 65, { align: "right" })
    .text(cityCountry, 200, 80, { align: "right" })
    .text(user[0].email, 200, 95, { align: "right" })
    .text(user[0].phoneNumber, 200, 110, { align: "right" })
    .moveDown();
}

function generatePoTable(doc, td, columnWidths, headers, type) {
  //for Enters And removal need to accoutn for longer names, where in need
  const equalWidth = type === "MedicineOrder" ? 200 : 100;

  const fixedColumnWidths = Array(columnWidths.length).fill(equalWidth);

  generateTableRows(doc, headers, 150, fixedColumnWidths, true);
  
  let index = 0;
  let position = 0;

  for (let i = 0; i < td.length; i++) {
    let y = (i + 1) * 30;
    let item = td[i];

    if (type == "MedicineOrder") {
      if (i == 0) {
        doc.font("Helvetica-Bold");
        doc.fontSize(16);
        generateLine(doc, 140);

        // Change font size for the "PO" field only
        doc.text("PO:" + item.PO, 50, 120, { width: 200, align: "left" });

        // Reset font size and style to default
        doc.fontSize(11);
        doc.font("Helvetica");
      }

      position = (index + 1) * 30;

      if (position > 800) {
        index = 0;
        position = (index + 1) * 30;
        invoiceTable = false;
        doc.addPage();
        generateHr(doc, position + 20);
        doc.font("Helvetica");
      }
      generateTableRows(
        doc,
        [item.product_name, item.product_type, item.quantity],
        y + 150,
        fixedColumnWidths,
        false
      );

      if (i == td.length - 1) {
        generateLine(doc, y + 170);
      }

      generateLine(doc, y + 140);
    } else if (type == "Enter") {
      generateTableRows(
        doc,
        [
          item.product_name,
          item.product_type,
          item.quantity,
          item.formatted_added_at,
        ],
        y + 150,
        fixedColumnWidths, 
        false
      );

      generateLine(doc, y + 140);

      if (i === td.length - 1) {
        doc.font("Helvetica-Bold")
        generateLine(doc, y + 170);

        doc.text("Reference: MOM2.2.2-06/R1", 200, y + 180, {
          width: columnWidths[0],
          align: "right",
        });
      }
    } else if (type == "Remove") {
      generateTableRows(
        doc,
        [
          item.product_name,
          item.product_type,
          item.quantity,
          item.FlightNum,
          item.formatted_added_at,
        ],
        y + 150,
        fixedColumnWidths, 
        false
      );
      generateLine(doc, y + 140);

      if (i === td.length - 1) {
        doc.font("Helvetica-Bold");
        
        generateLine(doc, y + 170);

        doc.text("Reference: 2.3-01/R0", 200, y + 180, {
          width: columnWidths[0],
          align: "right",
        });
      }
    }
  }
}

function generateTableRows(doc, td, y, columnWidths, isHeader) {
  let x = 50;

  if (isHeader) {
    for (let i = 0; i < td.length; i++) {
      doc.text(td[i], x, y, { width: columnWidths[i], align: "left" });
      x += columnWidths[i];
    }
  } else {
    for (let i = 0; i < td.length; i++) {
      doc.text(td[i], x, y, {
        width: columnWidths[i],
        align: "left",
      });
      x += columnWidths[i];
    }
  }
}

function generateLine(doc, y) {
  doc.strokeColor("#aaaaaa").lineWidth(1).moveTo(50, y).lineTo(550, y).stroke();
}

export default generateTableRoute;
