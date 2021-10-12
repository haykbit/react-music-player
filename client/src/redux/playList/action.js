import {
  createPlaylists,
  addSongFromPlaylistView,
  getMyPlaylistsList,
} from "../../api/api";
import { uploadImages } from "../../services/cloudinary";
import {
  PLAYLIST_CREATE_REQUEST,
  PLAYLIST_CREATE_SUCCESS,
  PLAYLIST_CREATE_FAIL,
  ADD_SONG_TO_PLAYLIST_REQUEST,
  ADD_SONG_TO_PLAYLIST_SUCCESS,
  ADD_SONG_TO_PLAYLIST_FAIL,
  GET_MY_PLAYLISTS_REQUEST,
  GET_MY_PLAYLISTS_SUCCESS,
  GET_MY_PLAYLISTS_FAIL,
} from "./types";

export const createNewPlaylist = (playlistData, image) => async (dispatch) => {
  dispatch({ type: PLAYLIST_CREATE_REQUEST });
  try {
    const imageData = await uploadImages(image);
    const playlist = {
      ...playlistData,
      image: imageData.url,
    };
    dispatch({ type: PLAYLIST_CREATE_SUCCESS });
    await createPlaylists(playlist);
  } catch (error) {
    dispatch({ type: PLAYLIST_CREATE_FAIL, payload: error.message });
  }
};

export const getMyPlaylists = (id) => async (dispatch) => {
  dispatch({ type: GET_MY_PLAYLISTS_REQUEST });
  try {
    const playlists = await getMyPlaylistsList(id);
    dispatch({ type: GET_MY_PLAYLISTS_SUCCESS, payload: playlists.data.data });
  } catch (error) {
    dispatch({ type: GET_MY_PLAYLISTS_FAIL, payload: error.message });
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
