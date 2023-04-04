const express = require("express");
const router = express.Router();
const {
  getPagePuapandschooleducationEn,
  getPagePuapandschooleducationEs,
  getPagePuapandschooleducationRu,
} = require("../controllers/puapandschooleducation-controller");

router.get("/puapandschooleducation_en", getPagePuapandschooleducationEn);

router.get("/puapandschooleducation_es", getPagePuapandschooleducationEs);

router.get("/puapandschooleducation_ru", getPagePuapandschooleducationRu);

module.exports = router;
