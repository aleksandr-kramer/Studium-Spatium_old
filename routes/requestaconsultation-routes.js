const express = require("express");
const router = express.Router();

const requestaconsultationuploadfile = require("../multer/requestaconsultation-uploadfile");
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
  requestaconsultationuploadfile.single("work"),
  postPageRequestaconsultation
);

module.exports = router;
