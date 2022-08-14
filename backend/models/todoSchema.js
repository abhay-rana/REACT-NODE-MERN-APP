import mongoose from "mongoose";

const todosSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		minLength: 3,
		maxLength: 60,
	},
	description: String,
	status: Boolean,
});

export const Todo = mongoose.model("Todos", todosSchema);
