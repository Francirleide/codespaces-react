import styles from './MyHeader.module.css';

export function MyHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.card}>
        <h2>Relógio</h2>
   {/* SVG de um relógio */}
        <svg width="80" height="80" viewBox="0 0 80 80">
          <circle cx="40" cy="40" r="35" stroke="black" strokeWidth="4" fill="#fff"/>
          <line x1="40" y1="40" x2="40" y2="20" stroke="black" strokeWidth="3"/>
          <line x1="40" y1="40" x2="60" y2="40" stroke="black" strokeWidth="2"/>
          <circle cx="40" cy="40" r="3" fill="black"/>
        </svg>
      </div>
         <div className={styles.card}>
         <h2>Maçã Azul</h2>
  {/* SVG de uma maçã azul */}
        <svg width="80" height="80" viewBox="0 0 80 80">
        <ellipse cx="40" cy="50" rx="22" ry="28" fill="#3498db" stroke="black" strokeWidth="2"/>
        <rect x="36" y="18" width="8" height="16" rx="4" fill="#2d3436" />
        <path d="M40 18 Q44 10 48 18" stroke="#27ae60" strokeWidth="2" fill="none"/>
      </svg>
     </div>
         <h1 className={styles.title}>Bem-vindo ao Meu Site</h1>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><a href="#home">Home</a></li>
          <li className={styles.navItem}><a href="#about">Sobre</a></li>
          <li className={styles.navItem}><a href="#services">Serviços</a></li>
          <li className={styles.navItem}><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}