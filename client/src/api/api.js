import axios from "axios";
import { getCurrentUserToken } from "../services/auth";

// ?USERS
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
  return axios({
    method: "PATCH",
    url: `${process.env.REACT_APP_API_BASE_URL}/users/${id}`,
    data: { ...profile, profileImage },
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
}

export async function getSearchArtist() {
  const userToken = await getCurrentUserToken();
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_API_BASE_URL}/users/artists`,
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
}

// ?SONGS
export async function uploadSongsData(song, metadata, image) {
  const userToken = await getCurrentUserToken();
  return axios({
    method: "POST",
    url: `${process.env.REACT_APP_API_BASE_URL}/songs`,
    data: { song, metadata, image },
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

export async function editSongData(id, songData, image) {
  const userToken = await getCurrentUserToken();
  return axios({
    method: "PATCH",
    url: `${process.env.REACT_APP_API_BASE_URL}/songs/${id}`,
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
    data: { songData, image },
  });
}

export async function getSearchSong(userId) {
  const userToken = await getCurrentUserToken();
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_API_BASE_URL}/songs/all/`,
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
    data: { userId },
  });
}

export async function orderUserSongs(id, orderedList) {
  const userToken = await getCurrentUserToken();
  return axios({
    method: "PATCH",
    url: `${process.env.REACT_APP_API_BASE_URL}/songs/order/${id}`,
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
    data: { orderedList },
  });
}

export async function orderFavoritedSongs(id, orderedList) {
  const userToken = await getCurrentUserToken();
  return axios({
    method: "PATCH",
    url: `${process.env.REACT_APP_API_BASE_URL}/songs/order-favorite/${id}`,
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
    data: { orderedList },
  });
}

export async function orderPlaylistsSongs(id, orderedList) {
  const userToken = await getCurrentUserToken();
  return axios({
    method: "PATCH",
    url: `${process.env.REACT_APP_API_BASE_URL}/playlists/order-songs/${id}`,
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
    data: { orderedList },
  });
}

// ?PLAYLISTS
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

export async function removePlaylist(id, userId) {
  const userToken = await getCurrentUserToken();
  return axios({
    method: "PUT",
    url: `${process.env.REACT_APP_API_BASE_URL}/playlists/${id}`,
    data: { userId },
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
}

export async function getPlaylistById(playlistId) {
  const userToken = await getCurrentUserToken();
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_API_BASE_URL}/playlists/${playlistId}`,
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
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

export async function addSongToPlaylist(playlistId, userId, songId) {
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

export async function removeSongFromPlaylist(playlistId, songId) {
  const userToken = await getCurrentUserToken();
  return axios({
    method: "PATCH",
    url: `${process.env.REACT_APP_API_BASE_URL}/playlists/songs/${playlistId}`,
    data: { songId },
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
}

export async function followingPlaylist(playlistId, userId) {
  const userToken = await getCurrentUserToken();
  return axios({
    method: "PATCH",
    url: `${process.env.REACT_APP_API_BASE_URL}/playlists/follow/${playlistId}`,
    data: { userId },
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
}

export async function cancelFollowingPlaylist(playlistId, userId) {
  const userToken = await getCurrentUserToken();
  return axios({
    method: "PATCH",
    url: `${process.env.REACT_APP_API_BASE_URL}/playlists/cancel-follow/${playlistId}`,
    data: { userId },
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
}

export async function getMyFavPlaylists(userId) {
  const userToken = await getCurrentUserToken();
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_API_BASE_URL}/playlists/my-favorite-lists/${userId}`,
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
}

export async function getPublicPlaylists(userId) {
  const userToken = await getCurrentUserToken();
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_API_BASE_URL}/playlists/public/${userId}`,
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
}

export async function updatePlaylist(playlist, image, id) {
  const userToken = await getCurrentUserToken();
  return axios({
    method: "PATCH",
    url: `${process.env.REACT_APP_API_BASE_URL}/playlists/${id}`,
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
    data: { playlist, image },
  });
}

export async function getSearchPlaylist(userId) {
  const userToken = await getCurrentUserToken();
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_API_BASE_URL}/playlists/all/`,
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
    data: { userId },
  });
}

export async function orderUserPlaylists(id, orderedList) {
  const userToken = await getCurrentUserToken();
  return axios({
    method: "PATCH",
    url: `${process.env.REACT_APP_API_BASE_URL}/playlists/order/${id}`,
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
    data: { orderedList },
  });
}

export async function getPublicSongs() {
  const userToken = await getCurrentUserToken();
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_API_BASE_URL}/songs/public-songs`,
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
}

export async function getSongsForPrivateLists(id) {
  const userToken = await getCurrentUserToken();
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_API_BASE_URL}/songs/accessible-songs/${id}`,
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
}
