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
  FOLLOW_USER_REQUEST,
  FOLLOW_USER_SUCCESS,
  FOLLOW_USER_FAIL,
  CANCEL_FOLLOW_USER_REQUEST,
  CANCEL_FOLLOW_USER_SUCCESS,
  CANCEL_FOLLOW_USER_FAIL,
} from "./types";
import {
  getUserProfile,
  updateUserProfile,
  updateUserEmailInfo,
  followingUser,
  cancelFollowingUser,
} from "../../api/api";
import {
  reauthenticate,
  updateUserEmail,
  updateUserPassword,
} from "../../services/auth";
import { uploadImages } from "../../services/cloudinary";
import { toast } from "react-toastify";

export const displayUserProfile =
  ({ userId }) =>
  async (dispatch) => {
    dispatch({ type: GET_PROFILE_REQUEST });
    try {
      const userProfile = await getUserProfile({ userId });
      dispatch({ type: GET_PROFILE_SUCCESS, payload: userProfile });
    } catch (error) {
      toast.error("Something went wrong! Try again");
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
      toast.info("Your profile has been successfully updated");

      dispatch({
        type: UPDATE_PROFILE_SUCCESS,
        payload: { ...profile },
      });
    }
  } catch (error) {
    toast.error("Something went wrong! Try again");
    dispatch({ type: UPDATE_PROFILE_FAIL, payload: error.message });
  }
};

export const updateUserProfilePassword =
  (currentPassword, newPassword) => async (dispatch) => {
    dispatch({ type: UPDATE_PASSWORD_REQUEST });
    try {
      await reauthenticate(currentPassword);
      await updateUserPassword(newPassword);
      toast.info("Your password has been successfully updated");
      dispatch({ type: UPDATE_PASSWORD_SUCCESS });
    } catch (error) {
      toast.error("Something went wrong! Try again");
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
      toast.info("Your email has been successfully updated");
      dispatch({
        type: UPDATE_EMAIL_SUCCESS,
      });
    } catch (error) {
      toast.error(error.message.split(":")[1].split(".")[0]);
      dispatch({ type: UPDATE_EMAIL_FAIL, payload: error.message });
    }
  };

export const followUser = (profileUserId, userId) => async (dispatch) => {
  dispatch({ type: FOLLOW_USER_REQUEST });
  try {
    await followingUser(profileUserId, userId);
    dispatch({ type: FOLLOW_USER_SUCCESS });
  } catch (error) {
    toast.error("Something went wrong! Try again");
    dispatch({ type: FOLLOW_USER_FAIL, payload: error.message });
  }
};
export const cancelFollowUser = (profileUserId, userId) => async (dispatch) => {
  dispatch({ type: CANCEL_FOLLOW_USER_REQUEST });
  try {
    await cancelFollowingUser(profileUserId, userId);
    dispatch({ type: CANCEL_FOLLOW_USER_SUCCESS });
  } catch (error) {
    toast.error("Something went wrong! Try again");
    dispatch({ type: CANCEL_FOLLOW_USER_FAIL, payload: error.message });
  }
};
