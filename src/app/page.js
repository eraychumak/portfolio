import DecoratedPFP from "@/components/DecoratedPFP"
import styles from "./page.module.css"
import Image from "next/image"

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
        <section>
          <article>
            <h1>Hi, I&apos;m Eray <span id="phonetics">(pronounced Air-I)</span></h1>
            <p id="position">Frontend Developer</p>
            <p id="desc">A curious human being with an eye for detail and a passion for design and writing software programs.</p>
            <button>Let&apos;s work together</button>
          </article>
          <article>
            <DecoratedPFP/>
          </article>
        </section>
      </main>
    </>
  )
}
