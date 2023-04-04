const express = require("express");
const router = express.Router();
const {
  getPagePuappreparingaportfolioEn,
  getPagePuappreparingaportfolioEs,
  getPagePuappreparingaportfolioRu,
} = require("../controllers/puappreparingaportfolio-controller");

router.get("/puappreparingaportfolio_en", getPagePuappreparingaportfolioEn);

router.get("/puappreparingaportfolio_es", getPagePuappreparingaportfolioEs);

router.get("/puappreparingaportfolio_ru", getPagePuappreparingaportfolioRu);

module.exports = router;
