import React from "react";
import "./Products.css";
import Product from "./Product";
// import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <>
      <div className="products_row">
      <Product
        id="1"
        title="Pampers Anti-Rash Shield Taped Size 4 (9-14 kg), 132 Nappies, Lotion With Aloe"
        image="https://m.media-amazon.com/images/I/81FFoLrFK8L._AC_SX679_.jpg"
        rating={5}
        price={146.26}
      />
      <Product
        id="1"
        title="OMO Stain Removal Auto Washing Powder Detergent 4kg"
        image="https://m.media-amazon.com/images/I/71MD3A5En1L._AC_SY300_SX300_.jpg"
        rating={3}
        price={146.26}
      />
      <Product
        id="1"
        title="OMO Stain Removal Auto Washing Powder Detergent 4kg"
        image="https://m.media-amazon.com/images/I/71MD3A5En1L._AC_SY300_SX300_.jpg"
        rating={5}
        price={146.26}
      />
      </div>
      <div className="products_row">
      <Product
        id="1"
        title="OMO Stain Removal Auto Washing Powder Detergent 4kg"
        image="https://m.media-amazon.com/images/I/71MD3A5En1L._AC_SY300_SX300_.jpg"
        rating={4}
        price={146.26}
      />
      <Product
        id="1"
        title="OMO Stain Removal Auto Washing Powder Detergent 4kg"
        image="https://m.media-amazon.com/images/I/71MD3A5En1L._AC_SY300_SX300_.jpg"
        rating={2}
        price={146.26}
      />
      <Product
        id="1"
        title="OMO Stain Removal Auto Washing Powder Detergent 4kg"
        image="https://m.media-amazon.com/images/I/71MD3A5En1L._AC_SY300_SX300_.jpg"
        rating={1}
        price= {146.26}
      />
      <Product
        id="1"
        title="OMO Stain Removal Auto Washing Powder Detergent 4kg"
        image="https://m.media-amazon.com/images/I/71MD3A5En1L._AC_SY300_SX300_.jpg"
        rating={3}
        price= {146.26}
      />
      </div>
      <div className="products_row">
      <Product
        id="1"
        title="OMO Stain Removal Auto Washing Powder Detergent 4kg"
        image="https://m.media-amazon.com/images/I/71MD3A5En1L._AC_SY300_SX300_.jpg"
        rating={4}
        price={146.64}
      />
      </div>
    </>
    


    
  );
};

export default Products;
