const express = require("express");
const router = express.Router();
const {
  getPagePuapdurationoflearningEn,
  getPagePuapdurationoflearningEs,
  getPagePuapdurationoflearningRu,
} = require("../controllers/puapdurationoflearning-controller");

router.get("/puapdurationoflearning_en", getPagePuapdurationoflearningEn);

router.get("/puapdurationoflearning_es", getPagePuapdurationoflearningEs);

router.get("/puapdurationoflearning_ru", getPagePuapdurationoflearningRu);

module.exports = router;
