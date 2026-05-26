require("dotenv").config();
const express = require("express");
const cors = require("cors");
const uploadRoutes = require("./routes/uploadRoutes");
const app = express();
const aiRoutes = require("./routes/aiRoutes");

app.use(cors());
app.use(express.json());
app.use("/upload", uploadRoutes);
app.use("/ai", aiRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "AccessFlow AI backend is running!",
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});