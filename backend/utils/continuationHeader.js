const {
  Header,
  Table,
  TableRow,
  TableCell,
  Paragraph,
  TextRun,
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

function continuationHeader(refno, pageNumber) {
  return new Header({
    children: [
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        rows: [
          new TableRow({
            children: [
              // Left cell: refno and Cont. Sheet No. X
              new TableCell({
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: refno || " ",
                        bold: true,
                        size: 28,
                        color: "D35400",
                        font: "Arial",
                      }),
                    ],
                  }),
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: `Cont. Sheet No. ${pageNumber}`,
                        font: "Arial",
                        size: 24,
                        bold: true,
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
      new Paragraph({
        children: [
          new ImageRun({
            data: lineBuffer,
            transformation: { width: 12240, height: 5 },
          }),
        ],
        indent: { left: -749 },
        spacing: { before: 100, after: 100 },
      }),
    ],
  });
}

module.exports = { continuationHeader };
