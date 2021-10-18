import { renderWithReduxAndRouter } from "../../../util/test-util";
import Button from "..";

describe("<Button />", () => {
  it("is defined", () => {
    expect(<Button />).toBeDefined();
  });

  it("renders a button with a default type", () => {
    const { getByRole } = renderWithReduxAndRouter(<Button>Click</Button>);
    const btn = getByRole("button");
    expect(btn).toHaveAttribute("type", "button");
  });

  it("renders a button with a submit type", () => {
    const { getByRole } = renderWithReduxAndRouter(
      <Button submitButton>Click</Button>
    );
    const btn = getByRole("button");
    expect(btn).toHaveAttribute("type", "submit");
  });

  it("renders the button with the passed in text", () => {
    const { getByRole } = renderWithReduxAndRouter(<Button>Click</Button>);
    const btn = getByRole("button", {
      name: "Click",
    });
    expect(btn).toBeInTheDocument();
  });

  it("renders a button that can be disabled with a prop", () => {
    const { getByRole } = renderWithReduxAndRouter(
      <Button disabled>Click</Button>
    );
    const btn = getByRole("button");
    expect(btn).toBeDisabled();
  });

  it("renders a button that is enabled by default", () => {
    const { getByRole } = renderWithReduxAndRouter(<Button>Click</Button>);
    const btn = getByRole("button");
    expect(btn).toBeEnabled();
  });
});
