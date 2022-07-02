import styles from "../styles/SubCards.module.scss";
import { SubCardProps, SubCardsProps } from "../types/type";
import FaceIcon from "./FaceIcon";
import Loading from "./Loading";

export default function SubCards({ data, isLv8, isLoading }: SubCardsProps) {
  const cardsArray = [
    {
      title: "미세먼지",
      level4: data.pm10Lv4,
      level8: data.pm10Lv8,
      value: data.pm10,
      unit: "μg/m³",
    },
    {
      title: "초미세먼지",
      level4: data.pm25Lv4,
      level8: data.pm25Lv8,
      value: data.pm25,
      unit: "μg/m³",
    },
    {
      title: "오존",
      level4: data.o3Lv4,
      level8: data.o3Lv8,
      value: data.o3,
      unit: "ppm",
    },
    {
      title: "이산화질소",
      level4: data.no2Lv4,
      level8: data.no2Lv8,
      value: data.no2,
      unit: "ppm",
    },
    {
      title: "일산화탄소",
      level4: data.coLv4,
      level8: data.coLv8,
      value: data.co,
      unit: "ppm",
    },
    {
      title: "아황산가스",
      level4: data.so2Lv4,
      level8: data.so2Lv8,
      value: data.so2,
      unit: "ppm",
    },
  ];
  return (
    <div className={styles.SubCards}>
      {cardsArray.map((card) => {
        return (
          <SubCard
            key={card.title}
            title={card.title}
            level={isLv8 ? card.level8 : card.level4}
            value={`${card.value} ${card.unit}`}
            isLoading={isLoading}
          />
        );
      })}
    </div>
  );
}

function SubCard({ title, level, value, isLoading }: SubCardProps) {
  const Status = {
    0: "Error",
    1: "최고",
    2: "매우좋음",
    3: "좋음",
    4: "보통",
    5: "별로",
    6: "나쁨",
    7: "매우나쁨",
    8: "최악",
  };

  return (
    <div className={styles.SubCard}>
      <div className={styles.location}>{title}</div>
      <div className={styles.icon}>
        {isLoading ? <Loading /> : <FaceIcon level={level} />}
      </div>
      <div className={styles.status}>{Status[level]}</div>
      <div className={styles.value}>{value}</div>
    </div>
  );
}
