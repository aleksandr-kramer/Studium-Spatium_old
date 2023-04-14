const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const consultationSchema = new Schema({
  aboutconsultation: {
    title: String,
    text: [
      {
        id: Number,
        paragraph: String,
      },
    ],
  },
  whatgiveconsultation: {
    title: String,
    text: [
      {
        id: Number,
        paragraph: String,
      },
    ],
  },
  howtogetconsultation: {
    howtogetconsultationtitle: String,
    howtogetconsultationstep: [
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
  consultationdetails: {
    price: Number,
    priceperiod: String,
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
  requestconsultation: {
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

const Consultation_en = mongoose.model(
  "Consultation_en",
  consultationSchema,
  "consultation_en"
);
const Consultation_es = mongoose.model(
  "Consultation_es",
  consultationSchema,
  "consultation_es"
);
const Consultation_ru = mongoose.model(
  "Consultation_ru",
  consultationSchema,
  "consultation_ru"
);

module.exports = { Consultation_en, Consultation_es, Consultation_ru };
