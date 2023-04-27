const express = require("express");
const router = express.Router();
const {
  getPageAskaquestionEn,
  getPageAskaquestionEs,
  getPageAskaquestionRu,
  postPageAskaquestion,
} = require("../controllers/askaquestion-controller");

router.get("/askaquestion_en", getPageAskaquestionEn);

router.get("/askaquestion_es", getPageAskaquestionEs);

router.get("/askaquestion_ru", getPageAskaquestionRu);

router.post("/askaquestion", postPageAskaquestion);

module.exports = router;
