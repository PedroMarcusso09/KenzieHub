import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  @media (max-width: 400px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 2rem;
  margin-top: 5rem;
`;

export const LogoImage = styled.img`
  width: 9rem;
  height: 1.25rem;
`;

export const FormContainer = styled.div`
  width: 23.0625rem;
  height: 31.375rem;
  border-radius: 0.25rem;
  padding: 2.625rem 1.375rem;
  padding-top: 1rem;
  background-color: var(--color-grey-3);
  box-shadow: 0 0.25rem 2.5rem -0.625rem rgba(0, 0, 0, 0.25);

  @media (max-width: 400px) {
    width: 18.5rem;
    height: 312.5rem;
  }

`;

export const Container = styled.div`
  display: grid;
  grid-gap: 2rem;
`;