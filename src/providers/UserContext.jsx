import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  const loginUser = async (data, navigate) => {
    setLoading(true);
    try {
      const res = await axios.post('https://kenziehub.herokuapp.com/sessions', data);
      localStorage.setItem('@TOKEN', res.data.token);
      localStorage.setItem('@USERID', res.data.user.id);

      const userRes = await axios.get(`https://kenziehub.herokuapp.com/users/${res.data.user.id}`, {
        headers: {
          Authorization: `Bearer ${res.data.token}`
        }
      });

      localStorage.setItem('@USERDATA', JSON.stringify(userRes.data));

      setAuthenticated(true);
      navigate('/dashboard');
    } catch (err) {
      console.log(err.message || 'Algo deu errado');
    } finally {
      setLoading(false);
    }
  };

  const registerUser = async (data, navigate) => {
    setLoading(true);
    try {
      await axios.post('https://kenziehub.herokuapp.com/users', data);
      navigate('/login');
    } catch (err) {
      console.log(err.message || 'Algo deu errado');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('@TOKEN');
    setAuthenticated(!!token);
    setLoading(false);
  }, []);

  const PrivateRoute = ({ children }) => {
    if (loading) {
      return <div>Loading...</div>;
    }
    return authenticated ? children : <Navigate to="/" />;
  };

  return (
    <UserContext.Provider value={{ loginUser, registerUser, loading, setLoading, PrivateRoute }}>
      {children}
    </UserContext.Provider>
  );
};
