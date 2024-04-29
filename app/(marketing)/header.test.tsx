import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Header } from "./header";
import { ClerkProvider } from "@clerk/nextjs";

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null
    };
  }
}));

describe("Header", () => {
  it("renders the heading", () => {
    render(
      <ClerkProvider>
        <Header />
      </ClerkProvider>,
    );

    const text = screen.getByRole("heading");

    expect(text).toBeInTheDocument();
  });
});
