const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  aboutcourses: {
    listcoursetitle: String,
    aboutcoursestitle: String,
    aboutcoursestext: [
      {
        id: Number,
        paragraph: String,
      },
    ],
  },
  listcourse: [
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
          requestcourse: {
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

const Course_en = mongoose.model("Course_en", courseSchema, "course_en");
const Course_es = mongoose.model("Course_es", courseSchema, "course_es");
const Course_ru = mongoose.model("Course_ru", courseSchema, "course_ru");

module.exports = { Course_en, Course_es, Course_ru };
