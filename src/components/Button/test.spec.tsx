import 'jest-styled-components'
import { screen } from '@testing-library/react'

import { Button } from '.'
import { renderWithTheme } from '../../utils/renderWithTheme'

describe('<Button />', () => {
  it('deve renderizar o componente com suas propriedades padrão', () => {
    renderWithTheme(<Button />)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle({
      'background-color': '#a7b0be',
      width: '20.2rem'
    })
  })

  it('deve renderizar o componente com cor primária de fundo', () => {
    renderWithTheme(<Button color="primary" />)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle({
      'background-color': '#6324c6'
    })
  })

  it('deve renderizar o componente com largura total', () => {
    renderWithTheme(<Button width="full" />)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle({
      width: '100%'
    })
  })

  it('deve renderizar o componente desabilitado quando estiver em estado de carregamento', () => {
    renderWithTheme(<Button isLoading />)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveStyleRule('cursor', 'not-allowed', {
      modifier: ':disabled'
    })
  })

  it('não deve renderizar o elemento filho quando estiver em estado de carregamento', () => {
    renderWithTheme(
      <Button isLoading>
        <p>Meu elemento filho</p>
      </Button>
    )

    const children = screen.queryByText(/meu elemento filho/i)
    expect(children).not.toBeInTheDocument()
  })
})
