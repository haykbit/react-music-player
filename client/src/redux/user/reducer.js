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
  UPDATE_EMAIL_REQUEST,
  UPDATE_EMAIL_SUCCESS,
  UPDATE_EMAIL_FAIL,
  RESET_USER_DATA,
  FOLLOW_USER_REQUEST,
  FOLLOW_USER_SUCCESS,
  FOLLOW_USER_FAIL,
  CANCEL_FOLLOW_USER_REQUEST,
  CANCEL_FOLLOW_USER_SUCCESS,
  CANCEL_FOLLOW_USER_FAIL,
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
        profileUpdated: false,
      };
    case UPDATE_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
        updateLoading: true,
        error: null,
      };
    case UPDATE_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        profileUpdated: true,
        updateLoading: false,
      };
    case UPDATE_PASSWORD_FAIL:
      return {
        ...state,
        error: action.payload,
        updateLoading: false,
      };
    case UPDATE_EMAIL_REQUEST:
      return {
        ...state,
        loading: true,
        updateLoading: true,
        error: null,
      };
    case UPDATE_EMAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        profileUpdated: true,
        updateLoading: false,
      };
    case UPDATE_EMAIL_FAIL:
      return {
        ...state,
        loading: false,
        updateLoading: false,
        error: action.payload,
      };
    case RESET_USER_DATA:
      return {
        ...state,
        userProfile: null,
        profileUpdated: false,
      };
    case FOLLOW_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        followUserSuccess: false,
        cancelFollowingUserSuccess: false,
      };
    case FOLLOW_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        followUserSuccess: true,
        error: null,
      };
    case FOLLOW_USER_FAIL:
      return {
        ...state,
        followUserSuccess: false,
        loading: false,
        error: action.payload,
      };
    case CANCEL_FOLLOW_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        followUserSuccess: false,
        cancelFollowingUserSuccess: false,
      };
    case CANCEL_FOLLOW_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        cancelFollowingUserSuccess: true,
        error: null,
      };
    case CANCEL_FOLLOW_USER_FAIL:
      return {
        ...state,
        loading: false,
        cancelFollowingUserSuccess: false,
        error: action.payload,
      };
    default:
      return { ...state };
  }
};

export default reducer;
