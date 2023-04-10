const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
  portfoliourl: String,
  portfoliotexturl: String,
  puaptexturl: String,
  puapurl: String,
  portfoliocomponents: {
    portfoliocomponentstitle: String,
    portfoliolist: [
      {
        id: Number,
        portfoliolistnumber: String,
        portfoliolistlongname: String,
        portfoliolistshotrname: String,
        isportfoliolisttext: Boolean,
        text: [
          {
            id: Number,
            paragraph: String,
          },
        ],
      },
    ],
  },
  portfolioimagename: String,
  aboutportfolio: {
    title: String,
    text: [
      {
        id: Number,
        paragraph: String,
      },
    ],
  },
});

const Portfolio_en = mongoose.model(
  "Portfolio_en",
  portfolioSchema,
  "portfolio_en"
);
const Portfolio_es = mongoose.model(
  "Portfolio_es",
  portfolioSchema,
  "portfolio_es"
);
const Portfolio_ru = mongoose.model(
  "Portfolio_ru",
  portfolioSchema,
  "portfolio_ru"
);

module.exports = { Portfolio_en, Portfolio_es, Portfolio_ru };
