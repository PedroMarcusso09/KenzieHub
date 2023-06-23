import styled from 'styled-components';
import Modal from 'react-modal';

export const StyledModal = styled(Modal)`
  background: var(--color-grey-3);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 23.0625rem;
  height: 21.375rem;
  max-width: 90vw; 
  max-height: 90vh;
  overflow: auto; 
`;


export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.125rem;
  background-color: var(--color-grey-2);
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  margin-bottom: .5rem;
`;

export const CloseModal = styled.span`
  color: var(--color-grey-1);
  font-size: .7rem;
  font-weight: 600;
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
`;

export const ContainerButton = styled.button`
display: flex;
flex-direction: row;
`

