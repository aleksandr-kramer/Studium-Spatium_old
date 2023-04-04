const express = require("express");
const router = express.Router();
const {
  getPagePuaphowtoimplementtheprogramatschoolEn,
  getPagePuaphowtoimplementtheprogramatschoolEs,
  getPagePuaphowtoimplementtheprogramatschoolRu,
} = require("../controllers/puaphowtoimplementtheprogramatschool-controller");

router.get(
  "/puaphowtoimplementtheprogramatschool_en",
  getPagePuaphowtoimplementtheprogramatschoolEn
);

router.get(
  "/puaphowtoimplementtheprogramatschool_es",
  getPagePuaphowtoimplementtheprogramatschoolEs
);

router.get(
  "/puaphowtoimplementtheprogramatschool_ru",
  getPagePuaphowtoimplementtheprogramatschoolRu
);

module.exports = router;
