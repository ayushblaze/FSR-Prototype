const fs = require("fs");
const path = require("path");

// Orange Separator
const orangeLineImagePath = path.join(__dirname, "../assets/orange-line.png");
const lineBuffer = fs.readFileSync(orangeLineImagePath);

// Company Logo
const logoPath = path.join(__dirname, "../assets/company-logo.jpg");
const logoBuffer = fs.readFileSync(logoPath);

module.exports = { logoBuffer, lineBuffer };
