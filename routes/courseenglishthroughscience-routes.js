const express = require("express");
const router = express.Router();
const {
  getPageCourseenglishthroughscienceEn,
  getPageCourseenglishthroughscienceEs,
  getPageCourseenglishthroughscienceRu,
} = require("../controllers/courseenglishthroughscience-controller");

router.get(
  "/courseenglishthroughscience_en",
  getPageCourseenglishthroughscienceEn
);

router.get(
  "/courseenglishthroughscience_es",
  getPageCourseenglishthroughscienceEs
);

router.get(
  "/courseenglishthroughscience_ru",
  getPageCourseenglishthroughscienceRu
);

module.exports = router;
