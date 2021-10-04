import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import userReducer from "./user/reducer";
import songReducer from "./song/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  song: songReducer,
});

export default rootReducer;
