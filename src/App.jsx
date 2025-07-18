import "./styles/theme.css";
import "./styles/global.css";
import { MyHeader } from "./components/MyHeader";  
import { ProductList } from "./components/ProductList";
import { useState } from "react";


export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((prevCart) => [...prevCart, product]);
  }

  return (
    // React Fragment
    <>
      <Header cart={cart} />
      <ProductList addToCart={addToCart} />
    </>
  );
}