const express = require("express");
const router = express.Router();
const {
  getPageThanksEn,
  getPageThanksEs,
  getPageThanksRu,
} = require("../controllers/thanks-controller");

router.get("/thanks_en", getPageThanksEn);

router.get("/thanks_es", getPageThanksEs);

router.get("/thanks_ru", getPageThanksRu);

module.exports = router;
