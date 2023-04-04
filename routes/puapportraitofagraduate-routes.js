const express = require("express");
const router = express.Router();
const {
  getPagePuapportraitofagraduateEn,
  getPagePuapportraitofagraduateEs,
  getPagePuapportraitofagraduateRu,
} = require("../controllers/puapportraitofagraduate-controller");

router.get("/puapportraitofagraduate_en", getPagePuapportraitofagraduateEn);

router.get("/puapportraitofagraduate_es", getPagePuapportraitofagraduateEs);

router.get("/puapportraitofagraduate_ru", getPagePuapportraitofagraduateRu);

module.exports = router;
