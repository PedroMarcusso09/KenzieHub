import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Form from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import DashboardPage from '../pages/DashboardPage';

const AppRoutes = () => {
  const [userData, setUserData] = useState(null);

  return (
    <Routes>
      <Route
        path="/"
        element={<Form setUserData={setUserData} />}
      />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/dashboard"
        element={<DashboardPage userData={userData} setUserData={setUserData} />}
      />
    </Routes>
  );
};

export default AppRoutes;