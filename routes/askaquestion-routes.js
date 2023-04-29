const express = require("express");
const router = express.Router();
const {
  askaquestionValidation,
} = require("../validations/askaquestion-validation");
const {
  getPageAskaquestionEn,
  getPageAskaquestionEs,
  getPageAskaquestionRu,
  postPageAskaquestion,
} = require("../controllers/askaquestion-controller");

router.get("/askaquestion_en", getPageAskaquestionEn);

router.get("/askaquestion_es", getPageAskaquestionEs);

router.get("/askaquestion_ru", getPageAskaquestionRu);

router.post("/askaquestion", askaquestionValidation, postPageAskaquestion);

module.exports = router;
