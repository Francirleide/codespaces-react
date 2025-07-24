import { ShoppingBasket } from "lucide-react";
import styles from "./Header.module.css";
import { Link } from "react-router";

export function Header({ cart }) {
  const total = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <header className={styles.container}>
      <Link to="/" className={styles.logo}>
        <h1>TJA Megastore</h1>
      </Link>

      <Link to="/cart" className={styles.cartInfo}>
        <ShoppingBasket size={28} />
        <p>Total: R$ {total.toFixed(2)}</p>
      </Link>
    </header>
  );
}