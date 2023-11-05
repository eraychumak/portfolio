import styles from "@/components/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <h1>Web <span className={styles.des}>Design</span> + <span className={styles.dev}>Development</span> in <span className={styles.location}>North West England</span></h1>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.links}>
          <li>
            <a href="/" className={styles.active}>Home</a>
          </li>
          <li className="noPointer separator">
            <p>/</p>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/eray-chumak/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View profile on LinkedIn
            </a>
          </li>
          <li className="noPointer separator">
            <p>/</p>
          </li>
        </ul>
      </nav>
    </header>
  );
}