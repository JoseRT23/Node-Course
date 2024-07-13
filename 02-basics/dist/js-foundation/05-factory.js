"use strict";
// const { getUUID } = require('../plugins/get-id.plugin')
// const { getAge } = require('../plugins/get-age.plugin');
//const { getUUID, getAge } = require('../plugins');
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMakePerson = void 0;
const buildMakePerson = ({ getUUID, getAge }) => {
    return ({ name, birthdate }) => {
        return {
            id: getUUID(),
            name,
            birthdate,
            age: getAge(birthdate)
        };
    };
};
exports.buildMakePerson = buildMakePerson;
// const obj = { name: 'Jhon', birthdate: '2001-01-23' }
// const jhon = buildPerson(obj);
// console.log(jhon);
