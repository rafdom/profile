import { createContext } from "react";
export const initialState = {
  targetClass: null,
  landingPage: true
};

export function reducer(state, action) {
  switch (action.type) {
    case "SET_TARGET_CLASS":
      return { ...state, targetClass: action.targetClass };
    case "SET_LANDING_PAGE":
      return { ...state, landingPage: action.landingPage };
    default:
      return state;
  }
}

export const ContextCreator = createContext();
