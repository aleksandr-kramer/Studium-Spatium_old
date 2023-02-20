const express = require("express");
const router = express.Router();
const {
  getPageIndexEn,
  getPageIndexEs,
  getPageIndexRu,
} = require("../controllers/index-controller");

router.get("/index_en", getPageIndexEn);

router.get("/index_es", getPageIndexEs);

router.get("/index_ru", getPageIndexRu);

module.exports = router;
