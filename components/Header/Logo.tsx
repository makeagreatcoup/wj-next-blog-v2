'use client'
import Image from "next/image"
import Link from "next/link"
import { useThemeSwitch } from "@/Hooks/useThemeSwitch"
import blackLogo from "@/public/wujijuw-high-resolution-logo-black-transparent.svg"
import lightLogo from "@/public/wujijuw-high-resolution-logo-white-transparent.svg"
import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "@/context/ThemeContext"

const Logo = () => {
  // const { mode } = useThemeSwitch();
  const {theme,switchTheme} = useContext(ThemeContext)

  const [logoImg,setLogoImg] = useState(theme === "dark" ? blackLogo : lightLogo)
  useEffect(()=>{
    console.log(theme)
    setLogoImg(theme === "dark" ? blackLogo : lightLogo)
  },[theme])
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
        <div className=" w-12 md:w-16 rounded-full overflow-hidden  dark:border-gray  mr-2 md:mr-4">
            <Image src={logoImg} alt="CodeBucks logo" className="w-full h-auto rounded-full" sizes="20vw" priority />
        </div>
        <span className="font-bold dark:font-semibold text-lg md:text-xl">makeagreatcoup</span>
    </Link>
  )
}

export default Logo