const express = require("express");
const multer = require("multer");

const router = express.Router();

const storage = multer.memoryStorage();

const upload = multer({ storage });

router.post("/", upload.single("document"), (req, res) => {

  res.json({
    message: "File uploaded successfully!",
    fileName: req.file.originalname,
  });

});

module.exports = router;