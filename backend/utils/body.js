const fs = require("fs");
const path = require("path");
const {
  Paragraph,
  TextRun,
  AlignmentType,
  Table,
  TableRow,
  TableCell,
  WidthType,
  BorderStyle,
} = require("docx");

function noBorders() {
  return {
    top: { style: BorderStyle.NONE },
    bottom: { style: BorderStyle.NONE },
    left: { style: BorderStyle.NONE },
    right: { style: BorderStyle.NONE },
  };
}

reportData = {};
const {
  refNo = "DEL/NIA/10229/FSR",
  date = "29th July 2025",
  recipient = "The New India Assurance Co. Ltd.",
} = reportData;

// Body content children array
const bodyChildren = [
  // Reference and Date section
  new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Team Ref. No.: ",
                    bold: true,
                    font: "Arial",
                    size: 24,
                  }),
                  new TextRun({
                    text: refNo,
                    font: "Arial",
                    size: 24,
                  }),
                ],
              }),
            ],
            width: { size: 50, type: WidthType.PERCENTAGE },
            borders: noBorders(),
          }),
          new TableCell({
            children: [
              new Paragraph({
                alignment: AlignmentType.RIGHT,
                children: [
                  new TextRun({
                    text: "Date: ",
                    bold: true,
                    font: "Arial",
                    size: 24,
                  }),
                  new TextRun({
                    text: date,
                    font: "Arial",
                    size: 24,
                  }),
                ],
              }),
            ],
            width: { size: 50, type: WidthType.PERCENTAGE },
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

  // Spacing
  new Paragraph({ children: [], spacing: { after: 60 } }),

  // Recipient Address
  new Paragraph({
    children: [
      new TextRun({
        text: "The New India Assurance Co. Ltd.,",
        bold: true,
        font: "Arial",
        size: 24,
      }),
    ],
  }),
  new Paragraph({
    children: [
      new TextRun({
        text: "Centralized Claims Hub MRO-III, New India Centre,",
        font: "Arial",
        size: 24,
      }),
    ],
  }),
  new Paragraph({
    children: [
      new TextRun({
        text: "3rd Floor, 17-A, Cooperage Road, Mumbai – 400 001.",
        font: "Arial",
        size: 24,
      }),
    ],
  }),

  // Spacing
  new Paragraph({ children: [], spacing: { after: 50 } }),

  // Kind Attention
  new Paragraph({
    children: [
      new TextRun({
        text: "Kind Attn.: Ms. Swati Tilak/ Ms. Indra Ayer.",
        bold: true,
        font: "Arial",
        size: 24,
      }),
    ],
  }),

  // Spacing
  new Paragraph({ children: [], spacing: { after: 50 } }),

  // Title Section
  new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [
      new TextRun({
        text: "FINAL SURVEY REPORT",
        bold: true,
        font: "Arial",
        size: 24,
      }),
    ],
  }),

  // Spacing
  new Paragraph({ children: [], spacing: { after: 50 } }),

  new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [
      new TextRun({
        text: "ISSUED WITHOUT PREJUDICE",
        bold: true,
        font: "Arial",
        size: 24,
      }),
    ],
  }),

  // Spacing
  new Paragraph({ children: [], spacing: { after: 50 } }),

  // Policy Details Table
  new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: "POLICY TYPE & NO.",
                    bold: true,
                    font: "Arial",
                    size: 24,
                  }),
                ],
              }),
            ],
            width: { size: 35, type: WidthType.PERCENTAGE },
            borders: noBorders(),
          }),
          new TableCell({
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Cellular Network Policy No. 121200462426000000001",
                    font: "Arial",
                    size: 24,
                  }),
                ],
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Burglary & Theft. 121200462426000000002",
                    font: "Arial",
                    size: 24,
                  }),
                ],
              }),
            ],
            width: { size: 65, type: WidthType.PERCENTAGE },
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

  // Spacing
  new Paragraph({ children: [], spacing: { after: 60 } }),

  // Claim Details Table
  new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: "CLAIM NO",
                    bold: true,
                    font: "Arial",
                    size: 24,
                  }),
                ],
              }),
            ],
            width: { size: 35, type: WidthType.PERCENTAGE },
            borders: noBorders(),
          }),
          new TableCell({
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Insurer Claim No.    Details Awaited",
                    font: "Arial",
                    size: 24,
                  }),
                ],
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Edme Control No.    MIS – 7228",
                    font: "Arial",
                    size: 24,
                  }),
                ],
              }),
            ],
            width: { size: 65, type: WidthType.PERCENTAGE },
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

  // Spacing
  new Paragraph({ children: [], spacing: { after: 60 } }),

  // Insured Details Table
  new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: "NAME & ADDRESS OF INSURED",
                    bold: true,
                    font: "Arial",
                    size: 24,
                  }),
                ],
              }),
            ],
            width: { size: 35, type: WidthType.PERCENTAGE },
            borders: noBorders(),
          }),
          new TableCell({
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: "M/s. Vodafone Idea Ltd.",
                    font: "Arial",
                    size: 24,
                    bold: true,
                  }),
                ],
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: "10th Floor, Birla Centurion, Century Mills Compound,",
                    font: "Arial",
                    size: 24,
                  }),
                ],
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Pandurang ",
                    font: "Arial",
                    size: 24,
                  }),
                  new TextRun({
                    text: "Budhkar",
                    font: "Arial",
                    size: 24,
                    underline: {},
                  }),
                  new TextRun({
                    text: " Marg, Worli, Mumbai – 400 030.",
                    font: "Arial",
                    size: 24,
                  }),
                ],
              }),
            ],
            width: { size: 65, type: WidthType.PERCENTAGE },
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

  // Spacing
  new Paragraph({ children: [], spacing: { after: 60 } }),

  // Address of Loss Table
  new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: "ADDRESS OF LOSS",
                    bold: true,
                    font: "Arial",
                    size: 24,
                  }),
                ],
              }),
            ],
            width: { size: 35, type: WidthType.PERCENTAGE },
            borders: noBorders(),
          }),
          new TableCell({
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Shri. Ram Kishan S/o Shri. Hukami. Khewat/Khata No.- 261/330. Rect",
                    font: "Arial",
                    size: 24,
                  }),
                ],
              }),
            ],
            width: { size: 65, type: WidthType.PERCENTAGE },
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

  // Spacing
  new Paragraph({ children: [], spacing: { after: 60 } }),

  // Date of Loss table
  new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: "DATE OF LOSS",
                    bold: true,
                    font: "Arial",
                    size: 24,
                  }),
                ],
              }),
            ],
            width: { size: 35, type: WidthType.PERCENTAGE },
            borders: noBorders(),
          }),
          new TableCell({
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: "07.09.2024",
                    font: "Arial",
                    size: 24,
                  }),
                ],
              }),
            ],
            width: { size: 65, type: WidthType.PERCENTAGE },
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

  // Spacing
  new Paragraph({ children: [], spacing: { after: 60 } }),

  // Date of Intimation table
  new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: "DATE OF INTITMATION",
                    bold: true,
                    font: "Arial",
                    size: 24,
                  }),
                ],
              }),
            ],
            width: { size: 35, type: WidthType.PERCENTAGE },
            borders: noBorders(),
          }),
          new TableCell({
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: "13.09.2024",
                    font: "Arial",
                    size: 24,
                  }),
                ],
              }),
            ],
            width: { size: 65, type: WidthType.PERCENTAGE },
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

  // Spacing
  new Paragraph({ children: [], spacing: { after: 60 } }),

  // Reason for delay intimation table
  new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: "REASON FOR DELAY INTIMATION",
                    bold: true,
                    font: "Arial",
                    size: 24,
                  }),
                ],
              }),
            ],
            width: { size: 35, type: WidthType.PERCENTAGE },
            borders: noBorders(),
          }),
          new TableCell({
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Insured confirmed vide mail that insured had intimated the Edme. However further due to technical issue at Edme end, mailed issued late. On the receipt of loss intimation from the insured, they have immediately informed the insurer about the loss. A copy of the e-mail is enclosed for insurer kind reference.",
                    font: "Arial",
                    size: 24,
                  }),
                ],
              }),
            ],
            width: { size: 65, type: WidthType.PERCENTAGE },
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

  // Spacing
  new Paragraph({ children: [], spacing: { after: 60 } }),

  // Source of instruction table
  new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: "SOURCE OF INSTRUCTION",
                    bold: true,
                    font: "Arial",
                    size: 24,
                  }),
                ],
              }),
            ],
            width: { size: 35, type: WidthType.PERCENTAGE },
            borders: noBorders(),
          }),
          new TableCell({
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: "On behalf of NIAC, Mumbai Via Email through Edme Mumbai",
                    font: "Arial",
                    size: 24,
                  }),
                ],
              }),
            ],
            width: { size: 65, type: WidthType.PERCENTAGE },
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

  // Spacing
  new Paragraph({ children: [], spacing: { after: 60 } }),

  // Date fo Survey Table
  new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: "DATE OF SURVEY/VISIT",
                    bold: true,
                    font: "Arial",
                    size: 24,
                  }),
                ],
              }),
            ],
            width: { size: 35, type: WidthType.PERCENTAGE },
            borders: noBorders(),
          }),
          new TableCell({
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: "14.09.2024",
                    font: "Arial",
                    size: 24,
                  }),
                ],
              }),
            ],
            width: { size: 65, type: WidthType.PERCENTAGE },
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

  // Spacing
  new Paragraph({ children: [], spacing: { after: 60 } }),

  // Person Contacted Table
  new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: "PERSON CONTACTED",
                    bold: true,
                    font: "Arial",
                    size: 24,
                  }),
                ],
              }),
            ],
            width: { size: 35, type: WidthType.PERCENTAGE },
            borders: noBorders(),
            verticalAlign: "top",
          }),
          new TableCell({
            children: [
              // Name & Designation row
              new Table({
                width: { size: 100, type: WidthType.PERCENTAGE },
                rows: [
                  new TableRow({
                    children: [
                      new TableCell({
                        children: [
                          new Paragraph({
                            children: [
                              new TextRun({
                                text: "Name & Designation",
                                font: "Arial",
                                size: 24,
                              }),
                            ],
                          }),
                        ],
                        width: { size: 40, type: WidthType.PERCENTAGE },
                        borders: noBorders(),
                      }),
                      new TableCell({
                        children: [
                          new Paragraph({
                            children: [
                              new TextRun({
                                text: "Mr.",
                                font: "Arial",
                                size: 24,
                              }),
                            ],
                          }),
                        ],
                        width: { size: 15, type: WidthType.PERCENTAGE },
                        borders: noBorders(),
                      }),
                      new TableCell({
                        children: [
                          new Paragraph({
                            children: [
                              new TextRun({
                                text: "Nitansh",
                                font: "Arial",
                                size: 24,
                              }),
                            ],
                          }),
                        ],
                        width: { size: 45, type: WidthType.PERCENTAGE },
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

              // Phone/Mobile No row
              new Table({
                width: { size: 100, type: WidthType.PERCENTAGE },
                rows: [
                  new TableRow({
                    children: [
                      new TableCell({
                        children: [
                          new Paragraph({
                            children: [
                              new TextRun({
                                text: "Phone/Mobile No.",
                                font: "Arial",
                                size: 24,
                              }),
                            ],
                          }),
                        ],
                        width: { size: 40, type: WidthType.PERCENTAGE },
                        borders: noBorders(),
                      }),
                      new TableCell({
                        children: [
                          new Paragraph({
                            children: [
                              new TextRun({
                                text: "+91",
                                font: "Arial",
                                size: 24,
                              }),
                            ],
                          }),
                        ],
                        width: { size: 15, type: WidthType.PERCENTAGE },
                        borders: noBorders(),
                      }),
                      new TableCell({
                        children: [
                          new Paragraph({
                            children: [
                              new TextRun({
                                text: "9813017817",
                                font: "Arial",
                                size: 24,
                              }),
                            ],
                          }),
                        ],
                        width: { size: 45, type: WidthType.PERCENTAGE },
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
            ],
            width: { size: 65, type: WidthType.PERCENTAGE },
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
];

module.exports = { bodyChildren };
