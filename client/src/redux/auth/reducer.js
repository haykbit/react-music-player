import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOAD_PROFILE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  SIGN_OUT_SUCCESS,
} from "./types";

import INITIAL_STATE from "./state";

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { ...state, loading: true };
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        registerSuccess: true,
      };
    case LOGIN_REQUEST:
      return { ...state, loading: true };

    case LOGIN_SUCCESS:
      return { ...state, accessToken: action.payload, loading: false };

    case LOAD_PROFILE:
      return { ...state, user: action.payload };

    case LOGIN_FAIL:
      return {
        ...state,
        accessToken: null,
        loading: false,
        error: action.payload,
      };
    case SIGN_OUT_SUCCESS:
      return state;
    default:
      return state;
  }
};

export default reducer;