const express = require("express");
const router = express.Router();
const {
  getPageStudentconsultationEn,
  getPageStudentconsultationEs,
  getPageStudentconsultationRu,
} = require("../controllers/studentconsultation-controller");

router.get("/studentconsultation_en", getPageStudentconsultationEn);

router.get("/studentconsultation_es", getPageStudentconsultationEs);

router.get("/studentconsultation_ru", getPageStudentconsultationRu);

module.exports = router;
