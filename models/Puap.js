const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const puapSchema = new Schema({
  aboutpuap: {
    title: String,
    text: [
      {
        id: Number,
        paragraph: String,
      },
    ],
  },
  implementationprogramme: [],
  modulespuap: [
    {
      id: String,
      number: String,
      namemodule: String,
      titleaboutmodule: String,
      textlink: String,
      urllink: String,
      aboutmodule: [
        {
          id: Number,
          paragraph: String,
        },
      ],
      generalaboutmodule: [
        {
          id: Number,
          nodetitle: String,
          nodetext: String,
        },
      ],
      listoftopicmodule: [
        {
          id: Number,
          title: String,
          duration: String,
          imagename: String,
        },
      ],
    },
  ],
  onlinelearning: {},
  programmeworks: [],
  requestprogrammepresentation: {},
  whatdoesthepuap: {
    title: String,
    text: [
      {
        id: Number,
        paragraph: String,
      },
    ],
  },
});

const Puap_en = mongoose.model("Puap_en", puapSchema, "puap_en");
const Puap_es = mongoose.model("Puap_es", puapSchema, "puap_es");
const Puap_ru = mongoose.model("Puap_ru", puapSchema, "puap_ru");

module.exports = { Puap_en, Puap_es, Puap_ru };
