"use strict";

const UserStorage = require("./UserStorage");

class User{
    constructor(body){
        this.body = body;
    }

    login() {
        const { id, psword } = UserStorage.getUserInfo(this.body.id);
        
        if (id) {
            if ( id === this.body.id && psword === this.body.psword ) {
                return {success : true};
            }
            return { success : false, msg : "비번틀림"};
        }
        return { success : false, msg : "아디가 없는 아디여"};
    }
}

module.exports = User;