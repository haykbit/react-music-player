import INITIAL_STATE from "./state";

import {
  POST_SONG_REQUEST,
  POST_SONG_SUCCESS,
  POST_SONG_FAIL,
  GET_SONG_REQUEST,
  GET_SONG_SUCCESS,
  GET_SONG_FAIL,
  UPDATE_SONG_REQUEST,
  UPDATE_SONG_SUCCESS,
  UPDATE_SONG_FAIL,
} from "./types";

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POST_SONG_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        songData: action.payload,
        uploadSongSuccess: false,
      };
    case POST_SONG_SUCCESS:
      return {
        ...state,
        loading: false,
        uploadSongSuccess: true,
        error: null,
        songData: null,
      };
    case POST_SONG_FAIL:
      return {
        ...state,
        loading: false,
        uploadSongSuccess: false,
        error: action.payload,
        songData: null,
      };
    case GET_SONG_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        songData: null,
      };
    case GET_SONG_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        songData: action.payload,
      };
    case GET_SONG_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        songData: null,
      };
    case UPDATE_SONG_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        songData: action.payload,
        songUpdated: false,
      };
    case UPDATE_SONG_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        //have my doubts on keeping the songData -->
        songData: action.payload,
        songUpdated: true,
      };
    case UPDATE_SONG_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        songData: null,
        songUpdated: false,
      };
    default:
      return { ...state };
  }
};

export default reducer;
