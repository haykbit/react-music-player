import {
  createPlaylists,
  followingPlaylist,
  cancelFollowingPlaylist,
  getMyFavPlaylists,
  getMyPlaylistsList,
  getPublicPlaylists,
  removeSongFromPlaylist,
  removePlaylist,
  updatePlaylist,
  addSongToPlaylist,
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
  REMOVE_SONG_REQUEST,
  REMOVE_SONG_SUCCESS,
  REMOVE_SONG_FAIL,
  DELETE_PLAYLIST_REQUEST,
  DELETE_PLAYLIST_SUCCESS,
  DELETE_PLAYLIST_FAIL,
  FOLLOW_PLAYLIST_REQUEST,
  FOLLOW_PLAYLIST_SUCCESS,
  FOLLOW_PLAYLIST_FAIL,
  CANCEL_FOLLOW_PLAYLIST_REQUEST,
  CANCEL_FOLLOW_PLAYLIST_SUCCESS,
  CANCEL_FOLLOW_PLAYLIST_FAIL,
  GET_FAVORITE_PLAYLISTS_REQUEST,
  GET_FAVORITE_PLAYLISTS_SUCCESS,
  GET_FAVORITE_PLAYLISTS_FAIL,
  GET_PUBLIC_PLAYLISTS_REQUEST,
  GET_PUBLIC_PLAYLISTS_SUCCESS,
  GET_PUBLIC_PLAYLISTS_FAIL,
  PLAYLIST_EDIT_REQUEST,
  PLAYLIST_EDIT_SUCCESS,
  PLAYLIST_EDIT_FAIL,
} from "./types";

export const createNewPlaylist = (playlistData, image) => async (dispatch) => {
  dispatch({ type: PLAYLIST_CREATE_REQUEST });
  try {
    let playlist = {};
    if (image) {
      const imageData = await uploadImages(image);
      playlist = {
        ...playlistData,
        image: imageData.url,
      };
    } else {
      playlist = {
        ...playlistData,
        image: undefined,
      };
    }
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

export const followPlaylist = (playlistId, userId) => async (dispatch) => {
  dispatch({ type: FOLLOW_PLAYLIST_REQUEST });
  try {
    await followingPlaylist(playlistId, userId);
    dispatch({ type: FOLLOW_PLAYLIST_SUCCESS });
  } catch (error) {
    dispatch({ type: FOLLOW_PLAYLIST_FAIL, payload: error.message });
  }
};

export const cancelFollowPlaylist =
  (playlistId, userId) => async (dispatch) => {
    dispatch({ type: CANCEL_FOLLOW_PLAYLIST_REQUEST });
    try {
      await cancelFollowingPlaylist(playlistId, userId);
      dispatch({ type: CANCEL_FOLLOW_PLAYLIST_SUCCESS });
    } catch (error) {
      dispatch({ type: CANCEL_FOLLOW_PLAYLIST_FAIL, payload: error.message });
    }
  };

export const getFavoritePlaylists = (userId) => async (dispatch) => {
  dispatch({ type: GET_FAVORITE_PLAYLISTS_REQUEST });
  try {
    const myFavLists = await getMyFavPlaylists(userId);
    dispatch({
      type: GET_FAVORITE_PLAYLISTS_SUCCESS,
      payload: myFavLists.data.data,
    });
  } catch (error) {
    dispatch({ type: GET_FAVORITE_PLAYLISTS_FAIL, payload: error.message });
  }
};

export const displayPublicPlaylists = (userId) => async (dispatch) => {
  dispatch({ type: GET_PUBLIC_PLAYLISTS_REQUEST });
  try {
    const publicPlaylists = await getPublicPlaylists(userId);
    dispatch({
      type: GET_PUBLIC_PLAYLISTS_SUCCESS,
      payload: publicPlaylists.data.data,
    });
  } catch (error) {
    dispatch({ type: GET_PUBLIC_PLAYLISTS_FAIL, payload: error.message });
  }
};

export const editPlaylist = (playlist, image, id) => async (dispatch) => {
  dispatch({ type: PLAYLIST_EDIT_REQUEST });
  try {
    if (image) {
      const imageData = await uploadImages(image);
      updatePlaylist(playlist, imageData.url, id);
    } else {
      updatePlaylist(playlist, playlist.initialImage, id);
    }

    dispatch({ type: PLAYLIST_EDIT_SUCCESS });
  } catch (error) {
    dispatch({ type: PLAYLIST_EDIT_FAIL });
  }
};
export const addSongToPlaylistView =
  (playlistId, userId, songId) => async (dispatch) => {
    dispatch({ type: ADD_SONG_TO_PLAYLIST_REQUEST });
    try {
      await addSongToPlaylist(playlistId, userId, songId);
      dispatch({ type: ADD_SONG_TO_PLAYLIST_SUCCESS });
    } catch (error) {
      dispatch({ type: ADD_SONG_TO_PLAYLIST_FAIL, payload: error.message });
    }
  };
