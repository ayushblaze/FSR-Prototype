const express = require("express");
const { generateDocx } = require("../utils/docxGenerator");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // frontend dev server
  })
);
app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).send("All systems operational");
});

app.post("/fsr", async (req, res) => {
  const reportData = req.body;
  console.log("Data Received:", reportData);
  try {
    const filePath = await generateDocx(reportData);

    res.download(filePath); // Sends file to browser
  } catch (err) {
    console.error(err);
    res.status(500).send("Error generating report");
  }
});

app.listen(8000, () => {
  console.log("Server listening on Port 8000✅");
});
