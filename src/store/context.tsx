import { Dispatch, createContext, useContext, useReducer } from "react";
import { reducers } from "./reducers";
import { Action, State } from "./types";

const StoreContext = createContext<
  { state: State; dispatch: Dispatch<Action> } | undefined
>(undefined);

const initialState: State = {
  collections: [],
  selectedCollection: null,
  requests: [],
};

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducers, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };

const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
};

export default useStore;
