import { useState } from "react";
import "./LandingNavBar.css";

const LandingNavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="landing-navbar">
      <a href="/Landing" className="logo">PopPlay</a>
      <div className="nav-links">
        <a href="/Landing">Home</a>
        <div className="dropdown">
          <a
            href="#"
            className="dropdown-toggle"
            onClick={toggleDropdown}
          >
            Genres
          </a>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <a href="/action">Action</a>
              <a href="/adventure">Adventure</a>
              <a href="/drama">Drama</a>
              <a href="/fantasy">Fantasy</a>
              <a href="/romance">Romance</a>
            </div>
          )}
        </div>
        <a href="/mylist">My List</a>
      </div>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
        />
        <button className="search-button">Search</button>
      </div>
      <div className="user-section">
        <span>Welcome, Michael</span>
        <a href="/logout" className="logout">Logout</a>
      </div>
    </div>
  );
};

export default LandingNavBar;