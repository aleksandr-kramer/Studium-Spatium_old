const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const optionSchema = new Schema({
  stepcomponentword: String,
  fees: String,
  currency: String,
  currencyrate: Number,
});

const Option_en = mongoose.model("Option_en", optionSchema, "option_en");
const Option_es = mongoose.model("Option_es", optionSchema, "option_es");
const Option_ru = mongoose.model("Option_ru", optionSchema, "option_ru");

module.exports = { Option_en, Option_es, Option_ru };
