require("dotenv").config();

const express = require("express");
const cors = require("cors");
const uploadRoutes = require("./routes/uploadRoutes");
const aiRoutes = require("./routes/aiRoutes");
const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({
  extended: true,
  limit: "10mb",
}));

app.use("/upload", uploadRoutes);
app.use("/api/ai", aiRoutes);
app.get("/", (req, res) => {

  res.json({
    message: "AccessFlow AI backend is running!",
  });

});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});