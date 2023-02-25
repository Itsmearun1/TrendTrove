import React, { useState } from "react";
import "./Navbar.css";
import TrendTrove from "../Images/TrendTrove.jpg";
import { Searchbar } from "./Searchbar";
import {
  FaFlagUsa,
  FaBell,
  FaHeart,
  FaShoppingBag,
  FaUser,
  FaSearch,
} from "react-icons/fa";
const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  const sections = [
    {
      title: "MEN",
      subSections: [
        "SHOP ALL",
        "CLOTHING",
        "BAGS",
        "SHOES",
        "ACCESSORIES",
        "BEAUTY",
        "SALE",
        "PRE-OWNED",
      ],
    },
    {
      title: "WOMEN",
      subSections: [
        "SHOP ALL",
        "CLOTHING",
        "BAGS",
        "SHOES",
        "ACCESSORIES",
        "GROOMING",
        "SALE",
        "PRE-OWNED",
      ],
    },
    {
      title: "KIDS",
      subSections: [
        "SHOP ALL",
        "WOMENS BEAUTY",
        "MENS GROOMING",
        "KIDS CARE",
        "SALE",
      ],
    },
    {
      title: "INDIE",
      subSections: [
        "SHOP ALL",
        "BABY GIRLS",
        "BABY BOYS",
        "GIRLS",
        "BOYS",
        "SALE",
      ],
    },
    {
      title: "HOME AND KITCHEN",
      subSections: [
        "Wall Decors",
        "Wall Frames",
        "Clocks",
        "Photo Frames",
        "Mirros",
        "Lamps",
        "Frgrance",
        "Accessories",
      ],
    },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={TrendTrove} alt="Logo" />
      </div>
      <Searchbar />
      <ul className="navbar-menu">
        {sections.map((section, index) => (
          <li
            key={index}
            className={`navbar-menu-item ${
              activeMenu === index ? "active" : ""
            }`}
            onMouseEnter={() => handleMenuClick(index)}
            onMouseLeave={() => handleMenuClick(index)}
          >
            {section.title}
            {activeMenu === index && (
              <ul className="navbar-submenu">
                {section.subSections.map((subSection, subIndex) => (
                  <li key={subIndex} className="navbar-submenu-item">
                    {subSection}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
