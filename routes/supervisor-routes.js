const express = require("express");
const router = express.Router();
const {
  getPageSupervisorEn,
  getPageSupervisorEs,
  getPageSupervisorRu,
} = require("../controllers/supervisor-controller");

router.get("/supervisor_en", getPageSupervisorEn);

router.get("/supervisor_es", getPageSupervisorEs);

router.get("/supervisor_ru", getPageSupervisorRu);

module.exports = router;
