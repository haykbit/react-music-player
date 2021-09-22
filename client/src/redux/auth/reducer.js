import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOAD_PROFILE,
} from "./types";

import INITIAL_STATE from "./state";

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
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

    default:
      return state;
  }
};

export default reducer;
