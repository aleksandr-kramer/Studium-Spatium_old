const express = require("express");
const router = express.Router();
const {
  getPagePuaptheoreticaltrainingEn,
  getPagePuaptheoreticaltrainingEs,
  getPagePuaptheoreticaltrainingRu,
} = require("../controllers/puaptheoreticaltraining-controller");

router.get("/puaptheoreticaltraining_en", getPagePuaptheoreticaltrainingEn);

router.get("/puaptheoreticaltraining_es", getPagePuaptheoreticaltrainingEs);

router.get("/puaptheoreticaltraining_ru", getPagePuaptheoreticaltrainingRu);

module.exports = router;
