import styles from "../styles/SlideSwitch.module.scss";
import { SlideSwitchProps } from "../types/type";

export default function SlideSwitch({ isChecked, toggle }: SlideSwitchProps) {
  return (
    <label className={styles.SlideSwitch}>
      <input type="checkbox" checked={isChecked} onChange={() => toggle()} />
      <span className={styles.slider} />
    </label>
  );
}
