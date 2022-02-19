import { useCallback } from 'react'
import { PostsResponse } from './types'

export const useRedditService = () => {
  const getPosts = useCallback(
    async (category: string, after?: string): Promise<PostsResponse> => {
      try {
        const response = await fetch(
          `https://www.reddit.com/r/reactjs/${category}.json?count=1&raw_json=1&after=${after}`
        )

        const { data } = await response.json()

        const teste = {
          posts: data.children.map((item: any) => item.data),
          after: data.after
        }

        return teste
      } catch (error) {
        alert(
          'Oops! Ocorreu um erro ao carregar dados. Tente novamente mais tarde.'
        )
        throw new Error()
      }
    },
    []
  )

  return { getPosts }
}
