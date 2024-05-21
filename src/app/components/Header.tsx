import React from 'react';
import './Header.css';
import { faSearch, faArrowUpWideShort, faArrowDownShortWide } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from "../Assets/download.png";
import Image from 'next/image';



const Header = ({ onSearch, onSortPriceAscending, onSortPriceDescending }: any) => {
    const [searchInput, setSearchInput] = useState('');

    const handleInputChange = (e: any) => {
        setSearchInput(e.target.value);
    };

    const handleSearchClick = () => {
        onSearch(searchInput);
    };

    return (
        <header className="header">
            <div className="logo-container">
                <Image src={logo} alt="Company Logo" className="logo" />
                <h1 className="logo-text">Jazeera Paints</h1>
            </div>
            <div className="search-container">
                Sort By
                <button className="sort-button" onClick={onSortPriceAscending} title="Sort by Price Ascending">
                    <FontAwesomeIcon icon={faArrowUpWideShort} />
                </button>
                <button className="sort-button" onClick={onSortPriceDescending} title="Sort by Price Descending">
                    <FontAwesomeIcon icon={faArrowDownShortWide} />
                </button>
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search products..."
                    value={searchInput}
                    onChange={handleInputChange}
                />
                <button className="search-button" onClick={handleSearchClick}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </header>
    );
};


export default Header