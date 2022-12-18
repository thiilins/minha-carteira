import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// import { Container } from './styles';
import Dashboard from "@pages/Dashboard";
import List from "@pages/List";
import Layout from "@components/Layout";
const AppRoutes: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route index element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/list/:action" element={<List />} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Layout>
  );
};

export default AppRoutes;
