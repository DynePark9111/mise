import { useContext } from "react";
import {
  FaCog,
  FaHeart,
  FaHome,
  FaInfoCircle,
  FaMap,
  FaSearch,
  FaSun,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { sidebarContext } from "../contexts/sidebarContext";
import styles from "../styles/Sidebar.module.scss";
import Modal from "./Modal";

export default function Sidebar() {
  const { isOpen, toggleSidebar } = useContext(sidebarContext);
  return (
    <>
      <Modal isOpen={isOpen} toggle={toggleSidebar}>
        <SidebarWithoutModal isOpen={isOpen} />
      </Modal>
    </>
  );
}

function SidebarWithoutModal({ isOpen }: { isOpen: Boolean }) {
  return (
    <div
      className={styles.Sidebar}
      id={isOpen ? styles.show : ""}
      onClick={(e) => e.stopPropagation()}
    >
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <FaSun className={styles.logo} />
          <div className={styles.name}>미세다</div>
          <div className={styles.version}>Version 0.1.0</div>
        </div>
        <ul className={styles.nav}>
          <li>
            <Link to="/">
              <FaHome className={styles.icon} />
              <div className={styles.text}>홈으로</div>
            </Link>
          </li>

          <li>
            <Link to="/search">
              <FaSearch className={styles.icon} />
              <div className={styles.text}>검색</div>
            </Link>
          </li>
          <li>
            <Link to="/map">
              <FaMap className={styles.icon} />
              <div className={styles.text}>지도</div>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <FaInfoCircle className={styles.icon} />
              <div className={styles.text}>정보</div>
            </Link>
          </li>
          <li>
            <Link to="/recommend">
              <FaHeart className={styles.icon} />
              <div className={styles.text}>어플 추천하기</div>
            </Link>
          </li>
          <li>
            <Link to="/settings">
              <FaCog className={styles.icon} />
              <div className={styles.text}>설정</div>
            </Link>
          </li>
          <li>
            <Link to="/404">
              <FaCog className={styles.icon} />
              <div className={styles.text}>404 NotFound</div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
