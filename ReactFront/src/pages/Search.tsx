import { useContext, useState } from "react";
import { FaBookmark, FaTimes } from "react-icons/fa";
import Lnb from "../components/Lnb";
import styles from "../styles/Search.module.scss";
import { SearchbarProps } from "../types/type";
import stationList from "../data/stationList.json";
import { useNavigate } from "react-router-dom";
import { bookmarkContext } from "../contexts/bookmarkContext";

export default function Search() {
  const [search, setSearch] = useState("");
  return (
    <div className={styles.Search}>
      <Lnb current="검색" />
      <Searchbar search={search} setSearch={setSearch} />
      {search === "" ? <ResultsInitial /> : <ResultsFound search={search} />}
    </div>
  );
}

function Searchbar({ search, setSearch }: SearchbarProps) {
  return (
    <div className={styles.Searchbar}>
      <div className={styles.wrapper}>
        <input
          type="text"
          placeholder="동/읍/면 을 입력해주세요"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <FaTimes
          className={styles.xIcon}
          id={search ? styles.erase : ""}
          onClick={() => setSearch("")}
          title="검색어 삭제"
        />
      </div>
    </div>
  );
}

function ResultsInitial() {
  const { bookmark } = useContext(bookmarkContext);
  return (
    <div className={styles.Results}>
      <div className={styles.header}>즐겨찾기</div>
      {bookmark.map((station: string) => {
        return (
          <Result key={station} stateAndDistrict={station} text={station} />
        );
      })}
    </div>
  );
}

function ResultsFound({ search }: { search: string }) {
  const searchResultArray = stationList.stations.filter((station) =>
    station.adress.includes(search)
  );
  return (
    <div className={styles.Results}>
      <div className={styles.header}>검색결과</div>
      {searchResultArray.map((station) => {
        return (
          <Result
            key={station.id}
            stateAndDistrict={`${station.state} ${station.district}`}
            text={`${station.state} ${station.district} : ${station.adress}`}
          />
        );
      })}
    </div>
  );
}

type ResultProps = {
  stateAndDistrict: string;
  text: string;
};

function Result({ stateAndDistrict, text }: ResultProps) {
  const navigate = useNavigate();
  const { bookmark, dispatch } = useContext(bookmarkContext);
  const click = (station: string) => {
    if (bookmark.includes(station)) {
      dispatch({ type: "REMOVE_BOOKMARK", payload: station });
    } else {
      dispatch({ type: "ADD_BOOKMARK", payload: station });
    }
  };
  return (
    <div
      className={styles.Result}
      title={`${stateAndDistrict} 검색`}
      onClick={() => navigate(`/station/${stateAndDistrict}`)}
    >
      <div className={styles.text}>{text}</div>
      <FaBookmark
        className={styles.bookmarkIcon}
        id={bookmark.includes(stateAndDistrict) ? styles.bookmarked : ""}
        title={
          bookmark.includes(stateAndDistrict) ? "북마크 제거" : "북마크 추가"
        }
        onClick={(e) => {
          e.stopPropagation();
          click(stateAndDistrict);
        }}
      />
    </div>
  );
}
