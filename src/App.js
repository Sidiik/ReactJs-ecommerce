import React, { useState } from "react";
import Header from "./Components/Header";
import Hero from "./Components/HeroSection";
import Services from "./Components/Services";
import data from "./data";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import Footer from "./Components/footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const { store } = data;
  const [products] = useState(store);
  const [cart, setCart] = useState([]);

  const addCart = (product) => {
    setCart([...cart, product]);

    console.log("hi we are adding something", cart);
  };

  return (
    <Router>
      <Switch>
        <div className="App">
          <Header cart={cart} />

          <Route path="/cartItems">
            <Cart cart={cart} />
          </Route>
          <Route path="/" exact>
            <Hero />
            <Services />
            <Products products={products} addCart={addCart} />
          </Route>
          <Footer />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
