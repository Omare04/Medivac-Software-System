import express from "express";
import PDFDocument from "pdfkit";

const exportPoPdf = express.Router();

exportPoPdf.route("/").get((req, res) => {
  const { orderDetails, Supplier, user } = req.query;

  const doc = createPO(orderDetails, null, user, Supplier);

  const buffers = [];
  doc.on("data", (chunk) => buffers.push(chunk));
  doc.on("end", () => {
    const pdfBuffer = Buffer.concat(buffers);

    // Set the response headers for PDF download
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${orderDetails[0].PO}.pdf`
    );

    // Send the PDF buffer as the response
    res.send(pdfBuffer);
  });

  doc.end();
});

function createPO(orderDetails, info, user, Supplier) {
  const doc = new PDFDocument({ size: "A4", margin: 50 });

  generateHeader(doc, user);
  generateCustomerInformation("Maintenance", doc, info, orderDetails, Supplier);
  generatePoTable(doc, orderDetails);

  return doc;
}

function generatePoTable(doc, orderDetails) {
  const invoiceTableTop = 330;
  const headers = ["Item", "P/N", "U.P(net)", "Quantity", "Total(net)"];

  generateTableRow(doc, invoiceTableTop, headers, true);
  generateHr(doc, invoiceTableTop + 20);
  doc.font("Helvetica");

  for (let i = 0; i < orderDetails.length; i++) {
    const item = orderDetails[i];
    const position = invoiceTableTop + (i + 1) * 30;

    generateTableRow(doc, position, [
      item.product_name,
      item.pn,
      item.price,
      item.quantity,
      item.price * item.quantity,
    ]);

    generateHr(doc, position + 20);
  }

  const subtotalPosition = invoiceTableTop + (orderDetails.length + 1) * 30;

  generateTableRow(doc, subtotalPosition, [
    "",
    "",
    "",
    "Subtotal: ",
    "USD " + calculateTotal(orderDetails),
  ]);
  doc.font("Helvetica-Bold");
  doc.font("Helvetica");
}

function generateHeader(doc, user, type) {
  if (type == "Medicine") {
    doc
      .image(
        "/Users/omarelmasaoudi/Desktop/aom/server/Images/aomlogo.png",
        50,
        45,
        { width: 50 }
      )
      .fillColor("#444444")
      .fontSize(18)
      .text("AOM Air Ambulance", 112, 62)
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
function generateCustomerInformation(type, doc, info, orderDetails, Supplier) {
  doc
    .fillColor("#444444")
    .fontSize(20)
    .text("Purchase Order: " + orderDetails[0].PO, 50, 160);

  generateHr(doc, 185);

  const customerInformationTop = 200;

  if (Supplier.address != undefined &&Supplier.address.length > 50) {
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
      .text(
        "USD " + calculateTotal(orderDetails),
        81,
        customerInformationTop + 30
      )
      .text("www.airoceangroup.ma", 80, customerInformationTop + 15)
      .link(170, 50, 100, 15, "https://www.airoceangroup.ma/")
      .moveDown();

    generateHr(doc, 258);
  } else {
    const addressText = Supplier.address != undefined ? Supplier.address + ", " + Supplier.Country : "-";
    const phoneText = Supplier.PhoneNumber != undefined ? Supplier.PhoneNumber: "-";
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
      .text(
        "USD " + calculateTotal(orderDetails),
        81,
        customerInformationTop + 30
      )
      .text("www.airoceangroup.ma", 80, customerInformationTop + 15)
      .link(170, 50, 100, 15, "https://www.airoceangroup.ma/")
      .moveDown();

    generateHr(doc, 252);
  }
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
    const columnWidths = [200, 100, 65, 50, 50]; // Adjust the widths as needed
    let position = 50;

    for (let i = 0; i < items.length; i++) {
      const textOptions = { width: columnWidths[i], align: "left" };

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

function calculateTotal(po) {
  let total = 0;

  for (let i = 0; i < po.length; i++) {
    const item = po[i];
    total += item.price * item.quantity;
  }
  return total;
}

//This function generates the lines
function generateHr(doc, y) {
  doc.strokeColor("#aaaaaa").lineWidth(1).moveTo(50, y).lineTo(550, y).stroke();
}

export default exportPoPdf;
