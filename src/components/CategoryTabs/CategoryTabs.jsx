import React, { useRef, useState, useEffect } from 'react';
import styles from './CategoryTabs.module.css';
import { FaSwimmingPool, FaUmbrellaBeach, FaCampground, FaCaravan, FaTree } from 'react-icons/fa'; 
import { MdOutlineCabin, MdOutlineCastle } from 'react-icons/md'; 
import { GiSnowflake2, GiDiamondHard, GiHouse, GiFishingBoat, GiSailboat } from 'react-icons/gi';
import { HiOutlineArrowRightCircle } from "react-icons/hi2";
import { HiOutlineArrowLeftCircle } from "react-icons/hi2";
import * as constants from '../../constants/constants';
import { createSearchParams, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import FilterButton from '../FilterButton/FilterButton';

const categories = [
  { label: "Amazing Pools", tag: constants.AMAZING_POOLS, icon: <FaSwimmingPool size={28} /> },
  { label: "Beachfront", tag: constants.BEACHFRONT, icon: <FaUmbrellaBeach size={28} /> },
  { label: "Cabins", tag: constants.CABINS, icon: <MdOutlineCabin size={28} /> },
  { label: "Tiny Homes", tag: constants.TINY_HOMES, icon: <GiHouse size={28} /> },
  { label: "Castles", tag: constants.CASTLES, icon: <MdOutlineCastle size={28} /> },
  { label: "Camping", tag: constants.CAMPING, icon: <FaCampground size={28} /> },
  { label: "Luxe", tag: constants.LUXE, icon: <GiDiamondHard size={28} /> },
  { label: "Arctic", tag: constants.ARCTIC, icon: <GiSnowflake2 size={28} /> },
  { label: "Caravans", tag: constants.CARAVANS, icon: <FaCaravan size={28} /> },
  { label: "Tree Houses", tag: constants.TREE_HOUSES, icon: <FaTree size={28} /> },
  { label: "Fishing Boats", tag: constants.FISHING_BOATS, icon: <GiFishingBoat size={28} /> },
  { label: "Sailboats", tag: constants.SAILBOATS, icon: <GiSailboat size={28} /> },
  { label: "Luxury Villas", tag: constants.LUXURY_VILLAS, icon: <GiDiamondHard size={28} /> },
  { label: "Beach Houses", tag: constants.BEACH_HOUSES, icon: <FaUmbrellaBeach size={28} /> },
  { label: "Chalets", tag: constants.CHALETS, icon: <GiHouse size={28} /> },
  { label: "Riverside Cabins", tag: constants.RIVERSIDE_CABINS, icon: <MdOutlineCabin size={28} /> },
];

const CategoryTabs = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const scrollContainerRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const handleTabClick = (tag) => {
    setActiveTab(tag);
    const params = new URLSearchParams(searchParams);
    params.set('category', tag);
    navigate({
      pathname: location.pathname,
      search: createSearchParams(params).toString(),
    });
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

  // Touch Scrolling Handlers
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
    const scrollContainer = scrollContainerRef.current;
    const deltaX = touchStartX.current - touchEndX.current;
    scrollContainer.scrollBy({ left: deltaX, behavior: 'smooth' });
    touchStartX.current = touchEndX.current;
  };

  return (
    <div className={styles.categoryMenu}>
      <div className={styles.categoryTabsContainer}>
        {showLeftArrow && (
          <div className={styles.scrollButtonLeftContainer}>
            <div className={styles.scrollButton} onClick={() => handleScroll('left')}>
              <HiOutlineArrowLeftCircle size={28} />
            </div>
          </div>
        )}
        <div
          className={styles.categoryTabsWrapper}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div className={styles.categoryTabs} ref={scrollContainerRef}>
            {categories.map((category, id) => {
              return (
                <div
                  key={id}
                  className={`${styles.tabItem} ${activeTab === category.label ? styles.tabItemActive : ''}`}
                  onClick={() => handleTabClick(category.tag)}
                >
                  <div className={styles.tabIcon}>{category.icon}</div>
                  <span className={styles.tabLabel}>{category.label}</span>
                </div>
              );
            })}
          </div>
          <div className={styles.filterButtonWrapper}>
            <FilterButton />
          </div>
        </div>
        {showRightArrow && (
          <div className={styles.scrollButtonRightContainer}>
            <div className={styles.scrollButton} onClick={() => handleScroll('right')}>
              <HiOutlineArrowRightCircle size={28} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryTabs;
