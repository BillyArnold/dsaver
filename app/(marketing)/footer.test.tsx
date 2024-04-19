import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Footer } from "./footer";

describe("Footer", () => {
  it("renders the footer text", () => {
    render(<Footer />);

    const text = screen.getByRole("paragraph");

    expect(text).toBeInTheDocument();
  });
});
