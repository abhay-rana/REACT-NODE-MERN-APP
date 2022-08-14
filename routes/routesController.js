import express from "express";

import { createTodo, deleteTodoById, getAlltodos, getTodoById, updateTodoById } from "../controller/todoController.js";

const router = express.Router();

router.route("/todos").get(getAlltodos);
router.route("/todos/new").post(createTodo);
router.route("/todos/:id").get(getTodoById);
router.route("/todos/update/:id").put(updateTodoById);
router.route("/todos/delete/:id").delete(deleteTodoById);

export default router;
