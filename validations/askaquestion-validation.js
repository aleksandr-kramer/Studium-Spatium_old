const { body } = require("express-validator");

const askaquestionValidation = [
  body("yourname", "Your Name is not spelt correctly").isLength({ min: 2 }),
  body("email", "Wrong E-mail address").isEmail(),
  body(
    "messagetext",
    "The Message must be at least 10 characters long"
  ).isLength({ min: 10 }),
];

module.exports = { askaquestionValidation };
