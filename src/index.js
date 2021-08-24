import React from "react";
import ReactDOM from "react-dom";
import state from "./state/index";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";


ReactDOM.render(
	<Provider store={state}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>,
	document.getElementById("root")
);
