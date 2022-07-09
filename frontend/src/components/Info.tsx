import styles from "../styles/Info.module.scss";

export default function Info() {
  return (
    <div className={styles.Info}>
      ※본 자료는 한국환경공단&#40;AirKorea&#41;에서 제공하는 “인증을 받지 않은
      실시간자료”이며 실제 값과 다를 수 있습니다.
    </div>
  );
}
