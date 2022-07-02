import styles from "../styles/Bookmark.module.scss";
import { BookmarkProps } from "../types/type";

export default function Bookmark({ setStation }: BookmarkProps) {
  const bookmark = ["서울시 종로구", "서울시 강남구"];
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
