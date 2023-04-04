const express = require("express");
const router = express.Router();
const {
  getPageListofcoursesEn,
  getPageListofcoursesEs,
  getPageListofcoursesRu,
} = require("../controllers/listofcourses-controller");

router.get("/listofcourses_en", getPageListofcoursesEn);

router.get("/listofcourses_es", getPageListofcoursesEs);

router.get("/listofcourses_ru", getPageListofcoursesRu);

module.exports = router;
