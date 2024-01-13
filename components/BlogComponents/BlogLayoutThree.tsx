import { format } from 'date-fns'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { getStrapiMedia } from '@/app/[lang]/utils/api-helpers'

const BlogLayoutThree = ({blog}:{blog:any}) => {
  const imageUrl = blog.attributes?.cover?.data?.attributes?.url;

  return (
    <div className="group flex flex-col items-center text-dark dark:text-light">
      <Link href={`/blogs/${blog.attributes?.slug}`} className="h-full rounded-xl overflow-hidden">
        {
          imageUrl && (
            <Image
            src={getStrapiMedia(blog.attributes?.cover?.data?.attributes?.url)}
            placeholder={blog.attributes?.cover?.data?.attributes?.formats?'blur':'empty'}
            blurDataURL={getStrapiMedia(blog.attributes?.cover?.data?.attributes?.formats?.thumbnail?.url)}
            alt={blog.attributes.cover?.data?.attributes?.name}
            width={blog.attributes.cover?.data?.attributes?.width}
            height={blog.attributes.cover?.data?.attributes?.height}
            className=" aspect-[4/3] w-full h-full object-cover object-center  group-hover:scale-105 transition-all ease duration-300 "
            sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
          />
          )
        }

      </Link>

      <div className="flex flex-col w-full mt-4">
        <span className="uppercase text-accent dark:text-accentDark font-semibold text-xs sm:text-sm">
          {blog.attributes?.category?.data.attributes?.name}
        </span>
        <Link href={`/blogs/${blog.attributes?.slug}`} className="inline-block my-1">
          <h2 className="font-semibold capitalize  text-base sm:text-lg">
            <span
              className="bg-gradient-to-r from-accent/50 to-accent/50  dark:from-accentDark/50
              dark:to-accentDark/50
              bg-[length:0px_6px]
              group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
            >
              {blog.attributes?.title}
            </span>
          </h2>
        </Link>

        <span className="capitalize text-gray dark:text-light/50 font-semibold text-sm  sm:text-base">
          {format(new Date(blog.attributes?.publishedAt), "MMMM dd, yyyy")}
        </span>
      </div>
    </div>
  )
}

export default BlogLayoutThree