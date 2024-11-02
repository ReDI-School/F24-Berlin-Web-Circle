import React, { useRef, useState, useEffect } from 'react';
import styles from './CategoryTabs.module.css';
import { FaSwimmingPool, FaUmbrellaBeach, FaCampground, FaCaravan, FaTree } from 'react-icons/fa'; 
import { MdOutlineCabin, MdOutlineCastle } from 'react-icons/md'; 
import { GiSnowflake2, GiDiamondHard, GiHouse, GiFishingBoat, GiSailboat } from 'react-icons/gi';
import { HiOutlineArrowRightCircle } from "react-icons/hi2";
import { HiOutlineArrowLeftCircle } from "react-icons/hi2";

const categories = [
  { label: 'Amazing Pools', icon: <FaSwimmingPool size={28} /> },
  { label: 'Beachfront', icon: <FaUmbrellaBeach size={28} /> },
  { label: 'Cabins', icon: <MdOutlineCabin size={28} /> },
  { label: 'Tiny Homes', icon: <GiHouse size={28} /> },
  { label: 'Castles', icon: <MdOutlineCastle size={28} /> },
  { label: 'Camping', icon: <FaCampground size={28} /> },
  { label: 'Luxe', icon: <GiDiamondHard size={28} /> },
  { label: 'Arctic', icon: <GiSnowflake2 size={28} /> },
  { label: 'Caravans', icon: <FaCaravan size={28} /> },
  { label: 'Tree Houses', icon: <FaTree size={28} /> },
  { label: 'Fishing Boats', icon: <GiFishingBoat size={28} /> },
  { label: 'Sailboats', icon: <GiSailboat size={28} /> },
  { label: 'Luxury Villas', icon: <GiDiamondHard size={28} /> },
  { label: 'Beach Houses', icon: <FaUmbrellaBeach size={28} /> },
  { label: 'Chalets', icon: <GiHouse size={28} /> },
  { label: 'Riverside Cabins', icon: <MdOutlineCabin size={28} /> },
];

const CategoryTabs = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const scrollContainerRef = useRef(null);

  const handleTabClick = (label) => {
    setActiveTab(label);
  };

  const handleScroll = (direction) => {
    const scrollContainer = scrollContainerRef.current;
    const scrollAmount = window.innerWidth * 0.1;
    
    if (direction === 'left') {
      scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }

    setShowLeftArrow(scrollContainer.scrollLeft > 0);
  };

  const checkForScroll = () => {
    const scrollContainer = scrollContainerRef.current;
    const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    
    setShowLeftArrow(scrollContainer.scrollLeft > 0);
    setShowRightArrow(scrollContainer.scrollLeft < maxScrollLeft);
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
    <div className={styles.categoryTabsContainer}>
      {showLeftArrow && 
        <div className={styles.scrollButtonLeftContainer}>
          <div className={styles.scrollButton} onClick={() => handleScroll('left')}>
            <HiOutlineArrowLeftCircle size={32}/>
          </div>
        </div>
      }
      <div className={styles.categoryTabsWrapper}>
        <div className={styles.categoryTabs} ref={scrollContainerRef}>
          {categories.map((category) => (
            <div
              key={category.label}
              className={`${styles.tabItem} ${activeTab === category.label ? styles.tabItemActive : ''}`}
              onClick={() => handleTabClick(category.label)}
            >
              <div className={styles.tabIcon}>{category.icon}</div>
              <span className={styles.tabLabel}>{category.label}</span>
            </div>
          ))}
        </div>
      </div>
      {showRightArrow &&
        <div className={styles.scrollButtonRightContainer}>
          <div className={styles.scrollButton} onClick={() => handleScroll('right')}>
            <HiOutlineArrowRightCircle size={32}/>
          </div>
        </div>
      }
    </div>
  );
};

export default CategoryTabs;
