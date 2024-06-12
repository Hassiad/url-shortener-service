const express = require("express");

const router = express.Router();

const urlRoutes = require("./urlRoutes");

router.use("/api", urlRoutes);

module.exports = router;
