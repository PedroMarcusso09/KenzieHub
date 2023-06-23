import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://kenziehub.herokuapp.com',
});

const TechContext = createContext();

const TechProvider = ({ children }) => {
  const [technologies, setTechnologies] = useState([]);

  const token = localStorage.getItem('@TOKEN'); 
  
  const fetchTechnologies = async () => {
    const response = await api.get('/profile', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setTechnologies(response.data.techs);
  };

  useEffect(() => {
    fetchTechnologies();
  }, []);

  const addTechnology = async (technology) => {
    const token = localStorage.getItem('@TOKEN'); 
    const response = await api.post('/users/techs', technology, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setTechnologies([...technologies, response.data]);
  };
  
  const updateTechnology = async (technologyId, status) => {
    const token = localStorage.getItem('@TOKEN'); 
    const response = await api.put(`/users/techs/${technologyId}`, { status }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setTechnologies(
      technologies.map((tech) =>
        tech.id === technologyId ? { ...tech, status: response.data.status } : tech
      )
    );
  };
  
  const deleteTechnology = async (technologyId) => {
    const token = localStorage.getItem('@TOKEN');
    await api.delete(`/users/techs/${technologyId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setTechnologies(technologies.filter((tech) => tech.id !== technologyId));
  };
  

  return (
    <TechContext.Provider
      value={{ technologies, fetchTechnologies, addTechnology, updateTechnology, deleteTechnology }}
    >
      {children}
    </TechContext.Provider>
  );
};

export { TechContext, TechProvider };
