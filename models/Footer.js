const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const footerSchema = new Schema({
  img_name_header: {
    require: true,
    type: String,
  },
  img_name_footer: {
    type: String,
    require: true,
  },
  img_alt: {
    type: String,
    require: true,
  },
});

const Footer_en = mongoose.model("Footer_en", footerSchema, "footer_en");
const Footer_es = mongoose.model("Footer_es", footerSchema, "footer_es");
const Footer_ru = mongoose.model("Footer_ru", footerSchema, "footer_ru");

module.exports = { Footer_en, Footer_es, Footer_ru };
