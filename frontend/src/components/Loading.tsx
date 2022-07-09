import styles from "../styles/Loading.module.scss";
import { FaSpinner } from "react-icons/fa";

export default function Loading() {
  return (
    <div className={styles.Loading}>
      <FaSpinner className={styles.icon} />
    </div>
  );
}
