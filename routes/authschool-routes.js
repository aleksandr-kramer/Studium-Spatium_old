const express = require("express");
const router = express.Router();
const {
  getPageAuthschoolEn,
  getPageAuthschoolEs,
  getPageAuthschoolRu,
} = require("../controllers/authschool-controller");

router.get("/authschool_en", getPageAuthschoolEn);

router.get("/authschool_es", getPageAuthschoolEs);

router.get("/authschool_ru", getPageAuthschoolRu);

module.exports = router;
