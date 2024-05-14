import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { StickyWrapper } from "./sticky-wrapper";

describe("Sticky Wrapper", () => {
  it("renders", () => {
    render(
      <StickyWrapper>
        <p>TEST</p>
      </StickyWrapper>,
    );

    expect(screen.getByTestId("sticky-wrapper")).toBeInTheDocument();
  });
});
