import mongoose from "mongoose";
import "dotenv/config";

const connectDb = () => {
	mongoose
		.connect(process.env.DATABSE_URL)
		.then((con) => {
			console.log("Database connected");
		})
		.catch((error) => {
			console.log("error", error);
		});
};

export default connectDb;
