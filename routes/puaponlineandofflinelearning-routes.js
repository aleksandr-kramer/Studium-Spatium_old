const express = require("express");
const router = express.Router();
const {
  getPagePuaponlineandofflinelearningEn,
  getPagePuaponlineandofflinelearningEs,
  getPagePuaponlineandofflinelearningRu,
} = require("../controllers/puaponlineandofflinelearning-controller");

router.get(
  "/puaponlineandofflinelearning_en",
  getPagePuaponlineandofflinelearningEn
);

router.get(
  "/puaponlineandofflinelearning_es",
  getPagePuaponlineandofflinelearningEs
);

router.get(
  "/puaponlineandofflinelearning_ru",
  getPagePuaponlineandofflinelearningRu
);

module.exports = router;
