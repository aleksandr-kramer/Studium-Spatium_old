const express = require("express");
const router = express.Router();
const {
  getPagePuaponlinelearningEn,
  getPagePuaponlinelearningEs,
  getPagePuaponlinelearningRu,
} = require("../controllers/puaponlinelearning-controller");

router.get("/puaponlinelearning_en", getPagePuaponlinelearningEn);

router.get("/puaponlinelearning_es", getPagePuaponlinelearningEs);

router.get("/puaponlinelearning_ru", getPagePuaponlinelearningRu);

module.exports = router;
