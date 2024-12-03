import PriceRangeFilter from "./PriceRangeFilter";
import { render, screen } from "@testing-library/react";

// Mock ResizeObserver
global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

test("renders PriceRangeFilter and checks for specific text", () => {
  // Provide mock histogram data for rendering
  const mockHistogramData = [
    { from: 10, to: 50, count: 5 },
    { from: 51, to: 100, count: 10 },
  ];

  // Render the component
  render(<PriceRangeFilter histogramData={mockHistogramData} />);

  // Check if the specific text is present in the rendered output
  const textElement = screen.getByText(/Nightly prices including fees and taxes/i);

  // Assert that the text element is in the document
  expect(textElement).toBeInTheDocument();
});
