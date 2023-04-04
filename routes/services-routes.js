const express = require("express");
const router = express.Router();
const {
  getPageServicesEn,
  getPageServicesEs,
  getPageServicesRu,
} = require("../controllers/services-controller");

router.get("/services_en", getPageServicesEn);

router.get("/services_es", getPageServicesEs);

router.get("/services_ru", getPageServicesRu);

module.exports = router;
