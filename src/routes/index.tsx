import React from "react";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";
import { BrowserRouter } from "react-router-dom";
// import { Container } from './styles';

const Routes: React.FC = () => {
  const user = true;
  return <BrowserRouter>{user ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>;
};

export default Routes;
