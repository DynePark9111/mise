import { useContext } from "react";
import { FaArrowLeft, FaBars } from "react-icons/fa";
import { useNavigate } from "react-router";
import { sidebarContext } from "../contexts/sidebarContext";
import styles from "../styles/Lnb.module.scss";
import { LnbProps } from "../types/type";

export default function Lnb({ current }: LnbProps) {
  const navigate = useNavigate();
  const { toggleSidebar } = useContext(sidebarContext);

  return (
    <div className={styles.Lnb}>
      <div className={styles.wrapper}>
        <div className={styles.icon} onClick={() => toggleSidebar()}>
          <FaBars />
        </div>
        <div className={styles.current}>{current}</div>
        <div
          title="돌아가기"
          className={styles.icon}
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft />
        </div>
      </div>
    </div>
  );
}
