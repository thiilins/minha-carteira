import React from "react";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";
import { BrowserRouter } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Routes: React.FC = () => {
  const { logged } = useAuth();
  return (
    <BrowserRouter>{logged ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>
  );
};

export default Routes;
