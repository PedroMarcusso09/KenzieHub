import React, { useContext, useState, useEffect } from 'react';
import { TechContext } from '../../providers/TechContext'; 
import Button from '../../components/Button';
import { Headline, Headline4, StyledH1, Headline3, HeadlineBold } from '../../styles/typography';
import { Container, Nav, LogoImage, Header, TitleList, TechList, TechCard } from './styles';
import TechModal from './modal';
import logo from '../../assets/logo.svg';
import TechDetailsModal from './detailsmoadal'; 

const DashboardPage = () => {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem('@USERDATA')) || {
      name: 'John Doe',
      course_module: 'Segundo Módulo (Frontend avançado)'
    }
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [selectedTech, setSelectedTech] = useState(null);
  
  const { technologies, fetchTechnologies, addTechnology } = useContext(TechContext);

  useEffect(() => {
    fetchTechnologies();
  }, [fetchTechnologies]);

  const handleOpenDetailsModal = (technology) => {
    setSelectedTech(technology);
    setIsDetailsModalOpen(true);
  };

  const handleLogout = () => {
    setUserData(null);
    localStorage.removeItem('@TOKEN');
    localStorage.removeItem('@USERID');
    localStorage.removeItem('@USERDATA');
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <Nav>
        <LogoImage src={logo} alt="Logo" />
        <Button  text="Sair" onClick={handleLogout} variant="exit" />
      </Nav>
      <Header>
        <StyledH1>Olá, {userData.name}</StyledH1>
        <Headline>{userData.course_module}</Headline>
      </Header>
      <TitleList>
        <Headline3>Tecnologias</Headline3>
        <Button type="button" text="+" variant="add" onClick={handleOpenModal} />
      </TitleList>
      {technologies.length > 0 && (
        <TechList>
          {technologies.map((technology) => (
            <TechCard key={technology.id} onClick={() => handleOpenDetailsModal(technology)}>
              <Headline4>{technology.title}</Headline4>
              <HeadlineBold>{technology.status}</HeadlineBold>
            </TechCard>
          ))}
        </TechList>
      )}
      <TechModal
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        addTechnology={addTechnology}
      />
      <TechDetailsModal
        isModalOpen={isDetailsModalOpen}
        handleCloseModal={() => setIsDetailsModalOpen(false)}
        selectedTech={selectedTech}
      />
    </Container>
  );
};

export default DashboardPage;
