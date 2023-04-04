const express = require("express");
const router = express.Router();
const {
  getPagePuappracticalworkgEn,
  getPagePuappracticalworkgEs,
  getPagePuappracticalworkgRu,
} = require("../controllers/puappracticalwork-controller");

router.get("/puappracticalwork_en", getPagePuappracticalworkgEn);

router.get("/puappracticalwork_es", getPagePuappracticalworkgEs);

router.get("/puappracticalwork_ru", getPagePuappracticalworkgRu);

module.exports = router;
