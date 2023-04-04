const express = require("express");
const router = express.Router();
const {
  getPageListofseminarsEn,
  getPageListofseminarsEs,
  getPageListofseminarsRu,
} = require("../controllers/listofseminars-controller");

router.get("/listofseminars_en", getPageListofseminarsEn);

router.get("/listofseminars_es", getPageListofseminarsEs);

router.get("/listofseminars_ru", getPageListofseminarsRu);

module.exports = router;
