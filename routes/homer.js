const express = require("express");
const { route } = require("express/lib/application");
const router = express.Router();

const control = require("../controller/homeControlls");

router.get("", control.home);
router.get("/home", control.home);
router.get("/login", control.login);
router.post("/login", control.loginSubmit);
module.exports = router;
