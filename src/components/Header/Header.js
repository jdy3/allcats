import React from "react";
import logo from "../../assets/Allcats_logo.svg";
import home from "../../assets/Allcats_home.svg";
import "./Header.css";

const Navbar = () => {
  return (
    <div className="headerContainer">
      <img
        className="burgerBar"
        src="https://img.icons8.com/ios-glyphs/50/000000/menu.png"
        alt="hamburger bar"
      />
      <img className="logo" src={logo} alt="logo" />
      <div className="menuOptions">
        <h3>Cat Delivery</h3>
        <h3>Book a visit</h3>
        <h3>Donate</h3>
      </div>
      <img className="home" src={home} alt="logo" />
    </div>
  );
};

export default Navbar;
