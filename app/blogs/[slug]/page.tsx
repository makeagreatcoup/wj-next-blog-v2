import Tag from "@/components/Elements/Tag";
import React from "react";
import Image from "next/image";
import BlogDetails from "@/components/BlogComponents/BlogDetails";
import { getStrapiMedia } from "@/app/[lang]/utils/api-helpers";
import { getBlogOne } from "@/app/api/blog";

import "@/app/article.css";
import MarkdownTocHtml from "@/components/BlogComponents/BlogMarkdownToc";

const BlogBySlug = async ({ params }: { params: { slug: string } }) => {
  const { data } = await getBlogOne({ slug: params.slug });
  if (data.length == 0) {
    return;
  }
  const blog = data[0];
  const {
    title,
    summary,
    publishedAt,
    cover,
    body,
    readingTime,
    slug,
    category,
    author,
  } = blog.attributes;
  // const authorName = author.data?.attributes.name;
  const imageUrl = getStrapiMedia(cover.data?.attributes.url);
  const formats = cover?.data?.attributes?.formats;
  return (
    <>
      <article>
        <div className="mb-8 text-center relative w-full h-[70vh] bg-dark">
          <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Tag
              name={category.data?.attributes.name}
              link={`/categories/${category.data?.attributes.slug}`}
              className="px-6 text-sm py-2"
            />
            <h1 className="inline-block mt-6 font-semibold capitalize text-light text-2xl md:text-3xl lg:text-5xl !leading-normal relative w-5/6">
              {title}
            </h1>
          </div>
          <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-dark/60 dark:bg-dark/40" />
          {
            imageUrl && (
              <Image
              src={getStrapiMedia(imageUrl)}
              placeholder={formats ? "blur" : "empty"}
              blurDataURL={getStrapiMedia(formats?.thumbnail?.url)}
              alt={cover.data?.attributes?.name}
              width={cover?.data?.attributes?.width}
              height={cover?.data?.attributes?.height}
              className="aspect-square w-full h-full object-cover object-center"
              priority
              sizes="100vw"
            />
            )
          }
        </div>
        <BlogDetails
          slug={params.slug}
          publishedAt={publishedAt}
          readingTime={readingTime}
          categorySlug={category.data?.attributes.slug}
          categoryName={category.data?.attributes.name}
        />

        {/* <div className="grid grid-cols-12  gap-y-8 lg:gap-8 sxl:gap-16 mt-8 px-5 md:px-10">
          <div className="col-span-12  lg:col-span-4">
            <details
              className="border-[1px] border-solid border-dark dark:border-light text-dark dark:text-light rounded-lg p-4 sticky top-6 max-h-[80vh] overflow-hidden overflow-y-auto"
              open
            >
              <summary className="text-lg font-semibold capitalize cursor-pointer">
                目录
              </summary>
              <ul className="mt-4 font-in text-base">
                {blog?.toc?.map((heading: any) => {
                  return (
                    <li key={`#${heading.slug}`} className="py-1">
                      <a
                        href={`#${heading.slug}`}
                        data-level={heading.level}
                        className="data-[level=two]:pl-0  data-[level=two]:pt-2
                                       data-[level=two]:border-t border-solid border-dark/40
                                       data-[level=three]:pl-4
                                       sm:data-[level=three]:pl-6
                                       flex items-center justify-start
                                       "
                      >
                        {heading.level === "three" ? (
                          <span className="flex w-1 h-1 rounded-full bg-dark mr-2">
                            &nbsp;
                          </span>
                        ) : null}

                        <span className="hover:underline">{heading.text}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </details>
          </div>
        </div> */}

        <article className=" prose max-w-full w-full my-4 px-12 relative">
          <div
            className="rich-text"
            dangerouslySetInnerHTML={{
              __html: MarkdownTocHtml({ markdown: body }),
            }}
          ></div>
        </article>
      </article>
    </>
  );
};

export default BlogBySlug;
