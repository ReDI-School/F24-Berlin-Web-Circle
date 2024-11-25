import React, { useState } from "react";
import ReactSlider from "react-slider";
import "./PriceRangeFilter.css";

const PriceRangeFilter = () => {
  const [sliderValues, setSliderValues] = useState([134, 340]);

  // Mock histogram data
  const histogramData = [
    { from: 50, to: 62.5, count: 2 },
    { from: 62.5, to: 75, count: 1 },
    { from: 75, to: 87.5, count: 2 },
    { from: 87.5, to: 100, count: 3 },
    { from: 100, to: 112.5, count: 3 },
    { from: 112.5, to: 125, count: 2 },
    { from: 125, to: 137.5, count: 3 },
    { from: 137.5, to: 150, count: 2 },
    { from: 150, to: 162.5, count: 5 },
    { from: 162.5, to: 175, count: 5 },
    { from: 175, to: 187.5, count: 5 },
    { from: 187.5, to: 200, count: 5 },
    { from: 200, to: 212.5, count: 4 },
    { from: 212.5, to: 225, count: 4 },
    { from: 225, to: 237.5, count: 3 },
    { from: 237.5, to: 250, count: 4 },
    { from: 250, to: 262.5, count: 3 },
    { from: 262.5, to: 275, count: 2 },
    { from: 275, to: 287.5, count: 2 },
    { from: 287.5, to: 300, count: 3 },
    { from: 300, to: 312.5, count: 2 },
    { from: 312.5, to: 325, count: 1 },
    { from: 325, to: 337.5, count: 1 },
    { from: 337.5, to: 350, count: 1 },
  ];
  

  const handleSliderChange = (values) => {
    setSliderValues(values);
  };

  return (
    <div className="price-range-container">
      {/* Header */}
      <h2>Price range</h2>
      <p>Nightly prices including fees and taxes</p>

      {/* Histogram */}
      <div className="histogram">
        {histogramData.map((bin, index) => {
          const isInRange = bin.from >= sliderValues[0] && bin.to <= sliderValues[1];
          const barColor = isInRange ? "rgb(255, 19, 129)" : "lightgray";

          return (
            <div key={index} className="histogram-bar-container">
              <div
                className="histogram-bar"
                style={{
                  height: `${bin.count * 5}px`,
                  backgroundColor: barColor,
                }}
              ></div>
              <span className="histogram-label">{`${bin.from}-${bin.to}`}</span>
            </div>
          );
        })}
      </div>

      {/* Slider */}
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="thumb"
        trackClassName="track"
        min={50}
        max={350}
        value={sliderValues}
        onChange={handleSliderChange}
        pearling
        minDistance={10}
        renderTrack={(props, state) => {
          const trackColor =
            props.key === "track-0"
              ? "lightgray"
              : props.key === "track-1"
              ? "rgb(255, 19, 129)"
              : "lightgray";

          return (
            <div
              {...props}
              style={{
                ...props.style,
                backgroundColor: trackColor,
              }}
            />
          );
        }}
      />

      {/* Inputs */}
      <div className="price-inputs-container">
        <div className="price-input">
          <label>Minimum</label>
          <input
            type="text"
            value={`$${sliderValues[0]}`}
            readOnly
          />
        </div>
        <div className="price-input">
          <label>Maximum</label>
          <input
            type="text"
            value={`$${sliderValues[1]}+`}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default PriceRangeFilter;
