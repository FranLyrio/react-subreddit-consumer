export type Post = {
  id: string
  url: string
  created_utc: number
  title: string
  author: string
  preview?: {
    images: [{ source: { url: string } }]
  }
}

export type PostsResponse = {
  after: string
  posts: Post[]
}
