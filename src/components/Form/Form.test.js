import React from "react";
import Form from "./Form";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Form", () => {
  test("render Form Component without placeholder", () => {
    render(<Form />);
  });

  test("render Form Component with placeholder", () => {
    render(<Form placeholder="add lists" />);

    const inputNode = screen.queryByPlaceholderText("add lists");

    expect(inputNode).toBeTruthy();
  });

  test("calls onAddStep prop with the correct text attribute", () => {
    const onAddStep = jest.fn();

    render(<Form onAddStep={onAddStep} placeholder="test" />);

    fireEvent.click(screen.getByText("add"));

    expect(onAddStep).toHaveBeenCalledTimes(0);

    fireEvent.change(screen.getByPlaceholderText("test"), {
      target: { value: "JavaScript" },
    });

    fireEvent.click(screen.getByText("add"));
    expect(onAddStep).toHaveBeenCalledTimes(1);
    expect(onAddStep).toHaveBeenCalledWith("JavaScript");
  });
});
