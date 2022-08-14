import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./styles/global.css";

import App from "./app.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<>
		<ToastContainer />
		<App />
	</>
);
