import React from "react";
import logo from "../../logo/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <nav>
        <a href="/player">Player list</a>
        <a href="/myTeam">My Team</a>
      </nav>
    </div>
  );
};

export default Header;
