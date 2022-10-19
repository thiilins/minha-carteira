import React from "react";
import Login from "@pages/SignIn";
import { Routes, Route, Navigate } from "react-router-dom";

const AuthRoutes: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AuthRoutes;
