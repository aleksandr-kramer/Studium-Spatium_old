const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const logoSchema = new Schema({
  img_name_header: {
    require: true,
    type: String,
  },
  img_name_footer: {
    type: String,
    require: true,
  },
  img_alt: {
    type: String,
    require: true,
  },
});

const Logo = mongoose.model("Logo", logoSchema, "logo");

module.exports = Logo;
