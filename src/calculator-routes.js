const express = require("express");
const router = express.Router();
const {checkString} = require("./calculator-middleware");
const {add, subtract, multiply, divide} = require("./calculator-controller");

router.post("/add", checkString, add);
router.post("/sub",checkString, subtract);
router.post("/multiply", checkString, multiply);
router.post("/division", checkString, divide);

module.exports = router;
