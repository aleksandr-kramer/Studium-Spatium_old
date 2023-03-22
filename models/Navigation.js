const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const navigationSchema = new Schema({
  subdomainlink: [
    {
      id: Number,
      textlink: String,
      url: String,
    },
  ],
  domainlink: [
    {
      id: Number,
      textlink: String,
      url: String,
    },
  ],
  navmenu: [
    {
      id: Number,
      namemenu: String,
      submenu: [
        {
          id: Number,
          titlesubmenu: String,
          listsubmenu: [
            {
              id: Number,
              namesubmenu: String,
              urlsubmenu: String,
            },
          ],
        },
      ],
      landingmenu: [
        {
          id: Number,
          titlelandingmenu: String,
          textlandingmenu: String,
          urllandingmenu: String,
        },
      ],
    },
  ],
});

const Navigation_en = mongoose.model(
  "Navigation_en",
  navigationSchema,
  "navigation_en"
);
const Navigation_es = mongoose.model(
  "Navigation_es",
  navigationSchema,
  "navigation_es"
);
const Navigation_ru = mongoose.model(
  "Navigation_ru",
  navigationSchema,
  "navigation_ru"
);

module.exports = { Navigation_en, Navigation_es, Navigation_ru };
