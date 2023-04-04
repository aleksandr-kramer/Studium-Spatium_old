const express = require("express");
const router = express.Router();
const {
  getPagePersonalsupervisorEn,
  getPagePersonalsupervisorEs,
  getPagePersonalsupervisorRu,
} = require("../controllers/personalsupervisor-controller");

router.get("/personalsupervisor_en", getPagePersonalsupervisorEn);

router.get("/personalsupervisor_es", getPagePersonalsupervisorEs);

router.get("/personalsupervisor_ru", getPagePersonalsupervisorRu);

module.exports = router;
