import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
    font-size: 62.5%;
  }

  ${({ theme }) => theme.breakpoints.small} {
    html {
      font-size: 54%;
    }
  }

  body {
    ${({ theme }) => css`
      font-family: ${theme.fonts.family};
      background-color: ${theme.colors.main};
    `}
  }

  #root {
    min-height: 100vh;
  }

  button, a {
    border: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`
