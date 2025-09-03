const fs = require("fs");
const path = require("path");
const {
  Footer,
  Paragraph,
  ImageRun,
  AlignmentType,
  TextRun,
  ExternalHyperlink,
} = require("docx");

const { lineBuffer } = require("./assets");

const footer = new Footer({
  children: [
    // Orange line below the table (edge-to-edge)
    new Paragraph({
      children: [
        new ImageRun({
          data: lineBuffer,
          transformation: { width: 12240, height: 5 },
        }),
      ],
      indent: { left: -749 }, // negative of left margin in twips
      spacing: { before: 100, after: 100 },
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [
        new TextRun({
          text: "Regd. Office: 411 - 412, 4th Floor, Aggarwal Cyber Plaza 1, Netaji Subhash Place, New Delhi – 110 034",
          size: 18,
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [
        new TextRun({
          text: "Phone: +91 11 2735 7488 & 89   ",
          size: 18,
          font: "Arial",
        }),
        new TextRun({ text: "E-Mail: ", size: 18, font: "Arial" }),
        new ExternalHyperlink({
          link: "mailto:teamdelhi@teamisla.com",
          children: [
            new TextRun({
              text: "teamdelhi@teamisla.com",
              size: 18,
              style: "Hyperlink",
              font: "Arial",
            }),
          ],
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [
        new TextRun({
          text: "Corp. License No. 200028   Valid upto 12.01.2026",
          size: 18,
          font: "Arial",
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [
        new TextRun({
          text: "Branches: ● Ahmedabad ● Bangalore ● Chennai ● Delhi ● Guwahati ● Hyderabad ● Lucknow ● Mumbai",
          size: 18,
          bold: true,
          font: "Arial",
        }),
      ],
    }),
  ],
});

module.exports = { footer };
