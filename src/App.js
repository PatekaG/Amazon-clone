import './App.css';
import { useContext, useEffect } from 'react';
import { Redirect, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Header from './components/Layout/Header';
import ProductDetails from './components/ProductDetails';
import Login from './components/Login';
import Cart from './components/Cart';
import Return from './components/Return';
import Notfound from './components/Notfound';
import ShoppingContext from './context/shopping/ShoppingContext';
import {auth} from './Firebase'

const App = () => {
  const shoppingContext = useContext(ShoppingContext);
  const {setUser} = shoppingContext;

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
    <Header/>
    <main>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>

        <Route path="/home">
          <Home />
        </Route>

        <Route path="/products">
          <Products />
        </Route>

        <Route path="/products/:id">
          <ProductDetails />
        </Route>

        <Route path="/Login">
          <Login/>
        </Route>

        <Route path="/Cart">
          <Cart />
        </Route>

        <Route path="/Return">
          <Return />
        </Route>

        <Route path="*">
          <Notfound />
        </Route>

      </Switch>
    </main>
  </>
  );
}

export default App;