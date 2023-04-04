const express = require("express");
const router = express.Router();
const {
  getPageSeminarplagiarismandcitationEn,
  getPageSeminarplagiarismandcitationEs,
  getPageSeminarplagiarismandcitationRu,
} = require("../controllers/seminarplagiarismandcitation-controller");

router.get(
  "/seminarplagiarismandcitation_en",
  getPageSeminarplagiarismandcitationEn
);

router.get(
  "/seminarplagiarismandcitation_es",
  getPageSeminarplagiarismandcitationEs
);

router.get(
  "/seminarplagiarismandcitation_ru",
  getPageSeminarplagiarismandcitationRu
);

module.exports = router;
