const express = require("express");
const router = express.Router();
const {
  getPageErrorEn,
  getPageErrorEs,
  getPageErrorRu,
} = require("../controllers/error-controller");

router.get("/error_en", getPageErrorEn);

router.get("/error_es", getPageErrorEs);

router.get("/error_ru", getPageErrorRu);

module.exports = router;
