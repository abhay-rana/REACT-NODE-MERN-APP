import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";

import connectDb from "./config/db.js";
import todo_routes from "./routes/todo-routes.js";
import user_routes from "./routes/user-routes.js";
import errorHandlers from "./middleware/error-handler-middleware.js";

const app = express();

connectDb(); //for connection with the database

//middlewares
app.use(
	cors({
		origin: "http://localhost:3000",
	})
); //only this domain can only make requests

app.use(bodyParser.json()); //parse the object coming in the body of the post request
app.use(cookieParser());

//mounting of routes
app.use("/", todo_routes);
app.use("/", user_routes);

//server is listening at root route
app.get("/", (req, res) => {
	res.send("Server is Listening successfully");
});

//error handling of all unhandled routes
app.use("*", (req, res) => {
	res.status(404).json({
		status: "fail",
		message: `this ${req.originalUrl} route is not present`,
	});
});

//error handling by the schema a custom middleware
app.use(errorHandlers);

app.listen(process.env.PORT, () => {
	console.log("server is running at port", process.env.PORT);
});
