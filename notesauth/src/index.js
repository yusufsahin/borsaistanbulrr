import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JavaScript (includes Popper.js)


import React from "react";

import ReactDOM from "react-dom/client";

import App from "./App";
import { Provider } from "react-redux";
import {store} from './app/store';



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
