import { format, parseISO } from "date-fns";
import Link from "next/link";
import React from "react";
import ViewCounter from "@/plugins/ViewCounter";
import { GithubIcon, WebsiteIcon } from "@/utils/Icons";

const ProjectDetails = ({
  publishedAt,
  website,
  github,
}: {
  publishedAt: string;
  website?: string;
  github?: string;
}) => {
  return (
    <div className="px-2  md:px-10 bg-accent dark:bg-accentDark text-light dark:text-dark py-2 flex items-center justify-around flex-wrap text-lg sm:text-xl font-medium mx-5  md:mx-10 rounded-lg">
      <time className="m-3">
        {format(parseISO(publishedAt), "LLLL d, yyyy")}
      </time>
      {/* <span className="m-3"> */}
      {/* <ViewCounter slug={slug} /> */}
      {/* </span> */}
      {website && (
        <Link
          href={website ? website : "#"}
          className="flex items-center mr-4 hover:scale-125 transition-all ease duration-200 "
          aria-label="website"
          target="_blank"
        >
          <WebsiteIcon className=" text-light w-8" />
          <span className="">网址</span>
        </Link>
      )}

      {github && (
        <Link
          href={github ? github : "#"}
          className="flex  items-center mr-4 hover:scale-125 transition-all ease duration-200"
          aria-label="github"
          target="_blank"
        >
          <GithubIcon className=" text-light w-8" />
          <span className="">源码</span>
        </Link>
      )}
    </div>
  );
};

export default ProjectDetails;
