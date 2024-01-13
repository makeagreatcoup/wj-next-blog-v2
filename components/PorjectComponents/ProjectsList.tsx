'use client'
import React, { useEffect, useState } from "react";
import ProjectLayout from "./ProjectLayout";
import { useRouter } from "next/navigation";

const ProjectsList = ({
  projects,
  page,
  limit,
  total,
}: {
  projects: any[];
  page: number;
  limit: number;
  total: number;
}) => {
  const router = useRouter();
  const [next, setNext] = useState(false);
  const [allProjects, setProjects] = useState<any>([]);
  const [currentPage, setPage] = useState(1);

  const fetch = () => {
    setNext(total > page * limit);
    setProjects((prevProjects: any) => {
      if (page !== currentPage) {
        router.push(`?`);
      }
      setPage(page + 1);
      if (page === 1) {
        return [...projects];
      }
      if (prevProjects.length < page * limit) {
        return [...prevProjects, ...projects];
      } else {
        return [...prevProjects];
      }
    });
  };
  useEffect(() => {
    fetch();
  }, [page]);
  return (
    <>
      <div className="grid  grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 grid-rows-2 gap-16 mt-5 sm:mt-10 md:mt-24 sxl:mt-24 px-5 sm:px-10 md:px-24 sxl:px-32">
        {allProjects.map((project: any, index: number) => (
          <article key={index} className="col-span-1 row-span-1 relative">
            <ProjectLayout project={project} />
          </article>
        ))}
      </div>
      {next && (
        <div className="w-full flex justify-center">
          <button
            className=" w-fit font-semibold inline-block capitalize text-base xs:text-lg sm:text-xl  md:text-2xl py-2 xs:py-3 sm:py-4 lg:py-5 px-4 xs:px-6 sm:px-8 lg:px-12 border-2 border-solid border-dark dark:border-light rounded hover:scale-105 transition-all ease duration-200 cursor-pointer dark:font-normal"
            onClick={() => router.push(`?proPage=${page + 1}`, { scroll: false })}
          >
            更多
          </button>
        </div>
      )}
    </>
  );
};

export default ProjectsList;
