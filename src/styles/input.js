import styled from 'styled-components'

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: .5rem;
`

export const StyledLabel = styled.label`
    font: 400 normal 0.75rem/1.625rem "Inter";
    color: var(--color-grey-0);
    margin-top: .5rem;
`;

export const StyledInput = styled.input`
    width: 20.25rem;
    height: 3rem;
    border-radius: 0.25rem;
    padding: 0 1rem 0 1rem;
    gap: 0.625rem;
    background-color: var(--color-grey-2);
    border: 0.075rem solid var(--color-grey-2);
    font: 400 normal 1rem/1.625rem "Inter";
    color: var(--color-grey-0);
    margin-bottom: .5rem;
    margin-top: .5rem;

    &:focus {
        outline: none;
        border: 0.075rem solid #F8f9FA;
    }

    @media (max-width: 400px) {
    width: 13.5rem;
    height: 3.125rem;
  }

`;