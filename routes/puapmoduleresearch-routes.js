const express = require("express");
const router = express.Router();
const {
  getPagePuapmoduleresearchEn,
  getPagePuapmoduleresearchEs,
  getPagePuapmoduleresearchRu,
} = require("../controllers/puapmoduleresearch-controller");

router.get("/puapmoduleresearch_en", getPagePuapmoduleresearchEn);

router.get("/puapmoduleresearch_es", getPagePuapmoduleresearchEs);

router.get("/puapmoduleresearch_ru", getPagePuapmoduleresearchRu);

module.exports = router;
