import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";

import router from "./routes/routesController.js";
import connectDb from "./config/db.js";

const app = express();

connectDb(); //for connection with the database

//middelwares
app.use(cors());
app.use("/", router);
app.use(bodyParser.json());

app.listen(process.env.PORT, () => {
	console.log("server is starts at ", process.env.PORT);
});
