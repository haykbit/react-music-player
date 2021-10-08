import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import userReducer from "./user/reducer";
import songReducer from "./song/reducer";
import playerReducer from "./player/reducer";
import playlistReducer from "./playList/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  song: songReducer,
  player: playerReducer,
});

export default rootReducer;
