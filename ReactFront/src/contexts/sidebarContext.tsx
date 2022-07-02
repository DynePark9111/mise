import { createContext, useState } from "react";
import { childrenProps, createContextType } from "../types/type";

export const sidebarContext = createContext({} as createContextType);

export const SidebarContextProvider = ({ children }: childrenProps) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleSidebar() {
    setIsOpen((pre) => !pre);
  }

  return (
    <sidebarContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </sidebarContext.Provider>
  );
};
