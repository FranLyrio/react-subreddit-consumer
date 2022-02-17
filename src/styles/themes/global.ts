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

  body {
    ${({ theme }) => css`
      font-family: ${theme.fonts.family};
    `}
  }

  #root {
    ${({ theme }) => css`
      background-color: ${theme.lightTheme.backgroundColor.main};
      min-height: 100vh;
    `}
  }

  button, a {
    border: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`
