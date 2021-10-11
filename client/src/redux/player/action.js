import { PLAY_REQUEST, PLAY_SUCCESS, PLAY_FAIL, PLAY_READY } from "./types";

export const getSongPlayNow = (song, playlist, index) => async (dispatch) => {
  dispatch({ type: PLAY_REQUEST });
  try {
    dispatch({ type: PLAY_SUCCESS, payload: { song, playlist, index } });
    dispatch({ type: PLAY_READY });
  } catch (error) {
    dispatch({ type: PLAY_FAIL, payload: error.message });
  }
};
