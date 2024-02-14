import Image from "next/image";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <h1>Eray Chumak</h1>
      <section className={styles.intro}>
        <article className={styles.desc}>
          <p>
            Hi, I&apos;m <span className={styles.pronounce} title="Pronounced Air-i">Eray</span>, a &lt;<span className={styles.highlight1}>frontend developer</span>&gt; living
            in North West, England. I like working by myself or in a
            team, building useful &lt;<span className={styles.highlight2}>apps for the web</span>&gt;.
          </p>
          <p>
            I am a curious individual with
            not two but four eyes, which is
            advantageous for that extra mile
            towards detail.
          </p>
        </article>
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
      </section>
      <div className={styles.wip}>
        <p>Some things may not function ^_^. This site is work in progress! 🏗️🧑‍💻</p>
      </div>
    </main>
  )
}
