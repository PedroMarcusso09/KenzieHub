import styled from 'styled-components'

export const StyledButton = styled.button`
  width: 20.25rem;
  height: 3rem;
  border-radius: 0.25rem;
  padding: 0 1.375rem;
  font: 500 normal 1rem/1.625rem "Inter";

  @media (max-width: 400px) {
    width: 15.5625rem;
    height: 3.125rem;
  }
`;

export const StyledButtonPrimary = styled(StyledButton)`
    background-color: var(--color-color-primary);
    color: #FFFFFF;
    border: 0.075rem solid var(--color-color-primary);

    &:hover {
        background-color: var(--color-color-primary-50);
        border: 0.075rem solid var(--color-color-primary-50);
    }
`;

export const StyledButtonSignup = styled(StyledButton)`
    background-color: var(--color-grey-1);
    color: var(--color-grey-0);
    border: 0.075rem solid var(--color-grey-1y);
`

export const StyledButtonBack = styled(StyledButton)`
    width: 4.25rem;
    height: 2.5rem;
    padding: 0 1rem 0 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-grey-3);
    color: var(--color-grey-0);
    border: 1.2px solid var(--color-grey-3);

    &:hover {
        background-color: var(--color-grey-2);
    }
`;

export const StyledButtonExit = styled(StyledButton)`
    width: 3.4375rem;
    height: 2rem;
    padding: 0 1rem 0 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-grey-3);
    color: var(--color-grey-0);
    border: 1.2px solid var(--color-grey-3);
    
    &:hover {
        background-color: var(--color-grey-2);
    }
`;
