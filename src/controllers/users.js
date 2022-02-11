const users = require("../data/users.json"); // import users

getAllUsers = () => {  // return all users
    return users;
}

getUserById = (userId) => {  // filters
    return users.filter(x => x.id == userId);
}

module.exports = {  // export function
    getAllUsers,
    getUserById
};