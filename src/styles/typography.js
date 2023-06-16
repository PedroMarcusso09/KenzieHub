import styled, { css } from 'styled-components'

export const TitleStyles = css`
    font: 700 normal 1.125rem/1.75rem "Inter";
    color: var(--color-grey-0);
`
export const StyledH1 = styled.h1`
  ${TitleStyles}
`;

export const ParagraphStyles = css`
    font: 700 normal 0.75rem/1.125rem "Inter";
    color: var(--color-grey-1);
`

export const HeadlineBold = styled.p`
  ${ParagraphStyles};
`;

export const ParagraphStyles2 = css`
    font: 400 normal 0.75rem/1.125rem "Inter";
    color: var(--color-grey-1);
`

export const Headline = styled.p`
  ${ParagraphStyles2};
`;

export const ParagraphStyles3 = css`
    font: 400 normal 1rem/1.5rem "Inter";
    color: #FFFFFF;
`

export const Headline2 = styled.p`
  ${ParagraphStyles3};
`;