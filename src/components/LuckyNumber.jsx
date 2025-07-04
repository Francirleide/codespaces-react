import { useState } from "react";
import styles from "./LuckyNumber.module.css";

export function LuckyNumber() {
  const [luckyNumber, setLuckyNumber] = useState(0);
  const [history, setHistory] = useState([]);
  const [message, setMessage] = useState("");

  function handleClick() {
    if (history.length === 40) {
      setMessage("Todos os números já foram sorteados!");
      setLuckyNumber(0); 
      return;
    }

    const newNumber = Math.floor(Math.random() * 40) + 1;

    if (history.includes(newNumber)) {
      setMessage("Já foi sorteado!");
      setLuckyNumber(0);
    } else {
      setLuckyNumber(newNumber);
      setHistory([...history, newNumber]); 
      setMessage(""); 
    }
  }

  return (
    <div className={styles.container}>
      <h1>Lucky Number 🎲</h1>

      <button className={styles.button} onClick={handleClick}>
        I'm Feeling Lucky Today!
      </button>

      {luckyNumber !== 0 && (
        <p className={styles.result}>Número sorteado: {luckyNumber}</p>
      )}

      {message && <p className={styles.message}>{message}</p>}

      {history.length > 0 && (
        <div className={styles.history}>
          <h2>Números já sorteados:</h2>
          <p>{history.join(", ")}</p>
        </div>
      )}
    </div>
  );
}
