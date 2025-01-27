
import { Navbar } from '@/components/Navbar'
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
    <main className="container mx-auto  mt-[6rem] px-4 ">
    
      <h1 className="text-4xl font-bold text-italic pb-7  text-center">FreshMark News</h1>
      <BlogList posts={posts} />
    </main>
  )
}

