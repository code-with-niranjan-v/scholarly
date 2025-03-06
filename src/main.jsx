import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Login from "./Login.jsx";
import SignUp from "./SignUp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Login></Login>} path="/login" />
        <Route element={<SignUp></SignUp>} path="/signup" />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
