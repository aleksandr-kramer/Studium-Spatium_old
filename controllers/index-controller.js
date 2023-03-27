require("../models/LandingMonoLink");
const Logo = require("../models/Logo");
const Socialnetwork = require("../models/Socialnetwork");
const {
  Navigation_en,
  Navigation_es,
  Navigation_ru,
} = require("../models/Navigation");
const { Footer_en, Footer_es, Footer_ru } = require("../models/Footer");
const { Page_en, Page_es, Page_ru } = require("../models/Page_en");
const {
  AboutStSp_en,
  AboutStSp_es,
  AboutStSp_ru,
} = require("../models/AboutStudiumSpatium");

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
    const indexpagedata = await Page_en.findOne({ name: "index" }).populate(
      "LandingMonoLink"
    );
    const aboutstspdata = await AboutStSp_en.findOne({
      _id: "63efa08c2dc00ae4493c2872",
    });
    res.json({
      logodata,
      socialnetworkdata,
      navigationdata,
      footerdata,
      indexpagedata,
      aboutstspdata,
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
    const indexpagedata = await Page_es.findOne({ name: "index" }).populate(
      "LandingMonoLink"
    );
    const aboutstspdata = await AboutStSp_es.findOne({
      _id: "63efa08c2dc00ae4493c2872",
    });
    res.json({
      logodata,
      socialnetworkdata,
      navigationdata,
      footerdata,
      indexpagedata,
      aboutstspdata,
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
    const indexpagedata = await Page_ru.findOne({ name: "index" }).populate(
      "LandingMonoLink"
    );
    const aboutstspdata = await AboutStSp_ru.findOne({
      _id: "63efa08c2dc00ae4493c2872",
    });
    res.json({
      logodata,
      socialnetworkdata,
      navigationdata,
      footerdata,
      indexpagedata,
      aboutstspdata,
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
