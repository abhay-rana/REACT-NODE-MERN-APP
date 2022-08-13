import express from "express";

import { getAlltodos } from "../controller/todoController.js";

const router = express.Router();

router.route("/todos").get(getAlltodos);

export default router;
