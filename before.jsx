import styles from "./before.module.css";

export function Home() {
  return (
    <div>
      <header className={styles.header}>
        <a href="/">
          <img alt="Contoso logo" className={styles.logo} src="/logo.svg" />
        </a>
      </header>
      <main>
        <div className={styles.mainInside}>
          <h1 className={styles.h1}>Welcome to Contoso</h1>
          <p className={styles.pLarge}>Lorem ipsum...</p>
          <h2 className={styles.h2}>Second Heading</h2>
          <p className={styles.p}>Lorem ipsum...</p>
          <h2 className={styles.h2}>Third Heading</h2>
          <p className={styles.p}>Lorem ipsum...</p>
          <p className={styles.last}>In conclusion: yay!</p>
        </div>
      </main>
      <footer className={styles.footer}>
        <a href="/">
          <img alt="Contoso logo" className={styles.logo} src="/logo.svg" />
        </a>
      </footer>
    </div>
  );
}
