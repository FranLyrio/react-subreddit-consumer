import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    height: 9.1rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`
