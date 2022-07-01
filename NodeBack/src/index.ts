import express from "express";
const app = express();
const cors = require("cors");

require("dotenv").config();
const PORT = process.env.PORT || 3001;
const ORIGIN = process.env.ORIGIN;

app.use(cors({ origin: ORIGIN, credentials: true }));

app.get("/", (req, res) => {
  res.send("home");
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
