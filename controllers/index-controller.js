require("../models/LandingMonoLink");
const { Page_en, Page_es, Page_ru } = require("../models/Page");
const {
  AboutStSp_en,
  AboutStSp_es,
  AboutStSp_ru,
} = require("../models/AboutStudiumSpatium");

const getPageIndexEn = async (req, res) => {
  try {
    const indexpagedata = await Page_en.findOne({ name: "index" }).populate(
      "LandingMonoLink"
    );
    const aboutstspdata = await AboutStSp_en.findOne({
      _id: "63efa08c2dc00ae4493c2872",
    });
    res.json({ indexpagedata, aboutstspdata });
  } catch (error) {
    console.log(error);
  }
};

const getPageIndexEs = async (req, res) => {
  try {
    const indexpagedata = await Page_es.findOne({ name: "index" }).populate(
      "LandingMonoLink"
    );
    const aboutstspdata = await AboutStSp_es.findOne({
      _id: "63efa08c2dc00ae4493c2872",
    });
    res.json({ indexpagedata, aboutstspdata });
  } catch (error) {
    console.log(error);
  }
};

const getPageIndexRu = async (req, res) => {
  try {
    const indexpagedata = await Page_ru.findOne({ name: "index" }).populate(
      "LandingMonoLink"
    );
    const aboutstspdata = await AboutStSp_ru.findOne({
      _id: "63efa08c2dc00ae4493c2872",
    });
    res.json({ indexpagedata, aboutstspdata });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getPageIndexEn,
  getPageIndexEs,
  getPageIndexRu,
};
