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

const getPagePuappreparingaportfolioEn = async (req, res) => {
  try {
    const logodata = await Logo.findOne({ _id: "641859e21127a88a8a58f32d" });
    const socialnetworkdata = await Socialnetwork.find({ locale: "en" });
    const navigationdata = await Navigation_en.findOne({
      _id: "641a283568c667addfdb882f",
    });
    const footerdata = await Footer_en.findOne({
      _id: "641b83bdbd16bd51f6942478",
    });
    const puappreparingaportfoliopagedata = await Page_en.findOne({
      pagename: "puap-preparing-a-portfolio",
    })
      .populate("landingmonolink")
      .populate("landingmultilink");
    const articledata = await Article_en.findOne({
      _id: "64305470bb5bf2345c2677b0",
    });
    const infopagenavigationdata = await Page_en.find({
      thematiccategory: "about-puap",
      pagename: { $ne: "puap-preparing-a-portfolio" },
    });
    res.json({
      logodata,
      socialnetworkdata,
      navigationdata,
      footerdata,
      puappreparingaportfoliopagedata,
      articledata,
      infopagenavigationdata,
    });
  } catch (error) {
    console.log(error);
  }
};

const getPagePuappreparingaportfolioEs = async (req, res) => {
  try {
    const logodata = await Logo.findOne({ _id: "641859e21127a88a8a58f32d" });
    const socialnetworkdata = await Socialnetwork.find({ locale: "en" });
    const navigationdata = await Navigation_es.findOne({
      _id: "641a283568c667addfdb882f",
    });
    const footerdata = await Footer_es.findOne({
      _id: "641b83bdbd16bd51f6942478",
    });
    const puappreparingaportfoliopagedata = await Page_es.findOne({
      pagename: "puap-preparing-a-portfolio",
    })
      .populate("landingmonolink")
      .populate("landingmultilink");
    const articledata = await Article_es.findOne({
      _id: "64305470bb5bf2345c2677b0",
    });
    const infopagenavigationdata = await Page_es.find({
      thematiccategory: "about-puap",
      pagename: { $ne: "puap-preparing-a-portfolio" },
    });
    res.json({
      logodata,
      socialnetworkdata,
      navigationdata,
      footerdata,
      puappreparingaportfoliopagedata,
      articledata,
      infopagenavigationdata,
    });
  } catch (error) {
    console.log(error);
  }
};

const getPagePuappreparingaportfolioRu = async (req, res) => {
  try {
    const logodata = await Logo.findOne({ _id: "641859e21127a88a8a58f32d" });
    const socialnetworkdata = await Socialnetwork.find({ locale: "ru" });
    const navigationdata = await Navigation_ru.findOne({
      _id: "641a283568c667addfdb882f",
    });
    const footerdata = await Footer_ru.findOne({
      _id: "641b83bdbd16bd51f6942478",
    });
    const puappreparingaportfoliopagedata = await Page_ru.findOne({
      pagename: "puap-preparing-a-portfolio",
    })
      .populate("landingmonolink")
      .populate("landingmultilink");
    const articledata = await Article_ru.findOne({
      _id: "64305470bb5bf2345c2677b0",
    });
    const infopagenavigationdata = await Page_ru.find({
      thematiccategory: "about-puap",
      pagename: { $ne: "puap-preparing-a-portfolio" },
    });
    res.json({
      logodata,
      socialnetworkdata,
      navigationdata,
      footerdata,
      puappreparingaportfoliopagedata,
      articledata,
      infopagenavigationdata,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getPagePuappreparingaportfolioEn,
  getPagePuappreparingaportfolioEs,
  getPagePuappreparingaportfolioRu,
};
