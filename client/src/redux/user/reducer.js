import INITIAL_STATE from "./state";
import {
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAIL,
} from "./types";

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PROFILE_REQUEST:
      return {
        ...state,
        userProfile: null,
        loading: true,
        error: null,
        getUserProfileSuccess: false,
      };
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        userProfile: action.payload,
        loading: false,
        error: null,
        getUserProfileSuccess: true,
      };
    case GET_PROFILE_FAIL:
      return {
        ...state,
        userProfile: null,
        loading: false,
        error: action.payload,
        getUserProfileSuccess: false,
      };
    case UPDATE_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        getUserProfileSuccess: false,
      };
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        userProfile: action.payload,
        loading: false,
        error: null,
        profileUpdated: true,
      };
    case UPDATE_PROFILE_FAIL:
      return {
        ...state,
        userProfile: null,
        loading: false,
        error: action.payload,
        getUserProfileSuccess: false,
        profileUpdated: false,
      };
    case UPDATE_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case UPDATE_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        profileUpdated: true,
      };
    case UPDATE_PASSWORD_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return { ...state };
  }
};

export default reducer;
