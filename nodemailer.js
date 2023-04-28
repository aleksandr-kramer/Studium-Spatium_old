const { error, info } = require("console");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport(
  {
    host: "smtp.beget.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "admin@studiumspatium.com",
      pass: "Studium_Spatium_adm4507",
    },
  },
  {
    from: "Admin StudiumSpatium <admin@studiumspatium.com>",
  }
);

const mailer = (message) => {
  transporter.sendMail(message, (error, info) => {
    if (error) return console.log(error);
    console.log("E-mail sent: ", info);
  });
};

module.exports = mailer;
