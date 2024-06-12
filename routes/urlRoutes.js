const express = require("express");
const urlController = require("../controllers/urlController");

const router = express.Router();

router.post("/encode", urlController.encode);
router.post("/decode", urlController.decode);
router.get("/statistic/:urlPath", urlController.statistics);

module.exports = router;
