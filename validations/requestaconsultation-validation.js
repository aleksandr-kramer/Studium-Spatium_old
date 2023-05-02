const { body } = require("express-validator");

const requestaconsultationValidation = [
  body("yourname", "Your Name is not spelt correctly").isLength({ min: 2 }),
  body("email", "Wrong E-mail address")
    .optional({ checkFalsy: true })
    .isEmail(),
  body("phone", "Wrong contact details")
    .optional({ checkFalsy: true })
    .isLength({ min: 4 }),
  body("messagetext", "The Message must be at least 10 characters long")
    .optional({ checkFalsy: true })
    .isLength({ min: 10 }),
];

module.exports = { requestaconsultationValidation };
