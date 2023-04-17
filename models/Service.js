const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
  pageofservices: {
    descriptionservice: {
      modulestitle: String,
      title: String,
      text: [
        {
          id: Number,
          paragraph: String,
        },
      ],
    },
    modulesservice: [
      {
        id: String,
        namemodule: String,
        textlink: String,
        urllink: String,
        generalaboutmodule: [
          {
            id: Number,
            nodetitle: String,
            nodetext: String,
          },
        ],
      },
    ],
  },

  servisepage: [
    {
      id: String,
      h1title: String,
      h2title: String,
      imagename: String,
      text: [
        {
          id: Number,
          paragraph: String,
        },
      ],
    },
  ],
  contacts: {
    contactstitle: String,
    emailcontact: [
      {
        id: Number,
        text: String,
        email: String,
      },
    ],
  },
  request: [
    {
      id: String,
      title: String,
      text: [
        {
          id: Number,
          paragraph: String,
        },
      ],
      abouticonspoint: [
        {
          id: Number,
          imagename: String,
          title: String,
        },
      ],
      form: {
        input: [
          {
            id: Number,
            tag: String,
            fieldtype: String,
            placeholder: String,
          },
        ],
        textarea: {
          istextarea: Boolean,
          placeholder: String,
        },
        buttonattachfile: {
          isbuttonattachfile: Boolean,
          buttontext: String,
          filenametext: String,
          fieldtype: String,
        },
        buttonsend: {
          fieldtype: String,
          buttontext: String,
        },
      },
    },
  ],
});

const Service_en = mongoose.model("Service_en", serviceSchema, "service_en");
const Service_es = mongoose.model("Service_es", serviceSchema, "service_es");
const Service_ru = mongoose.model("Service_ru", serviceSchema, "service_ru");

module.exports = { Service_en, Service_es, Service_ru };
