import { useContext } from "react";
import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MenuIcon from '@mui/icons-material/Menu';
import "./Header.css";
import ShoppingContext from "../../context/shopping/ShoppingContext";
import { auth } from "../../Firebase";

const Header = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { basket, user } = shoppingContext;

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <header className="header">
      <div className="header_container">
        <div className="logo_section">
        <Link to="/">
          <img
            className="header_logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="Amazon Logo"
          />
          <span className="logo_ext">.co.za</span>
        </Link>
        </div>

        <div className="header_location">
          <Link to="/Delivery">
          {/* <LocationOnOutlinedIcon className="location_icon" /> */}
          <div className="header_locate">
            <span className="deliver_optionOne">Delivering to Cape Town 8000</span>
            <span className="header_optionTwo">Update location</span>
          </div>
          </Link>
          
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
          <div className="sign_section">
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
          </div>
      
          <div className="order_section">
          <Link to="/Orders">
            <div className="header_option">
              <span className="header_optionOne">Returns</span>
              <span className="header_optionTwo">& Orders</span>
            </div>
          </Link>
          </div>
          
          <div className="checkout_section">
          <Link to="/checkout">
            <div className="header_optionBasket">
              <ShoppingBasketOutlinedIcon />
              <span className="header_optionTwo header_basketCount">
                {basket?.length} Basket
              </span>
            </div>
          </Link>
          </div>
          
        </div>
      </div>

      <nav className="navbar_bottom">
        <div className="navbar_all">
          <span className="menu_icon"><MenuIcon /></span>
          <span>All</span>
        </div>
        <ul className="navbar_links">
          <li className="link">Best Sellers</li>
          <li className="link">Today’s Deals</li>
          <li className="link">Keep Shopping for</li>
          <li className="link">Everyday Essentials</li>
          <li className="link">Customer Service</li>
          <li className="link">Buy Again</li>
          <li className="link">Gift Cards</li>
          <li className="link">Sell on Amazon</li>
        </ul>
        <img
            className="navbar_logo"
            src="https://m.media-amazon.com/images/G/53/RBSxFELA/2025/EE_SWM._CB546918322_.jpg"
            alt="Amazon Logo"
          />
      </nav>
    </header>
  );
};

export default Header;
