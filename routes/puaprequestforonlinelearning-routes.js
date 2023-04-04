const express = require("express");
const router = express.Router();
const {
  getPagePuaprequestforonlinelearningEn,
  getPagePuaprequestforonlinelearningEs,
  getPagePuaprequestforonlinelearningRu,
} = require("../controllers/puaprequestforonlinelearning-controller");

router.get(
  "/puaprequestforonlinelearning_en",
  getPagePuaprequestforonlinelearningEn
);

router.get(
  "/puaprequestforonlinelearning_es",
  getPagePuaprequestforonlinelearningEs
);

router.get(
  "/puaprequestforonlinelearning_ru",
  getPagePuaprequestforonlinelearningRu
);

module.exports = router;
