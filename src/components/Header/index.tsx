import logoImage from '../../assets/logo.svg'

import * as S from './styles'

export const Header = () => {
  return (
    <S.Wrapper>
      <img src={logoImage} alt="Uma logo escrito REACTJS" />
    </S.Wrapper>
  )
}
