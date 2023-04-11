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
const { Puap_en, Puap_es, Puap_ru } = require("../models/Puap");
const { Option_en, Option_es, Option_ru } = require("../models/Option");
const {
  Portfolio_en,
  Portfolio_es,
  Portfolio_ru,
} = require("../models/Portfolio");
const {
  Supervisor_en,
  Supervisor_es,
  Supervisor_ru,
} = require("../models/Supervisor");

const getPagePuaponlinelearningEn = async (req, res) => {
  try {
    const logodata = await Logo.findOne({ _id: "641859e21127a88a8a58f32d" });
    const socialnetworkdata = await Socialnetwork.find({ locale: "en" });
    const navigationdata = await Navigation_en.findOne({
      _id: "641a283568c667addfdb882f",
    });
    const footerdata = await Footer_en.findOne({
      _id: "641b83bdbd16bd51f6942478",
    });
    const puaponlinelearningpagedata = await Page_en.findOne({
      pagename: "puap-online-learning",
    })
      .populate("landingmonolink")
      .populate("landingmultilink");
    const puapdata = await Puap_en.findOne({ _id: "6422f5345b70a17cd50b7a82" });
    const optiondata = await Option_en.findOne({
      _id: "6432e3e2988ba8f14dd15a62",
    });
    const portfoliodata = await Portfolio_en.findOne({
      _id: "64243a0e0a2746f161591384",
    });
    const supervisordata = await Supervisor_en.findOne({
      _id: "64359131988ba8f14dd15ae9",
    });
    res.json({
      logodata,
      socialnetworkdata,
      navigationdata,
      footerdata,
      puaponlinelearningpagedata,
      puapdata,
      optiondata,
      portfoliodata,
      supervisordata,
    });
  } catch (error) {
    console.log(error);
  }
};

const getPagePuaponlinelearningEs = async (req, res) => {
  try {
    const logodata = await Logo.findOne({ _id: "641859e21127a88a8a58f32d" });
    const socialnetworkdata = await Socialnetwork.find({ locale: "en" });
    const navigationdata = await Navigation_es.findOne({
      _id: "641a283568c667addfdb882f",
    });
    const footerdata = await Footer_es.findOne({
      _id: "641b83bdbd16bd51f6942478",
    });
    const puaponlinelearningpagedata = await Page_es.findOne({
      pagename: "puap-online-learning",
    })
      .populate("landingmonolink")
      .populate("landingmultilink");
    const puapdata = await Puap_es.findOne({ _id: "6422f5345b70a17cd50b7a82" });
    const optiondata = await Option_es.findOne({
      _id: "6432e3e2988ba8f14dd15a62",
    });
    const portfoliodata = await Portfolio_es.findOne({
      _id: "64243a0e0a2746f161591384",
    });
    const supervisordata = await Supervisor_es.findOne({
      _id: "64359131988ba8f14dd15ae9",
    });
    res.json({
      logodata,
      socialnetworkdata,
      navigationdata,
      footerdata,
      puaponlinelearningpagedata,
      puapdata,
      optiondata,
      portfoliodata,
      supervisordata,
    });
  } catch (error) {
    console.log(error);
  }
};

const getPagePuaponlinelearningRu = async (req, res) => {
  try {
    const logodata = await Logo.findOne({ _id: "641859e21127a88a8a58f32d" });
    const socialnetworkdata = await Socialnetwork.find({ locale: "ru" });
    const navigationdata = await Navigation_ru.findOne({
      _id: "641a283568c667addfdb882f",
    });
    const footerdata = await Footer_ru.findOne({
      _id: "641b83bdbd16bd51f6942478",
    });
    const puaponlinelearningpagedata = await Page_ru.findOne({
      pagename: "puap-online-learning",
    })
      .populate("landingmonolink")
      .populate("landingmultilink");
    const puapdata = await Puap_ru.findOne({ _id: "6422f5345b70a17cd50b7a82" });
    const optiondata = await Option_ru.findOne({
      _id: "6432e3e2988ba8f14dd15a62",
    });
    const portfoliodata = await Portfolio_ru.findOne({
      _id: "64243a0e0a2746f161591384",
    });
    const supervisordata = await Supervisor_ru.findOne({
      _id: "64359131988ba8f14dd15ae9",
    });
    res.json({
      logodata,
      socialnetworkdata,
      navigationdata,
      footerdata,
      puaponlinelearningpagedata,
      puapdata,
      optiondata,
      portfoliodata,
      supervisordata,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getPagePuaponlinelearningEn,
  getPagePuaponlinelearningEs,
  getPagePuaponlinelearningRu,
};
