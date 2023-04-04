const express = require("express");
const router = express.Router();
const {
  getPageRequestapersonalsupervisorEn,
  getPageRequestapersonalsupervisorEs,
  getPageRequestapersonalsupervisorRu,
} = require("../controllers/requestapersonalsupervisor-controller");

router.get(
  "/requestapersonalsupervisor_en",
  getPageRequestapersonalsupervisorEn
);

router.get(
  "/requestapersonalsupervisor_es",
  getPageRequestapersonalsupervisorEs
);

router.get(
  "/requestapersonalsupervisor_ru",
  getPageRequestapersonalsupervisorRu
);

module.exports = router;
