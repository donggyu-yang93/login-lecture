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

    static #getUsers (data, isAll, fields) {
        const users = JSON.parse(data);
        if (isAll) return users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});

        return newUsers;

    }


    static getUsers(isAll, ...fields) {
        return fs.readFile("./src/databases/users.json") // 맨 윗줄의 프로미스를 반환하는게 readFile
            .then((data) => {
                return this.#getUsers(data, isAll, fields);
            }) // 프로미스 성공반환         
            .catch(console.error); // 프로미스 실패를 반환           
    }

    static getUserInfo(id) {
        return fs.readFile("./src/databases/users.json") // 맨 윗줄의 프로미스를 반환하는게 readFile
            .then((data) => {
                return this.#getUserInfo(data, id);
            }) // 프로미스 성공반환         
            .catch(console.error); // 프로미스 실패를 반환      

    }


    static async save(userInfo) {
        const users = await this.getUsers(true); // 데이터 추가
        if (users.id.includes(userInfo.id)) {
            throw "이미 존재하는 아이디 입니다.";
        } 
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        fs.writeFile("./src/databases/users.json", JSON.stringify(users));
        return { success : true };
    }

}

module.exports = UserStorage;