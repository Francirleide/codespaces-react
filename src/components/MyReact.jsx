import styles from "./MyReact.module.css";

export function MyReact() {
  return (
    <div className={styles.container}>
      <header className={styles.header1}>Header 1</header>
      <header className={styles.header2}>Header 2</header>

      <aside className={styles.asideEsq}>Sidebar Esquerda</aside>

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

      <aside className={styles.asideDir}>Sidebar Direita</aside>

      <footer className={styles.footer1}>Footer 1</footer>
      <footer className={styles.footer2}>Footer 2</footer>
    </div>
  );
}
