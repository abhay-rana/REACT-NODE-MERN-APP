import express from "express";
import bodyParser from "body-parser";

import router from "./routes/routesController.js";
import connectDb from "./config/db.js";

const app = express();

connectDb(); //for connection with the database

app.use(bodyParser.json());
app.use("/", router);

app.listen(5000, () => {
	console.log("server is starts");
});

abhay rana is the great