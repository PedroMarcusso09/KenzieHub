import styled from 'styled-components';

export const Container = styled.div`
  padding-left: 25%;
  padding-right: 25%;

  @media (max-width: 500px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 4.5rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 7.375rem;
  
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    height: 6rem;
    width: 18.4375rem;
    margin-bottom: 4rem;
    gap: 1rem;
  }
`;

export const LogoImage = styled.img`
  width: 6.5625rem;
  height: 0.9375rem;
`;

export const TitleList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TechList = styled.ul`
  height: 26rem;
  border-radius: 0.25rem;
  margin-top: 1rem;
  background-color: var(--color-grey-3);
  padding: 1.5rem;
`

export const TechCard = styled.li`
  height: 3.0625rem;
  background-color: var(--color-grey-4);
  border-radius: 0.25rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin-bottom: 1rem;
`
