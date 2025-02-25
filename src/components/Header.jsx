import React, { useState } from "react";
import "./Header.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Header = () => {
  const [activeTab, setActiveTab] = useState(null);
  
  const tabs = [
    { name: "Home", dropdown: [] },
    { name: "Crypto Details", dropdown: ["Our Team", "Our Story", "Mission"] },
    { name: "DarkWeb Profile", dropdown: ["Web Development", "SEO", "Marketing"] },
    { name: "Suspect Profile", dropdown: ["Email", "Phone", "Address"] },
  ];

  return (
    <header className="header">
      <div className="logo-container">
        <img src="logo.jpg" alt="Logo" className="logo" />
      </div>
      <nav className="nav">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className="nav-item"
            onMouseEnter={() => tab.dropdown.length > 0 && setActiveTab(index)}
            onMouseLeave={() => setActiveTab(null)}
          >
            {tab.name}
            {tab.dropdown.length > 0 && (
              <span className={`arrow-icon ${activeTab === index ? "up" : "down"}`}>
                {activeTab === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            )}
            {activeTab === index && tab.dropdown.length > 0 && (
              <div className="dropdown">
                {tab.dropdown.map((item, i) => (
                  <div key={i} className="dropdown-item">{item}</div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
      <button className="login-btn">Login</button>
    </header>
  );
};

export default Header;
