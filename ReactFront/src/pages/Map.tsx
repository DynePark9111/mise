import { useState } from "react";
import { FaMinus, FaPlus, FaRegCircle } from "react-icons/fa";
import Lnb from "../components/Lnb";
import styles from "../styles/Map.module.scss";

export default function Map() {
  const seoul = {
    longitude: 127.02,
    latitude: 37.53,
  };
  const busan = {
    longitude: 129.06,
    latitude: 35.16,
  };
  const [position, setPosition] = useState(seoul);
  const [overlay, setOverlay] = useState("pm10");
  const [scale, setScale] = useState(4000);
  let src = `https://earth.nullschool.net/#current/particulates/surface/level/overlay=${overlay}/orthographic=127,37,${scale}/loc=${position.longitude},${position.latitude}`;

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setPosition({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        });
      });
    } else {
      alert("GPS를 지원하지 않습니다");
    }
  }

  return (
    <div className={styles.Map}>
      <Lnb current="지도" />
      <section>
        <iframe title={overlay} src={src} />
        <div className={styles.topLeft}>자료제공 : nullschool</div>
        <div className={styles.topRight}>
          <button
            id={overlay === "pm10" ? styles.selected : ""}
            onClick={() => setOverlay("pm10")}
          >
            미세먼지
          </button>
          <button
            id={overlay === "pm2.5" ? styles.selected : ""}
            onClick={() => setOverlay("pm2.5")}
          >
            초미세먼지
          </button>
          <button onClick={() => getLocation()}>GPS</button>
          <button onClick={() => setPosition(seoul)}>서울</button>
          <button onClick={() => setPosition(busan)}>부산</button>
        </div>
        <div className={styles.bottomLeft}>
          <div>위치</div>
          <FaRegCircle className={styles.circle} />
        </div>
        <div className={styles.bottomRight}>
          <button onClick={() => setScale((prev) => prev - 500)}>
            <FaMinus />
          </button>
          <button onClick={() => setScale((prev) => prev + 500)}>
            <FaPlus />
          </button>
        </div>
      </section>
    </div>
  );
}
