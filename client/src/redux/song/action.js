import { uploadSongsData } from "../../api/api";
import { uploadSongs } from "../../services/cloudinary";
import {
  POST_SONG_REQUEST,
  POST_SONG_SUCCESS,
  POST_SONG_FAIL,
  GET_SONG_REQUEST,
  GET_SONG_SUCCESS,
  GET_SONG_FAIL,
  UPDATE_SONG_REQUEST,
  UPDATE_SONG_SUCCESS,
  UPDATE_SONG_FAIL,
} from "./types";

export const uploadSongFile = (song) => async (dispatch) => {
  dispatch({ type: POST_SONG_REQUEST });
  try {
    const songData = await uploadSongs(song);
    dispatch({ type: POST_SONG_SUCCESS });
    await uploadSongsData(songData);
  } catch (error) {
    dispatch({ type: POST_SONG_FAIL, payload: error.message });
  }
};
