import React from "react";
import List from "../ListView";
import ListView from "./ListView";
import { render, screen, fireEvent, name } from "@testing-library/react";

describe("ListView", () => {
  const list = {
    id: 1,
    name: "Day2",
    items: [],
  };

  test("render ListView Component without items", () => {
    render(<ListView list={list} items={[]} />);
  });

  test("render ListView Component with items", () => {
    const list = {
      id: 1,
      name: "Day2",
      items: [{ id: "1", text: "pick up groceries", checked: false }],
    };

    render(<ListView list={list} items={list.items} />);

    expect(screen.queryByText("pick up groceries")).toBeInTheDocument();
  });

  test("calls onAddStep prop with the correct text attribute", () => {
    const list = {
      id: 1,
      name: "Day2",
      items: [{ id: "1", text: "pick up groceries", checked: false }],
    };
    const onAddStep = jest.fn();
    render(<ListView list={list} items={list.items} onAddStep={onAddStep} />);

    fireEvent.click(screen.queryByText("add"));
    expect(onAddStep).toHaveBeenCalledTimes(0);

    fireEvent.change(screen.getByLabelText("field"), {
      target: { value: "JavaScript" },
    });

    fireEvent.click(screen.getByText("add"));
    expect(onAddStep).toHaveBeenCalledTimes(1);
    expect(onAddStep).toHaveBeenCalledWith("JavaScript");
  });

  test("checks onPlay prop called once", () => {
    const onPlay = jest.fn();
    const list = {
      id: 1,
      name: "Day2",
      items: [{ id: "1", text: "pick up groceries", checked: false }],
    };

    render(<ListView list={list} items={list.items} onPlay={onPlay} />);

    fireEvent.click(screen.queryByRole("button", { name: /►/i }));

    expect(onPlay).toHaveBeenCalledTimes(1);
  });

  test("onDelete is called with correct attribute (index)", () => {
    const list = {
      id: 1,
      name: "Day2",
      items: [{ id: "1", text: "pick up groceries", checked: false }],
    };

    const onDelete = jest.fn();
    render(<ListView list={list} items={list.items} onDelete={onDelete} />);

    fireEvent.click(screen.queryByText("X"));
    expect(onDelete).toHaveBeenCalledTimes(1);
    expect(onDelete).toHaveBeenCalledWith(0);
  });

  test("onChecked is called with two attributes(el, index)", () => {
    const list = {
      id: 1,
      name: "Day2",
      items: [{ id: "1", text: "pick up groceries", checked: false }],
    };

    const onChecked = jest.fn();
    render(<ListView list={list} items={list.items} onChecked={onChecked} />);

    fireEvent.click(screen.queryByRole("checkbox"));
    expect(onChecked).toHaveBeenCalledTimes(1);
    expect(onChecked).toHaveBeenCalledWith(list.items[0], 0);
  });
});
