import React, { useContext, useState } from 'react';
import Button from '../../components/Button';
import { StyledModal, ModalContent, TitleRow, CloseModal } from '../../styles/modal';
import { Headline4 } from '../../styles/typography';
import { StyledInput, StyledLabel } from '../../styles/input';
import { StyledSelect } from '../../styles/select';
import { TechContext } from '../../providers/TechContext'; 
const customStyles = {
  overlay: {
    background: 'rgba(18, 18, 20, 0.5)'
  }
};

const TechModal = ({ isModalOpen, handleCloseModal, addTechnology }) => {
  const [techName, setTechName] = useState('');
  const [techStatus, setTechStatus] = useState('Iniciante');

  const handleTechNameChange = (event) => {
    setTechName(event.target.value);
  };

  const handleTechStatusChange = (event) => {
    setTechStatus(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTechnology({
      title: techName,
      status: techStatus,
    });
    handleCloseModal();
    setTechName('');
    setTechStatus('Iniciante');
  };

  return (
    <StyledModal
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      contentLabel="My Dialog"
      style={customStyles}
    >
      <TitleRow>
        <Headline4>Cadastrar Tecnologia</Headline4>
        <CloseModal onClick={handleCloseModal}>X</CloseModal>
      </TitleRow>
      <ModalContent>
        <form onSubmit={handleSubmit}>
          <StyledLabel htmlFor="name">Nome</StyledLabel>
          <StyledInput
            name="techName"
            id="name"
            type="text"
            placeholder="Digite aqui sua tecnologia"
            value={techName}
            onChange={handleTechNameChange}
          />
          <StyledLabel htmlFor="techStatus">Status</StyledLabel>
          <StyledSelect
            name="techStatus"
            id="techStatus"
            value={techStatus}
            onChange={handleTechStatusChange}
          >
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </StyledSelect>
          <Button text="Cadastrar Tecnologia" type="submit" />
        </form>
      </ModalContent>
    </StyledModal>
  );
};

export default TechModal;
