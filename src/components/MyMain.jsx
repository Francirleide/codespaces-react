import styles from './MyMain.module.css';

export function MyMain() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>Card 1</h2>
          <p>Este é o primeiro card.</p>
        </div>
        <div className={styles.card}>
          <h2>Card 2</h2>
          <p>Este é o segundo card.</p>
        </div>
            <div className={styles.card}>
              <h2>Card 3</h2>
              <p>Este é o terceiro card.</p>
            </div>
            <div className={styles.card}>
              <h2>Card 4</h2>
              <p>Este é o quarto card.</p>
            </div>
            <div className={styles.card}>
              <h2>Card 5</h2>
              <p>Este é o quinto card.</p>
            </div>
          </div>
        </main>
}
