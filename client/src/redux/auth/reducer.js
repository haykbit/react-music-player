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
      return {
        ...state,
        loading: true,
        signOutSuccess: false,
        passwordResetDone: false,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        registerSuccess: true,
        error: null,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        registerSuccess: false,
        error: action.payload,
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        signOutSuccess: false,
        passwordResetDone: false,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        accessToken: action.payload,
        loading: false,
        error: null,
      };

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
      return {
        ...state,
        accessToken: null,
        loading: false,
        user: null,
        signOutSuccess: true,
        error: null,
      };
    case SEND_PASSWORD_RESET_REQUEST:
      return {
        ...state,
        passwordResetting: true,
        passwordResetDone: false,
        error: null,
      };
    case SEND_PASSWORD_RESET_SUCCESS:
      return {
        ...state,
        passwordResetting: false,
        passwordResetDone: true,
        error: null,
      };
    case SEND_PASSWORD_RESET_FAIL:
      return {
        ...state,
        passwordResetting: false,
        passwordResetDone: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
