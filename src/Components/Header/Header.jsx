import React from "react";

import { categories } from "../../helper/data";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-main">
      <h2>Product List</h2>

      <div className="category btn-pro">
        {categories.map((item) => (
          <button>{item.toUpperCase()}</button>
        ))}
      </div>
      <div className="search">
        <input type="search" />
      </div>
    </div>
  );
};

export default Header;
