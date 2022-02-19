import styled, { css } from 'styled-components'

export const PostCard = styled.div`
  background-color: transparent;
`

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.3rem;
  margin: 1.2rem 0;
`

export const Avatar = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray};
    width: 7.7rem;
    height: 7.7rem;
    border-radius: 0.8rem;

    ${theme.breakpoints.small} {
      display: none;
    }
  `}
`

export const WrapperInfo = styled.div`
  width: 100%;
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
    color: ${theme.colors.grayDark};

    display: flex;
    gap: 0.5rem;
  `}
`

export const NickName = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`

export const Link = styled.a`
  ${({ theme }) => css`
    font-size: ${theme.fonts.size.small};
    font-weight: ${theme.fonts.weight.bold};
    color: ${theme.colors.black};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    max-width: 95rem;

    margin-top: 0.9rem;
    display: block;
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
      border-top: 0.1rem solid ${theme.colors.grayDark};
      transform: translateY(50%);
    }
  `}
`
