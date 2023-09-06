// 라우팅은 index.js에
"use strict";  // 이걸 써주라네 왜

const express = require("express");
const router = express.Router();


const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home); // home.ctrl.js의 hello를 불러오는거임. 바껴서 output안의 홈을 불러오는거임.
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);

router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);


module.exports = router;  // 외부로 보내야하니까.