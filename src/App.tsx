import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "@fontsource/roboto";
import "./App.css";
import LoginLandingPage from "./pages/LandingPage";
import Homepage from "./pages/Homepage";
import RegisterPage from "./pages/RegisterPage";
import Modal from "./components/Modal/Modal";
import { useAppSelector } from "./redux/hooks";

function App() {
  const alert = useAppSelector(({ uiReducer }) => uiReducer.alert);
  return (
    <>
      {alert && <Modal />}
      <div className="App">
        <Routes>
          <Route path="/home" element={<LoginLandingPage />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/users" element={<Homepage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
