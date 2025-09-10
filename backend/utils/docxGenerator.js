const fs = require("fs");
const path = require("path");
const { Document, Packer } = require("docx");

const { header } = require("./header");
const { footer } = require("./footer");
const { bodyChildren, createBodyChildren } = require("./body");
const { continuationHeader } = require("./continuationHeader");

async function generateDocx(reportData = {}) {
  const refNo = reportData.refNo || " ";
  const margin = {
    top: 828,
    bottom: 160,
    left: 749,
    right: 749,
    header: 560,
    footer: 216,
  };

  const sections = [];

  // First page: original header, footer, and body
  sections.push({
    headers: { default: header },
    footers: { default: footer },
    properties: { page: { margin } },
    children: createBodyChildren(reportData),
  });

  // Pages 2-5: continuation header, same footer, empty body
  for (let i = 2; i <= 5; i++) {
    sections.push({
      headers: { default: continuationHeader(refNo, i) },
      footers: { default: footer },
      properties: { page: { margin } },
      children: [
        // Empty body for continuation pages
      ],
    });
  }

  const doc = new Document({ sections });

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
