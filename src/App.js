import "./App.css";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import React from "react";
import routes from "./routes";

const App = () => {
  return (
    <React.Fragment>
        <Routes>
          {routes.map((route, idx) => (
            <Route
              path={route.path}
              exact
              element={route.element}
              key={idx}
            />
          ))}
        </Routes>
      <ToastContainer
        theme="colored"
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={true}
        pauseOnHover={false}
      />
    </React.Fragment>
  );
};

export default App;
