// const http = require("http");  // 한글도 깨져서 나오고 코드처리 하기도 귀찮고 해서 걍 express를 쓴다.
// const app = http.createServer((req, res) => {
//     // 한글설정 따로 해주는 코드
//     res.writeHead(200, { "Content-Type": "text/html; charset=utf-8"});
//     // 이거 없으면 밑에 코드 다 꺠짐 ㅎㅎ;;
//     if (req.url === '/') {
//         res.end("여기는 기본임니다.");
//     } else if (req.url === '/login') {
//         res.end("여기는 로그인화면임니다.");
//     }
// });

// app.listen(3001, () => {
//     console.log("http로 가동된 서버임니다.");
// });

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ 안쓰는 거니까 대충 보고 넘기라 이말이야 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ


// 모듈
const express = require("express");
const bodyParser = require("body-parser"); //home.ctrl.js의 const process의 body를 받아야해
const app = express();


//라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public/`)); // dir == 현재 app 파일이 있는 위치 반환 /src/public
app.use(bodyParser.json()); // body-parser 실행에 필요함.
// URL을 통해 전달되는 데이터에 한글, 공백등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결하기 위함.
app.use(bodyParser.urlencoded({ extended: true}));


app.use("/", home); // use --> 미들웨어 등록 메서드.

module.exports = app;

