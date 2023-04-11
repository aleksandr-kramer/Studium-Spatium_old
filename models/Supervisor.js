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
