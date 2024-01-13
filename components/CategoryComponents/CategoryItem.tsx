import { cx } from '@/utils';
import Link from 'next/link';
import React from 'react'

const CategoryItem = ({ link = "#", name, active, className }:{link?:string,name:string, active:boolean, className?:string}) => {
    return (
      <Link
        href={link}
        className={cx(
          "inline-block py-1.5  md:py-2 px-6  md:px-10   rounded-full border-2 border-solid border-dark dark:border-light hover:scale-105 transition-all ease duration-200 m-2",
          className,
          active ? "bg-dark text-light dark:bg-light dark:text-dark" : "bg-light text-dark dark:bg-dark dark:text-light"
        )}
      >
        #{name}
      </Link>
    );
  
  
}

export default CategoryItem