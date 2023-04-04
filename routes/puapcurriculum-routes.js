const express = require("express");
const router = express.Router();
const {
  getPagePuapcurriculumEn,
  getPagePuapcurriculumEs,
  getPagePuapcurriculumRu,
} = require("../controllers/puapcurriculum-controller");

router.get("/puapcurriculum_en", getPagePuapcurriculumEn);

router.get("/puapcurriculum_es", getPagePuapcurriculumEs);

router.get("/puapcurriculum_ru", getPagePuapcurriculumRu);

module.exports = router;
