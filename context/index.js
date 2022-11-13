import React, { createContext, useContext, useReducer } from "react";
import actions from "./actions";
import reducer, { initialState } from "./reducer";

const Web3Context = createContext({});

export const Web3ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Web3Context.Provider value={{ ...actions(state, dispatch) }}>
      {children}
    </Web3Context.Provider>
  );
};

export const Web3UserContext = () => useContext(Web3Context);
