const express = require("express");
const router = express.Router();

const {
  requestaconsultationValidation,
} = require("../validations/requestaconsultation-validation");

const {
  getPageRequestaconsultationEn,
  getPageRequestaconsultationEs,
  getPageRequestaconsultationRu,
  postPageRequestaconsultation,
} = require("../controllers/requestaconsultation-controller");

router.get("/requestaconsultation_en", getPageRequestaconsultationEn);

router.get("/requestaconsultation_es", getPageRequestaconsultationEs);

router.get("/requestaconsultation_ru", getPageRequestaconsultationRu);

router.post(
  "/requestaconsultation",
  requestaconsultationValidation,
  postPageRequestaconsultation
);

module.exports = router;
