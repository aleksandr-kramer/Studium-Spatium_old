const express = require("express");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const app = express();
app.use(express.json({ extended: true }));

app.listen(5000, (err) => {
  err ? console.log(err) : console.log("Server OK!");
});

mongoose
  .connect("mongodb://0.0.0.0:27017/studiumspatium")
  .then(() => console.log("Connect to MongoDB"))
  .catch((err) => console.log(`MongoDB connection error: ${err}`));

app.get("/", (req, res) => {
  res.send("<h1>Hellow Studium Spatium!</h1>");
});
