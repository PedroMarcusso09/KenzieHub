import styled from 'styled-components';

export const Container = styled.div`
  padding-left: 10rem;
  padding-right: 10rem;
  margin-top: 3rem;

  @media (max-width: 500px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const LogoRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HiddenOnMobile = styled.div`
  @media (max-width: 525px) {
    display: none;
  }
`;

export const ContentRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 3rem;
  height: 7.375rem;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    width: 18.4375rem;
    padding-left: 1rem;
    padding-right: 1rem;
    height: 3.75rem;
  }
`;

export const LogoImage = styled.img`
  width: 6.5625rem;
  height: 0.9375rem;
`;
