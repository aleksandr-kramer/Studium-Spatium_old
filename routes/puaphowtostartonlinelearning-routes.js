const express = require("express");
const router = express.Router();
const {
  getPagePuaphowtostartonlinelearningEn,
  getPagePuaphowtostartonlinelearningEs,
  getPagePuaphowtostartonlinelearningRu,
} = require("../controllers/puaphowtostartonlinelearning-controller");

router.get(
  "/puaphowtostartonlinelearning_en",
  getPagePuaphowtostartonlinelearningEn
);

router.get(
  "/puaphowtostartonlinelearning_es",
  getPagePuaphowtostartonlinelearningEs
);

router.get(
  "/puaphowtostartonlinelearning_ru",
  getPagePuaphowtostartonlinelearningRu
);

module.exports = router;
