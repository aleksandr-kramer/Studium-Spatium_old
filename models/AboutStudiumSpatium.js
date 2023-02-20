const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const aboutStSpSchema = new Schema({
  title: {
    type: String,
  },
  subtitle: [
    {
      id: Number,
      paragraph: String,
    },
  ],
});

const AboutStSp_en = mongoose.model(
  "AboutStSp_en",
  aboutStSpSchema,
  "aboutstudiumspatium_en"
);
const AboutStSp_es = mongoose.model(
  "AboutStSp_es",
  aboutStSpSchema,
  "aboutstudiumspatium_es"
);
const AboutStSp_ru = mongoose.model(
  "AboutStSp_ru",
  aboutStSpSchema,
  "aboutstudiumspatium_ru"
);
module.exports = { AboutStSp_en, AboutStSp_es, AboutStSp_ru };
