import styles from "../styles/MainCard.module.scss";
import { MainCardProps, MainCardTextProps } from "../types/type";
import FaceIcon from "./FaceIcon";
import Loading from "./Loading";

export default function MainCard({
  location,
  time,
  level,
  isLoading,
}: MainCardProps) {
  const Message = {
    0: <MainCardText status="Error" message="데이터를 불러올 수 없습니다." />,
    1: <MainCardText status="최고" message="먼지 하나 없네요!" />,
    2: <MainCardText status="매우좋음" message="공기가 너무 좋아요!" />,
    3: <MainCardText status="좋음" message="쾌적한 날이에요~" />,
    4: <MainCardText status="보통" message="무난한 날이에요~" />,
    5: <MainCardText status="별로" message="별로 좋지는 않네요" />,
    6: <MainCardText status="나쁨" message="마스크 꼭 챙기세요~" />,
    7: <MainCardText status="매우나쁨" message="외출을 삼가세요!" />,
    8: <MainCardText status="최악" message="나가지 마세요~" />,
  };

  return (
    <div className={styles.MainCard}>
      <div className={styles.location}>{location}</div>
      <div className={styles.time}>{time}</div>
      <div className={styles.icon}>
        {isLoading ? <Loading /> : <FaceIcon level={level} />}
      </div>
      <div className={styles.Text}>{Message[level]}</div>
    </div>
  );
}

function MainCardText({ status, message }: MainCardTextProps) {
  return (
    <>
      <div className={styles.status}>{status}</div>
      <div className={styles.message}>{message}</div>
    </>
  );
}
