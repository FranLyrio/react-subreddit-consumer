import { useCallback, useEffect, useState } from 'react'

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { PostCard } from '../../components/PostCard'
import { Loading } from '../../components/Loading'

import { useRedditService } from '../../service/redditService'
import { Post } from '../../service/types'

import * as S from './styles'

export const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [category, setCategory] = useState<'hot' | 'new' | 'rising'>('hot')
  const [afterPosts, setAfterPosts] = useState('')
  const [isLoading, setIsLoading] = useState<boolean>()
  const [isLoadingMorePosts, setIsLoadingMorePosts] = useState(false)

  const { getPosts } = useRedditService()

  const loadPosts = useCallback(async () => {
    setIsLoading(true)
    const { posts, after } = await getPosts(category).finally(() =>
      setIsLoading(false)
    )

    setPosts(posts)
    setAfterPosts(after)
  }, [category, getPosts])

  const loadMorePosts = useCallback(async () => {
    setIsLoadingMorePosts(true)
    const { posts, after } = await getPosts(category, afterPosts)

    setPosts((prev) => [...prev, ...posts])
    setAfterPosts(after)
    setIsLoadingMorePosts(false)
  }, [afterPosts, category, getPosts])

  useEffect(() => {
    loadPosts()
  }, [loadPosts])

  const changeCategory = (category: 'hot' | 'new' | 'rising') => {
    setCategory(category)
  }

  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <Header />

        <S.ButtonsWrapper>
          <Button
            isSelected={category === 'hot'}
            onClick={() => changeCategory('hot')}
          >
            Hot
          </Button>
          <Button
            isSelected={category === 'new'}
            onClick={() => changeCategory('new')}
          >
            News
          </Button>
          <Button
            isSelected={category === 'rising'}
            onClick={() => changeCategory('rising')}
          >
            Rising
          </Button>
        </S.ButtonsWrapper>
      </S.HeaderWrapper>

      <S.PostWrapper>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {posts.map((post, index) => (
              <PostCard
                key={index}
                link={post.url}
                time={post.created_utc}
                title={post.title}
                userNickName={post.author}
              />
            ))}

            {!!afterPosts && (
              <Button
                color="primary"
                width="full"
                onClick={loadMorePosts}
                isLoading={isLoadingMorePosts}
              >
                + Ver mais
              </Button>
            )}
          </>
        )}
      </S.PostWrapper>
    </S.Wrapper>
  )
}
