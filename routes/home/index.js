// 라우팅은 index.js에
"use strict";  // 이걸 써주라네 왜

const express = require("express");
const router = express.Router();


const ctrl = require("./home.ctrl");

router.get("/", ctrl.hello); // home.ctrl.js의 hello를 불러오는거임.
router.get("/login", ctrl.login);

module.exports = router;  // 외부로 보내야하니까.