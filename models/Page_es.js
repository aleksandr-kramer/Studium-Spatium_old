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
  parentcategory: {
    type: String,
    enum: [
      "root",
      "inpre-university-academic-programmefo",
      "supervisor",
      "courses",
      "student-consultation",
      "seminars",
    ],
  },
  thematiccategory: {
    type: String,
    enum: [
      "about-puap",
      "puap-content",
      "educational-process",
      "schools-and-teachers",
      "online-learning",
      "educational-services",
      "none",
    ],
  },
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
      ref: `LandingMonoLink_es`,
    },
  ],
  landingmultilink: [
    {
      type: Schema.Types.ObjectId,
      ref: `LandingMultiLink_es`,
    },
  ],
});

const Page_es = mongoose.model("Page_es", pageSchema, "page_es");
module.exports = Page_es;
