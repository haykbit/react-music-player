import { countPlayed } from "../../api/api";
import { playedSongs } from "../../api/stats-api";
import { PLAY_REQUEST, PLAY_SUCCESS, PLAY_FAIL, PLAY_READY } from "./types";

export const getSongPlayNow = (song, playlist, index) => async (dispatch) => {
  dispatch({ type: PLAY_REQUEST });
  try {
    dispatch({ type: PLAY_SUCCESS, payload: { song, playlist, index } });
    // TODO Laravel
    // await playedSongs(song._Id);
    await countPlayed(song._id);
    dispatch({ type: PLAY_READY });
  } catch (error) {
    dispatch({ type: PLAY_FAIL, payload: error.message });
  }
};
