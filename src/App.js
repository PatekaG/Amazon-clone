import "./App.css";
import { useContext, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Header from "./components/Layout/Header";
import ProductDetails from "./components/ProductDetails";
import Login from "./components/Login/Login";
import Orders from "./components/Orders/Orders";
import Delivery from "./components/Delivery/Delivery";
import Notfound from "./components/NotFound/Notfound";
import ShoppingContext from "./context/shopping/ShoppingContext";
import { auth } from "./Firebase";
import Checkout from "./components/Checkout/Checkout";
import Payment from "./components/Payment/Payment";

const stripePromise = loadStripe(
  'pk_test_51RD7ENH0vBxmYy2eO1Un4LBk3ic181Zs0C3xHVwAw25xyh91qpGQWs51SdBV9CkZdfr0J5SrJEY2cXLwPQOlFngU00E0WfLkrp'
);


const App = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { setUser } = shoppingContext;

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("User is -> ", authUser);

      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/payment" element={<Elements stripe={stripePromise}><Payment/></Elements>} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/Delivery" element={< Delivery/>} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </main>
    </>
  );
};

export default App;




