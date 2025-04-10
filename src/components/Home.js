import React from "react";
import "./Home.css";
import Products from "./Products";
// import { Route } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_image"
          src="https://m.media-amazon.com/images/I/61wV73vy6ZL._SX3000_.jpg"
          alt="Amazon img"
        />
        <Products />
      </div>
    </div>
  );
};

export default Home;
