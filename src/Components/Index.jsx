import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

function Index() {
  return (
    <>
      <div className="head">       
        <div className="link1">
          <span>Free shipping</span>
          <span>Click & Collect</span>
          <span>Return To Store</span>
        </div>
        <div className="link2">
          <span>Download Our App</span>
          <span>Store Locator</span>
          <span>Help</span>
        </div>

        <div className="category"><li>
          <Link to="/home"> home</Link>
        </li>
        <li>
          <Link to="/product"> product</Link>
        </li>
        <li>
          <Link to="/about"> about</Link>
        </li>
        </div>
      </div>
    </>
  );
}

export default Index;
