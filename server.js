import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import router from "./routes/routesController.js";
import connectDb from "./config/db.js";

const app = express();

connectDb(); //for connection with the database

//middelwares
app.use(cors());
app.use("/", router);
app.use(bodyParser.json());

app.listen(5000, () => {
	console.log("server is starts");
});
