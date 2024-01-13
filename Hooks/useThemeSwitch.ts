"use client";

import { useEffect, useState } from "react";

export function useThemeSwitch() {
  const preferDarkQuery = "(prefers-color-schema:dark)";
  const storageKey = "theme";

  const toggleTheme = (theme:any) => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    window.localStorage.setItem(storageKey, theme);
  };

  const getUserPreference = () => {
    if (typeof window !== 'undefined') {
      const userPref = window.localStorage.getItem(storageKey);
      if (userPref) {
        return userPref;
      }
      return window.matchMedia(preferDarkQuery).matches ? "dark" : "light";
    }
  
    // 如果在服务器端执行，则返回一个默认值或者特定逻辑
    return 'dark'; // 或者其他默认主题模式
  };

  const [mode, setMode] = useState<string>(getUserPreference);

  // useEffect(() => {
  //   const mediaQuery = window.matchMedia(preferDarkQuery);
  //   const handleChange = () => {
  //     const newMode = getUserPreference();
  //     console.log('1'+newMode)
  //     console.log('2'+mode)
  //     setMode(newMode);
  //     // toggleTheme(newMode);
  //   };

  //   handleChange();

  //   mediaQuery.addEventListener("change", handleChange);

  //   return () => {
  //     mediaQuery.removeEventListener("change", handleChange);
  //   };
  // }, []);

  useEffect(() => {
    toggleTheme(mode)
  }, [mode])
  


  return {mode, setMode}
}
