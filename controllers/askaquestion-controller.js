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
const { Service_en, Service_es, Service_ru } = require("../models/Service");

const postPageAskaquestion = (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }
    const { yourname, email, messagetext } = req.body;
    res.json({ yourname, email, messagetext });
    const message = {
      to: "<info@studiumspatium.com>",
      subject: "Вопрос с сайта StudiumSpatium",
      html: `
      <h2>Вопрос с сайта studiumspatium:</h2><hr>
      <br>
      <i>E-mail:</i><br>
      ${req.body.email}<br>
      <br>
      <i>Имя:</i><br>
      ${req.body.yourname}<br>
      <br>
      <i>Вопрос:</i><br>
      ${req.body.messagetext}`,
    };
    mailer(message);
  } catch (error) {
    console.log(error);
  }
};

const getPageAskaquestionEn = async (req, res) => {
  try {
    const logodata = await Logo.findOne({ _id: "641859e21127a88a8a58f32d" });
    const socialnetworkdata = await Socialnetwork.find({ locale: "en" });
    const navigationdata = await Navigation_en.findOne({
      _id: "641a283568c667addfdb882f",
    });
    const footerdata = await Footer_en.findOne({
      _id: "641b83bdbd16bd51f6942478",
    });
    const askaquestionpagedata = await Page_en.findOne({
      pagename: "ask-a-question",
    })
      .populate("landingmonolink")
      .populate("landingmultilink");
    const servicedata = await Service_en.findOne({
      _id: "643c392a51fc13be92817344",
    });
    res.json({
      logodata,
      socialnetworkdata,
      navigationdata,
      footerdata,
      askaquestionpagedata,
      servicedata,
    });
  } catch (error) {
    console.log(error);
  }
};

const getPageAskaquestionEs = async (req, res) => {
  try {
    const logodata = await Logo.findOne({ _id: "641859e21127a88a8a58f32d" });
    const socialnetworkdata = await Socialnetwork.find({ locale: "en" });
    const navigationdata = await Navigation_es.findOne({
      _id: "641a283568c667addfdb882f",
    });
    const footerdata = await Footer_es.findOne({
      _id: "641b83bdbd16bd51f6942478",
    });
    const askaquestionpagedata = await Page_es.findOne({
      pagename: "ask-a-question",
    })
      .populate("landingmonolink")
      .populate("landingmultilink");
    const servicedata = await Service_es.findOne({
      _id: "643c392a51fc13be92817344",
    });
    res.json({
      logodata,
      socialnetworkdata,
      navigationdata,
      footerdata,
      askaquestionpagedata,
      servicedata,
    });
  } catch (error) {
    console.log(error);
  }
};

const getPageAskaquestionRu = async (req, res) => {
  try {
    const logodata = await Logo.findOne({ _id: "641859e21127a88a8a58f32d" });
    const socialnetworkdata = await Socialnetwork.find({ locale: "ru" });
    const navigationdata = await Navigation_ru.findOne({
      _id: "641a283568c667addfdb882f",
    });
    const footerdata = await Footer_ru.findOne({
      _id: "641b83bdbd16bd51f6942478",
    });
    const askaquestionpagedata = await Page_ru.findOne({
      pagename: "ask-a-question",
    })
      .populate("landingmonolink")
      .populate("landingmultilink");
    const servicedata = await Service_ru.findOne({
      _id: "643c392a51fc13be92817344",
    });
    res.json({
      logodata,
      socialnetworkdata,
      navigationdata,
      footerdata,
      askaquestionpagedata,
      servicedata,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getPageAskaquestionEn,
  getPageAskaquestionEs,
  getPageAskaquestionRu,
  postPageAskaquestion,
};
