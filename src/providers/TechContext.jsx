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
    try {
      const response = await api.get('/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTechnologies(response.data.techs);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Tratar erro de autenticação, por exemplo, redirecionar para a página de login
        console.log('Erro de autenticação');
      } else {
        console.log('Erro ao buscar tecnologias:', error.message);
      }
    }
  };

  useEffect(() => {
    if (token) {
      fetchTechnologies();
    }
  }, [token]);

  const addTechnology = async (technology) => {
    try {
      const response = await api.post('/users/techs', technology, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTechnologies([...technologies, response.data]);
    } catch (error) {
      console.log('Erro ao adicionar tecnologia:', error.message);
    }
  };

  const updateTechnology = async (technologyId, status) => {
    try {
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
    } catch (error) {
      console.log('Erro ao atualizar tecnologia:', error.message);
    }
  };

  const deleteTechnology = async (technologyId) => {
    try {
      await api.delete(`/users/techs/${technologyId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTechnologies(technologies.filter((tech) => tech.id !== technologyId));
    } catch (error) {
      console.log('Erro ao excluir tecnologia:', error.message);
    }
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
