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
});

const Page_en = mongoose.model("Page_en", pageSchema, "page_en");
module.exports = Page_en;
