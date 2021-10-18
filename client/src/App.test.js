import { renderWithReduxAndRouter } from "./util/test-util";
import App from "./App";

describe("<App> behavior", () => {
  test("should render correctly", () => {
    renderWithReduxAndRouter(<App />);
  });
  it("is defined", () => {
    expect(<App />).toBeDefined();
  });
});
