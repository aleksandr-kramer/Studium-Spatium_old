const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const supervisorSchema = new Schema({
  whyneedsupervisor: {
    title: String,
    text: [
      {
        id: Number,
        paragraph: String,
      },
    ],
  },

  supervisordetails: {
    price: Number,
    priceperiod: String,
    supervisorincludedtitle: String,
    supervisorincluded: [
      {
        id: String,
        title: String,
        paragraph: String,
        imagename: String,
      },
    ],
    orderlink: [
      {
        id: Number,
        linkcontent: String,
        linkurl: String,
      },
    ],
    order: [
      {
        id: Number,
        ordertext: String,
        imagename: String,
      },
    ],
  },
  howtostartsupervisor: {
    howtostartsupervisortitle: String,
    howtostartsupervisorstep: [
      {
        id: String,
        title: String,
        text: String,
        url: String,
        texturl: String,
        imagename: String,
      },
    ],
  },
  requestsupervisor: {
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
});

const Supervisor_en = mongoose.model(
  "Supervisor_en",
  supervisorSchema,
  "supervisor_en"
);
const Supervisor_es = mongoose.model(
  "Supervisor_es",
  supervisorSchema,
  "supervisor_es"
);
const Supervisor_ru = mongoose.model(
  "Supervisor_ru",
  supervisorSchema,
  "supervisor_ru"
);

module.exports = { Supervisor_en, Supervisor_es, Supervisor_ru };
