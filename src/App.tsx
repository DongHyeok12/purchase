import React from "react";
import "./styles/styles.css";
import HeaderLayout from "./components/header/HeaderLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import SingUpPage from "./pages/singUp";
import MainPage from "./pages/main";

function App() {
  return (
    <BrowserRouter>
      <HeaderLayout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/singUp" element={<SingUpPage />} />
        </Routes>
      </HeaderLayout>
    </BrowserRouter>
  );
}

export default App;
