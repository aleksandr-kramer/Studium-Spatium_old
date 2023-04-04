const express = require("express");
const router = express.Router();
const {
  getPageCoursesEn,
  getPageCoursesEs,
  getPageCoursesRu,
} = require("../controllers/courses-controller");

router.get("/courses_en", getPageCoursesEn);

router.get("/courses_es", getPageCoursesEs);

router.get("/courses_ru", getPageCoursesRu);

module.exports = router;
