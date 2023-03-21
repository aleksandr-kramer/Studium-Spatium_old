const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SocialnetworkSchema = new Schema({
  locale: {
    require: true,
    type: String,
  },
  networkname: {
    type: String,
    require: true,
  },
  networkurl: {
    type: String,
    require: true,
  },
});

const Socialnetwork = mongoose.model(
  "Socialnetwork",
  SocialnetworkSchema,
  "socialnetwork"
);

module.exports = Socialnetwork;
