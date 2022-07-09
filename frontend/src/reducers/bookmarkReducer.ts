import { bookmarkAction } from "../types/type";

const initial = ["서울 종로구", "서울 강남구", "경기 수내동", "경기 신원동"];

export const bookmarkReducer = (state: string[], action: bookmarkAction) => {
  switch (action.type) {
    case "ADD_BOOKMARK":
      return [...state, action.payload];
    case "REMOVE_BOOKMARK":
      return state.filter((x) => x !== action.payload);
    case "SET_BOOKMARK":
      return [...action.payload];
    case "CLEAR_BOOKMARK":
      return [];
    case "RESET_BOOKMARK":
      return initial;
    default:
      return state;
  }
};
