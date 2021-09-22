import { signInWithGoogle } from "../../services/auth";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOAD_PROFILE,
} from "./types";

export const login = () => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const res = await signInWithGoogle();
    console.log("action", res);
    const accessToken = res.credential.accessToken;
    const userProfile = {
      name: res.additionalUserInfo.profile.name,
      email: res.additionalUserInfo.profile.email,
      picture: res.additionalUserInfo.profile.picture,
    };
    dispatch({ type: LOGIN_SUCCESS, payload: accessToken });
    dispatch({ type: LOAD_PROFILE, payload: userProfile });
  } catch (error) {}
};
