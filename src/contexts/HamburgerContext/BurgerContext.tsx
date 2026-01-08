import { createContext, useReducer } from "react";
import { BurgerReducer, initialState  } from "./burgerReducer";
import type { BurgersModel } from "../../models/BurgersModel";
import { burgerService } from "../../services/burgerService";
import type { BurgerState } from "./burgerActions";


type BurgerContextType = {
  state: BurgerState;
  loadBurgers: () => Promise<void>;
  addBurger: (Burger: Omit<BurgersModel, "id">) => Promise<void>;
  removeBurger: (id: number) => Promise<void>;
};

export const BurgerContext = createContext<BurgerContextType>(
  {} as BurgerContextType
);

export function BurgerProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(BurgerReducer, initialState);

  async function loadBurgers() {
    dispatch({ type: "SET_LOADING", payload: true });
    const Burgers = await burgerService.getAll();
    dispatch({ type: "SET_BURGERS", payload: Burgers });
    dispatch({ type: "SET_LOADING", payload: false });
  }

  async function addBurger(Burger: Omit<BurgersModel, "id">) {
    const createdBurger = await burgerService.create(Burger);
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
