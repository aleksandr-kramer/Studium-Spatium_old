const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pageSchema = new Schema({
  pagename: {
    type: String,
    require: true,
    unique: true,
  },
  pagetype: {
    type: String,
  },
  pageurl: {
    type: String,
    require: true,
  },
  robotstxt: {
    type: Boolean,
  },
  meta: {
    title: String,
    keywords: String,
    description: String,
  },
  firstscreen: {
    firstscreentype: {
      type: String,
      enum: ["video", "image", "none"],
    },
    h1title: String,
    h1subtitle: String,
    imagename: String,
    imagealt: String,
    videobuttontitle: String,
    urlvideo: String,
    titlevideo: String,
  },
  faq: {
    faqtitle: String,
    questionanswer: [
      {
        id: Number,
        question: String,
        answer: String,
      },
    ],
  },
  landingmonolink: [
    {
      type: Schema.Types.ObjectId,
      ref: `LandingMonoLink_en`,
    },
  ],
  landingmultilink: [
    {
      type: Schema.Types.ObjectId,
      ref: `LandingMultiLink_en`,
    },
  ],
});

const Page_en = mongoose.model("Page_en", pageSchema, "page_en");
const Page_es = mongoose.model("Page_es", pageSchema, "page_es");
const Page_ru = mongoose.model("Page_ru", pageSchema, "page_ru");
module.exports = { Page_en, Page_es, Page_ru };
