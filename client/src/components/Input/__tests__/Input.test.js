import React from "react";
import userEvent from "@testing-library/user-event";
import { renderWithReduxAndRouter } from "../../../util/test-util";
import Input from "..";

describe("<Input />", () => {
  it("is defined", () => {
    expect(<Input />).toBeDefined();
  });

  it("defines a default type of text", () => {
    const { getByPlaceholderText } = renderWithReduxAndRouter(
      <Input placeholder="Title" type="text" />
    );
    const input = getByPlaceholderText("Title");
    expect(input).toHaveAttribute("type", "text");
  });

  it("assigns the specified type of input", () => {
    const { getByPlaceholderText } = renderWithReduxAndRouter(
      <Input placeholder="Title" type="text" />
    );
    const input = getByPlaceholderText("Title");
    expect(input).toHaveAttribute("type", "text");
  });

  it("sets the specified placeholder value", () => {
    const { getByPlaceholderText } = renderWithReduxAndRouter(
      <Input type="text" placeholder="Title" />
    );
    const input = getByPlaceholderText("Title");
    expect(input).toBeInTheDocument();
  });

  it("assigns the value received and the onChange handler", () => {
    const handleChange = jest.fn();
    const value = "hello-world";

    const { getByDisplayValue } = renderWithReduxAndRouter(
      <Input
        type="text"
        placeholder="Title"
        value={value}
        handleChange={handleChange}
      />
    );
    const input = getByDisplayValue(value);
    expect(input).toBeInTheDocument();
  });

  it("calls the onChange handler when typing", () => {
    const handleChange = jest.fn();
    const value = "hello-world";

    const { getByDisplayValue } = renderWithReduxAndRouter(
      <Input
        type="text"
        placeholder="Title"
        value={value}
        handleChange={handleChange}
      />
    );
    const input = getByDisplayValue(value);
    userEvent.type(input, "hi");
    expect(handleChange).toHaveBeenCalled();
  });
});
