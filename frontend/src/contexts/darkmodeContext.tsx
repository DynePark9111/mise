import { createContext, useEffect, useState } from "react";
import { childrenProps, darkmodevContextType } from "../types/type";

export const darkmodeContext = createContext({} as darkmodevContextType);

export const DarkmodeContextProvider = ({ children }: childrenProps) => {
  const detectMode = () => {
    let matched = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return matched ? true : false;
  };

  const getLocal = () => {
    const local = localStorage.getItem("isDark");
    return local ? JSON.parse(local) : detectMode();
  };

  const [isDark, setIsDark] = useState(getLocal());

  function toggleDarkmode() {
    setIsDark((pre: boolean) => !pre);
  }

  useEffect(() => {
    localStorage.setItem("isDark", JSON.stringify(isDark));
  }, [isDark]);

  return (
    <darkmodeContext.Provider value={{ isDark, toggleDarkmode }}>
      {children}
    </darkmodeContext.Provider>
  );
};
