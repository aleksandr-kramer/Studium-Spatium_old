const express = require("express");
const router = express.Router();
const {
  getPageRequestaseminarEn,
  getPageRequestaseminarEs,
  getPageRequestaseminarRu,
} = require("../controllers/requestaseminar-controller");

router.get("/requestaseminar_en", getPageRequestaseminarEn);

router.get("/requestaseminar_es", getPageRequestaseminarEs);

router.get("/requestaseminar_ru", getPageRequestaseminarRu);

module.exports = router;
