"use strict";

const fs = require("fs").promises;

class UserStorage {
    static #getUserInfo(data, id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users);
        const userInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }


    static getUsers(...fields) {
        // const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});

        return newUsers;
    }

    static getUserInfo(id) {
        return fs.readFile("./src/databases/users.json") // 맨 윗줄의 프로미스를 반환하는게 readFile
            .then((data) => {
                return this.#getUserInfo(data, id);
            }) // 프로미스 성공반환         
            .catch(console.error); // 프로미스 실패를 반환      

    }


    static save(userInfo) {
        // const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        return { success: true };

    }

}

module.exports = UserStorage;