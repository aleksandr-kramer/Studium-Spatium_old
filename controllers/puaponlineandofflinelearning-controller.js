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
const { Article_en, Article_es, Article_ru } = require("../models/Article");

const getPagePuaponlineandofflinelearningEn = async (req, res) => {
  try {
    const logodata = await Logo.findOne({ _id: "641859e21127a88a8a58f32d" });
    const socialnetworkdata = await Socialnetwork.find({ locale: "en" });
    const navigationdata = await Navigation_en.findOne({
      _id: "641a283568c667addfdb882f",
    });
    const footerdata = await Footer_en.findOne({
      _id: "641b83bdbd16bd51f6942478",
    });
    const puaponlineandofflinelearningpagedata = await Page_en.findOne({
      pagename: "puap-online-and-offline-learning",
    })
      .populate("landingmonolink")
      .populate("landingmultilink");
    const articledata = await Article_en.findOne({
      _id: "64308da7bb5bf2345c2677ce",
    });
    const infopagenavigationdata = await Page_en.find({
      thematiccategory: "educational-process",
      pagename: { $ne: "puap-online-and-offline-learning" },
    });
    res.json({
      logodata,
      socialnetworkdata,
      navigationdata,
      footerdata,
      puaponlineandofflinelearningpagedata,
      articledata,
      infopagenavigationdata,
    });
  } catch (error) {
    console.log(error);
  }
};

const getPagePuaponlineandofflinelearningEs = async (req, res) => {
  try {
    const logodata = await Logo.findOne({ _id: "641859e21127a88a8a58f32d" });
    const socialnetworkdata = await Socialnetwork.find({ locale: "en" });
    const navigationdata = await Navigation_es.findOne({
      _id: "641a283568c667addfdb882f",
    });
    const footerdata = await Footer_es.findOne({
      _id: "641b83bdbd16bd51f6942478",
    });
    const puaponlineandofflinelearningpagedata = await Page_es.findOne({
      pagename: "puap-online-and-offline-learning",
    })
      .populate("landingmonolink")
      .populate("landingmultilink");
    const articledata = await Article_es.findOne({
      _id: "64308da7bb5bf2345c2677ce",
    });
    const infopagenavigationdata = await Page_es.find({
      thematiccategory: "educational-process",
      pagename: { $ne: "puap-online-and-offline-learning" },
    });
    res.json({
      logodata,
      socialnetworkdata,
      navigationdata,
      footerdata,
      puaponlineandofflinelearningpagedata,
      articledata,
      infopagenavigationdata,
    });
  } catch (error) {
    console.log(error);
  }
};

const getPagePuaponlineandofflinelearningRu = async (req, res) => {
  try {
    const logodata = await Logo.findOne({ _id: "641859e21127a88a8a58f32d" });
    const socialnetworkdata = await Socialnetwork.find({ locale: "ru" });
    const navigationdata = await Navigation_ru.findOne({
      _id: "641a283568c667addfdb882f",
    });
    const footerdata = await Footer_ru.findOne({
      _id: "641b83bdbd16bd51f6942478",
    });
    const puaponlineandofflinelearningpagedata = await Page_ru.findOne({
      pagename: "puap-online-and-offline-learning",
    })
      .populate("landingmonolink")
      .populate("landingmultilink");
    const articledata = await Article_ru.findOne({
      _id: "64308da7bb5bf2345c2677ce",
    });
    const infopagenavigationdata = await Page_ru.find({
      thematiccategory: "educational-process",
      pagename: { $ne: "puap-online-and-offline-learning" },
    });
    res.json({
      logodata,
      socialnetworkdata,
      navigationdata,
      footerdata,
      puaponlineandofflinelearningpagedata,
      articledata,
      infopagenavigationdata,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getPagePuaponlineandofflinelearningEn,
  getPagePuaponlineandofflinelearningEs,
  getPagePuaponlineandofflinelearningRu,
};
