const express = require("express");
const router = express.Router();
const {
  getPageRequestacourseEn,
  getPageRequestacourseEs,
  getPageRequestacourseRu,
} = require("../controllers/requestacourse-controller");

router.get("/requestacourse_en", getPageRequestacourseEn);

router.get("/requestacourse_es", getPageRequestacourseEs);

router.get("/requestacourse_ru", getPageRequestacourseRu);

module.exports = router;
