import "./App.css";
import { useContext, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Header from "./components/Layout/Header";
import ProductDetails from "./components/ProductDetails";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Return from "./components/Return";
import Notfound from "./components/Notfound";
import ShoppingContext from "./context/shopping/ShoppingContext";
import { auth } from "./Firebase";

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
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Return" element={<Return />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </main>
    </>
  );
};

export default App;