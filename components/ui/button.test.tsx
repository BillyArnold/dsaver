import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Button } from "./button";

describe("Button", () => {
  it("renders the button", () => {
    render(<Button />);

    const text = screen.getByRole("button");

    expect(text).toBeInTheDocument();
  });
});
