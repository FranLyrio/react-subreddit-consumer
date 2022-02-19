import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  padding-bottom: 3.8rem;
`

export const HeaderWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.main};
    position: sticky;
    top: 0;
    width: 100%;

    display: flex;
    flex-direction: column;
    z-index: 1;
  `}
`

export const ButtonsWrapper = styled.div`
  margin: 2.1rem 0;
  padding: 0 1.2rem;
  width: 100%;

  display: flex;
  justify-content: center;

  button + button {
    margin-left: 1.6rem;
  }
`

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1060px;
  margin: 0 auto;

  position: relative;

  display: flex;
  flex-direction: column;
  padding: 0 1.2rem;
`
