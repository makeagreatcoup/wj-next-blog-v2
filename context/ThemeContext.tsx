"use client";

import { createContext, useEffect, useState } from "react";

type ThemeType = {
  name: string;
  label: string;
}

export const themes: ThemeType[] = [
  {name:"dark",label:"黑夜"}, 
  {name:"light",label:"白天"}
];

const defaultTheme = themes[0];
export const ThemeContext = createContext({theme: defaultTheme.name, switchTheme: (str:string) => {}});

const getFromLocalStorage = () => {
  let value
  if (typeof window !== "undefined") {
    value = localStorage.getItem("theme") as string;
  }
  return value || defaultTheme.name;

};

export const ThemeContextProvider = ({ children }: {
  children: React.ReactNode
}) => {
  const [theme, setTheme] = useState(() => {
    return getFromLocalStorage();
  });
  const switchTheme = (prevtheme:string) => {
    // 切换主题

    const nextTheme = themes.find((item) => {
      return item.name === prevtheme;
    })!;
    setTheme(nextTheme.name);
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{theme,switchTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
