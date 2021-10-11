import INITIAL_STATE from "./state";

import { PLAY_REQUEST, PLAY_SUCCESS, PLAY_FAIL, PLAY_READY } from "./types";

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PLAY_REQUEST:
      return {
        ...state,
        loading: true,
        playSuccess: false,
        songData: null,
        playlist: null,
        index: 0,
        error: null,
      };
    case PLAY_SUCCESS:
      return {
        ...state,
        loading: false,
        playSuccess: true,
        songData: action.payload.song,
        playlist: action.payload.playlist,
        index: action.payload.index,
      };
    case PLAY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        songData: null,
        playlist: null,
        index: 0,
      };
    case PLAY_READY:
      return {
        ...state,
        playSuccess: false,
      };
    default:
      return { ...state };
  }
};

export default reducer;
