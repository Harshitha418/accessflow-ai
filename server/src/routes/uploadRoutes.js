const express = require("express");

const multer = require("multer");

const pdf = require("pdf-parse");

const router = express.Router();

const storage = multer.memoryStorage();

const upload = multer({ storage });

router.post("/", upload.single("document"), async (req, res) => {

  try {

    const pdfData = await pdf(req.file.buffer);

    const extractedText = pdfData.text;

    res.json({
      success: true,
      fileName: req.file.originalname,
      uploadedAt: new Date(),
      size: req.file.size,
      extractedText,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "PDF processing failed",
    });

  }

});

module.exports = router;