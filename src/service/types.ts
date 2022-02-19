type Image = {
  source: {
    resolutions?: [{ url: string }]
    url: string
  }
}

export type Post = {
  id: string
  url: string
  created_utc: number
  title: string
  author: string
  preview?: {
    images: Image[]
  }
}

export type PostsResponse = {
  after: string
  posts: Post[]
}
