const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const landingMonoLinkSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  text: {
    type: String,
    require: true,
  },
  url: {
    type: String,
    require: true,
  },
  imgalt: {
    type: String,
    default: "Studium Spatium",
  },
  imgname: {
    type: String,
    require: true,
  },
  textlink: {
    type: String,
    require: true,
  },
});

const LandingMonoLink_en = mongoose.model(
  "LandingMonoLink_en",
  landingMonoLinkSchema,
  "landingmonolink_en"
);
const LandingMonoLink_es = mongoose.model(
  "LandingMonoLink_es",
  landingMonoLinkSchema,
  "landingmonolink_es"
);
const LandingMonoLink_ru = mongoose.model(
  "LandingMonoLink_ru",
  landingMonoLinkSchema,
  "landingmonolink_ru"
);
module.exports = { LandingMonoLink_en, LandingMonoLink_es, LandingMonoLink_ru };
