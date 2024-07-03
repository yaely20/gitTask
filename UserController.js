import { getAllUsers, getUserById, addUser, updateUser, deleteUser } from './user.module.js';
console.log("yiska");

console.log("check")
const UserController = {
  getList: (req, res) => {
    const users = getAllUsers();
    res.json(users);
  },
  getById: (req, res) => {
    const user = getUserById(parseInt(req.params.id, 10));
    if (user) {
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  },
  add: (req, res) => {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
      return res.status(400).send('Missing fields ');
    }
    if (!isValidEmail(email)) {
      return res.status(400).send('Invalid email format');
    }
    const newUser = addUser(name, email, phone);
    res.status(201).json(newUser);
  },
  update: (req, res) => {
    const { name, email, phone } = req.body;
    const updatedUser = updateUser(parseInt(req.params.id, 10), name, email, phone);
    if (updatedUser) {
      res.json(updatedUser);
    } else {
      res.status(404).send('User not found');
    }
  },
  delete: (req, res) => {
    const deletedUser = deleteUser(parseInt(req.params.id, 10));
    if (deletedUser) {
      res.json(deletedUser);
    } else {
      res.status(404).send('User not found');
    }
  },
};

function isValidEmail(email) {
  // Basic email validation using a regular expression
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export default UserController;