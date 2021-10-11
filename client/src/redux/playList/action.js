import { createPlaylists, addSongFromPlaylistView } from "../../api/api";
import {
  PLAYLIST_CREATE_REQUEST,
  PLAYLIST_CREATE_SUCCESS,
  PLAYLIST_CREATE_FAIL,
  ADD_SONG_TO_PLAYLIST_REQUEST,
  ADD_SONG_TO_PLAYLIST_SUCCESS,
  ADD_SONG_TO_PLAYLIST_FAIL,
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

export const addSongNewFromPlaylistView =
  (playlistId, userId) => async (dispatch) => {
    dispatch({ type: ADD_SONG_TO_PLAYLIST_REQUEST });
    try {
      await addSongFromPlaylistView(playlistId, userId);
      dispatch({ type: ADD_SONG_TO_PLAYLIST_SUCCESS });
    } catch (error) {
      dispatch({ type: ADD_SONG_TO_PLAYLIST_FAIL, payload: error.message });
    }
  };
