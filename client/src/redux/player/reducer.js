import INITIAL_STATE from "./state";

import {
  PLAY_REQUEST,
  PLAY_SUCCESS,
  PLAY_FAIL,
  PLAY_NEXT_REQUEST,
  PLAY_NEXT_SUCCESS,
  PLAY_NEXT_FAIL,
  PLAY_PREV_REQUEST,
  PLAY_PREV_SUCCESS,
  PLAY_PREV_FAIL,
} from "./types";

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PLAY_REQUEST:
      return {
        ...state,
        loading: true,
        playSuccess: false,
        songData: null,
        error: null,
      };
    case PLAY_SUCCESS:
      return {
        ...state,
        loading: false,
        playSuccess: true,
        songData: action.payload,
      };
    case PLAY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        songData: null,
      };
    case PLAY_NEXT_REQUEST:
      return {
        ...state,
        loading: true,
        playNextSuccess: false,
        songData: null,
        error: null,
      };
    case PLAY_NEXT_SUCCESS:
      return {
        ...state,
        loading: false,
        playNextSuccess: true,
        songData: action.payload,
      };
    case PLAY_NEXT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        songData: null,
      };
    case PLAY_PREV_REQUEST:
      return {
        ...state,
        loading: true,
        playPrevSuccess: false,
        songData: null,
        error: null,
      };
    case PLAY_PREV_SUCCESS:
      return {
        ...state,
        loading: false,
        playPrevSuccess: true,
        songData: action.payload,
      };
    case PLAY_PREV_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        songData: null,
      };
    default:
      return { ...state };
  }
};

export default reducer;
