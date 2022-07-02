import { useContext } from "react";
import { bookmarkContext } from "../contexts/bookmarkContext";
import styles from "../styles/Bookmark.module.scss";
import { BookmarkProps } from "../types/type";

export default function Bookmark({ setStation }: BookmarkProps) {
  const { bookmark } = useContext(bookmarkContext);
  return (
    <div className={styles.Bookmark}>
      {bookmark.map((item: string) => {
        return (
          <button key={item} onClick={() => setStation(item)}>
            {item}
          </button>
        );
      })}
    </div>
  );
}
