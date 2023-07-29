import DecoratedPFP from "@/components/DecoratedPFP"
import styles from "./page.module.css"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>/</li>
            <li>
              <a href="#">View profile on LinkedIn</a>
            </li>
            <li>/</li>
            <li>
              <a href="#">Download my CV</a>
            </li>
          </ul>
          <Image src="/logo.svg" width={32} height={32} alt="logo"/>
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
