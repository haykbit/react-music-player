import axios from "axios";

export async function getPopularSongs() {
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_LARAVEL_STATISTICS_API}/popular-songs`,
  });
}

export async function getMostLikedSongs() {
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_LARAVEL_STATISTICS_API}/liked-songs`,
  });
}

export async function getNewSongs() {
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_LARAVEL_STATISTICS_API}/new-songs`,
  });
}

export async function createSongs(songData) {
  return axios({
    method: "POST",
    url: `${process.env.REACT_APP_LARAVEL_STATISTICS_API}/song`,
    data: { songData },
  });
}

export async function deleteSongs(songId) {
  return axios({
    method: "DELETE",
    url: `${process.env.REACT_APP_LARAVEL_STATISTICS_API}/delete-song/${songId}`,
  });
}

export async function getPopularGenres() {
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_LARAVEL_STATISTICS_API}/popular-genres`,
  });
}

export async function getMostLikedGenres() {
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_LARAVEL_STATISTICS_API}/liked-genres`,
  });
}

export async function getNewGenres() {
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_LARAVEL_STATISTICS_API}/new-genres`,
  });
}

export async function playedSongs(songId) {
  return axios({
    method: "PATCH",
    url: `${process.env.REACT_APP_LARAVEL_STATISTICS_API}/song-played/${songId}`,
  });
}

export async function bestSongsByGenre(genre) {
  return axios({
    method: "PUT",
    url: `${process.env.REACT_APP_LARAVEL_STATISTICS_API}/song-genre/`,
    data: { genre },
  });
}

export async function genresExec() {
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_LARAVEL_STATISTICS_API}/update_genres/`,
  });
}
