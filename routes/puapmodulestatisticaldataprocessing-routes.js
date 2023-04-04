const express = require("express");
const router = express.Router();
const {
  getPagePuapmodulestatisticaldataprocessingEn,
  getPagePuapmodulestatisticaldataprocessingEs,
  getPagePuapmodulestatisticaldataprocessingRu,
} = require("../controllers/puapmodulestatisticaldataprocessing-controller");

router.get(
  "/puapmodulestatisticaldataprocessing_en",
  getPagePuapmodulestatisticaldataprocessingEn
);

router.get(
  "/puapmodulestatisticaldataprocessing_es",
  getPagePuapmodulestatisticaldataprocessingEs
);

router.get(
  "/puapmodulestatisticaldataprocessing_ru",
  getPagePuapmodulestatisticaldataprocessingRu
);

module.exports = router;
