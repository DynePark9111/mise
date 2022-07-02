import styles from "../styles/Navbar.module.scss";
import { FaBars, FaCamera, FaMap, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { sidebarContext } from "../contexts/sidebarContext";
import screenshot from "../utils/screenshot";

export default function Navbar() {
  const { toggleSidebar } = useContext(sidebarContext);

  return (
    <div className={styles.Navbar}>
      <div className={styles.left} title="메뉴" onClick={() => toggleSidebar()}>
        <FaBars />
      </div>
      <ul className={styles.right}>
        <li title="스크린샷" onClick={() => screenshot()}>
          <FaCamera />
        </li>
        <li>
          <Link to="/map" title="지도">
            <FaMap />
          </Link>
        </li>
        <li>
          <Link to="/search" title="검색">
            <FaSearch />
          </Link>
        </li>
      </ul>
    </div>
  );
}
