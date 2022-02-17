import { ButtonHTMLAttributes } from 'react'
import { Loading } from '../Loading'
import * as S from './styles'

export type ButtonProps = {
  width?: 'small' | 'full'
  color?: 'primary' | 'gray'
  isSelected?: boolean
  isLoading?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({
  children,
  width = 'small',
  color = 'gray',
  isSelected = false,
  isLoading = false,
  ...props
}: ButtonProps) => {
  return (
    <S.Wrapper
      disabled={isLoading}
      isSelected={isSelected}
      width={width}
      color={color}
      {...props}
    >
      {isLoading ? <Loading size="small" color="secondary" /> : <>{children}</>}
    </S.Wrapper>
  )
}
