import React, { useContext, useState, useEffect } from 'react';
import { TechContext } from '../../providers/TechContext'; 
import { StyledModal, ModalContent, TitleRow, CloseModal } from '../../styles/modal';
import { Headline4 } from '../../styles/typography';
import { StyledInput, StyledLabel } from '../../styles/input';
import { StyledSelect } from '../../styles/select';
import Button from '../../components/Button';
import { toast } from 'react-toastify';

const customStyles = {
  overlay: {
    background: 'rgba(18, 18, 20, 0.5)'
  }
};

const TechDetailsModal = ({ isModalOpen, handleCloseModal, selectedTech }) => {
  const [techName, setTechName] = useState("");
  const [techStatus, setTechStatus] = useState("");
  const { updateTechnology, deleteTechnology } = useContext(TechContext);

  useEffect(() => {
    if (selectedTech) {
      setTechName(selectedTech.title);
      setTechStatus(selectedTech.status);
    }
  }, [selectedTech]);

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
        updateTechnology(selectedTech.id, techStatus);
        toast.success('As alterações foram salvas com sucesso.'); 
        handleCloseModal();
    } catch (error) {
        toast.error('Ocorreu um erro ao salvar as alterações.'); 
    }
};

  const handleDelete = () => {
    deleteTechnology(selectedTech.id);
    handleCloseModal();
  }

  return (
    <StyledModal
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      contentLabel="Tech Details"
      style={customStyles}
    >
      <TitleRow>
        <Headline4>Tecnologia Detalhes</Headline4>
        <CloseModal onClick={handleCloseModal}>X</CloseModal>
      </TitleRow>
      <ModalContent>
        <form onSubmit={handleSubmit}>
          <StyledLabel htmlFor="name">Nome</StyledLabel>
          <StyledInput
            name="techName"
            id="name"
            type="text"
            placeholder="Digite o nome da tecnologia"
            value={techName}
            disabled 
          />
          <StyledLabel htmlFor="techStatus">Status</StyledLabel>
          <StyledSelect
            name="techStatus"
            id="techStatus"
            value={techStatus}
            onChange={(e) => setTechStatus(e.target.value)}
          >
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </StyledSelect>
          <div style={{ display: 'flex', flexDirection: 'colunm', gap: '1.375rem' }}>
            <Button text="Salvar Alterações" onClick={handleSubmit} type="submit" variant="save" />
            <Button text="Excluir" onClick={handleDelete} variant="esc"/>
          </div>
        </form>
      </ModalContent>
    </StyledModal>
  );
};

export default TechDetailsModal;