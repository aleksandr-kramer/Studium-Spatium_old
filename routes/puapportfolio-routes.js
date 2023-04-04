const express = require("express");
const router = express.Router();
const {
  getPagePuapportfolioEn,
  getPagePuapportfolioEs,
  getPagePuapportfolioRu,
} = require("../controllers/puapportfolio-controller");

router.get("/puapportfolio_en", getPagePuapportfolioEn);

router.get("/puapportfolio_es", getPagePuapportfolioEs);

router.get("/puapportfolio_ru", getPagePuapportfolioRu);

module.exports = router;
