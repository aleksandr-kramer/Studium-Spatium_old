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

const getPagePuapmodulestatisticaldataprocessingEn = async (req, res) => {
  try {
    const logodata = await Logo.findOne({ _id: "641859e21127a88a8a58f32d" });
    const socialnetworkdata = await Socialnetwork.find({ locale: "en" });
    const navigationdata = await Navigation_en.findOne({
      _id: "641a283568c667addfdb882f",
    });
    const footerdata = await Footer_en.findOne({
      _id: "641b83bdbd16bd51f6942478",
    });
    const puapmodulestatisticaldataprocessingpagedata = await Page_en.findOne({
      pagename: "puap-module-statistical-data-processing",
    })
      .populate("landingmonolink")
      .populate("landingmultilink");
    res.json({
      logodata,
      socialnetworkdata,
      navigationdata,
      footerdata,
      puapmodulestatisticaldataprocessingpagedata,
    });
  } catch (error) {
    console.log(error);
  }
};

const getPagePuapmodulestatisticaldataprocessingEs = async (req, res) => {
  try {
    const logodata = await Logo.findOne({ _id: "641859e21127a88a8a58f32d" });
    const socialnetworkdata = await Socialnetwork.find({ locale: "en" });
    const navigationdata = await Navigation_es.findOne({
      _id: "641a283568c667addfdb882f",
    });
    const footerdata = await Footer_es.findOne({
      _id: "641b83bdbd16bd51f6942478",
    });
    const puapmodulestatisticaldataprocessingpagedata = await Page_es.findOne({
      pagename: "puap-module-statistical-data-processing",
    })
      .populate("landingmonolink")
      .populate("landingmultilink");
    res.json({
      logodata,
      socialnetworkdata,
      navigationdata,
      footerdata,
      puapmodulestatisticaldataprocessingpagedata,
    });
  } catch (error) {
    console.log(error);
  }
};

const getPagePuapmodulestatisticaldataprocessingRu = async (req, res) => {
  try {
    const logodata = await Logo.findOne({ _id: "641859e21127a88a8a58f32d" });
    const socialnetworkdata = await Socialnetwork.find({ locale: "ru" });
    const navigationdata = await Navigation_ru.findOne({
      _id: "641a283568c667addfdb882f",
    });
    const footerdata = await Footer_ru.findOne({
      _id: "641b83bdbd16bd51f6942478",
    });
    const puapmodulestatisticaldataprocessingpagedata = await Page_ru.findOne({
      pagename: "puap-module-statistical-data-processing",
    })
      .populate("landingmonolink")
      .populate("landingmultilink");
    res.json({
      logodata,
      socialnetworkdata,
      navigationdata,
      footerdata,
      puapmodulestatisticaldataprocessingpagedata,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getPagePuapmodulestatisticaldataprocessingEn,
  getPagePuapmodulestatisticaldataprocessingEs,
  getPagePuapmodulestatisticaldataprocessingRu,
};
