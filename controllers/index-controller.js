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
  AboutStSp_en,
  AboutStSp_es,
  AboutStSp_ru,
} = require("../models/AboutStudiumSpatium");

const { Puap_en, Puap_es, Puap_ru } = require("../models/Puap");
const {
  Portfolio_en,
  Portfolio_es,
  Portfolio_ru,
} = require("../models/Portfolio");

const getPageIndexEn = async (req, res) => {
  try {
    const logodata = await Logo.findOne({ _id: "641859e21127a88a8a58f32d" });
    const socialnetworkdata = await Socialnetwork.find({ locale: "en" });
    const navigationdata = await Navigation_en.findOne({
      _id: "641a283568c667addfdb882f",
    });
    const footerdata = await Footer_en.findOne({
      _id: "641b83bdbd16bd51f6942478",
    });
    const indexpagedata = await Page_en.findOne({ pagename: "index" })
      .populate("landingmonolink")
      .populate("landingmultilink");
    const aboutstspdata = await AboutStSp_en.findOne({
      _id: "63efa08c2dc00ae4493c2872",
    });
    const puapdata = await Puap_en.findOne({ _id: "6422f5345b70a17cd50b7a82" });
    const portfoliodata = await Portfolio_en.findOne({
      _id: "64243a0e0a2746f161591384",
    });
    res.json({
      logodata,
      socialnetworkdata,
      navigationdata,
      footerdata,
      indexpagedata,
      aboutstspdata,
      puapdata,
      portfoliodata,
    });
  } catch (error) {
    console.log(error);
  }
};

const getPageIndexEs = async (req, res) => {
  try {
    const logodata = await Logo.findOne({ _id: "641859e21127a88a8a58f32d" });
    const socialnetworkdata = await Socialnetwork.find({ locale: "en" });
    const navigationdata = await Navigation_es.findOne({
      _id: "641a283568c667addfdb882f",
    });
    const footerdata = await Footer_es.findOne({
      _id: "641b83bdbd16bd51f6942478",
    });
    const indexpagedata = await Page_es.findOne({ pagename: "index" })
      .populate("landingmonolink")
      .populate("landingmultilink");
    const aboutstspdata = await AboutStSp_es.findOne({
      _id: "63efa08c2dc00ae4493c2872",
    });
    const puapdata = await Puap_es.findOne({ _id: "6422f5345b70a17cd50b7a82" });
    const portfoliodata = await Portfolio_es.findOne({
      _id: "64243a0e0a2746f161591384",
    });
    res.json({
      logodata,
      socialnetworkdata,
      navigationdata,
      footerdata,
      indexpagedata,
      aboutstspdata,
      puapdata,
      portfoliodata,
    });
  } catch (error) {
    console.log(error);
  }
};

const getPageIndexRu = async (req, res) => {
  try {
    const logodata = await Logo.findOne({ _id: "641859e21127a88a8a58f32d" });
    const socialnetworkdata = await Socialnetwork.find({ locale: "ru" });
    const navigationdata = await Navigation_ru.findOne({
      _id: "641a283568c667addfdb882f",
    });
    const footerdata = await Footer_ru.findOne({
      _id: "641b83bdbd16bd51f6942478",
    });
    const indexpagedata = await Page_ru.findOne({ pagename: "index" })
      .populate("landingmonolink")
      .populate("landingmultilink");
    const aboutstspdata = await AboutStSp_ru.findOne({
      _id: "63efa08c2dc00ae4493c2872",
    });
    const puapdata = await Puap_ru.findOne({ _id: "6422f5345b70a17cd50b7a82" });
    const portfoliodata = await Portfolio_ru.findOne({
      _id: "64243a0e0a2746f161591384",
    });
    res.json({
      logodata,
      socialnetworkdata,
      navigationdata,
      footerdata,
      indexpagedata,
      aboutstspdata,
      puapdata,
      portfoliodata,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getPageIndexEn,
  getPageIndexEs,
  getPageIndexRu,
};
