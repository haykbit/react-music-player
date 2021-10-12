import { countPlayed } from "../../api/api";
import { PLAY_REQUEST, PLAY_SUCCESS, PLAY_FAIL, PLAY_READY } from "./types";

export const getSongPlayNow = (song, playlist, index) => async (dispatch) => {
  dispatch({ type: PLAY_REQUEST });
  try {
    console.log(song, "SONG IN ACTION");
    console.log(playlist, "PLALIST IN ACTION");
    console.log(index, "INDEX IN ACTION");
    dispatch({ type: PLAY_SUCCESS, payload: { song, playlist, index } });
    await countPlayed(song._id);
    dispatch({ type: PLAY_READY });
  } catch (error) {
    dispatch({ type: PLAY_FAIL, payload: error.message });
  }
};
