import styled, { css, DefaultTheme } from 'styled-components'

import { LoadingProps } from '.'

const spinnerModifiers = {
  size: {
    small: () => css`
      height: 2rem;
      width: 2rem;
    `,
    large: () => css`
      height: 4rem;
      width: 4rem;
    `
  },
  color: {
    primary: (theme: DefaultTheme) => css`
      border-left-color: ${theme.colors.primary};
    `,
    secondary: (theme: DefaultTheme) => css`
      border-left-color: ${theme.colors.main};
    `
  }
}

export const Spinner = styled.div<LoadingProps>`
  ${({ theme, size, color }) => css`
    border-radius: 50%;
    margin: auto;
    justify-self: center;
    animation: spin 1s linear infinite;
    border: 0.3rem solid transparent;

    ${spinnerModifiers.size[size || 'large']}
    ${spinnerModifiers.color[color || 'primary'](theme)}

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
  `}
`
