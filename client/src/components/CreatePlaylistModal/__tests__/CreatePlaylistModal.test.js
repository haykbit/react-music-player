import { renderWithReduxAndRouter } from "../../../util/test-util";
import CreatePlaylistModal from "..";

describe("<CreatePlaylistModal /> behavior", () => {
  it("is defined", () => {
    const show = jest.fn();
    const close = jest.fn();
    expect(<CreatePlaylistModal show={show} close={close} />).toBeDefined();

    const { getByRole } = renderWithReduxAndRouter(
      <CreatePlaylistModal show={show} close={close} />
    );

    const img = getByRole("img");

    expect(img).toBeInTheDocument();
  });
});
