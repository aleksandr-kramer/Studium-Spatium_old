const express = require("express");
const router = express.Router();
const {
  getPagepuaprelevanceoftheprogramEn,
  getPagepuaprelevanceoftheprogramEs,
  getPagepuaprelevanceoftheprogramRu,
} = require("../controllers/puaprelevanceoftheprogram-controller");

router.get("/puaprelevanceoftheprogram_en", getPagepuaprelevanceoftheprogramEn);

router.get("/puaprelevanceoftheprogram_es", getPagepuaprelevanceoftheprogramEs);

router.get("/puaprelevanceoftheprogram_ru", getPagepuaprelevanceoftheprogramRu);

module.exports = router;
