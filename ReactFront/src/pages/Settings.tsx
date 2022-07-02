import Lnb from "../components/Lnb";
import styles from "../styles/Settings.module.scss";

export default function Settings() {
  const resetBookmark = () => {
    alert("즐겨찾기가 초기화 되었습니다.");
  };
  const eraseBookmark = () => {
    alert("즐겨찾기가 삭제 되었습니다.");
  };

  return (
    <div className={styles.Settings}>
      <Lnb current="설정" />
      <div className={styles.wrapper}>
        <h2>미세다를 원하는 대로 설정하기</h2>
        <h3>즐겨찾기</h3>
        <section>
          <div>현재 저장된 도시를 초기화 합니다.</div>
          <button onClick={() => resetBookmark()}>초기화</button>
        </section>
        <section>
          <div>현재 저장된 도시를 모두 삭제 합니다.</div>
          <button onClick={() => eraseBookmark()}>지우기</button>
        </section>
      </div>
    </div>
  );
}
