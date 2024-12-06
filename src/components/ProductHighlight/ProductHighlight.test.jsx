import { render, screen } from "@testing-library/react";
import ProductHighlight from "./ProductHighlight";
import { CHECK_IN, AWARD, CANCELLATION } from "../../constants/constants";
import { describe, it, expect } from "vitest";

describe("ProductHighlight Component", () => {
  const mockHighlights = [
    { type: CHECK_IN, text: "Easy Check-In", subText: "Arrive anytime after 3 PM" },
    { type: AWARD, text: "Award-Winning Stay", subText: "Winner of 2023 Travelers' Choice" },
    { type: CANCELLATION, text: "Flexible Cancellation", subText: "Get a full refund if you change your mind." },
    { type: "OTHER", text: "Free Wifi", subText: "Superhosts are experienced, highly rated Hosts." },
  ];

  it("renders all highlights correctly", () => {
    render(<ProductHighlight highlights={mockHighlights} />);

    // Assert that all text content appears
    mockHighlights.forEach((highlight) => {
      expect(screen.getByText(highlight.text)).toBeInTheDocument();
      expect(screen.getByText(highlight.subText)).toBeInTheDocument();
    });

	  // Check the icons are rendered (using the `presentation` role for SVGs)
	  const icons = screen.getAllByRole("presentation", { hidden: true });
	  expect(icons).toHaveLength(mockHighlights.length);
  });
  it("renders no highlights when the list is empty", () => {
    render(<ProductHighlight highlights={[]} />);

    const listItems = screen.queryAllByRole("listitem");
    expect(listItems).toHaveLength(0); // No highlights should be rendered
  });
 
});
