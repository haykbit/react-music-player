import axios from "axios";
import { getCurrentUserToken } from "../services/auth";

export async function syncUserData(user) {
  const userToken = await getCurrentUserToken();
  return axios({
    method: "POST",
    url: `${process.env.REACT_APP_API_BASE_URL}/users/login`,
    data: { user },
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
}

export async function getUserProfile(id) {
  const userToken = await getCurrentUserToken();

  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_API_BASE_URL}/users/${id}`,
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
}

export async function updateUserProfile(id, profile, profileImage) {
  const userToken = await getCurrentUserToken();
  console.log(profileImage, "api profileImage")
  return axios({
    method: "PATCH",
    url: `${process.env.REACT_APP_API_BASE_URL}/users/${id}`,
    data: { ...profile, profileImage },
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
}

export async function uploadSongsData(song) {
  const userToken = await getCurrentUserToken();
  return axios({
    method: "POST",
    url: `${process.env.REACT_APP_API_BASE_URL}/songs`,
    data: { song },
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
}

export async function likeSong(songId, userId) {
  const userToken = await getCurrentUserToken();
  return axios({
    method: "POST",
    url: `${process.env.REACT_APP_API_BASE_URL}/songs/like/${songId}`,
    userId,
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
}

export async function getLikedSongs(id) {
  //get user id argument
  const userToken = await getCurrentUserToken();
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_API_BASE_URL}/songs//myFavoriteSongs/${id}`,
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
}
