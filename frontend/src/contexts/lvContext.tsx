import { createContext, useEffect, useState } from "react";
import { childrenProps, createLvContextType } from "../types/type";

export const lvContext = createContext({} as createLvContextType);

export const LvContextProvider = ({ children }: childrenProps) => {
  const getLocal = () => {
    const local = localStorage.getItem("isLv8");
    return local ? JSON.parse(local) : true;
  };

  const [isLv8, setIsLv8] = useState(getLocal());

  function toggleLv8() {
    setIsLv8((pre: boolean) => !pre);
  }

  useEffect(() => {
    localStorage.setItem("isLv8", JSON.stringify(isLv8));
  }, [isLv8]);

  return (
    <lvContext.Provider value={{ isLv8, toggleLv8 }}>
      {children}
    </lvContext.Provider>
  );
};
