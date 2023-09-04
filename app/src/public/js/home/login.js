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

    console.log(req);    
}