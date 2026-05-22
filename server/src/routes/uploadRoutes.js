const express = require("express");
const multer = require("multer");

const router = express.Router();

const storage = multer.memoryStorage();

const upload = multer({ storage });

router.post("/", upload.single("document"), (req, res) => {

  res.json({
    success: true,
    message: "File uploaded successfully!",
    fileName: req.file.originalname,
    uploadedAt: new Date(),
    size: req.file.size,
  });

});

module.exports = router;