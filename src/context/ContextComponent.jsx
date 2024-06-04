import React, { createContext, useReducer } from "react";
import { initialState, reducer } from "../reducer/reducer";

//create context
export const myContext = createContext(null);

function ContextComponent({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <myContext.Provider value={{ username: "fahim", state, dispatch }}>
      {children}
    </myContext.Provider>
  );
}

export default ContextComponent;
