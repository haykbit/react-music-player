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
  console.log(profileImage, "api profileImage");
  return axios({
    method: "PATCH",
    url: `${process.env.REACT_APP_API_BASE_URL}/users/${id}`,
    data: { ...profile, profileImage },
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
}

export async function uploadSongsData(song, metadata) {
  const userToken = await getCurrentUserToken();
  return axios({
    method: "POST",
    url: `${process.env.REACT_APP_API_BASE_URL}/songs`,
    data: { song, metadata },
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
}

export async function likeSong(songId, userId) {
  const userToken = await getCurrentUserToken();
  return axios({
    method: "PATCH",
    url: `${process.env.REACT_APP_API_BASE_URL}/songs/like/${songId}`,
    data: { userId },
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
}
export async function cancelLikeSong(songId, userId) {
  const userToken = await getCurrentUserToken();
  return axios({
    method: "PATCH",
    url: `${process.env.REACT_APP_API_BASE_URL}/songs/cancel-like/${songId}`,
    data: { userId },
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
    url: `${process.env.REACT_APP_API_BASE_URL}/users/myFavoriteSongs/${id}`,
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
}

export async function removeSongData(id, userId) {
  const userToken = await getCurrentUserToken();
  return axios({
    method: "PUT",
    url: `${process.env.REACT_APP_API_BASE_URL}/songs/${id}`,
    data: { userId },
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
}

export async function editSongData(id, songData) {
  const userToken = await getCurrentUserToken();
  return axios({
    method: "PATCH",
    url: `${process.env.REACT_APP_API_BASE_URL}/songs/${id}`,
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
    data: { songData },
  });
}

export async function createPlaylists(playlist) {
  const userToken = await getCurrentUserToken();
  return axios({
    method: "POST",
    url: `${process.env.REACT_APP_API_BASE_URL}/playlists`,
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
    data: { playlist },
  });
}

export async function getMyPlaylistsList(id) {
  const userToken = await getCurrentUserToken();
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_API_BASE_URL}/playlists/my-lists/${id}`,
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
}

//!! it is the same as getMySongsData function.
export async function getMySongsPlaylist(userId) {
  const userToken = await getCurrentUserToken();
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_API_BASE_URL}/songs/mysongs/${userId}`,
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
}

//In progress - To ask kym
export async function addSongFromPlaylistView(playlistId, userId, songId) {
  const userToken = await getCurrentUserToken();
  return axios({
    method: "PATCH",
    url: `${process.env.REACT_APP_API_BASE_URL}/playlists/add/${songId}`,
    data: { playlistId, userId },
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
}
//

export async function countPlayed(songId) {
  const userToken = await getCurrentUserToken();
  return axios({
    method: "PATCH",
    url: `${process.env.REACT_APP_API_BASE_URL}/songs/played/${songId}`,
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
}

export async function getSongsFromPlaylist(playlistId) {
  const userToken = await getCurrentUserToken();
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_API_BASE_URL}/playlists/playlist/${playlistId}`,
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
}
