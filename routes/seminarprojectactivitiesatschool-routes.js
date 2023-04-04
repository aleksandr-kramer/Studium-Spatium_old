const express = require("express");
const router = express.Router();
const {
  getPageSeminarprojectactivitiesatschoolEn,
  getPageSeminarprojectactivitiesatschoolEs,
  getPageSeminarprojectactivitiesatschoolRu,
} = require("../controllers/seminarprojectactivitiesatschool-controller");

router.get(
  "/seminarprojectactivitiesatschool_en",
  getPageSeminarprojectactivitiesatschoolEn
);

router.get(
  "/seminarprojectactivitiesatschool_es",
  getPageSeminarprojectactivitiesatschoolEs
);

router.get(
  "/seminarprojectactivitiesatschool_ru",
  getPageSeminarprojectactivitiesatschoolRu
);

module.exports = router;
