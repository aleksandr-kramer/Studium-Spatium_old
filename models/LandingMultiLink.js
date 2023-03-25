const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const landingMultiLinkSchema = new Schema({
  title: {
    type: String,
  },
  spantitle: {
    type: String,
  },
  textfixlink: {
    type: String,
  },
  anchorfixlink: {
    type: String,
  },
  text: [
    {
      id: Number,
      paragraph: String,
    },
  ],
  links: [
    {
      id: Number,
      textlink: String,
      url: String,
    },
  ],
});

const LandingMultiLink_en = mongoose.model(
  "LandingMultiLink_en",
  landingMultiLinkSchema,
  "landingmultilink_en"
);
const LandingMultiLink_es = mongoose.model(
  "LandingMultiLink_es",
  landingMultiLinkSchema,
  "landingmultilink_es"
);
const LandingMultiLink_ru = mongoose.model(
  "LandingMultiLink_ru",
  landingMultiLinkSchema,
  "landingmultilink_ru"
);
module.exports = {
  LandingMultiLink_en,
  LandingMultiLink_es,
  LandingMultiLink_ru,
};
