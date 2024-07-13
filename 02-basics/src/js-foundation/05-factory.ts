// const { getUUID } = require('../plugins/get-id.plugin')
// const { getAge } = require('../plugins/get-age.plugin');
//const { getUUID, getAge } = require('../plugins');

interface IBuildMakePersonOptions {
    getUUID: () => void;
    getAge: (birthdate: string) => number;
}

interface IPersonOptions {
    name: string;
    birthdate: string;
}

export const buildMakePerson = ({ getUUID, getAge }: IBuildMakePersonOptions) => {
    
    return ({ name, birthdate }: IPersonOptions) => {
        return {
            id: getUUID(),
            name,
            birthdate,
            age: getAge(birthdate)
        }
    }
}

// const obj = { name: 'Jhon', birthdate: '2001-01-23' }
// const jhon = buildPerson(obj);
// console.log(jhon);