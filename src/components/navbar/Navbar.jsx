import React, { useState } from "react";
import "./navbar.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";

const Navbar = ({ setSidebarToggle }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="wrapper">
        <div className="nav-left">
          <div className="menu-icon">
            <MenuIcon onClick={() => setSidebarToggle((prev) => !prev)} />
          </div>

          <span className="logo">Dashboard</span>
        </div>
        <div className="nav-right">
          <div className="nav-right-cont">
            <NotificationsNoneIcon />
            <span className="badge">2</span>
          </div>
          {/* <div className="nav-right-cont">
            <LanguageIcon />
            <span className="badge">2</span>
          </div> */}
          <div className="nav-right-cont">
            <SettingsIcon />
          </div>
          <img
            className="avatar"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
