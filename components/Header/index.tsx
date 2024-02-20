"use client";
import { ThemeContext } from "@/context/ThemeContext";
import { cx } from "@/utils";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedinIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "@/utils/Icons";
import siteMetadata from "@/utils/siteMetaData";
import Logo from "./Logo";
import {useThemeSwitch} from '@/Hooks/useThemeSwitch'

const Header = () => {
  const {theme,switchTheme} = useContext(ThemeContext)
  // const { mode, setMode } = useThemeSwitch();
  const [click, setClick] = useState(false);
  const [currentClass ,setCurrentClass] = useState("")
  useEffect(()=>{
    setCurrentClass(theme === "light" ? "bg-dark text-light" : "bg-light text-dark")
  },[theme])

  return (
    <header className="w-full p-4  px-5 sm:px-10 flex items-center justify-between">
      <Logo />
      <button
        className="inline-block sm:hidden z-50"
        onClick={() => setClick(!click)}
        aria-label="Menu"
      >
        <div className="w-6 cursor-pointer transition-all ease duration-300">
          <div className="relative">
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? "rotate(-45deg) translateY(0)"
                  : "rotate(0deg) translateY(6px)",
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                opacity: click ? 0 : 1,
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? "rotate(45deg) translateY(0)"
                  : "rotate(0deg) translateY(-6px)",
              }}
            >
              &nbsp;
            </span>
          </div>
        </div>
      </button>

      <nav
        className=" w-max py-3 px-6 sm:px-8 border border-solid border-dark rounded-full font-medium capitalize  items-center flex  sm:hidden
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50
         text-dark
        "
        style={{
          top: click ? "1rem" : "-5rem",
        }}
      >
        <Link href="/" className="mr-2">
          主页
        </Link>
        <Link href="/tags" className="mx-2">
          项目
        </Link>
        <Link href="/about" className="mx-2">
          关于
        </Link>
        {/* <Link href="/contact" className="mx-2">
          联系
        </Link> */}
        <button
          onClick={() => switchTheme(theme === "light" ? "dark" : "light")}
          className={cx(
            "w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1",
            currentClass
          )}
          aria-label="theme-switcher"
        >
          {theme === "light" ? (
            <MoonIcon className={"fill-dark"} />
          ) : (
            <SunIcon className={"fill-dark"} />
          )}
        </button>
      </nav>

      <nav
        className=" w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize  items-center hidden sm:flex
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50 text-dark"
      >
        <Link href="/" className="mr-2">
        主页
        </Link>
        <Link href="/tags" className="mx-2">
          项目
        </Link>
        <Link href="/about" className="mx-2">
        关于
        </Link>
        {/* <Link href="/contact" className="mx-2">
        联系
        </Link> */}
        <button
          onClick={() => switchTheme(theme === "light" ? "dark" : "light")}
          className={cx(
            "w-6 h-6  ml-2 flex items-center justify-center rounded-full p-1",
            currentClass
          )}
          aria-label="theme-switcher"
        >
          {theme === "light" ? (
            <MoonIcon className={"fill-dark"} />
          ) : (
            <SunIcon className={"fill-light"} />
          )}
        </button>
      </nav>
      <div className=" hidden sm:flex items-center">
        {/* <a
          href={siteMetadata.linkedin}
          className="inline-block w-6 h-6 mr-4"
          aria-label="Reach out to me via LinkedIn"
          target="_blank"
        >
          <LinkedinIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href={siteMetadata.twitter}
          className="inline-block w-6 h-6 mr-4"
          aria-label="Reach out to me via Twitter"
          target="_blank"
        >
          <TwitterIcon className="hover:scale-125 transition-all ease duration-200" />
        </a> */}
        <a
          href={siteMetadata.github}
          className="inline-block w-6 h-6 mr-4"
          aria-label="Check my profile on Github"
          target="_blank"
        >
          <GithubIcon className=" w-full hover:scale-125 transition-all ease duration-200 dark:fill-light" />
        </a>
        {/* <a
          href={siteMetadata.dribbble}
          className="inline-block w-6 h-6 mr-4"
          aria-label="Check my profile on Dribbble"
          target="_blank"
        >
          <DribbbleIcon className="hover:scale-125 transition-all ease duration-200" />
        </a> */}
      </div>
    </header>
  );
};

export default Header;
