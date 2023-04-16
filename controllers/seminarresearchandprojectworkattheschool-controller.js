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
const { Seminar_en, Seminar_es, Seminar_ru } = require("../models/Seminar");
const { Option_en, Option_es, Option_ru } = require("../models/Option");

const getPageSeminarresearchandprojectworkattheschoolEn = async (req, res) => {
  try {
    const logodata = await Logo.findOne({ _id: "641859e21127a88a8a58f32d" });
    const socialnetworkdata = await Socialnetwork.find({ locale: "en" });
    const navigationdata = await Navigation_en.findOne({
      _id: "641a283568c667addfdb882f",
    });
    const footerdata = await Footer_en.findOne({
      _id: "641b83bdbd16bd51f6942478",
    });
    const seminarresearchandprojectworkattheschoolpagedata =
      await Page_en.findOne({
        pagename: "seminar-research-and-project-work-at-the-school",
      })
        .populate("landingmonolink")
        .populate("landingmultilink");
    const seminardata = await Seminar_en.findOne({
      _id: "6439f29351fc13be92817284",
    });
    const optiondata = await Option_en.findOne({
      _id: "6432e3e2988ba8f14dd15a62",
    });
    res.json({
      logodata,
      socialnetworkdata,
      navigationdata,
      footerdata,
      seminarresearchandprojectworkattheschoolpagedata,
      seminardata,
      optiondata,
    });
  } catch (error) {
    console.log(error);
  }
};

const getPageSeminarresearchandprojectworkattheschoolEs = async (req, res) => {
  try {
    const logodata = await Logo.findOne({ _id: "641859e21127a88a8a58f32d" });
    const socialnetworkdata = await Socialnetwork.find({ locale: "en" });
    const navigationdata = await Navigation_es.findOne({
      _id: "641a283568c667addfdb882f",
    });
    const footerdata = await Footer_es.findOne({
      _id: "641b83bdbd16bd51f6942478",
    });
    const seminarresearchandprojectworkattheschoolpagedata =
      await Page_es.findOne({
        pagename: "seminar-research-and-project-work-at-the-school",
      })
        .populate("landingmonolink")
        .populate("landingmultilink");
    const seminardata = await Seminar_es.findOne({
      _id: "6439f29351fc13be92817284",
    });
    const optiondata = await Option_es.findOne({
      _id: "6432e3e2988ba8f14dd15a62",
    });
    res.json({
      logodata,
      socialnetworkdata,
      navigationdata,
      footerdata,
      seminarresearchandprojectworkattheschoolpagedata,
      seminardata,
      optiondata,
    });
  } catch (error) {
    console.log(error);
  }
};

const getPageSeminarresearchandprojectworkattheschoolRu = async (req, res) => {
  try {
    const logodata = await Logo.findOne({ _id: "641859e21127a88a8a58f32d" });
    const socialnetworkdata = await Socialnetwork.find({ locale: "ru" });
    const navigationdata = await Navigation_ru.findOne({
      _id: "641a283568c667addfdb882f",
    });
    const footerdata = await Footer_ru.findOne({
      _id: "641b83bdbd16bd51f6942478",
    });
    const seminarresearchandprojectworkattheschoolpagedata =
      await Page_ru.findOne({
        pagename: "seminar-research-and-project-work-at-the-school",
      })
        .populate("landingmonolink")
        .populate("landingmultilink");
    const seminardata = await Seminar_ru.findOne({
      _id: "6439f29351fc13be92817284",
    });
    const optiondata = await Option_ru.findOne({
      _id: "6432e3e2988ba8f14dd15a62",
    });
    res.json({
      logodata,
      socialnetworkdata,
      navigationdata,
      footerdata,
      seminarresearchandprojectworkattheschoolpagedata,
      seminardata,
      optiondata,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getPageSeminarresearchandprojectworkattheschoolEn,
  getPageSeminarresearchandprojectworkattheschoolEs,
  getPageSeminarresearchandprojectworkattheschoolRu,
};
