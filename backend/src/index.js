const express = require("express");
const { generateDocx } = require("../utils/docxGenerator");
const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).send("All systems operational");
});

app.post("/fsr", async (req, res) => {
  try {
    const filePath = await generateDocx({
      refNo: "DEL/NIA/88888/FSR",
      date: new Date().toLocaleDateString(),
      recipient: "The New India Assurance Co. Ltd.",
    });

    res.download(filePath); // Sends file to browser
  } catch (err) {
    console.error(err);
    res.status(500).send("Error generating report");
  }
});

app.listen(8000, () => {
  console.log("Server listening on Port 8000✅");
});
