import {
  createPlaylists,
  getMyPlaylistsList,
  removeSongFromPlaylist,
  removePlaylist,
} from "../../api/api";
import { uploadImages } from "../../services/cloudinary";
import {
  PLAYLIST_CREATE_REQUEST,
  PLAYLIST_CREATE_SUCCESS,
  PLAYLIST_CREATE_FAIL,
  GET_MY_PLAYLISTS_REQUEST,
  GET_MY_PLAYLISTS_SUCCESS,
  GET_MY_PLAYLISTS_FAIL,
  REMOVE_SONG_REQUEST,
  REMOVE_SONG_SUCCESS,
  REMOVE_SONG_FAIL,
  DELETE_PLAYLIST_REQUEST,
  DELETE_PLAYLIST_SUCCESS,
  DELETE_PLAYLIST_FAIL,
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

export const deleteSongFromPlaylist =
  (playlistId, songId) => async (dispatch) => {
    dispatch({ type: REMOVE_SONG_REQUEST });
    try {
      await removeSongFromPlaylist(playlistId, songId);
      dispatch({ type: REMOVE_SONG_SUCCESS });
    } catch (error) {
      dispatch({ type: REMOVE_SONG_FAIL, payload: error.message });
    }
  };

export const deletePlaylist = (playlistId, userId) => async (dispatch) => {
  dispatch({ type: DELETE_PLAYLIST_REQUEST });
  try {
    await removePlaylist(playlistId, userId);
    dispatch({ type: DELETE_PLAYLIST_SUCCESS });
  } catch (error) {
    dispatch({ type: DELETE_PLAYLIST_FAIL, payload: error.message });
  }
};
