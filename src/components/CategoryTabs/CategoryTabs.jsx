import React, { useState } from 'react';
import './CategoryTabs.css';

// Import icons from react-icons
import { FaSwimmingPool, FaUmbrellaBeach, FaCampground, FaCaravan } from 'react-icons/fa'; // Font Awesome
import { MdOutlineCabin, MdOutlineCastle } from 'react-icons/md'; // Material Icons
import { GiSnowflake2, GiDiamondHard, GiHouse } from 'react-icons/gi'; // Game Icons

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
  { label: 'Caravans', icon: <FaCaravan size={32} /> },
  { label: 'Caravans', icon: <FaCaravan size={32} /> },
  { label: 'Caravans', icon: <FaCaravan size={32} /> },
  { label: 'Caravans', icon: <FaCaravan size={32} /> },
  { label: 'Caravans', icon: <FaCaravan size={32} /> },
  { label: 'Caravans', icon: <FaCaravan size={32} /> },
  { label: 'Caravans', icon: <FaCaravan size={32} /> },
  { label: 'Caravans', icon: <FaCaravan size={32} /> },
  { label: 'Caravans', icon: <FaCaravan size={32} /> },
  { label: 'Caravans', icon: <FaCaravan size={32} /> },
  { label: 'Caravans', icon: <FaCaravan size={32} /> },
  { label: 'Caravans', icon: <FaCaravan size={32} /> },
  { label: 'Caravans', icon: <FaCaravan size={32} /> },
  { label: 'Caravans', icon: <FaCaravan size={32} /> },
  { label: 'Caravans', icon: <FaCaravan size={32} /> },
  { label: 'Caravans', icon: <FaCaravan size={32} /> }
 
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
