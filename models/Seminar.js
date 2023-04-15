const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const seminarSchema = new Schema({
  aboutseminars: {
    aboutseminarstitle: String,
    listseminarstitle: String,
    aboutseminarstext: [
      {
        id: Number,
        paragraph: String,
      },
    ],
  },
  listseminars: [
    {
      id: String,
      namemodule: String,
      price: Number,
      priceperiod: String,
      urllink: String,
      textlink: String,
      generalaboutmodule: [
        {
          id: Number,
          nodetext: String,
          nodetitle: String,
        },
      ],
      listoftopics: [
        {
          id: String,
          title: String,
          duration: String,
          textabouttopic: [
            {
              id: Number,
              paragraph: String,
            },
          ],
          order: [
            {
              id: Number,
              imagename: String,
              ordertext: String,
            },
          ],
          orderlink: [
            {
              id: Number,
              linkcontent: String,
              linkurl: String,
            },
          ],
          requestseminar: {
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
      ],
    },
  ],
});

const Seminar_en = mongoose.model("Seminar_en", seminarSchema, "seminar_en");
const Seminar_es = mongoose.model("Seminar_es", seminarSchema, "seminar_es");
const Seminar_ru = mongoose.model("Seminar_ru", seminarSchema, "seminar_ru");

module.exports = { Seminar_en, Seminar_es, Seminar_ru };
