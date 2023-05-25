"use client";

import { piecesDataType } from "@/types/piecesTypes";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface IMainContextProps {
  cart: piecesDataType[];
  setCart: Dispatch<SetStateAction<piecesDataType[]>>;
}

const MainContext = createContext({} as IMainContextProps);

export function MainContextProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<piecesDataType[]>([]);

  return (
    <MainContext.Provider value={{ cart, setCart }}>
      {children}
    </MainContext.Provider>
  );
}

export const useMainContext = () => useContext(MainContext);
