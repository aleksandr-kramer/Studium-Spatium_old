const express = require("express");
const router = express.Router();
const {
  getPageSeminarresearchandprojectworkattheschoolEn,
  getPageSeminarresearchandprojectworkattheschoolEs,
  getPageSeminarresearchandprojectworkattheschoolRu,
} = require("../controllers/seminarresearchandprojectworkattheschool-controller");

router.get(
  "/seminarresearchandprojectworkattheschool_en",
  getPageSeminarresearchandprojectworkattheschoolEn
);

router.get(
  "/seminarresearchandprojectworkattheschool_es",
  getPageSeminarresearchandprojectworkattheschoolEs
);

router.get(
  "/seminarresearchandprojectworkattheschool_ru",
  getPageSeminarresearchandprojectworkattheschoolRu
);

module.exports = router;
