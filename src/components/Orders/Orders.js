import React, { useEffect, useState } from "react";
import "./Orders.css";
import { db } from "../../Firebase";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import ShoppingContext from "../../context/shopping/ShoppingContext";
import CheckoutProduct from "../CheckoutProducts/CheckoutProduct";

const Orders = () => {
  const { user } = useContext(ShoppingContext);
  const [orders, setOrders] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      // Redirect if user not logged in
      navigate("/login"); 
      return;
    }

    db.collection("user")
      .doc(user.uid)
      .collection("orders")
      .orderBy("created", "desc")
      .onSnapshot((snapshot) => {
        setOrders(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, [user, navigate]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      {orders.map((order) => (
        <div key={order.id} className="order">
          <h2>Order ID: {order.id}</h2>
          {order.data.basket.map((item) => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              hideButton={true} // optional: to hide "Remove" button
            />
          ))}
          <p>Total: R{order.data.amount / 100}</p>
          <small>{new Date(order.data.created * 1000).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
};

export default Orders;