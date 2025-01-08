import Image from 'next/image'
import Link from 'next/link'
import { urlForImage } from '@/lib/sanity.image'

export default function BlogList({ posts }: { posts: any[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <Link href={`/post/${post.slug.current}`} key={post._id} className="group">
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 ease-in-out group-hover:scale-105">
            {post.mainImage && (
              <Image
                src={urlForImage(post.mainImage).url()}
                alt={post.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600">{post.title}</h2>
              <p className="text-gray-600 text-sm">
                By {post.author.name} | {new Date(post.publishedAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

