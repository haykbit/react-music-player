import { renderWithReduxAndRouter } from "../../../util/test-util";
import PlaylistUser from "..";

describe("<PlaylistUser> behavior", () => {
  it("is defined", () => {
    expect(<PlaylistUser />).toBeDefined();
  });
  const mockUser = {
    artist: true,
    email: "test@mail.com",
    firebase_id: "",
    firstName: "test",
    lastName: "test",
    myFavoritePlaylists: [],
    myFavoriteSongs: [],
    myPlaylists: [],
    mySongs: [],
    profileImage:
      "http://res.cloudinary.com/dzaxp8xwy/image/upload/v1633694265/lsqbnierh3koav72tcur.jpg",
    _id: "12334",
  };

  const { getByText } = renderWithReduxAndRouter(
    <PlaylistUser playlistUserData={mockUser} />
  );
  expect(getByText("test test")).toBeInTheDocument();
});
