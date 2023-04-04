const express = require("express");
const router = express.Router();
const {
  getPagePuapmoduleprojectactivitiesEn,
  getPagePuapmoduleprojectactivitiesEs,
  getPagePuapmoduleprojectactivitiesRu,
} = require("../controllers/puapmoduleprojectactivities-controller");

router.get(
  "/puapmoduleprojectactivities_en",
  getPagePuapmoduleprojectactivitiesEn
);

router.get(
  "/puapmoduleprojectactivities_es",
  getPagePuapmoduleprojectactivitiesEs
);

router.get(
  "/puapmoduleprojectactivities_ru",
  getPagePuapmoduleprojectactivitiesRu
);

module.exports = router;
