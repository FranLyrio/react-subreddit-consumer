import 'jest-styled-components'
import { screen } from '@testing-library/react'

import { Loading } from '.'
import { renderWithTheme } from '../../utils/renderWithTheme'

describe('<Loading />', () => {
  it('deve renderizar o componente com suas propriedades padrão', () => {
    renderWithTheme(<Loading data-testid="loading" />)

    const loading = screen.getByTestId('loading')
    expect(loading).toBeInTheDocument()
    expect(loading).toHaveStyle({
      width: '4rem',
      height: '4rem',
      'border-left-color': '#6324c6'
    })
  })

  it('deve renderizar o componente com cor "secondary ao passar propriedade', () => {
    renderWithTheme(<Loading data-testid="loading" color="secondary" />)

    const loading = screen.getByTestId('loading')
    expect(loading).toHaveStyle({
      'border-left-color': '#e5e5e5'
    })
  })

  it('deve renderizar o componente com tamanho "small" ao passar propriedade', () => {
    renderWithTheme(<Loading data-testid="loading" size="small" />)

    const loading = screen.getByTestId('loading')
    expect(loading).toHaveStyle({
      height: '2rem',
      width: '2rem'
    })
  })
})
