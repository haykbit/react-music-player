const INITIAL_STATE = {
  loading: false,
  playlistCreatedSuccess: false,
  playlistEditSuccess: false,
  addedToPlaylistSuccess: false,
  getMyPlaylistsSuccess: false,
  getFavoritePlaylistsSuccess: false,
  removeSongSuccess: false,
  deletePlaylistSuccess: false,
  followSuccess: false,
  cancelFollowSuccess: false,
  getPublicPlaylistsSuccess: false,
  error: null,
  myPlaylists: [],
  myFavoritePlaylists: [],
  publicPlaylists: [],
  orderPlaylistsSuccess: false,
};

export default INITIAL_STATE;
