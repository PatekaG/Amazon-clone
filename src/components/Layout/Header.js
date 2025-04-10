import {useContext} from 'react'
import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import "./Header..css";
import ShoppingContext from '../../context/shopping/ShoppingContext';
import {auth} from "../../Firebase"

const Header = () => {
  const shoppingContext = useContext(ShoppingContext);
  const {basket, user} = shoppingContext;

  const handleAuthentication =() => {
    if (user) {
      auth.signOut();
    }
  };

        return <header className="header">
        <Link to="/">
          <img
            className="header_logo"
            src="https://www.pngmart.com/files/23/Amazon-Logo-White-PNG-Clipart.png"
            alt="Amazon Logo"
          />
          <span className="logo_ext">.co.za</span>
        </Link>
  
        <div className="header_location">
          <LocationOnOutlinedIcon className="location_icon" />
        </div>
  
        <div className="header_locate">
          <span className="header_optionOne">Delivering to Cape Town 8000</span>
          <span className="header_optionTwo">Update location</span>
        </div>
  
        <div className="header_search">
          <span className="search_text">All</span>
          <input
            className="header_input"
            type="text"
            placeholder="Search Amazon.co.za"
          />
          <SearchIcon className="search_icon" />
        </div>
  
        <div className="header_nav">
            <Link to={!user && "/login"}>
              <div className="header_option" onClick={handleAuthentication}>
                <span className="header_optionOne">
                  Hello, {!user ? "Guest" : user.email}
                </span>
                <span className="header_optionTwo">
                  {user ? "Sign out" : "Sign in"}
                </span>
              </div>
            </Link>

          <Link to="/Return">
            <div className="header_option">
              <span className="header_optionOne">Returns</span>
              <span className="header_optionTwo">& Orders</span>
            </div>
          </Link>
  
          <Link to="/cart">
            <div className="header_optionBasket">
              <ShoppingBasketOutlinedIcon />
              <span className="header_optionTwo header_basketCount">{basket?.length}</span>
            </div>
          </Link>
        </div>
      </header>
};

export default Header;
