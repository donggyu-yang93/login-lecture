"use strict";

const UserStorage = require("./UserStorage");

class User{
    constructor(body){
        this.body = body;
    }

    login() {
        const client = this.body;
        const { id, psword } = UserStorage.getUserInfo(client.id);
        
        if (id) {
            if ( id === client.id && psword === client.psword ) {
                return {success : true};
            }
            return { success : false, msg : "비번틀림"};
        }
        return { success : false, msg : "아디가 없는 아디여"};
    }

    register(){
        const client = this.body;
        const response = UserStorage.save(client);
        return response;
    }
}

module.exports = User;