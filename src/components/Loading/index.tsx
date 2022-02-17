import * as S from './styles'

export type LoadingProps = {
  size?: 'large' | 'small'
  color?: 'primary' | 'secondary'
}

export const Loading = ({ size, color }: LoadingProps) => (
  <S.Spinner size={size} color={color} />
)
