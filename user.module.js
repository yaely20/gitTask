
class User {
    constructor(id, name, email, phone) {
        this.id = id;
        this.name = name;
        this.email = email
        this.phone = phone;
    }
}
const users = [
    new User(1, "yiska", "aa@aa", 123),
    new User(2, "tammar", "bb@bb", 123)
];

function getAllUsers() {
    return users;
}

function getUserById(id) {
    return users.find(user => user.id === id);
}

function addUser(name, email, phone) {
    const newId = users.length ? users[users.length - 1].id + 1 : 1;
    const newUser = new User(newId, name, email, phone);
    users.push(newUser);
    return newUser;
}

function updateUser(id, name, email, phone) {
    const user = getUserById(id);
    if (user) {
        user.name = name || user.name;
        user.email = email || user.email;
        user.phone = phone || user.phone;
        return user;
    }
    return null;
}

function deleteUser(id) {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
    return null;
}


export { User, users, getAllUsers, getUserById, addUser, updateUser, deleteUser };

