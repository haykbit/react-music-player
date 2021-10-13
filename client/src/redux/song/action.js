import {
  uploadSongsData,
  likeSong,
  getLikedSongs,
  cancelLikeSong,
  removeSongData,
  editSongData,
} from "../../api/api";
import { uploadImages, uploadSongs } from "../../services/cloudinary";
import {
  POST_SONG_REQUEST,
  POST_SONG_SUCCESS,
  POST_SONG_FAIL,
  GET_MY_SONGS_REQUEST,
  GET_MY_SONGS_SUCCESS,
  GET_MY_SONGS_FAIL,
  UPDATE_SONG_REQUEST,
  UPDATE_SONG_SUCCESS,
  UPDATE_SONG_FAIL,
  LIKE_SONG_REQUEST,
  LIKE_SONG_SUCCESS,
  LIKE_SONG_FAIL,
  GET_MY_LIKED_SONGS_REQUEST,
  GET_MY_LIKED_SONGS_SUCCESS,
  GET_MY_LIKED_SONGS_FAIL,
  CANCEL_LIKED_SONG_REQUEST,
  CANCEL_LIKED_SONG_SUCCESS,
  CANCEL_LIKED_SONG_FAIL,
  DELETE_SONG_REQUEST,
  DELETE_SONG_SUCCESS,
  DELETE_SONG_FAIL,
} from "./types";

export const uploadSongFile = (song, metadata, image) => async (dispatch) => {
  dispatch({ type: POST_SONG_REQUEST });
  try {
    const songData = await uploadSongs(song);
    const songImage = await uploadImages(image);
    console.log(songImage);
    await uploadSongsData(songData, metadata, songImage.url);
    dispatch({ type: POST_SONG_SUCCESS });
  } catch (error) {
    dispatch({ type: POST_SONG_FAIL, payload: error.message });
  }
};

export const dispatchLikeSong = (songId, userId) => async (dispatch) => {
  dispatch({ type: LIKE_SONG_REQUEST });
  try {
    await likeSong(songId, userId);
    dispatch({ type: LIKE_SONG_SUCCESS });
  } catch (error) {
    dispatch({ type: LIKE_SONG_FAIL, payload: error.message });
  }
};

export const cancelLikedSongs = (songId, userId) => async (dispatch) => {
  dispatch({ type: CANCEL_LIKED_SONG_REQUEST });
  try {
    await cancelLikeSong(songId, userId);
    dispatch({ type: CANCEL_LIKED_SONG_SUCCESS });
  } catch (error) {
    dispatch({ type: CANCEL_LIKED_SONG_FAIL, payload: error.message });
  }
};

export const dispatchMySongsData = () => async (dispatch) => {
  dispatch({ type: GET_MY_SONGS_REQUEST });
  try {
    dispatch({ type: GET_MY_SONGS_SUCCESS });
  } catch (error) {
    dispatch({ type: GET_MY_SONGS_FAIL, payload: error.message });
  }
};

export const getMyLikedSongs = () => async (dispatch) => {
  dispatch({ type: GET_MY_LIKED_SONGS_REQUEST });
  try {
    dispatch({ type: GET_MY_LIKED_SONGS_SUCCESS });
  } catch (error) {
    dispatch({ type: GET_MY_LIKED_SONGS_FAIL, payload: error.message });
  }
};

export const deleteSong = (songId, userId) => async (dispatch) => {
  dispatch({ type: DELETE_SONG_REQUEST });
  try {
    await removeSongData(songId, userId);
    dispatch({ type: DELETE_SONG_SUCCESS });
  } catch (error) {
    dispatch({ type: DELETE_SONG_FAIL, payload: error.message });
  }
};

export const editSong = (songId, songData) => async (dispatch) => {
  dispatch({ type: UPDATE_SONG_REQUEST });
  try {
    await editSongData(songId, songData);
    dispatch({ type: UPDATE_SONG_SUCCESS });
  } catch (error) {
    dispatch({ type: UPDATE_SONG_FAIL, payload: error.message });
  }
};
