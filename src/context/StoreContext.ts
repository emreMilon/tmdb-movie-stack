import { useContext, createContext } from "react";
import { MovieStore } from "../store/MovieStore";

const StoreContext = createContext<MovieStore>({} as MovieStore);

const StoreProvider = StoreContext.Provider;

const useStore = (): MovieStore => useContext(StoreContext);

export { StoreProvider, useStore };
