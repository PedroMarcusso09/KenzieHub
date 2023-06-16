import styled from 'styled-components';

export const StyledLabel = styled.label`
    font: 400 normal 0.75rem/0 "Inter";
    color: var(--color-grey-0);
`;

export const StyledSelect = styled.select`
    width: 20.625rem;
    height: 3rem;
    border-radius: 0.25rem;
    background-color: var(--color-grey-2);
    border: 0.075rem solid var(--color-grey-2);
    font: 400 normal 1rem/1.625rem "Inter";
    color: var(--color-grey-1);
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    margin-top: 1rem;
    padding: .8rem .5rem 0 .5rem;

    @media (max-width: 400px) {
    width: 15.5625rem;
    height: 3.125rem;
  }
`;
