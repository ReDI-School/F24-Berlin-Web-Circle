import React, { useState } from "react";
import ReactSlider from "react-slider";
import "./PriceRangeFilter.css";

const PriceRangeFilter = ({ histogramData }) => {
  const [minPrice, setMinPrice] = useState(9);
  const [maxPrice, setMaxPrice] = useState(310);
  const [sliderValues, setSliderValues] = useState([minPrice, maxPrice]);

  const handleSliderChange = (values) => {
    setSliderValues(values);
    setMinPrice(values[0]);
    setMaxPrice(values[1]);
  };

  const handleMinPriceChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value < maxPrice && value >= 9) {
      setMinPrice(value);
      setSliderValues([value, sliderValues[1]]);
    }
  };

  const handleMaxPriceChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value > minPrice && value <= 310) {
      setMaxPrice(value);
      setSliderValues([sliderValues[0], value]);
    }
  };

  const [minValue, maxValue] = sliderValues;

  return (
    <div className="price-range-container">
      <h2>Price range</h2>
      <p>Nightly prices including fees and taxes</p>

      <div className="histogram">
        {histogramData.map((bin, index) => {
          const isInRange = bin.from >= minValue && bin.to <= maxValue;
          const barColor = isInRange ? "red" : "gray";

          return(
          <div key={index} className="histogram-bar-container">
            <div
              className="histogram-bar"
              style={{
                height: `${bin.count * 2}px`, 
                backgroundColor: barColor,
              }}
            ></div>
            {/*<span className="histogram-label">{`${bin.from}-${bin.to}`}</span>*/}
          </div>
          );
        })}
      </div>

      <ReactSlider
        className="horizontal-slider"
        thumbClassName="thumb"
        trackClassName="track"
        min={9}
        max={310}
        value={sliderValues}
        onChange={handleSliderChange}
        pearling
        minDistance={5}
        renderTrack={(props, state) => {
          const [minValue, maxValue] = state.value;

          let trackColor = props.key === "track-0" ? "gray" : props.key === "track-1" ? "red" : "gray";
          
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
      


      <div className="price-inputs-container">
        <div className="price-input">
          <label>Minimum</label>
          <input
            type="text"
            value={"€" + `${sliderValues[0]}`}
            min="9"
            max={sliderValues[1] - 1}
            onChange={handleMinPriceChange}
          />
        </div>
        <div className="price-input">
          <label>Maximum</label>
          <input
            type="text"
            value={"€" + `${sliderValues[1]}` + "+"}
            min={sliderValues[0] + 1}
            max="310"
            onChange={handleMaxPriceChange}
          />
        </div>
      </div>
    </div>
  );
};

export default PriceRangeFilter;
