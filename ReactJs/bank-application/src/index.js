import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { subscribe } from "redux";
import { store } from "./store";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
const render = () => ReactDOM.render(<App />, rootElement);
store.subscribe(render);
