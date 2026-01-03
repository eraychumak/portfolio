import Image from "next/image";
import ChatBubbleBottomCenterIcon from "@heroicons/react/24/outline/ChatBubbleBottomCenterIcon";

import Timeline from "../_components/Timeline";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <article className={styles.pfp}>
          <Image
            className={styles.pfp}
            src="/pfp.avif"
            alt="Eray sitting on an escalator"
            width={3072}
            height={4080}
            priority
            unoptimized
          />
        </article>
        <h1>Eray Koschell</h1>
        <p className={styles.jobTitle}>Software Engineer</p>
        <p className={styles.degree}>BSc (Hons) Web Design & Development</p>
      </header>
      <section className={styles.intro}>
        <p className={styles.desc}>
          Hi, I&apos;m <span className={styles.pronounce} title="Pronounced Air-i">Eray</span>, a &lt;<span className={styles.highlight1}>software engineer</span>&gt; based
          in North West England. I enjoy working both independently and collaboratively,
          building useful &lt;<span className={styles.highlight2}>web applications</span>&gt; that solve real problems.
          I&apos;m a curious individual with
          not two but four eyes, giving me
          an advantage when it comes to
          attention to detail.
        </p>
        <section className={styles.quote}>
          <ChatBubbleBottomCenterIcon width="2rem"/>
          <p>I follow a <i>&apos;You can learn anything with enough time and the right approach to research&apos;</i> philosophy.</p>
        </section>
      </section>
      <hr/>
      <Timeline/>
      <hr/>
      <section className={styles.shallWe}>
        <h2>Shall we?</h2>
        <p>I&apos;m currently open to frontend design and development opportunities, as well as freelancing and client work. I&apos;m available for office-based, hybrid, or remote positions <i>(Full/Part Time)</i>.</p>
      </section>
    </main>
  )
}
