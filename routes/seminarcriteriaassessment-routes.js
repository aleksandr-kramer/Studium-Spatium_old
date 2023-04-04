const express = require("express");
const router = express.Router();
const {
  getPageSeminarcriteriaassessmentEn,
  getPageSeminarcriteriaassessmentEs,
  getPageSeminarcriteriaassessmentRu,
} = require("../controllers/seminarcriteriaassessment-controller");

router.get("/seminarcriteriaassessment_en", getPageSeminarcriteriaassessmentEn);

router.get("/seminarcriteriaassessment_es", getPageSeminarcriteriaassessmentEs);

router.get("/seminarcriteriaassessment_ru", getPageSeminarcriteriaassessmentRu);

module.exports = router;
