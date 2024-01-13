import { format, parseISO } from "date-fns";
import Link from "next/link";
import React from "react";
import ViewCounter from "@/plugins/ViewCounter";

const BlogDetails = ({ publishedAt, slug,readingTime,categorySlug,categoryName }:{publishedAt:string,slug:string,readingTime:string,categorySlug:string,categoryName:string}) => {
  return (
    <div className="px-2  md:px-10 bg-accent dark:bg-accentDark text-light dark:text-dark py-2 flex items-center justify-around flex-wrap text-lg sm:text-xl font-medium mx-5  md:mx-10 rounded-lg">
      <time className="m-3">
        {format(parseISO(publishedAt), "LLLL d, yyyy")}
      </time>
      <span className="m-3">
        {/* <ViewCounter slug={slug} /> */}
      </span>
      <div className="m-3">{readingTime}</div>
      <Link href={`/categories/${categorySlug}`} className="m-3">
        #{categoryName}
      </Link>
    </div>
  );
};

export default BlogDetails;
