import "./styles/theme.css";
import "./styles/global.css";
import { ProductList } from "./components/ProductList";
import { Header } from "./components/Header";
import { useState } from "react";
import { Route, Routes } from "react-router";
import { Cart } from "./components/Cart";

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((prevCart) => [...prevCart, product]);
  }

  return (
    <div className="app-container">
      <Header cart={cart} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<ProductList addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>
      </main>
    </div>

    
  );
}