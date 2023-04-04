const express = require("express");
const router = express.Router();
const {
  getPageSeminarsEn,
  getPageSeminarsEs,
  getPageSeminarsRu,
} = require("../controllers/seminars-controller");

router.get("/seminars_en", getPageSeminarsEn);

router.get("/seminars_es", getPageSeminarsEs);

router.get("/seminars_ru", getPageSeminarsRu);

module.exports = router;
