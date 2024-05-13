import Image from "next/image";
import ChatBubbleBottomCenterIcon from "@heroicons/react/24/outline/ChatBubbleBottomCenterIcon";

import Timeline from "./_components/Timeline";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <article className={styles.pfp}>
          <Image
            className={styles.pfp}
            src="/pfp.jpg"
            alt="Eray sitting on an escalator"
            width={814}
            height={1080}
            priority
          />
        </article>
        <h1>Eray Chumak</h1>
        <p>BSc (Hons) Web Design & Development</p>
      </header>
      <section className={styles.intro}>
        <p className={styles.desc}>
          Hi, I&apos;m <span className={styles.pronounce} title="Pronounced Air-i">Eray</span>, a &lt;<span className={styles.highlight1}>frontend developer</span>&gt; living
          in North West, England. I like working by myself or in a
          team, building useful &lt;<span className={styles.highlight2}>apps for the web</span>&gt;.
          I am a curious individual with
          not two but four eyes, which is
          advantageous for that extra mile
          towards detail.
        </p>
        <section className={styles.quote}>
          <ChatBubbleBottomCenterIcon width="2rem"/>
          <p>I follow a <i>&apos;You can learn anything if you put enough time and know how to search&apos;</i> approach.</p>
        </section>
      </section>
      <Timeline/>
    </main>
  )
}
