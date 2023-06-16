import React, { useState } from 'react';
import Button from '../../components/Button';
import { Headline, Headline2, StyledH1 } from '../../styles/typography';
import { Container, LogoRow, LogoImage, ContentRow, HiddenOnMobile } from './styles';
import logo from '../../assets/logo.svg';

const DashboardPage = () => {
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('@USERDATA')) || {
    name: 'John Doe',
    course_module: 'Segundo Módulo (Frontend avançado)'
  });

  const handleLogout = () => {
    setUserData(null);
    localStorage.removeItem('@TOKEN');
    localStorage.removeItem('@USERID');
    localStorage.removeItem('@USERDATA');
  };

 return (
    <Container>
      <LogoRow>
        <LogoImage src={logo} alt="Logo" />
        <Button text="Sair" onClick={handleLogout} variant="exit" />
      </LogoRow>
      <ContentRow>
        <StyledH1>Olá, {userData.name}</StyledH1>
        <Headline>{userData.course_module}</Headline>
      </ContentRow>
      <HiddenOnMobile>
        <StyledH1>Que pena! Estamos em desenvolvimento :(</StyledH1>
        <br />
        <Headline2>Nossa aplicação está em desenvolvimento, em breve teremos novidades.</Headline2>
      </HiddenOnMobile>
    </Container>
 );
};

export default DashboardPage;