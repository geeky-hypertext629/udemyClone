import React from "react";
import "./Header.css";
import logo from "./logo.png";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div className="headerPrimary">
      <div className="left part">
        <div className="udemyLogo">
          <img src={logo} className="logo" alt="logo"></img>
        </div>
        <div className="categoriesDiv">
          <span className="categories">Categories</span>
        </div>
      </div>
      <div className="mid part">
        <div className="searchIcon">
          <SearchIcon className="icon" />
        </div>
        <input className="searchBar" placeholder="Search for anything"></input>
      </div>
      <div className="right part">
        <div className="businessDiv">
          <span className="business">Udemy Business</span>
        </div>
        <div className="teachDiv">
          <span className="teach">Teach on Udemy</span>
        </div>
        <div className="cartDiv">
          <ShoppingCartOutlinedIcon className="icon" />
        </div>
        <div className="login button">Log In</div>
        <div className="signup button">Sign up</div>
      </div>
    </div>
  );
}

export default Header;
