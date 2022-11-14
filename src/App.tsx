import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "@fontsource/roboto";
import "./App.css";
import LoginLandingPage from "./pages/LandingPage";
import Homepage from "./pages/Homepage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<LoginLandingPage />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/users" element={<Homepage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
