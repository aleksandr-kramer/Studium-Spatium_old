const express = require("express");
const router = express.Router();
const {
  getPagePuapwhoistheprogramforEn,
  getPagePuapwhoistheprogramforEs,
  getPagePuapwhoistheprogramforRu,
} = require("../controllers/puapwhoistheprogramfor-controller");

router.get("/puapwhoistheprogramfor_en", getPagePuapwhoistheprogramforEn);

router.get("/puapwhoistheprogramfor_es", getPagePuapwhoistheprogramforEs);

router.get("/puapwhoistheprogramfor_ru", getPagePuapwhoistheprogramforRu);

module.exports = router;
