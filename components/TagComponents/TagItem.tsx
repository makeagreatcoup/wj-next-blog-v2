import { cx } from "@/utils";
import Link from "next/link";
import React from "react";

const TagItem = ({
  link = "#",
  name,
  active,
  className,
  icon = "#",
  number,
}: {
  link?: string;
  name: string;
  active: boolean;
  className?: string;
  icon?: string;
  number?: number;
}) => {
  return (
    <Link
      href={link}
      className={cx(
        "inline-block  py-1  md:py-2 px-4  md:px-6   rounded-full border-2 border-solid border-dark dark:border-light hover:scale-105 transition-all ease duration-200 m-2",
        className,
        active
          ? "bg-dark text-light dark:bg-light dark:text-dark"
          : "bg-light text-dark dark:bg-dark dark:text-light"
      )}
    >
      {icon}
      {name}
      {number && number !== 0 ? (
        <span className="text-xs ml-2 rounded-full bg-red-700 inline-block  text-center w-4 h-4">
          {number}
        </span>
      ) : (
        <></>
      )}
    </Link>
  );
};

export default TagItem;
