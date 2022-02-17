export type Post = {
  id: string
  url: string
  created_utc: Date
  title: string
  author: string
}

export type PostsResponse = {
  after: string
  posts: Post[]
}
