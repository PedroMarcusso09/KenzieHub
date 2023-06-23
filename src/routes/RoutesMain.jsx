import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Form from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import DashboardPage from '../pages/DashboardPage';
import { UserContext } from '../providers/UserContext'; 

const AppRoutes = () => {
  const { PrivateRoute } = useContext(UserContext);

  return (
    <Routes>
      <Route
        path="/"
        element={<Form />}
      />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
