import { createContext } from "react";
import type { BurgerState } from "./BurgerActions";
import type { BurgersModel } from "../../models/BurgersModel";

export type BurgerContextType = {
  state: BurgerState;
  loadBurgers: () => Promise<void>;
  addBurger: (burger: Omit<BurgersModel, "id">) => Promise<void>;
  removeBurger: (id: number) => Promise<void>;
};

export const BurgerContext = createContext<BurgerContextType>(
  {} as BurgerContextType
);
