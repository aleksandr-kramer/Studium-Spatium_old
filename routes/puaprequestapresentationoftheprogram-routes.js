const express = require("express");
const router = express.Router();
const {
  getPagePuaprequestapresentationoftheprogramEn,
  getPagePuaprequestapresentationoftheprogramEs,
  getPagePuaprequestapresentationoftheprogramRu,
} = require("../controllers/puaprequestapresentationoftheprogram-controller");

router.get(
  "/puaprequestapresentationoftheprogram_en",
  getPagePuaprequestapresentationoftheprogramEn
);

router.get(
  "/puaprequestapresentationoftheprogram_es",
  getPagePuaprequestapresentationoftheprogramEs
);

router.get(
  "/puaprequestapresentationoftheprogram_ru",
  getPagePuaprequestapresentationoftheprogramRu
);

module.exports = router;
