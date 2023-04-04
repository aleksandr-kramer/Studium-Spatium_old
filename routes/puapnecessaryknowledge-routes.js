const express = require("express");
const router = express.Router();
const {
  getPagePuapnecessaryknowledgeEn,
  getPagePuapnecessaryknowledgeEs,
  getPagePuapnecessaryknowledgeRu,
} = require("../controllers/puapnecessaryknowledge-controller");

router.get("/puapnecessaryknowledge_en", getPagePuapnecessaryknowledgeEn);

router.get("/puapnecessaryknowledge_es", getPagePuapnecessaryknowledgeEs);

router.get("/puapnecessaryknowledge_ru", getPagePuapnecessaryknowledgeRu);

module.exports = router;
