import Link from "next/link";
import Image from "next/image";

import styles from "./page.module.css";

export default function PageDesigns() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1>Designs</h1>
        <p>Designs and concepts for various projects.</p>
      </header>
      <section className={styles.writing}>
        <Link href="/designs/designs/the-malthouse-business-centre" className={styles.article}>
          <Image src="/assets/designs/the-malthouse-business-centre/the-malthouse-business-centre-home-after.png" width="1440" height="3747" alt=""/>
          <div className={styles.content}>
            <p>The Malthouse Business Centre</p>
            <p>2024</p>
          </div>
        </Link>
      </section>
    </main>
  )
}
