import Link from "next/link";
import Image from "next/image";

import styles from "./page.module.css";

export default function PageWriting() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1>Writing</h1>
        <p>Just some articles here and there, feel free to give them a read if something catches your eye.</p>
      </header>
      <section className={styles.writing}>
        <Link href="/writing/articles/a-more-transparent-ui-for-game-ads" className={styles.article}>
          <Image src="/assets/writing/a-more-transparent-ui-for-game-ads-light.webp" width="1024" height="640" alt=""/>
          <div className={styles.content}>
            <p>A more transparent UI for game ads</p>
            <p>Feb 13, 2024</p>
          </div>
        </Link>
      </section>
    </main>
  )
}
