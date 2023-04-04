const express = require("express");
const router = express.Router();
const {
  getPagePuaprelevanceoftheprogramEn,
  getPagePuaprelevanceoftheprogramEs,
  getPagePuaprelevanceoftheprogramRu,
} = require("../controllers/puaprelevanceoftheprogram-controller");

router.get("/puaprelevanceoftheprogram_en", getPagePuaprelevanceoftheprogramEn);

router.get("/puaprelevanceoftheprogram_es", getPagePuaprelevanceoftheprogramEs);

router.get("/puaprelevanceoftheprogram_ru", getPagePuaprelevanceoftheprogramRu);

module.exports = router;
