import React, { useContext } from "react";
import { initialState } from "./initialState";
import { actionPayloads, IGlobalState } from "./types";
import { useMovieRaterLogic } from "./useMovieRaterLogic";

const GlobalContext = React.createContext<{
  state: IGlobalState;
  dispatch: React.Dispatch<actionPayloads>;
}>({ state: initialState, dispatch: () => {} });

/**
 * Initialize GlobalState
 */
export const GlobalStateProvider: React.FC = ({ children }) => {
  const { state, dispatch } = useMovieRaterLogic();

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

/**
 * Access to GlobalState and dispatcher
 */
export const useGlobalState = () => {
  const globalState = useContext(GlobalContext);
  if (!globalState) {
    console.warn(
      "Error: useGlobalState must be used under GlobalStateProvider"
    );
  }
  return globalState;
};
