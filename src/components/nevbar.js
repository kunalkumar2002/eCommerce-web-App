import React from "react";
import { Link } from "react-router-dom";
import myImage from "../image/2023-09-25_194252-PhotoRoom.png-PhotoRoom.png";

import "../CSS/nav.css";

function Nevbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/">eCommerce</Link>
        <Link to="/product">Products</Link>
        <Link to="/addProduct">AddProduct</Link>
      </nav>
      <div className="image">
        <img src={myImage} />
        {/* <img src={secImage} /> */}
        <span>0</span>
      </div>
    </div>
  );
}
export default Nevbar;
