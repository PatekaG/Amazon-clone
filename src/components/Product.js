import React, { useContext } from "react";
import './Product.css';
import ShoppingContext from "../context/shopping/ShoppingContext";

const Product = ({id, image, title, rating, price}) => {
  const shoppingContext = useContext(ShoppingContext);
  const {addToBasket} = shoppingContext;

  const AddToBasketHandler = () => {
    addToBasket({item: {id, image, title, rating, price} });
  };

  return (
    <div className="product">
      <img
        src={image}
        alt=""
      />
      <div className="product_info">
        <p>{title}</p>
        <div className="product_rating">
            {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <p className="product_price"> {price} </p>
      </div>
      <button className="product_button" onClick={AddToBasketHandler}>Add to Basket</button>
    </div>
    
  );
};

export default Product;
