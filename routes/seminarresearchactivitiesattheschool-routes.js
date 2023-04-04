const express = require("express");
const router = express.Router();
const {
  getPageSeminarresearchactivitiesattheschoolEn,
  getPageSeminarresearchactivitiesattheschoolEs,
  getPageSeminarresearchactivitiesattheschoolRu,
} = require("../controllers/seminarresearchactivitiesattheschool-controller");

router.get(
  "/seminarresearchactivitiesattheschool_en",
  getPageSeminarresearchactivitiesattheschoolEn
);

router.get(
  "/seminarresearchactivitiesattheschool_es",
  getPageSeminarresearchactivitiesattheschoolEs
);

router.get(
  "/seminarresearchactivitiesattheschool_ru",
  getPageSeminarresearchactivitiesattheschoolRu
);

module.exports = router;
