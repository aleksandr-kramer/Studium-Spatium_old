const express = require("express");
const router = express.Router();
const {
  getPageContactEn,
  getPageContactEs,
  getPageContactRu,
} = require("../controllers/contact-controller");

router.get("/contact_en", getPageContactEn);

router.get("/contact_es", getPageContactEs);

router.get("/contact_ru", getPageContactRu);

module.exports = router;
