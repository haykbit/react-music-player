import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import thunk from "redux-thunk";

import rootReducer from "../redux/reducers";

export function renderWithReduxAndRouter(component, options = {}, route = "/") {
  const {
    initialState = {},
    store = createStore(rootReducer, initialState, applyMiddleware(thunk)),
  } = options;

  return {
    ...render(<Provider store={store}>{component}</Provider>, {
      wrapper: BrowserRouter,
    }),
    store,
  };
}
