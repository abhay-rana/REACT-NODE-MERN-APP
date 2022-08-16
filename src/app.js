import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const App = () => {
	const [all_todos, setAllTodos] = useState([]);

	useEffect(() => {
		getAllTodos().then();
		getRoute();
		return () => {};
	}, []);

	const getRoute = () => {
		console.log("get routes");
		return fetch("http://localhost:5000/todos/xyz")
			.then((res) => (res.ok ? res.json() : Promise.reject(res)))
			.then((data) => console.log(data))
			.catch((err) => err.text().then((text) => toast.error(text)));
		// .catch((err) => console.log(err))
	};

	// console.log("alltodos", all_todos);

	const getAllTodos = () => {
		return fetch("http://localhost:5000/todos")
			.then((res) => (res.ok ? res.json() : Promise.reject(res)))
			.then((data) => setAllTodos(data.todo))
			.catch((err) => console.log("error", err));
	};

	const deleteTodo = (id) => {
		fetch(`http://localhost:5000/todos/delete/${id}`, {
			method: "DELETE",
		})
			.then((res) => (res.ok ? res.json() : Promise.reject()))
			.then((data) => {
				const new_todos = all_todos.filter((todo) => (todo._id !== id ? todo : ""));
				setAllTodos(new_todos);
				toast.success("todo has been deleted");
			})
			.catch();
	};

	const updateTodo = (id) => {
		fetch("");
	};

	return (
		<>
			<div>
				<div className="flex-row">
					<div className="border-2 border-red-700">all todos are:-</div>
					<button className="p-2 cursor-pointer bg-success">Create</button>
				</div>
				<div>
					{all_todos.map((todo, i) => {
						return (
							<React.Fragment key={todo._id}>
								<div className="m-4 p-2 border-2 border-blue-400">
									<div>title:{todo.title}</div>
									<div>description:{todo.description}</div>
									<div>status:{todo.status ? "completed" : "false"}</div>
									<button onClick={() => updateTodo(todo._id)} className="p-2 cursor-pointer bg-warning">
										Edit
									</button>
									<button onClick={() => deleteTodo(todo._id)} className="p-2 m-2 cursor-pointer bg-danger">
										Delete
									</button>
								</div>
							</React.Fragment>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default App;
