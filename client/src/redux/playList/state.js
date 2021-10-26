const INITIAL_STATE = {
  PlaylistData: null,
  loading: false,
  error: null,
  playlistCreatedSuccess: false,
  playlistEditSuccess: false,
  addSongToPlaylistSuccess: false,
  getMyPlaylistsSuccess: false,
  getFavoritePlaylistsSuccess: false,
  removeSongSuccess: false,
  deletePlaylistSuccess: false,
  followSuccess: false,
  cancelFollowSuccess: false,
  getPublicPlaylistsSuccess: false,
  myPlaylists: [],
  myFavoritePlaylists: [],
  publicPlaylists: [],
  orderPlaylistsSuccess: false,
};

export default INITIAL_STATE;
