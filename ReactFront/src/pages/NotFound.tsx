import { FaExclamationTriangle } from "react-icons/fa";
import Lnb from "../components/Lnb";
import styles from "../styles/NotFound.module.scss";

export default function NotFound() {
  return (
    <div className={styles.NotFound}>
      <Lnb current="Not Found" />
      <NotFoundText />
    </div>
  );
}

function NotFoundText() {
  return (
    <div className={styles.NotFoundText}>
      <FaExclamationTriangle className={styles.icon} />
      <div>404 Not Found</div>
      <div>요청하신 페이지를 찾을 수 없습니다.</div>
    </div>
  );
}
