import React, { ReactElement } from "react";
import logo from "../assets/foodMartlogo.png";

export const Header: React.FC = (): ReactElement => {
  return (
    <div className="header">
      <div>
        <img className="logo" src={logo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
