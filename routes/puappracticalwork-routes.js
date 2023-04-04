const express = require("express");
const router = express.Router();
const {
  getPagePuappracticalworkEn,
  getPagePuappracticalworkEs,
  getPagePuappracticalworkRu,
} = require("../controllers/puappracticalwork-controller");

router.get("/puappracticalwork_en", getPagePuappracticalworkEn);

router.get("/puappracticalwork_es", getPagePuappracticalworkEs);

router.get("/puappracticalwork_ru", getPagePuappracticalworkRu);

module.exports = router;
