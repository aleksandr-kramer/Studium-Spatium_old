const express = require("express");
const router = express.Router();
const {
  getPageAuthstudentEn,
  getPageAuthstudentEs,
  getPageAuthstudentRu,
} = require("../controllers/authstudent-controller");

router.get("/authstudent_en", getPageAuthstudentEn);

router.get("/authstudent_es", getPageAuthstudentEs);

router.get("/authstudent_ru", getPageAuthstudentRu);

module.exports = router;
