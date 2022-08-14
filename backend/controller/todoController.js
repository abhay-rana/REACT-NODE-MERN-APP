import { Todo } from "../models/todoSchema.js";

export const createTodo = (req, res) => {
	Todo.create(req.body); //to find all the documents
	res.json({ message: "new todo has been created" });
};

export const getAlltodos = async (req, res) => {
	const todo = await Todo.find({}); //to find all the documents
	res.json({ todo });
};

export const getTodoById = async (req, res) => {
	try {
		const todo = await Todo.findById(req.params.id); //to find all the documents
		res.json({ todo });
	} catch (error) {
		console.log(error);
	}
};

export const updateTodoById = async (req, res) => {
	try {
		await Todo.findByIdAndUpdate(req.params.id, req.body);
		res.json({"message":"to-do has been updated successfully"});
	} catch (error) {
		console.log(error);
	}
};

export const deleteTodoById = async (req, res) => {
	try {
		const todo = await Todo.findById(req.params.id);
		todo.remove();
		res.json({ message: "to-do has been deleted successfully" });
	} catch (error) {
		console.log(error);
	}
};
