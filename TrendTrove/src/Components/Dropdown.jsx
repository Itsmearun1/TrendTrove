import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { Searchbar } from './Searchbar';
import './Dropdown.css';

const sections = [
    { name: 'MEN', items: ['Jackets & Coats', 'Jeans', 'Shirts', 'Sweatshirts','Trousers & Pants','T-Shirts'] },
    { name: 'WOMEN', items: ['T-Shirts', 'Sweaters', 'Blouses', 'Shirts'] },
    { name: 'INDIE', items: ['Pants', 'Jeans', 'Shorts', 'Skirts'] },
    { name: 'KIDS', items: ['Day Dresses', 'Evening Dresses', 'Maxi Dresses', 'Mini Dresses'] },
    { name: 'HOME AND KITHCEN', items: ['Workout Clothes', 'Sports Bras', 'Sneakers', 'Yoga Clothes'] },
];

export const Dropdown = () => {
    const [dropdownOpen, setDropdownOpen] = useState(null);

    return (
        <div className="wrapper">
            <Searchbar/>
        <div className="dropdown-navbar-wrapper">
            {sections.map((section, index) => (
                <div
                    key={index}
                    className="dropdown-section"
                    onMouseEnter={() => setDropdownOpen(index)}
                    onMouseLeave={() => setDropdownOpen(null)}
                >
                    <h6>{section.name}</h6>
                    {dropdownOpen === index && (
                        <div className="dropdown-section-items" >
                            {section.items.map((item, i) => (
                                <NavLink to="products" key={i} style={{ textDecoration: 'none' }}>
                                    <div onClick={() => console.log(`${item} clicked`)}>{item}</div>
                                </NavLink>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
        </div>
    );
};
