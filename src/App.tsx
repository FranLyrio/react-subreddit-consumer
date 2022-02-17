import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/themes/global'
import { Posts } from './pages/Posts'
import theme from './styles/themes'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Posts />
    </ThemeProvider>
  )
}
