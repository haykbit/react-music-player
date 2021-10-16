const INITIAL_STATE = {
  PlaylistData: null,
  loading: false,
  error: null,
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
  UploadToPlaylistFromPlaylistView: false,
  canceladdToPlaylistFromPlaylistView: false,
};

export default INITIAL_STATE;
