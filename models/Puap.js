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
    moduletitle: String,
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
  onlinelearning: {
    howtostartonlinelearning: [
      {
        id: String,
        title: String,
        text: String,
        url: String,
        texturl: String,
        imagename: String,
      },
    ],
    onlinelearningdetails: {
      price: Number,
      priceperiod: String,
      onlinelearningincludedtitle: String,
      onlinelearningincluded: [
        {
          id: String,
          paragraph: String,
        },
      ],
      order: [
        {
          id: Number,
          ordertext: String,
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
    },
    requestonlinelearning: {
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
  },
  programmeworks: [],
  requestprogrammepresentation: {
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
        fieldtype: String,
        buttontext: String,
        filenametext: String,
      },
      buttonsend: {
        fieldtype: String,
        buttontext: String,
      },
    },
  },
  whatdoesthepuap: {
    title: String,
    text: [
      {
        id: Number,
        paragraph: String,
      },
    ],
  },
  relevancepuapforschoolandstudent: {
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
