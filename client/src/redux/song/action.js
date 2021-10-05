import { uploadSongsData, likeSong, getLikedSongs } from "../../api/api";
import { uploadSongs } from "../../services/cloudinary";
import { GET_MY_PLAYLIST_FAIL } from "../playList/types";
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
} from "./types";

export const uploadSongFile = (song, metadata) => async (dispatch) => {
  dispatch({ type: POST_SONG_REQUEST });
  try {
    const songData = await uploadSongs(song);
    dispatch({ type: POST_SONG_SUCCESS });
    await uploadSongsData(songData, metadata);
  } catch (error) {
    dispatch({ type: POST_SONG_FAIL, payload: error.message });
  }
};

export const likeSongs = (songId) => async (dispatch) => {
  dispatch({ type: LIKE_SONG_REQUEST });
  try {
    await likeSong(songId);
    dispatch({ type: LIKE_SONG_SUCCESS });
  } catch (error) {
    dispatch({ type: LIKE_SONG_FAIL, payload: error.message });
  }
};

export const getMySongsData = () => async (dispatch) => {};

export const displayMyLikedSongs = (songId) => async (dispatch) => {
  dispatch({ type: GET_MY_LIKED_SONGS_REQUEST });
  try {
    const myLikedSongs = await likeSong(songId);
    dispatch({ type: GET_MY_LIKED_SONGS_SUCCESS, payload: myLikedSongs });
  } catch (error) {
    dispatch({ type: GET_MY_PLAYLIST_FAIL, payload: error.message });
  }
};
