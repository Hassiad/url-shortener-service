const express = require("express");

const router = express.Router();

const urlRoutes = require("./urlRoutes");

router.use("/api/v1/url", urlRoutes);

module.exports = router;
