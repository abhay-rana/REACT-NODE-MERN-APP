import mongoose from "mongoose";

const connectDb = () => {
	mongoose
		.connect("mongodb://localhost:27017/TodosDb")
		.then((con) => {
			console.log("Database connected");
		})
		.catch((error) => {
			console.log("error", error);
		});
};

export default connectDb;
