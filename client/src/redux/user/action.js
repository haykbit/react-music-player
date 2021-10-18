import {
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAIL,
  UPDATE_EMAIL_REQUEST,
  UPDATE_EMAIL_SUCCESS,
  UPDATE_EMAIL_FAIL,
  RESET_USER_DATA,
} from "./types";
import {
  getUserProfile,
  updateUserProfile,
  updateUserEmailInfo,
} from "../../api/api";
import {
  reauthenticate,
  updateUserEmail,
  updateUserPassword,
} from "../../services/auth";
import { uploadImages } from "../../services/cloudinary";

export const displayUserProfile =
  ({ userId }) =>
  async (dispatch) => {
    dispatch({ type: GET_PROFILE_REQUEST });
    try {
      const userProfile = await getUserProfile({ userId });
      dispatch({ type: GET_PROFILE_SUCCESS, payload: userProfile });
    } catch (error) {
      dispatch({ type: GET_PROFILE_FAIL, payload: error.message });
    }
  };

export const updateUserProfileInfo = (userId, profile) => async (dispatch) => {
  dispatch({ type: UPDATE_PROFILE_REQUEST });
  try {
    const { profileImageURL, profileImageFile } = profile;
    if (profileImageFile) {
      const imageData = await uploadImages(profileImageFile);
      dispatch({
        type: UPDATE_PROFILE_SUCCESS,
        payload: { ...profile, profileImageURL: imageData.url },
      });
      await updateUserProfile(userId, profile, imageData.url);
    } else {
      await updateUserProfile(userId, profile, profileImageURL);
      dispatch({
        type: UPDATE_PROFILE_SUCCESS,
        payload: { ...profile },
      });
    }
  } catch (error) {
    dispatch({ type: UPDATE_PROFILE_FAIL, payload: error.message });
  }
};

export const updateUserProfilePassword =
  (currentPassword, newPassword) => async (dispatch) => {
    dispatch({ type: UPDATE_PASSWORD_REQUEST });
    try {
      await reauthenticate(currentPassword);
      await updateUserPassword(newPassword);
      dispatch({ type: UPDATE_PASSWORD_SUCCESS });
    } catch (error) {
      dispatch({ type: UPDATE_PASSWORD_FAIL, payload: error.message });
    }
  };

export const resetUserData = () => (dispatch) => {
  dispatch({ type: RESET_USER_DATA });
};

export const updateUserProfileEmail =
  (userId, newEmail, currentPassword) => async (dispatch) => {
    dispatch({ type: UPDATE_EMAIL_REQUEST });
    try {
      await reauthenticate(currentPassword);
      await updateUserEmail(newEmail);
      await updateUserEmailInfo(userId, newEmail);
      dispatch({
        type: UPDATE_EMAIL_SUCCESS,
      });
    } catch (error) {
      dispatch({ type: UPDATE_EMAIL_FAIL, payload: error.message });
    }
  };
