import React, { Suspense } from "react";
import { Metadata } from "next";
import type { items as itemsTypes } from "@wix/data";
import Link from "next/link";
import { CardSkeleton } from "@/components/Skeletons/Skeletons";
import { WixMediaImage } from "@/components/Skeletons/WixMediaImage";
import { queryBlogs } from "@/components/blogs/blogs-api";
import { BLOGS_ROUTE } from "@/app/routes";

export const metadata: Metadata = {
  title: "Blog",
  description: "",
};

const BlogCard: React.FC<{ blog: itemsTypes.DataItem; index?: number }> = ({
  blog,
  index = -1,
}) => {
  return (
    <Link
      href={`${BLOGS_ROUTE}/${blog.data!.slug}`}
      className="flex flex-col max-md:border-b"
    >
      <div className="h-[400px] w-full">
        <WixMediaImage
          media={blog.data!.ingredients}
          width={600}
          height={800}
          objectFit="cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={index != -1 && index < 3}
        />
      </div>
      <h1 className="card-title">{blog.data!.dishName}</h1>
      <p className="card-subtitle max-md:mb-8">
        {blog.data!.preparationInstructions.substring(0, 132)}...
      </p>
    </Link>
  );
};

async function Blogs() {
  const items = await queryBlogs();

  return (
    <div className="grid gap-x-5 gap-y-8 p-[20px] lg:grid-cols-3 max-w-[980px] mx-[auto]">
      {items!.map((post, index) => (
        <BlogCard key={post._id} blog={post} index={index} />
      ))}
    </div>
  );
}

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="grid gap-x-5 gap-y-8 p-[20px] lg:grid-cols-3 max-w-[980px] mx-[auto]">
          {[...Array(6)].map((_, i) => {
            return (
              <div
                key={i}
                className="flex flex-col max-md:mx-auto max-md:w-96 max-md:justify-center"
              >
                <div
                  role="status"
                  className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
                >
                  <CardSkeleton height={"96"} />
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            );
          })}
        </div>
      }
    >
      <Blogs />
    </Suspense>
  );
}