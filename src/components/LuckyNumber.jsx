import { useState } from "react";
import styles from "./LuckyNumber.module.css";

export function LuckyNumber() {
  const [luckyNumber, setLuckyNumber] = useState(0);
  const [history, setHistory] = useState([]);
  const [message, setMessage] = useState("");

  function handleClick() {
    const newNumber = Math.floor(Math.random() * 40) + 1;

    if (history.includes(newNumber)) {
      setMessage(`Já foi sorteado!`);
    } else {
      setLuckyNumber(newNumber);
      setHistory([...history, newNumber]);
      setMessage("");
    }
  }

  return (
    <div className={styles.container}>
      {luckyNumber === 0 ? (
        <h1>Lucky Number 🎲</h1>
      ) : (
        <h1>Lucky Number = {luckyNumber}</h1>
      )}

      <button className={styles.button} onClick={handleClick}>
        I'm Feeling Lucky Today!
      </button>

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
