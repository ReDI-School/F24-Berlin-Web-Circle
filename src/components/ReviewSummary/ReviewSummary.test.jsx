import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import ReviewSummary from "./ReviewSummary";

vi.mock("../../icons", () => ({
  AccuracyIcon: () => <div>AccuracyIcon</div>,
  CleanlinessIcon: () => <div>CleanlinessIcon</div>,
  CheckInIcon: () => <div>CheckInIcon</div>,
  CommunicationIcon: () => <div>CommunicationIcon</div>,
  Location: () => <div>Location</div>,
  Value: () => <div>Value</div>,
  AggregateRatingStarIcon: () => <div>AggregateRatingStarIcon</div>,
}));

vi.mock("../RatingBar/RatingBar", () => ({
  default: ({ title }) => <div>{title}</div>,
}));

describe("ReviewSummary Component", () => {
  const props = {
    totalAvgRating: 4.5,
    totalReviewsCount: 100,
    ratings: {
      cleanlinessAvgRating: 4.0,
      accuracyAvgRating: 4.2,
      checkInAvgRating: 4.1,
      communicationAvgRating: 4.3,
      locationAvgRating: 4.6,
      valueAvgRating: 4.7,
      starTotals: [20, 30, 40, 50, 60],
    },
  };

  it("renders overall rating and reviews count correctly", () => {
    render(<ReviewSummary {...props} />);

    expect(screen.getByText("4.5 · 100 reviews")).toBeTruthy();
  });

  it("renders category ratings and icons correctly", () => {
    render(<ReviewSummary {...props} />);

    expect(screen.getByText("Cleanliness")).toBeTruthy();
    expect(screen.getByText("4.0")).toBeTruthy();

    expect(screen.getByText("Accuracy")).toBeTruthy();
    expect(screen.getByText("4.2")).toBeTruthy();

    expect(screen.getByText("CleanlinessIcon")).toBeTruthy();
    expect(screen.getByText("AccuracyIcon")).toBeTruthy();
  });

  it("renders RatingBar with correct title", () => {
    render(<ReviewSummary {...props} />);

    expect(screen.getByText("Overall rating")).toBeTruthy();
  });
});
