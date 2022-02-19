import logoImage from '../../assets/logo.svg'

import * as S from './styles'

export const Header = () => {
  return (
    <S.Header>
      <img src={logoImage} alt="Uma logo escrito REACTJS" />
    </S.Header>
  )
}
