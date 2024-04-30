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
    });

    it("renders a check mark when active", () => {
        const card = render(<Card title="Test" id={1} imageSrc="" onClick={() => {}} active />);

        const check = card.container.querySelector(".check-mark");

        expect(check).toBeInTheDocument();
    });

    it("does not render a check mark when inactive", () => {
        const card = render(<Card title="Test" id={1} imageSrc="" onClick={() => {}} active={false} />);

        const check = card.container.querySelector(".check-mark");

        expect(check).not.toBeInTheDocument();
    });

    it("is not clickable when disabled", () => {
        const card = render(<Card title="Test" id={1} imageSrc="" onClick={() => {}} disabled />);

        const cardElement = card.container.firstChild;

        expect(cardElement).toHaveClass("pointer-events-none");
    });

    it("is clickable when not disabled", () => {
        const card = render(<Card title="Test" id={1} imageSrc="" onClick={() => {}} />);

        const cardElement = card.container.firstChild;

        expect(cardElement).not.toHaveClass("pointer-events-none");
    });
});