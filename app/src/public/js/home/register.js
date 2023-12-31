"use strict";

const id = document.querySelector("#id"), // "여기있는거는 " id = "여기있는거임"
   name = document.querySelector("#name"),
   psword = document.querySelector("#psword"),
   confirmPsword = document.querySelector("#confirm-psword"),
   registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register() {
    if (!id.value) return alert("아이디를 입력해주세요");

    if (psword.value !== confirmPsword.value) return alert("비밀번호가 일치하지 않습니다.");
    const req = {
        id: id.value,
        name: name.value,
        psword: psword.value,        
    };

    fetch("/register", {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
            location.href = '/login';
        } else {
            alert(res.msg);
        }
      }) // home.ctrl.js에서 로그인실패시 반환값을 then으로 받아옴
      .catch((err) => {
        console.error(new Error("회원가입 중 에러발생"));
      });

}