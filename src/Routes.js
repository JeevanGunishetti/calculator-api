const express = require("express");
const router = express.Router();

const {addNum, subNum, mulNum, divNum} = require("./Controllers");
const { checkType } = require("./inputCheck");


router.post("/add",checkType ,addNum);

router.post("/sub",checkType, subNum);

router.post("/multiply",checkType,mulNum);

router.post("/divide",checkType,divNum);

module.exports = router;
