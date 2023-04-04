const express = require("express");
const router = express.Router();
const {
  getPageRequestaconsultationEn,
  getPageRequestaconsultationEs,
  getPageRequestaconsultationRu,
} = require("../controllers/requestaconsultation-controller");

router.get("/requestaconsultation_en", getPageRequestaconsultationEn);

router.get("/requestaconsultation_es", getPageRequestaconsultationEs);

router.get("/requestaconsultation_ru", getPageRequestaconsultationRu);

module.exports = router;
