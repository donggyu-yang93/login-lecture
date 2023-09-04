"use strict";

const id = document.querySelector("#id"), // "여기있는거는 " id = "여기있는거임"
   psword = document.querySelector("#psword"),
   loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        psword: psword.value,
    };

    fetch("/login", {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
            location.href = '/';
        } else {
            alert(res.msg);
        }
      }) // home.ctrl.js에서 로그인실패시 반환값을 then으로 받아옴
      .catch((err) => {
        console.error(new Error("로그인 중 에러발생"));
      });

}