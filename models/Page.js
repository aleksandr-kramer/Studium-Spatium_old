const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pageSchema = new Schema({
  name: {
    type: String,
    require: true,
    unique: true,
  },
  pagetype: {
    type: String,
    require: true,
  },
  url: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    default: "Studium Spatium",
  },
  keywords: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  FirstScreenVideo: {
    H1Title: String,
    H1SubTitle: String,
    VideoButtonTitle: String,
    AltImage: String,
    NameImage: String,
    UrlVideo: String,
    TitleVideo: String,
  },
  FirstScreenImage: {
    H1Title: String,
    H1SubTitle: String,
    AltImage: String,
    NameImage: String,
  },
  LandingMonoLink: [
    {
      type: Schema.Types.ObjectId,
      ref: `LandingMonoLink_en`,
    },
  ],
});

const Page_en = mongoose.model("Page_en", pageSchema, "page_en");
const Page_es = mongoose.model("Page_es", pageSchema, "page_es");
const Page_ru = mongoose.model("Page_ru", pageSchema, "page_ru");
module.exports = { Page_en, Page_es, Page_ru };
