const fs = require("fs");
const path = require("path");
const {
  Header,
  Table,
  TableRow,
  Paragraph,
  TextRun,
  TableCell,
  ImageRun,
  WidthType,
  BorderStyle,
  AlignmentType,
} = require("docx");

const { logoBuffer, lineBuffer } = require("./assets");

function noBorders() {
  return {
    top: { style: BorderStyle.NONE },
    bottom: { style: BorderStyle.NONE },
    left: { style: BorderStyle.NONE },
    right: { style: BorderStyle.NONE },
  };
}

const header = new Header({
  children: [
    // Company info + logo table
    new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      rows: [
        new TableRow({
          children: [
            // Left cell: company name and address
            new TableCell({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: "TEAM ",
                      bold: true,
                      size: 28,
                      color: "D35400",
                      font: "Arial",
                    }),
                    new TextRun({
                      text: "Insurance Surveyors & Loss Assessors LLP",
                      bold: true,
                      size: 28,
                      color: "000000",
                      font: "Arial",
                    }),
                  ],
                }),
                new Paragraph({
                  children: [
                    new TextRun({
                      text: "411-412, 4th Floor, Aggarwal Cyber Plaza-1,",
                      font: "Arial",
                      size: 24, // 24 half-points = 12pt
                    }),
                  ],
                }),
                new Paragraph({
                  children: [
                    new TextRun({
                      text: "Netaji Subhash Place, Pitampura,",
                      font: "Arial",
                      size: 24,
                    }),
                  ],
                }),
                new Paragraph({
                  children: [
                    new TextRun({
                      text: "New Delhi – 110034",
                      font: "Arial",
                      size: 24,
                    }),
                  ],
                }),
              ],
              borders: noBorders(),
            }),
            // Right cell: logo
            new TableCell({
              children: [
                new Paragraph({
                  alignment: AlignmentType.RIGHT,
                  children: [
                    new ImageRun({
                      data: logoBuffer,
                      transformation: { width: 215, height: 75 },
                    }),
                  ],
                }),
              ],
              borders: noBorders(),
            }),
          ],
        }),
      ],
      borders: {
        top: { style: BorderStyle.NONE },
        bottom: { style: BorderStyle.NONE },
        left: { style: BorderStyle.NONE },
        right: { style: BorderStyle.NONE },
        insideHorizontal: { style: BorderStyle.NONE },
        insideVertical: { style: BorderStyle.NONE },
      },
    }),

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
  ],
});

module.exports = { header };
