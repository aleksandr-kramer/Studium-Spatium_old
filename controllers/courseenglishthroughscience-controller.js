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
const { Course_en, Course_es, Course_ru } = require("../models/Course");
const { Option_en, Option_es, Option_ru } = require("../models/Option");

const getPageCourseenglishthroughscienceEn = async (req, res) => {
  try {
    const logodata = await Logo.findOne({ _id: "641859e21127a88a8a58f32d" });
    const socialnetworkdata = await Socialnetwork.find({ locale: "en" });
    const navigationdata = await Navigation_en.findOne({
      _id: "641a283568c667addfdb882f",
    });
    const footerdata = await Footer_en.findOne({
      _id: "641b83bdbd16bd51f6942478",
    });
    const courseenglishthroughsciencepagedata = await Page_en.findOne({
      pagename: "course-english-through-science",
    })
      .populate("landingmonolink")
      .populate("landingmultilink");
    const coursedata = await Course_en.findOne({
      _id: "643725c2988ba8f14dd15b57",
    });
    const optiondata = await Option_en.findOne({
      _id: "6432e3e2988ba8f14dd15a62",
    });
    res.json({
      logodata,
      socialnetworkdata,
      navigationdata,
      footerdata,
      courseenglishthroughsciencepagedata,
      coursedata,
      optiondata,
    });
  } catch (error) {
    console.log(error);
  }
};

const getPageCourseenglishthroughscienceEs = async (req, res) => {
  try {
    const logodata = await Logo.findOne({ _id: "641859e21127a88a8a58f32d" });
    const socialnetworkdata = await Socialnetwork.find({ locale: "en" });
    const navigationdata = await Navigation_es.findOne({
      _id: "641a283568c667addfdb882f",
    });
    const footerdata = await Footer_es.findOne({
      _id: "641b83bdbd16bd51f6942478",
    });
    const courseenglishthroughsciencepagedata = await Page_es.findOne({
      pagename: "course-english-through-science",
    })
      .populate("landingmonolink")
      .populate("landingmultilink");
    const coursedata = await Course_es.findOne({
      _id: "643725c2988ba8f14dd15b57",
    });
    const optiondata = await Option_es.findOne({
      _id: "6432e3e2988ba8f14dd15a62",
    });
    res.json({
      logodata,
      socialnetworkdata,
      navigationdata,
      footerdata,
      courseenglishthroughsciencepagedata,
      coursedata,
      optiondata,
    });
  } catch (error) {
    console.log(error);
  }
};

const getPageCourseenglishthroughscienceRu = async (req, res) => {
  try {
    const logodata = await Logo.findOne({ _id: "641859e21127a88a8a58f32d" });
    const socialnetworkdata = await Socialnetwork.find({ locale: "ru" });
    const navigationdata = await Navigation_ru.findOne({
      _id: "641a283568c667addfdb882f",
    });
    const footerdata = await Footer_ru.findOne({
      _id: "641b83bdbd16bd51f6942478",
    });
    const courseenglishthroughsciencepagedata = await Page_ru.findOne({
      pagename: "course-english-through-science",
    })
      .populate("landingmonolink")
      .populate("landingmultilink");
    const coursedata = await Course_ru.findOne({
      _id: "643725c2988ba8f14dd15b57",
    });
    const optiondata = await Option_ru.findOne({
      _id: "6432e3e2988ba8f14dd15a62",
    });
    res.json({
      logodata,
      socialnetworkdata,
      navigationdata,
      footerdata,
      courseenglishthroughsciencepagedata,
      coursedata,
      optiondata,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getPageCourseenglishthroughscienceEn,
  getPageCourseenglishthroughscienceEs,
  getPageCourseenglishthroughscienceRu,
};
