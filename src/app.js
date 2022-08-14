import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const App = () => {
	const [all_todos, setAllTodos] = useState([]);

	useEffect(() => {
		getAllTodos().then();

		return () => {};
	}, []);

	console.log("alltodos", all_todos);

	const getAllTodos = () => {
		return fetch("http://localhost:5000/todos")
			.then((res) => (res.ok ? res.json() : Promise.reject()))
			.then((data) => setAllTodos(data.todo))
			.catch(console.log);
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

    const updateTodo=(id)=>{
        fetch("")
    }

	return (
		<>
			<div>
				<div className="flex-row">
					<div>all todos are:-</div>
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
