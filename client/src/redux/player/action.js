import {
  PLAY_REQUEST,
  PLAY_SUCCESS,
  PLAY_FAIL,
  PLAY_NEXT_REQUEST,
  PLAY_NEXT_SUCCESS,
  PLAY_NEXT_FAIL,
  PLAY_PREV_REQUEST,
  PLAY_PREV_SUCCESS,
  PLAY_PREV_FAIL,
} from "./types";
import { countPlayed } from "../../api/api";

export const getSongPlayNow = (song, playlist, index) => async (dispatch) => {
  dispatch({ type: PLAY_REQUEST });
  try {
    dispatch({ type: PLAY_SUCCESS, payload: { song, playlist, index } });
    await countPlayed(song._id);
  } catch (error) {
    dispatch({ type: PLAY_FAIL, payload: error.message });
  }
};
