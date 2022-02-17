import 'jest-styled-components'
import { screen } from '@testing-library/react'

import { Header } from '.'
import { renderWithTheme } from '../../utils/renderWithTheme'

describe('<Header />', () => {
  it('deve renderizar o componente', () => {
    renderWithTheme(<Header />)

    expect(
      screen.getByAltText(/uma logo escrito reactjs/i).parentElement
    ).toBeInTheDocument()
  })
})
