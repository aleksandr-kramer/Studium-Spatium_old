const express = require("express");
const router = express.Router();
const {
  getPageConsultationEn,
  getPageConsultationEs,
  getPageConsultationRu,
} = require("../controllers/consultation-controller");

router.get("/consultation_en", getPageConsultationEn);

router.get("/consultation_es", getPageConsultationEs);

router.get("/consultation_ru", getPageConsultationRu);

module.exports = router;
