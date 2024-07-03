import express from "express";
import UserController from "./UserController.js";

const UsersRouter = express.Router();
const yy="a";
UsersRouter.get("/", UserController.getList);
UsersRouter.get("/:id", UserController.getById);
UsersRouter.post("/", UserController.add);
UsersRouter.put("/:id", UserController.update);
UsersRouter.delete("/:id", UserController.delete);

export default UsersRouter;