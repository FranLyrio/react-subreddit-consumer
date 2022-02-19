import 'jest-styled-components'
import { screen } from '@testing-library/react'

import { PostCard } from '.'
import { renderWithTheme } from '../../utils/renderWithTheme'

describe('<PostCard />', () => {
  it('deve renderizar o componente com as propriedades passadas', () => {
    const { container } = renderWithTheme(
      <PostCard
        title="Um título qualquer"
        userNickName="winnin"
        link="winnin.com"
        time={new Date().setHours(new Date().getHours() - 2) / 1000}
      />
    )

    expect(
      screen.getByLabelText(/imagem relacionada à postagem/i)
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /um título qualquer/i })
    ).toBeInTheDocument()

    expect(container).toHaveTextContent(/enviado há 2 horas por winnin/)

    const anchorElement = screen.getByRole('link', { name: /winnin.com/i })
    expect(anchorElement).toBeInTheDocument()
    expect(anchorElement).toHaveAttribute('href', 'winnin.com')
    expect(anchorElement).toHaveAttribute('target', '_blank')
  })
})
