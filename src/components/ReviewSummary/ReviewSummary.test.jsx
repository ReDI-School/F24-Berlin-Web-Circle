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

    expect(screen.getByText("4.5 · 100 reviews")).toBeInTheDocument();
  });

  it("renders category ratings and icons correctly", () => {
    render(<ReviewSummary {...props} />);

    expect(screen.getByText("Cleanliness")).toBeInTheDocument();
    expect(screen.getByText("4.0")).toBeInTheDocument();

    expect(screen.getByText("Accuracy")).toBeInTheDocument();
    expect(screen.getByText("4.2")).toBeInTheDocument();

    expect(screen.getByText("CleanlinessIcon")).toBeInTheDocument();
    expect(screen.getByText("AccuracyIcon")).toBeInTheDocument();
  });

  it("renders RatingBar with correct title", () => {
    render(<ReviewSummary {...props} />);

    expect(screen.getByText("Overall rating")).toBeInTheDocument();
  });
});
