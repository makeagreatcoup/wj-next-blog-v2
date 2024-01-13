import { sortBlogs } from "@/utils";
import Link from "next/link";
import React from "react";
import BlogLayoutThree from "../BlogComponents/BlogLayoutThree";

const RecentPosts = ({ blogs }:{blogs:any}) => {
  // const sortedBlogs = sortBlogs(blogs);
  return (
    <section className="w-full  mt-16 sm:mt-24  md:mt-32 px-5 sm:px-10 md:px-24  sxl:px-32 flex flex-col items-center justify-center">
      <div className="w-full flex  justify-between">
        <h2 className="w-fit inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
          最近文章
        </h2>
        <Link
          href="/categories/All"
          className="inline-block font-medium text-accent dark:text-accentDark underline underline-offset-2 text-base md:text-lg"
        >
          展示全部
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mt-16">
        {blogs.map((blog:any, index:number) => {
          return (
            <article key={index} className="col-span-1 row-span-1 relative">
              <BlogLayoutThree blog={blog} />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default RecentPosts;
