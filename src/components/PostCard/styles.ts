import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.3rem;
  margin: 1.2rem 0;
`

export const WrapperInfo = styled.div`
  flex: 1;
`

export const Avatar = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.lightTheme.backgroundColor.gray};
    width: 7.7rem;
    height: 7.7rem;
    border-radius: 0.8rem;
  `}
`

export const Title = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.fonts.size.medium};
    font-weight: ${theme.fonts.weight.normal};
  `}
`

export const SubTitle = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fonts.size.small};
    font-weight: ${theme.fonts.weight.light};
    color: ${theme.lightTheme.grayDark};

    display: flex;
    gap: 0.5rem;
  `}
`

export const NickName = styled.span`
  ${({ theme }) => css`
    color: ${theme.lightTheme.backgroundColor.primary};
  `}
`

export const Link = styled.a`
  ${({ theme }) => css`
    font-size: ${theme.fonts.size.small};
    font-weight: ${theme.fonts.weight.bold};
    margin-top: 0.9rem;
    display: block;
    color: ${theme.lightTheme.fontColor.black};
    transition: 0.3s;

    :hover {
      text-decoration: underline;
    }
  `}
`

export const Divider = styled.span`
  ${({ theme }) => css`
    border: 0;
    display: flex;
    align-items: center;
    white-space: nowrap;

    &::before,
    &::after {
      width: 100%;
      content: '';
      border-top: 0.1rem solid ${theme.lightTheme.grayDark};
      transform: translateY(50%);
    }
  `}
`
