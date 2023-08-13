import Header from "@/components/Header";
import LandingBanner from "@/components/landingBanner";

import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header/>
      <main>
        <LandingBanner/>
        <footer className={styles.footer}>
          <div className={styles.wip}>
            <p>Excuse the mess ^_^. This site is work in progress! 🏗️🧑‍💻</p>
          </div>
          <p>
            This site is open-source, view the source-code
            on my GitHub <a href="https://github.com/eraychumak/portfolio" target="_blank" rel="noopener noreferrer">repository</a>
          </p>
          <p>Copyright &copy; 2023 Eray Chumak</p>
        </footer>
      </main>
    </>
  )
}
