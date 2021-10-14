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
    const artist = await getSearchArtist().data.data;
    const playlist = await getSearchPlaylist().data.data;
    const song = await getSearchSong().data.data;
    dispatch({ type: SEARCH_SUCCESS, payload: { query } });
    const obj = { artist, playlist, song };
    console.log(obj);
    return obj;
  } catch (error) {
    dispatch({ type: SEARCH_FAIL, payload: error.message });
  }
};
