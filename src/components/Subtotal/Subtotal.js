import React, {useContext} from "react";
import {useNavigate} from "react-router-dom"
import {NumericFormat} from "react-number-format";
import "./Subtotal.css";
import ShoppingContext from "../../context/shopping/ShoppingContext";

const Subtotal = () => {
  
  const navigate = useNavigate();
  const shoppingContext = useContext(ShoppingContext);
  const { basket, getBasketTotal} = shoppingContext;

  return (
    <div className="subtotal">
      <NumericFormat 
        value={getBasketTotal(basket)}
        decimalScale={2}
        displayType={'text'}
        prefix={"$"}
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
      />
      <button onClick={() => navigate('/payment')}>Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
