import express from "express";
const app = express();
const cors = require("cors");
const miseRoutes = require("./routes/mise.routes");

require("dotenv").config();
const PORT = process.env.PORT || 3001;
const ORIGIN = process.env.ORIGIN;

app.use(cors({ origin: ORIGIN, credentials: true }));

app.get("/", (req, res) => {
  res.send("home");
});

app.use("/mise", miseRoutes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
