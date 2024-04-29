import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Card } from "./card";

describe("Card", () => {
    it("renders the card", () => {
        render(<Card title="Test" id={1} imageSrc="" onClick={() => {}} />);

        const card = screen.getByText("Test");

        expect(card).toBeInTheDocument();        
    });

    it("renders paragraph with no text", () => {
        render(<Card title="" id={1} imageSrc="" onClick={() => {}} />);
        const card = screen.queryByRole("paragraph");

        expect(card).not.toBeInTheDocument();
    })
});