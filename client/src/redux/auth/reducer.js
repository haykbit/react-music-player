import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOAD_PROFILE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  SIGN_OUT_SUCCESS,
  SEND_PASSWORD_RESET_REQUEST,
  SEND_PASSWORD_RESET_SUCCESS,
  SEND_PASSWORD_RESET_FAIL,
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
    case SEND_PASSWORD_RESET_REQUEST:
      return {
        ...state,
        passwordResetting: true,
        passwordResetError: null,
        passwordResetDone: false,
      };
    case SEND_PASSWORD_RESET_SUCCESS:
      return {
        ...state,
        passwordResetting: false,
        passwordResetError: null,
        passwordResetDone: true,
      };
    case SEND_PASSWORD_RESET_FAIL:
      return {
        ...state,
        passwordResetting: false,
        passwordResetError: action.payload,
        passwordResetDone: false,
      };
    default:
      return state;
  }
};

export default reducer;
