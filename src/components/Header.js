import React from "react";
import "./style/Header.css";

import logo from "../Images/amazon_logo.png";

const Header = (props) => {
  return (
    <div className="header">
      <img src={logo} alt="amazon" className="header_logo" />
      <div className="header_search">
        <input className="header_search_input" type="text" />
      </div>
      <div class="header_nav">
        <div className="header_option">
          <span className="header_option_span">SignIn</span>
        </div>
        <div className="header_option">
          <span className="header_option_span">Order</span>
        </div>
        <div className="header_option">
          <span className="header_option_span">Prime</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
