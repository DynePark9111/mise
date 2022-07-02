import { createContext, useEffect, useReducer } from "react";
import { bookmarkReducer } from "../reducers/bookmarkReducer";
import { childrenProps, createBookmarkContextType } from "../types/type";

export const bookmarkContext = createContext({} as createBookmarkContextType);

export const BookmarkContextProvider = ({ children }: childrenProps) => {
  const initial = ["서울 종로구", "서울 강남구", "경기 수내동", "경기 신원동"];
  const getLocal = () => {
    const local = localStorage.getItem("bookmark");
    return local ? JSON.parse(local) : initial;
  };

  const [bookmark, dispatch] = useReducer(bookmarkReducer, [], () =>
    getLocal()
  );

  useEffect(() => {
    localStorage.setItem("bookmark", JSON.stringify(bookmark));
  }, [bookmark]);

  return (
    <bookmarkContext.Provider value={{ bookmark, dispatch }}>
      {children}
    </bookmarkContext.Provider>
  );
};
