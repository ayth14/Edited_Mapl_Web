import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AppLoader } from "@components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router basename={process.env.REACT_APP_BASE_NAME}>
      <Suspense
        fallback={
          <div className="w-screen h-screen center">
            <AppLoader />
          </div>
        }
      >
        <App />
      </Suspense>
    </Router>
  </React.StrictMode>
);
