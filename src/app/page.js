import Image from "next/image"

import DecoratedPFP from "@/components/DecoratedPFP"

import styles from "./page.module.css"
import { JBM_Font, Roboto_Font } from "../fonts";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <ul className={styles.links}>
            <li>
              <a href="/" className={styles.active}>Home</a>
            </li>
            <li className="noPointer separator">/</li>
            <li>
              <a
                href="https://linkedin.com/in/eray-chumak/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View profile on LinkedIn
              </a>
            </li>
            <li className="noPointer separator">/</li>
            <li>
              <a href="/cv.pdf" download>Download my CV (PDF)</a>
            </li>
          </ul>
          <a href="#" className={styles.logoContainer}>
            <Image src="/logo.svg" width={32} height={32} alt="logo"/>
          </a>
        </nav>
      </header>
      <main>
        <section className={styles.landingBanner}>
          <article className={styles.pfpContainer}>
            <DecoratedPFP/>
          </article>
          <article className={styles.intro}>
            <h1>Hi, I&apos;m Eray</h1>
            <p className={styles.phonetics}>(pronounced Air-I)</p>
            <p className={`${Roboto_Font.className} ${styles.position}`}>
              Frontend Developer
            </p>
            <p className={Roboto_Font.className}>A curious human being with an eye for detail and a passion for design and writing software programs.</p>
            <button className={JBM_Font.className}>Let&apos;s work together</button>
          </article>
        </section>
        <section className={styles.wipContainer}>
        </section>
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
