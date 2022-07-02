import styles from "../styles/Modal.module.scss";
import { ModalProps } from "../types/type";

export default function Modal({ isOpen, toggle, children }: ModalProps) {
  return (
    <div
      className={styles.Modal}
      id={isOpen ? styles.show : ""}
      onClick={() => toggle()}
    >
      {children}
    </div>
  );
}
