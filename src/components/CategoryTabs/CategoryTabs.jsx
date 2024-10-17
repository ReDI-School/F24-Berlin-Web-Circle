import React, { useRef, useState, useEffect } from 'react';
import './CategoryTabs.css';
import { FaSwimmingPool, FaUmbrellaBeach, FaCampground, FaCaravan, FaTree } from 'react-icons/fa'; 
import { MdOutlineCabin, MdOutlineCastle } from 'react-icons/md'; 
import { GiSnowflake2, GiDiamondHard, GiHouse, GiFishingBoat, GiSailboat } from 'react-icons/gi';
import { HiOutlineArrowRightCircle } from "react-icons/hi2";
import { HiOutlineArrowLeftCircle } from "react-icons/hi2";


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
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const scrollContainerRef = useRef(null);

  const handleTabClick = (label) => {
    setActiveTab(label);
  };

  const handleScroll = (direction) => {
    const scrollContainer = scrollContainerRef.current;
    const scrollAmount = window.innerWidth * 0.9;
    
    if (direction === 'left') {
      scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }

    // Update visibility of the left arrow
    setShowLeftArrow(scrollContainer.scrollLeft > 0);
  };

  const checkForScroll = () => {
    const scrollContainer = scrollContainerRef.current;
    const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    
    // Update visibility of the left arrow
    setShowLeftArrow(scrollContainer.scrollLeft > 0);
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    checkForScroll();
    scrollContainer.addEventListener('scroll', checkForScroll);
    
    return () => {
      scrollContainer.removeEventListener('scroll', checkForScroll);
    };
  }, []);

  return (
    <div className="category-tabs-container">
      <div className="category-tabs-wrapper">
        {showLeftArrow && (
          <button className="scroll-button left" onClick={() => handleScroll('left')}>
            <HiOutlineArrowLeftCircle size={32} />
          </button>
        )}
        
        <div className="category-tabs" ref={scrollContainerRef}>
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
        
        <button className="scroll-button right" onClick={() => handleScroll('right')}>
          <HiOutlineArrowRightCircle size={32} />
        </button>
      </div>
    </div>
  );
};

export default CategoryTabs;
