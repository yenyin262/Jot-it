import React from "react";
import { BrowserRouter } from "react-router-dom";
import AllDone from "./AllDone";
import { render, screen, fireEvent } from "@testing-library/react";
// check if it renders
// button is clicked
describe("AllDone", () => {
  test("renders AllDone component", () => {
    render(
      <BrowserRouter>
        <AllDone />
      </BrowserRouter>
    );
  });

  test("calls the onClick callback handler", () => {
    const onClick = jest.fn();

    render(
      <BrowserRouter>
        <AllDone onClick={onClick} />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText("Return List"));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
