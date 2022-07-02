import {
  FaDizzy,
  FaFrown,
  FaGrinBeamSweat,
  FaGrinStars,
  FaLaugh,
  FaLaughSquint,
  FaMeh,
  FaSmile,
  FaTired,
} from "react-icons/fa";
import { FaceIconProps } from "../types/type";

export default function FaceIcon({ level }: FaceIconProps) {
  const Icon = {
    0: <FaGrinBeamSweat />,
    1: <FaGrinStars />,
    2: <FaLaughSquint />,
    3: <FaLaugh />,
    4: <FaSmile />,
    5: <FaMeh />,
    6: <FaFrown />,
    7: <FaTired />,
    8: <FaDizzy />,
  };
  return <div>{Icon[level]}</div>;
}
