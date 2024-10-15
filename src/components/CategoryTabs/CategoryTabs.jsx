import React, { useRef, useState, useEffect } from 'react';
import './CategoryTabs.css';

// Import icons from react-icons
import { FaSwimmingPool, FaUmbrellaBeach, FaCampground, FaCaravan,FaTree, FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Font Awesome
import { MdOutlineCabin, MdOutlineCastle } from 'react-icons/md'; // Material Icons
import { GiSnowflake2, GiDiamondHard, GiHouse, GiFishingBoat, GiSailboat } from 'react-icons/gi'; // Game Icons

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
  { label: 'Luxury Villas', icon: <GiDiamondHard size={32} /> },
  { label: 'Beach Houses', icon: <FaUmbrellaBeach size={32} /> },
  { label: 'Chalets', icon: <GiHouse size={32} /> },
  { label: 'Riverside Cabins', icon: <MdOutlineCabin size={32} /> },
];
const CategoryTabs = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [showArrows, setShowArrows] = useState({ left: false, right: false });
  const scrollContainerRef = useRef(null);

  const handleTabClick = (label) => {
    setActiveTab(label);
  };

  const handleScroll = (direction) => {
    const scrollContainer = scrollContainerRef.current;
    const scrollAmount = window.innerWidth * 0.9; // Scroll 90% of viewport width
    if (direction === 'left') {
      scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const checkForScroll = () => {
    const scrollContainer = scrollContainerRef.current;
    const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    setShowArrows({
      left: scrollContainer.scrollLeft > 0,
      right: scrollContainer.scrollLeft < maxScrollLeft,
    });
  };

  useEffect(() => {
    checkForScroll();
    window.addEventListener('resize', checkForScroll);
    return () => window.removeEventListener('resize', checkForScroll);
  }, []);

  return (
    <div className="category-tabs-wrapper">
      {showArrows.left && (
        <button className="scroll-button left" onClick={() => handleScroll('left')}>
          <FaArrowLeft size={24} />
        </button>
      )}
      
      <div className="category-tabs" ref={scrollContainerRef} onScroll={checkForScroll}>
        {categories.map((category) => (
          <div
            key={category.label}
            className={`tab-item ${activeTab === category.label ? 'active' : ''}`}
            onClick={() => handleTabClick(category.label)}
          >
            <div className="tab-icon">{category.icon}</div>
            <span className="tab-label">{category.label}</span>
          </div>
        ))}
      </div>
      
      {showArrows.right && (
        <button className="scroll-button right" onClick={() => handleScroll('right')}>
          <FaArrowRight size={24} />
        </button>
      )}
    </div>
  );
};

export default CategoryTabs;
