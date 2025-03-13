import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Login from "./pages/Login.jsx";
import { ProfessorHome } from "./pages/ProfessorHome.jsx";
import { StudentHome } from "./pages/StudentHome.jsx";
import SignUp from "./pages/SignUp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Login></Login>} path="/login" />
        <Route element={<SignUp></SignUp>} path="/signup" />
        <Route element={<ProfessorHome></ProfessorHome>} path="/professor" />
        <Route element={<StudentHome></StudentHome>} path="/student" />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
