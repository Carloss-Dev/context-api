import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthStorage } from "../src/contexts/AuthContext";
import { Login } from "../src/pages/Login";
import { Home } from "../src/pages/Home";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <AuthStorage>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </AuthStorage>
    </BrowserRouter>
  );
};
