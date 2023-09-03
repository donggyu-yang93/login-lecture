const app = require("../app");
const PORT = 3000;



// 기존까진 node app.js 로 불렀었지만, 이 코드가 여기 있으므로 node ./bin/www.js로 부를것
app.listen(PORT, () => {
    console.log("서버온");
});