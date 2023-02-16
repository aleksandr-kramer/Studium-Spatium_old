const express = require("express");
const mongoose = require("mongoose");
const Page_en = require("./models/Page");

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

app.get("/", async (req, res) => {
  try {
    const indexpagedata = await Page_en.findOne({ name: "index" });
    res.json(indexpagedata);
  } catch (error) {
    console.log(error);
  }
});
