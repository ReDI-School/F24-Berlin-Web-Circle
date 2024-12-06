import { useEffect } from "react";
import styles from "./FilterButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";

const FilterButton = ({toggleModal, setHistogramData = () => {}}) => {
  // Simulating dynamic data fetching or processing
  useEffect(() => {
    if (!setHistogramData) {
      console.warn("setHistogramData is not provided to FilterButton");
      return;
    }
    // Replace this logic with actual data processing from the provided file or API
    const generateHistogramData = () => {
      const minPrice = 9;
      const maxPrice = 310;
      const bins = 6; // Number of bins for histogram

      const binSize = Math.ceil((maxPrice - minPrice) / bins);
      const mockData = Array.from({ length: bins }, (_, index) => {
        const from = minPrice + index * binSize;
        const to = Math.min(from + binSize - 1, maxPrice);
        const count = Math.floor(Math.random() * 20) + 1; // Random count for demo

        return { from, to, count };
      });

      return mockData;
    };

      const data = generateHistogramData();
      setHistogramData(data);
    }, [setHistogramData]);

  return (
    <>
      {/* Filter button */}
      <div className={styles.filterButton} onClick={toggleModal}>
        <div className={styles.contentFilter}>
          <FontAwesomeIcon icon={faSliders} className={styles.icon} />
          <h6>Filters</h6>
        </div>
      </div>
    </>
  );
};

export default FilterButton;
