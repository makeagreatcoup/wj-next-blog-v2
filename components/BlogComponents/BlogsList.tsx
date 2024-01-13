"use client";
import React, { useEffect, useState } from "react";
import BlogLayoutThree from "./BlogLayoutThree";
import NextButton from "../Elements/NextButton";
import { useRouter } from "next/navigation";

const BlogsList = ({
  blogs,
  page,
  limit,
  total,
}: {
  blogs: any[];
  page: number;
  limit: number;
  total: number;
}) => {
  const router = useRouter();
  const [next, setNext] = useState(false);
  const [allBlogs, setBlogs] = useState<any>([]);
  const [currentPage,setPage] = useState(1);

  const fetchBlogs = () => {
    setNext(total > page * limit);
    setBlogs((prevBlogs: any) => {
      if(page !== currentPage){
        router.push(`?`);
      }
      setPage(page+1)
      if(page === 1){
        return [...blogs]
      }
      if(prevBlogs.length < page * limit){
        return [...prevBlogs, ...blogs]
      }else{
        return [...prevBlogs]
      }
    });
  };
  useEffect(() => {
      fetchBlogs();

  }, [page]);

  return (
    <>
      <div className="grid  grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 grid-rows-2 gap-16 mt-5 sm:mt-10 md:mt-24 sxl:mt-24 px-5 sm:px-10 md:px-24 sxl:px-32">
        {allBlogs.map((blog: any, index: number) => (
          <article key={index} className="col-span-1 row-span-1 relative">
            <BlogLayoutThree blog={blog} />
          </article>
        ))}
      </div>

      {next && (
        <div className="w-full flex justify-center">
        <button
          className=" w-fit font-semibold inline-block capitalize text-base xs:text-lg sm:text-xl  md:text-2xl py-2 xs:py-3 sm:py-4 lg:py-5 px-4 xs:px-6 sm:px-8 lg:px-12 border-2 border-solid border-dark dark:border-light rounded hover:scale-105 transition-all ease duration-200 cursor-pointer dark:font-normal"
          onClick={() => router.push(`?page=${page + 1}`, { scroll: false })}
        >
          更多
        </button>
        </div>

      )}
    </>
  );
};

export default BlogsList;
