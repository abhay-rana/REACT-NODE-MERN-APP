import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";

import connectDb from "./config/db.js";
import todo_routes from "./routes/todo-routes.js";
import user_routes from "./routes/user-routes.js";

const app = express();

connectDb(); //for connection with the database

//middelwares
app.use(cors());
app.use(bodyParser.json());

//mounting of routes
app.use("/", todo_routes);
app.use("/", user_routes);

//server is listening
app.get("", (req, res) => {
	res.send("Server is Listening successfully");
});

//error handling of unhandeled routes
app.use("*", (req, res) => {
	res.status(404).json({
		status: "fail",
		message: `this ${req.originalUrl} route is not present`,
	});
});

app.listen(process.env.PORT, () => {
	console.log("server is running at port", process.env.PORT);
});
