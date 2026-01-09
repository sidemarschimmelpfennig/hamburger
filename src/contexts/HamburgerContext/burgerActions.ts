// context/UserReducer.ts

import type { BurgersModel } from "../../models/BurgersModel";


export type BurgerState = {
  burgers: BurgersModel[];
  loading: boolean;
};

export type UserAction =
  | { type: "SET_BURGERS"; payload: BurgersModel[] }
  | { type: "ADD_BURGER"; payload: BurgersModel }
  | { type: "REMOVE_BURGER"; payload: number }
  | { type: "SET_LOADING"; payload: boolean };

export const initialState: BurgerState = {
  burgers: [],
  loading: false,
};

export function userReducer(state: BurgerState, action: UserAction): BurgerState {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.payload };

    case "SET_BURGERS":
      return { ...state, burgers: action.payload };

    case "ADD_BURGER":
      return { ...state, burgers: [...state.burgers, action.payload] };

    case "REMOVE_BURGER":
      return {
        ...state,
        burgers: state.burgers.filter(u => u.id !== action.payload),
      };

    default:
      return state;
  }
}
