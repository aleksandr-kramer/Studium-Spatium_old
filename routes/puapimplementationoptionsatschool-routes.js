const express = require("express");
const router = express.Router();
const {
  getPagePuapimplementationoptionsatschoolEn,
  getPagePuapimplementationoptionsatschoolEs,
  getPagePuapimplementationoptionsatschoolRu,
} = require("../controllers/puapimplementationoptionsatschool-controller");

router.get(
  "/puapimplementationoptionsatschool_en",
  getPagePuapimplementationoptionsatschoolEn
);

router.get(
  "/puapimplementationoptionsatschool_es",
  getPagePuapimplementationoptionsatschoolEs
);

router.get(
  "/puapimplementationoptionsatschool_ru",
  getPagePuapimplementationoptionsatschoolRu
);

module.exports = router;
