import { useMemo } from 'react'
import { timeDifference } from '../../utils/timeDifference'
import * as S from './styles'

type PostCardProps = {
  title?: string
  time?: number
  userNickName?: string
  link?: string
  media?: string
}

export const PostCard = ({
  link,
  time,
  title,
  userNickName,
  media
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
        <S.Image>
          <img
            src={media ? media : undefined}
            aria-label="Imagem relacionada à postagem"
          />
        </S.Image>

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
