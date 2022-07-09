import { FaHeart } from "react-icons/fa";
import Lnb from "../components/Lnb";
import styles from "../styles/Recommend.module.scss";

export default function Recommend() {
  async function copyText() {
    await navigator.clipboard.writeText("http://localhost:3000");
    alert("주소 복사 완료!");
  }

  return (
    <div className={styles.Recommend}>
      <Lnb current="어플 추천하기" />
      <div className={styles.wrapper}>
        <FaHeart className={styles.icon} />
        <h3>광고 없는 미세먼지 & 날씨</h3>
        <h3>소중한 사람에게 "미세다"를 알려주세요</h3>
        <button onClick={() => copyText()}>사이트 주소 복사하기</button>
      </div>
    </div>
  );
}
