import * as S from './styles'

type PostCardProps = {
  title?: string
  time?: Date
  userNickName?: string
  link?: string
}

export const PostCard = ({
  link,
  time,
  title,
  userNickName
}: PostCardProps) => {
  return (
    <div>
      <S.Divider />

      <S.Wrapper>
        <S.Avatar />

        <S.WrapperInfo>
          <S.Title>{title}</S.Title>
          <S.SubTitle>
            enviado há {time} por <S.NickName>{userNickName}</S.NickName>
          </S.SubTitle>
          <S.Link href={link} target="_blank">
            {link}
          </S.Link>
        </S.WrapperInfo>
      </S.Wrapper>
    </div>
  )
}
