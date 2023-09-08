"use strict";

const User = require("../../models/User");
// const UserStorage = require("../../models/UserStorage"); // 상위 상위 모델 유저스토리지
const output ={
    home: (req, res) => {
        res.render("home/index");
    },
    
    login: (req, res) => {
        res.render("home/login");
    },
    register: (req, res) => {
        res.render("home/register");
    }
}


const process = {
    login: async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();        
        return res.json(response);
    },

    register: async (req, res) => {
        const user = new User(req.body);
        const response = await user.register();
        
        return res.json(response);
    //   const id = req.body.id,
    //     psword = req.body.psword;
      
    //   const users = UserStorage.getUsers("id", "psword");

    //   const response = {};

    //   if (users.id.includes(id)){
    //     const idx = users.id.indexOf(id);
    //     if (users.psword[idx] === psword){
    //         response.success = true;
    //         return res.json(response);
    //     } 
    //   }

    //   response.success = false;
    //   response.msg = "로그인실패함"
    //   return res.json(response);
    },
}


module.exports = {
    output,
    process,
};

