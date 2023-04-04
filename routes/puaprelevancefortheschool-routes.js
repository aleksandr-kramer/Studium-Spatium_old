const express = require("express");
const router = express.Router();
const {
  getPagePuaprelevancefortheschoolEn,
  getPagePuaprelevancefortheschoolEs,
  getPagePuaprelevancefortheschoolRu,
} = require("../controllers/puaprelevancefortheschool-controller");

router.get("/puaprelevancefortheschool_en", getPagePuaprelevancefortheschoolEn);

router.get("/puaprelevancefortheschool_es", getPagePuaprelevancefortheschoolEs);

router.get("/puaprelevancefortheschool_ru", getPagePuaprelevancefortheschoolRu);

module.exports = router;
