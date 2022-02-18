import 'jest-styled-components'
import { screen } from '@testing-library/react'

import { PostCard } from '.'
import { renderWithTheme } from '../../utils/renderWithTheme'

describe('<PostCard />', () => {
  it('deve renderizar o componente com as propriedades passadas', () => {
    renderWithTheme(
      <PostCard
        title="Um título qualquer"
        userNickName="winnin"
        link="fakeLink"
        time={new Date().getTime()}
      />
    )

    expect(
      screen.getByLabelText(/avatar do autor da postagem/i)
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /um título qualquer/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/winnin/i).parentElement).toBeInTheDocument()

    const anchorElement = screen.getByRole('link', { name: /fakeLink/i })

    expect(anchorElement).toBeInTheDocument()
    expect(anchorElement).toHaveAttribute('href', 'fakeLink')
    expect(anchorElement).toHaveAttribute('target', '_blank')
  })
})
