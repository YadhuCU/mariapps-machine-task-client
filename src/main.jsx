import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { UiContexts } from "./context/UiContexts.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UiContexts>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UiContexts>
  </React.StrictMode>,
);
