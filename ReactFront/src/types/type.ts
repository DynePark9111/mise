import { ReactNode } from "react";

enum level {
  로딩 = 0,
  최고 = 1,
  매우좋음 = 2,
  좋음 = 3,
  보통 = 4,
  별로 = 5,
  나쁨 = 6,
  매우나쁨 = 7,
  최악 = 8,
}

export type dataMiseAPI = {
  co: string;
  coLv4: level;
  coLv8: level;
  dataTime: string;
  maxLv4: level;
  maxLv8: level;
  no2: string;
  no2Lv4: level;
  no2Lv8: level;
  o3: string;
  o3Lv4: level;
  o3Lv8: level;
  pm10: string;
  pm10Lv4: level;
  pm10Lv8: level;
  pm25: string;
  pm25Lv4: level;
  pm25Lv8: level;
  so2: string;
  so2Lv4: level;
  so2Lv8: level;
};

export type MainCardProps = {
  location: string | undefined;
  time: string;
  level: level;
  isLoading: boolean;
};

export type MainCardTextProps = {
  status: string;
  message: string;
};

export type SubCardsProps = {
  data: dataMiseAPI;
  isLv8: boolean;
  isLoading: boolean;
};

export type SubCardProps = {
  title: string;
  level: level;
  value: string;
  isLoading: boolean;
};

export type FaceIconProps = {
  level: level;
};

export type BookmarkProps = {
  setStation: (arg: string) => void;
};

export type LnbProps = {
  current: string;
};

export type ModalProps = {
  isOpen: boolean;
  toggle: () => void;
  children: ReactNode;
};

export type childrenProps = {
  children: ReactNode;
};

export type SearchbarProps = {
  search: string;
  setSearch: (arg: string) => void;
};

export type SlideSwitchProps = {
  isChecked: boolean;
  toggle: () => void;
};

// context
export type createSidebarContextType = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

export type createBookmarkContextType = {
  bookmark: string[];
  dispatch: (arg: bookmarkAction) => void;
};

export type createLvContextType = {
  isLv8: boolean;
  toggleLv8: () => void;
};

export type darkmodevContextType = {
  isDark: boolean;
  toggleDarkmode: () => void;
};

// reducer
type updateAction = {
  type: "ADD_BOOKMARK" | "REMOVE_BOOKMARK";
  payload: string;
};

type setAction = {
  type: "SET_BOOKMARK";
  payload: string[];
};

type resetAction = {
  type: "CLEAR_BOOKMARK" | "RESET_BOOKMARK";
};

export type bookmarkAction = updateAction | setAction | resetAction;
