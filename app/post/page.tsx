import { client } from '../../lib/sanity.client'
import BlogList from '../components/BlogList'

async function getPosts() {
  const posts = await client.fetch(`*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    author->{name}
  }`)
  return posts
}

export default async function Home() {
  const posts = await getPosts()

  return (
    <main className="container mx-auto  mt-[6rem] px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">My Modern Blog</h1>
      <BlogList posts={posts} />
    </main>
  )
}

