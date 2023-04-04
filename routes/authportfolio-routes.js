const express = require("express");
const router = express.Router();
const {
  getPageAuthportfolioEn,
  getPageAuthportfolioEs,
  getPageAuthportfolioRu,
} = require("../controllers/authportfolio-controller");

router.get("/authportfolio_en", getPageAuthportfolioEn);

router.get("/authportfolio_es", getPageAuthportfolioEs);

router.get("/authportfolio_ru", getPageAuthportfolioRu);

module.exports = router;
