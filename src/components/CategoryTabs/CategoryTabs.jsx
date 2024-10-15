import React, { useRef, useState } from 'react';
import './CategoryTabs.css';

// Import icons from react-icons
import { FaSwimmingPool, FaUmbrellaBeach, FaCampground, FaCaravan, FaTree, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { MdOutlineCabin, MdOutlineCastle } from 'react-icons/md';
import { GiSnowflake2, GiDiamondHard, GiHouse, GiFishingBoat, GiSailboat } from 'react-icons/gi';

const categories = [
  { label: 'Amazing Pools', icon: <FaSwimmingPool size={32} /> },  
  { label: 'Beachfront', icon: <FaUmbrellaBeach size={32} /> },     
  { label: 'Cabins', icon: <MdOutlineCabin size={32} /> },          
  { label: 'Tiny Homes', icon: <GiHouse size={32} /> },             
  { label: 'Castles', icon: <MdOutlineCastle size={32} /> },        
  { label: 'Camping', icon: <FaCampground size={32} /> },           
  { label: 'Luxe', icon: <GiDiamondHard size={32} /> },             
  { label: 'Arctic', icon: <GiSnowflake2 size={32} /> },  
  { label: 'Caravans', icon: <FaCaravan size={32} /> },
  { label: 'Tree Houses', icon: <FaTree size={32} /> },
  { label: 'Fishing Boats', icon: <GiFishingBoat size={32} /> },
  { label: 'Sailboats', icon: <GiSailboat size={32} /> },
];

const CategoryTabs = () => {
  const scrollContainerRef = useRef(null);
  const [activeTab, setActiveTab] = useState(null);

  const handleScroll = (direction) => {
    const scrollContainer = scrollContainerRef.current;
    const scrollAmount = scrollContainer.clientWidth * 0.9; // Scroll 90% of the container width
    scrollContainer.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
  };

  return (
    <div className="category-tabs-container">
      {/* Left Arrow Button */}
      <button className="scroll-button left" onClick={() => handleScroll('left')}>
        <FaArrowLeft size={24} />
      </button>

      {/* Tabs Wrapper */}
      <div className="category-tabs-wrapper">
        <div className="category-tabs" ref={scrollContainerRef}>
          {categories.map((category) => (
            <div
              key={category.label}
              className={`tab-item ${activeTab === category.label ? 'active' : ''}`}
              onClick={() => setActiveTab(category.label)}
            >
              <div className="tab-icon">{category.icon}</div>
              <span className="tab-label">{category.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow Button */}
      <button className="scroll-button right" onClick={() => handleScroll('right')}>
        <FaArrowRight size={24} />
      </button>
    </div>
  );
};

export default CategoryTabs;
