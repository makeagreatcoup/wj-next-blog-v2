import { cx } from "@/utils";
import Link from "next/link";
import React from "react";

const Tag = ({ link = "#", name, className,icon ='#' }:{link:string,name:string,className?:string,icon?:string}) => {
  return (
    <Link
      href={link}
      className={cx(
        "inline-block py-2 sm:py-3 px-6 sm:px-10  bg-dark text-light rounded-full capitalize font-semibold border-2 border-solid border-light hover:scale-105 transition-all ease duration-200 text-sm sm:text-base",
        className
      )}
    >
      {icon}{name}
    </Link>
  );
};

export default Tag;
