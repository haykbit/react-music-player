import { Song } from "../../../../server/src/models";
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

export const getSongPlayNow = (song) => async (dispatch) => {
  dispatch({ type: PLAY_REQUEST });
  try {
    dispatch({ type: PLAY_SUCCESS, payload: song });
  } catch (error) {
    dispatch({ type: PLAY_FAIL, payload: error.message });
  }
};
