const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  pagename: String,
  articke: [
    {
      id: Number,
      title: String,
      text: [
        {
          id: Number,
          paragraph: String,
        },
      ],
    },
  ],
});

const Article_en = mongoose.model("Article_en", articleSchema, "article_en");
const Article_es = mongoose.model("Article_es", articleSchema, "article_es");
const Article_ru = mongoose.model("Article_ru", articleSchema, "article_ru");

module.exports = { Article_en, Article_es, Article_ru };
