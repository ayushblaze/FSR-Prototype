const fs = require("fs");
const path = require("path");
const { Document, Packer } = require("docx");

const { header } = require("./header");
const { footer } = require("./footer");
const { bodyChildren } = require("./body");

async function generateDocx(reportData = {}) {
  const doc = new Document({
    sections: [
      {
        headers: { default: header },
        footers: { default: footer },
        properties: {
          page: {
            margin: {
              top: 828,
              bottom: 160,
              left: 749,
              right: 749,

              header: 560, // distance of header from top
              footer: 216, // distance of footer from bottom
            },
          },
        },
        children: bodyChildren,
      },
    ],
  });

  // Output path
  const outputPath = path.join(
    __dirname,
    "../generated/FinalSurveyReport.docx"
  );

  // Ensure folder exists
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });

  // Write to file
  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync(outputPath, buffer);

  return outputPath;
}

module.exports = { generateDocx };
