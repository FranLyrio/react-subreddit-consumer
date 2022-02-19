import { useEffect, useMemo } from 'react'
import { timeDifference } from '../../utils/timeDifference'
import * as S from './styles'

type PostCardProps = {
  title?: string
  time?: number
  userNickName?: string
  link?: string
}

export const PostCard = ({
  link,
  time,
  title,
  userNickName
}: PostCardProps) => {
  const diffTime = useMemo(() => {
    if (time) {
      return timeDifference(time)
    }
  }, [time])

  return (
    <S.PostCard>
      <S.Divider />

      <S.Wrapper>
        <S.Avatar role="img" aria-label="Avatar do autor da postagem" />

        <S.WrapperInfo>
          <S.Title>{title}</S.Title>
          <S.SubTitle>
            enviado há {diffTime} por <S.NickName>{userNickName}</S.NickName>
          </S.SubTitle>
          <S.Link href={link} target="_blank">
            {link}
          </S.Link>
        </S.WrapperInfo>
      </S.Wrapper>
    </S.PostCard>
  )
}
