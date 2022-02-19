import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

type WrapperProps = Pick<ButtonProps, 'width' | 'color' | 'isSelected'>

export const buttonModifiers = {
  full: () => css`
    max-width: 100%;
  `,
  withPrimaryColor: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary};

    &:hover {
      background-color: ${theme.colors.primary};
      opacity: 0.8;
    }
  `,
  disabled: () => css`
    :disabled {
      cursor: not-allowed;
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, width, color, isSelected, disabled }) => css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.gray};
    font-weight: ${theme.fonts.weight.normal};
    font-size: ${theme.fonts.size.medium};
    line-height: ${theme.fonts.lineHeight.medium};
    height: 4.8rem;
    width: 100%;
    max-width: 20.2rem;

    border-radius: 0.8rem;
    transition: 0.2s;

    &:hover {
      background-color: ${theme.colors.grayDark};
      opacity: 0.6;
    }

    ${width === 'full' && buttonModifiers.full()}
    ${color === 'primary' && buttonModifiers.withPrimaryColor(theme)}
    ${isSelected && buttonModifiers.withPrimaryColor(theme)}
    ${disabled && buttonModifiers.disabled()}
  `}
`
