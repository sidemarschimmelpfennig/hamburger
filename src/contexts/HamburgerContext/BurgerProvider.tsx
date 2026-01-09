import { useReducer } from "react";
import { BurgerReducer, initialState } from "./BurgerReducer";
import { BurgerContext } from "./BurgerContext";
import { burgerService } from "../../services/burgerService";
import type { BurgersModel } from "../../models/BurgersModel";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function BurgerProvider({ children }: Props) {
  const [state, dispatch] = useReducer(BurgerReducer, initialState);

  async function loadBurgers() {
    dispatch({ type: "SET_LOADING", payload: true });
    const burgers = await burgerService.getAll();
    dispatch({ type: "SET_BURGERS", payload: burgers });
    dispatch({ type: "SET_LOADING", payload: false });
  }

  async function addBurger(burger: Omit<BurgersModel, "id">) {
    const createdBurger = await burgerService.create(burger);
    dispatch({ type: "ADD_BURGER", payload: createdBurger });
  }

  async function removeBurger(id: number) {
    await burgerService.remove(id);
    dispatch({ type: "REMOVE_BURGER", payload: id });
  }

  return (
    <BurgerContext.Provider
      value={{ state, loadBurgers, addBurger, removeBurger }}
    >
      {children}
    </BurgerContext.Provider>
  );
}
