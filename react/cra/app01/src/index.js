// import React, { StrictMode } from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// function tick() {
// 	ReactDOM.createRoot(document.getElementById("root")).render(
// 		<React.StrictMode>
// 			<App />
// 		</React.StrictMode>,
// 	);
// }

// setInterval(tick, 1000);

// reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

function tick() {
	ReactDOM.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
		document.getElementById("root"),
	);
}

setInterval(tick, 1000);
