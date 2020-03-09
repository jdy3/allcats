import React from "react";
import logo from "../../assets/Allcats_logo.svg";
import home from "../../assets/Allcats_home.svg";

const Navbar = () => {
  return (
    <div>
      <img
        src="https://img.icons8.com/ios-glyphs/50/000000/menu.png"
        alt="hamburger bar"
      />
      <img src={logo} alt="logo" />
      <img src={home} alt="logo" />
    </div>
  );
};

export default Navbar;
