// context/UserReducer.ts

import type { BurgersModel } from "../../models/BurgersModel";


export type BurgerState = {
  users: BurgersModel[];
  loading: boolean;
};

export type UserAction =
  | { type: "SET_BURGERS"; payload: BurgersModel[] }
  | { type: "ADD_BURGER"; payload: BurgersModel }
  | { type: "REMOVE_BURGER"; payload: number }
  | { type: "SET_LOADING"; payload: boolean };

export const initialState: BurgerState = {
  users: [],
  loading: false,
};

export function BurgerReducer(state: BurgerState, action: UserAction): BurgerState {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.payload };

    case "SET_BURGERS":
      return { ...state, users: action.payload };

    case "ADD_BURGER":
      return { ...state, users: [...state.users, action.payload] };

    case "REMOVE_BURGER":
      return {
        ...state,
        users: state.users.filter(u => u.id !== action.payload),
      };

    default:
      return state;
  }
}
