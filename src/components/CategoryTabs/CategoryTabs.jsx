import React, { useState } from 'react';
import './CategoryTabs.css';

// Import icons from @airbnb/lunar-icons
import BeachIcon from '@airbnb/lunar-icons/lib/interface/Beach';
import PoolIcon from '@airbnb/lunar-icons/lib/interface/Swimming';
import CastleIcon from '@airbnb/lunar-icons/lib/interface/Castle';
import CabinIcon from '@airbnb/lunar-icons/lib/interface/Cabin';
import LuxeIcon from '@airbnb/lunar-icons/lib/interface/Diamond';
import ArcticIcon from '@airbnb/lunar-icons/lib/interface/Snowflake';
import TinyHouseIcon from '@airbnb/lunar-icons/lib/interface/HomeTiny';
import CampingIcon from '@airbnb/lunar-icons/lib/interface/Tent';

const categories = [
  { label: 'Amazing Pools', icon: <PoolIcon size="32" /> },
  { label: 'Beachfront', icon: <BeachIcon size="32" /> },
  { label: 'Cabins', icon: <CabinIcon size="32" /> },
  { label: 'Tiny Homes', icon: <TinyHouseIcon size="32" /> },
  { label: 'Castles', icon: <CastleIcon size="32" /> },
  { label: 'Camping', icon: <CampingIcon size="32" /> },
  { label: 'Luxe', icon: <LuxeIcon size="32" /> },
  { label: 'Arctic', icon: <ArcticIcon size="32" /> },
];

const CategoryTabs = () => {
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (label) => {
    setActiveTab(label);
  };

  return (
    <div className="category-tabs">
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
  );
};

export default CategoryTabs;
