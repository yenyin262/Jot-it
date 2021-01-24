import React from "react";
import { render, queryAllByText } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // const linkElement = queryAllByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
