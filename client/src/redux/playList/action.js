import { createPlaylists } from "../../api/api";
import {
  PLAYLIST_CREATE_REQUEST,
  PLAYLIST_CREATE_SUCCESS,
  PLAYLIST_CREATE_FAIL,
} from "./types";

export const createNewPlaylist = (playlistData) => async (dispatch) => {
  dispatch({ type: PLAYLIST_CREATE_REQUEST });
  try {
    await createPlaylists(playlistData);
    dispatch({ type: PLAYLIST_CREATE_SUCCESS });
  } catch (error) {
    dispatch({ type: PLAYLIST_CREATE_FAIL });
  }
};
