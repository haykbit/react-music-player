import {
  getSearchArtist,
  getSearchPlaylist,
  getSearchSong,
} from "../../api/api";

import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAIL,
  SEARCH_READY,
} from "./types";

export const getSearchEngine = (query) => async (dispatch) => {
  dispatch({ type: SEARCH_REQUEST });
  try {
    const artist = await getSearchArtist();
    const playlist = await getSearchPlaylist();
    const song = await getSearchSong();
    dispatch({ type: SEARCH_SUCCESS, payload: { query } });
    const obj = { artist, playlist, song };
    return obj;
  } catch (error) {
    dispatch({ type: SEARCH_FAIL, payload: error.message });
  }
};
