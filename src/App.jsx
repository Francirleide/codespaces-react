import "./styles/theme.css";
import "./styles/global.css";
import { ProductList } from "./components/ProductList";
import { Header } from "./components/Header";
import { useState } from "react";
import { Route, Routes } from "react-router-dom"; // corrigido aqui
import { Cart } from "./components/Cart";
import { Login } from "./components/Login";

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((prevCart) => [...prevCart, product]);
  }

  const handleLogin = (email) => {
    alert(`Usuário logado: ${email}`);
  };

  return (
    <div className="app-container">
      <Header cart={cart} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<ProductList addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
        </Routes>
      </main>
    </div>
  );
}
