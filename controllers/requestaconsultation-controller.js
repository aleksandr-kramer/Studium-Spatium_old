const mailer = require("../nodemailer");
const { validationResult } = require("express-validator");
require("../models/LandingMonoLink");
require("../models/LandingMultiLink");
const Logo = require("../models/Logo");
const Socialnetwork = require("../models/Socialnetwork");
const {
  Navigation_en,
  Navigation_es,
  Navigation_ru,
} = require("../models/Navigation");
const { Footer_en, Footer_es, Footer_ru } = require("../models/Footer");
const Page_en = require("../models/Page_en");
const Page_es = require("../models/Page_es");
const Page_ru = require("../models/Page_ru");
const {
  Consultation_en,
  Consultation_es,
  Consultation_ru,
} = require("../models/Consultation");

const postPageRequestaconsultation = (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }
    const { yourname, email, phone, messagetext } = req.body;
    console.log({ yourname, email, phone, messagetext });
    res.json({ yourname, email, phone, messagetext });
    const message = {
      to: "<info@studiumspatium.com>",
      subject: "Запрос консультации с сайта StudiumSpatium",
      html: `
      <h2>Запрос консультации с сайта studiumspatium:</h2><hr>
      <br>
      <i>E-mail:</i><br>
      ${req.body.email}<br>
      <br>
      <i>Имя:</i><br>
      ${req.body.yourname}<br>
      <br>

      <i>Телефон/Мессенджер</i><br>
      ${req.body.phone}<br>
      <br>

      <i>Сообщение:</i><br>
      ${req.body.messagetext}`,

      attachments: [
        req.file
          ? {
              filename: req.file.filename,
              path: req.file.path,
            }
          : {
              filename: "no_file.txt",
              content: "no file",
            },
      ],
    };
   mailer(message);

   
      
  } catch (error) {
    console.log(error);
  }
};

const getPageRequestaconsultationEn = async (req, res) => {
  try {
    const logodata = await Logo.findOne({ _id: "641859e21127a88a8a58f32d" });
    const socialnetworkdata = await Socialnetwork.find({ locale: "en" });
    const navigationdata = await Navigation_en.findOne({
      _id: "641a283568c667addfdb882f",
    });
    const footerdata = await Footer_en.findOne({
      _id: "641b83bdbd16bd51f6942478",
    });
    const requestaconsultationpagedata = await Page_en.findOne({
      pagename: "request-a-consultation",
    })
      .populate("landingmonolink")
      .populate("landingmultilink");
    const consultationdata = await Consultation_en.findOne({
      _id: "6439071d51fc13be92817261",
    });
    res.json({
      logodata,
      socialnetworkdata,
      navigationdata,
      footerdata,
      requestaconsultationpagedata,
      consultationdata,
    });
  } catch (error) {
    console.log(error);
  }
};

const getPageRequestaconsultationEs = async (req, res) => {
  try {
    const logodata = await Logo.findOne({ _id: "641859e21127a88a8a58f32d" });
    const socialnetworkdata = await Socialnetwork.find({ locale: "en" });
    const navigationdata = await Navigation_es.findOne({
      _id: "641a283568c667addfdb882f",
    });
    const footerdata = await Footer_es.findOne({
      _id: "641b83bdbd16bd51f6942478",
    });
    const requestaconsultationpagedata = await Page_es.findOne({
      pagename: "request-a-consultation",
    })
      .populate("landingmonolink")
      .populate("landingmultilink");
    const consultationdata = await Consultation_es.findOne({
      _id: "6439071d51fc13be92817261",
    });
    res.json({
      logodata,
      socialnetworkdata,
      navigationdata,
      footerdata,
      requestaconsultationpagedata,
      consultationdata,
    });
  } catch (error) {
    console.log(error);
  }
};

const getPageRequestaconsultationRu = async (req, res) => {
  try {
    const logodata = await Logo.findOne({ _id: "641859e21127a88a8a58f32d" });
    const socialnetworkdata = await Socialnetwork.find({ locale: "ru" });
    const navigationdata = await Navigation_ru.findOne({
      _id: "641a283568c667addfdb882f",
    });
    const footerdata = await Footer_ru.findOne({
      _id: "641b83bdbd16bd51f6942478",
    });
    const requestaconsultationpagedata = await Page_ru.findOne({
      pagename: "request-a-consultation",
    })
      .populate("landingmonolink")
      .populate("landingmultilink");
    const consultationdata = await Consultation_ru.findOne({
      _id: "6439071d51fc13be92817261",
    });
    res.json({
      logodata,
      socialnetworkdata,
      navigationdata,
      footerdata,
      requestaconsultationpagedata,
      consultationdata,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getPageRequestaconsultationEn,
  getPageRequestaconsultationEs,
  getPageRequestaconsultationRu,
  postPageRequestaconsultation,
};
