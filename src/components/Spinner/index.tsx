import * as S from './styles'

export type LoadingProps = {
  size?: 'large' | 'small'
  color?: 'primary' | 'secondary'
}

export const Spinner = ({ size, color, ...props }: LoadingProps) => (
  <S.Spinner size={size} color={color} {...props} />
)
