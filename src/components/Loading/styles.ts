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
      border: 0.3rem solid ${theme.lightTheme.backgroundColor.main};
      border-left-color: ${theme.lightTheme.backgroundColor.primary};
    `,
    secondary: (theme: DefaultTheme) => css`
      border: 0.3rem solid ${theme.lightTheme.backgroundColor.primary};
      border-left-color: ${theme.lightTheme.backgroundColor.main};
    `
  }
}

export const Spinner = styled.div<LoadingProps>`
  ${({ theme, size, color }) => css`
    border-radius: 50%;
    margin: auto;
    justify-self: center;
    animation: spin 1s linear infinite;

    ${spinnerModifiers.size[size || 'large']}
    ${spinnerModifiers.color[color || 'primary'](theme)}

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
  `}
`
