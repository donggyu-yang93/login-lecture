"use strict";

class UserStorage {
    static #users = {  // #users 라고 해야지 외부접근금지. private랑 같음
        id: ["yang", "hi", "fuck"],
        psword: ["1234", "1234", "123456"],
        name: ["메롱", "치킨", "피자"],
    };
   
    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        
        return newUsers;
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users);
        const userInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        },{});
        return userInfo;
    }

}

module.exports = UserStorage;