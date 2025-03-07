"use strict";
const users = [
    {
        id: 1,
        name: 'Jhon Doe'
    },
    {
        id: 2,
        name: 'Jane Doe'
    }
];
const getUserById = (id, callback) => {
    const user = users.find(user => user.id === id);
    (user)
        ? callback(undefined, user)
        : callback(`User not found whit id: ${id}`);
};
module.exports = {
    getUserById,
};
