import { Song } from "../../../../server/src/models";
import { PLAY_REQUEST, PLAY_SUCCESS, PLAY_FAIL } from "./types";

export const getSongPlayNow = (song) => async (dispatch) => {
  dispatch({ type: PLAY_REQUEST });
  try {
    dispatch({ type: PLAY_SUCCESS, payload: song });
  } catch (error) {
    dispatch({ type: PLAY_FAIL, payload: error.message });
  }
};
