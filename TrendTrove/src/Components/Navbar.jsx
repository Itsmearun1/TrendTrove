import React, { useState } from "react";
import "./Navbar.css";
import TrendTrove from "../Images/TrendTrove.jpg";
import { NavLink } from "react-router-dom";
import { MdOutlineFavorite } from "react-icons/md";
import { MdShoppingBag } from "react-icons/md";
import { RiLoginCircleFill } from "react-icons/ri";
import { Searchbar } from "./Searchbar";
const handlelogout = () => {
  localStorage.removeItem("User");
};
const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const user = localStorage.getItem("User") || "SIGN IN";
  const handleMenuClick = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    if (user == "SIGN IN") {
      <NavLink to="signin" style={{ textDecoration: "none" }}></NavLink>;
    } else {
      localStorage.removeItem("User");
    }
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
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <div className="navbar-logo">
          <img src={TrendTrove} alt="Logo" />
        </div>
      </NavLink>
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
                  <NavLink to="/products" style={{ textDecoration: "none" }}>
                    <li key={subIndex} className="navbar-submenu-item">
                      {subSection}
                    </li>
                  </NavLink>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <div className="si">
        <Searchbar />
        <div className="icons">
          <NavLink to="cart" style={{ textDecoration: "none" }}>
            <MdOutlineFavorite />
          </NavLink>
          <NavLink to="cart" style={{ textDecoration: "none" }}>
            <MdShoppingBag />
          </NavLink>
          <NavLink to="signin" style={{ textDecoration: "none" }}>
            <div style={{ color: "#3a2a7c", cursor: "pointer" }}>
              <RiLoginCircleFill />
              {user}
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
