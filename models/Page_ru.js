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
    enum: ["landing", "info", "feedback", "service"],
  },
  pageurl: String,
  robotstxt: Boolean,
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
      ref: `LandingMonoLink_ru`,
    },
  ],
  landingmultilink: [
    {
      type: Schema.Types.ObjectId,
      ref: `LandingMultiLink_ru`,
    },
  ],
});

const Page_ru = mongoose.model("Page_ru", pageSchema, "page_ru");
module.exports = Page_ru;
