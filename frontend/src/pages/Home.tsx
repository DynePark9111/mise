import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Bookmark from "../components/Bookmark";
import Info from "../components/Info";
import MainCard from "../components/MainCard";
import Navbar from "../components/Navbar";
import Subs from "../components/SubCards";
import { lvContext } from "../contexts/lvContext";
import { sampleData } from "../data/data";
import styles from "../styles/Home.module.scss";
import { dataMiseAPI } from "../types/type";

export default function Home() {
  const [station, setStation] = useState("서울 종로구");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<dataMiseAPI>(sampleData);
  const { isLv8 } = useContext(lvContext);
  const URL = process.env.REACT_APP_URL;

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${URL}/mise/${station}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [station, URL]);

  return (
    <div className={styles.Home} id={`bg${isLv8 ? data.maxLv8 : data.maxLv4}`}>
      <Navbar />
      <MainCard
        location={station}
        time={data.dataTime}
        level={isLv8 ? data.maxLv8 : data.maxLv4}
        isLoading={isLoading}
      />
      <Subs data={data} isLv8={isLv8} isLoading={isLoading} />
      <Bookmark setStation={setStation} />
      <Info />
    </div>
  );
}
