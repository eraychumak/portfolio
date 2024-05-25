import Link from "next/link";
import styles from "./layout.module.css";

export default function MdxLayout({ children }) {
  return (
    <main className={styles.container}>
      <nav className={styles.breadcrumbs}>
        <Link href="/">Home</Link>
        <p>/</p>
        <Link href="../dev">Dev. Projects</Link>
        <p>/</p>
      </nav>
      <section className={styles.content}>
        {children}
      </section>
    </main>
  );
}