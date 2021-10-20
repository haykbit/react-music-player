import axios from "axios";

export const makeApi = () => {
  return axios.create({
    baseURL: `${process.env.LARAVEL_STATISTICS_API}`,
  });
};

export const getPopularSongs = (api = makeApi()) => {
  return api.get(`/popular-songs`);
};

export const getMostLikedSongs = (api = makeApi()) => {
  return api.get(`/liked-songs`);
};

export const getNewSongs = (api = makeApi()) => {
  return api.get(`/new-songs`);
};

export const createSongs = (api = makeApi(), data) => {
  return api.post(`/song`, data);
};

export const deleteSongs = (api = makeApi(), songId) => {
  return api.delete(`/song/${songId}`);
};

export const getPopularGenres = (api = makeApi()) => {
  return api.get(`/popular-genres`);
};

export const getMostLikedGenres = (api = makeApi()) => {
  return api.get(`/liked-genres`);
};

export const getNewGenres = (api = makeApi()) => {
  return api.get(`/new-genres`);
};

export const likeSongs = (api = makeApi(), songId) => {
  return api.patch(`/song-like/${songId}`);
};

export const cancelLikeSongs = (api = makeApi(), songId) => {
  return api.patch(`/song-dislike/${songId}`);
};

export const playedSongs = (api = makeApi(), songId) => {
  return api.patch(`/song-played/${songId}`);
};
