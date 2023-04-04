const express = require("express");
const router = express.Router();
const {
  getPagePuaprelevanceforteachersEn,
  getPagePuaprelevanceforteachersEs,
  getPagePuaprelevanceforteachersRu,
} = require("../controllers/puaprelevanceforteachers-controller");

router.get("/puaprelevanceforteachers_en", getPagePuaprelevanceforteachersEn);

router.get("/puaprelevanceforteachers_es", getPagePuaprelevanceforteachersEs);

router.get("/puaprelevanceforteachers_ru", getPagePuaprelevanceforteachersRu);

module.exports = router;
