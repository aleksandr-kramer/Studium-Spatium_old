const express = require("express");
const router = express.Router();
const {
  getPagePuapmoduleacademicwritingEn,
  getPagePuapmoduleacademicwritingEs,
  getPagePuapmoduleacademicwritingRu,
} = require("../controllers/puapmoduleacademicwriting-controller");

router.get("/puapmoduleacademicwriting_en", getPagePuapmoduleacademicwritingEn);

router.get("/puapmoduleacademicwriting_es", getPagePuapmoduleacademicwritingEs);

router.get("/puapmoduleacademicwriting_ru", getPagePuapmoduleacademicwritingRu);

module.exports = router;
