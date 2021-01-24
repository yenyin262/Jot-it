// test if component render with el and index
// onchecked prop is called with attribute el, index
//queryByText

import React from "react";
import PlayView from "./PlayView";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

describe("PlayView", () => {
  test("render PlayView component render with el and index", () => {
    const onChecked = jest.fn();
    const item = { id: "1", text: "pick up groceries", checked: false };
    render(<PlayView el={item} onChecked={onChecked} index={0} />);
  });

  test("onchecked prop is called with attribute el, index", async () => {
    const item = { id: "1", text: "pick up groceries", checked: false };
    const onChecked = jest.fn();
    render(<PlayView el={item} onChecked={onChecked} index={0} />);

    fireEvent.click(screen.queryByText("NEXT"));
    await waitFor(() => expect(onChecked).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(onChecked).toHaveBeenCalledWith(item, 0));
  });
});
