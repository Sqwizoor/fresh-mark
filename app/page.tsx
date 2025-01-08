"use client"

import HeroSection from '@/components/HeroSection'
import WelcomeSection from '@/components/WelcomeSection'
import FeaturedSection from '@/components/FeaturedSection'
import NewsSection from '@/components/NewsSection'
import FAQSection from '@/components/FAQSection'
import FloatingIcons from './about/FixedButtons'
import BlogList from './components/BlogList'
import { client } from '@/lib/sanity.client'



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
    <main>
      <HeroSection />
      <WelcomeSection />
      <FeaturedSection />
       <BlogList posts={posts} />
      <FloatingIcons/>
      <FAQSection />
    </main>
  )
}

