"use client"

import { useCallback, useState } from "react";
import { JBM_Font, Roboto_Font } from "@/fonts";

import ProfilePicture from "./ProfilePicture";
import styles from "./LandingBanner.module.css";

export default function LandingBanner() {
  const [typo, setTypo] = useState("curious curious");

  const typoHover = useCallback(() => {
    setTypo("curious");
  }, [setTypo]);

  return (
    <section className={styles.landingBanner}>
      <article className={styles.pfpContainer}>
        <ProfilePicture/>
      </article>
      <article className={styles.intro}>
        <h1>Hi, I&apos;m Eray</h1>
        <p className={styles.phonetics}>(pronounced Air-I)</p>
        <p className={`${Roboto_Font.className} ${styles.position}`}>
          Frontend Developer
        </p>
        <div className={styles.desc}>
          <p className={Roboto_Font.className}>
            Habituated with frontend and backend experience across multiple different client and personal projects.
          </p>
          <p className={`${Roboto_Font.className} ${styles.totallyAMistake}`}>
            I&apos;m a <span title="I was just testing you!" onMouseEnter={typoHover}>{typo}</span> individual with four eyes, which is advantageous for that extra mile towards detail.
          </p>
        </div>
      </article>
      <article className={styles.work}>
        <h1>Let&apos;s work together 🧑‍💻</h1>
        <p className={Roboto_Font.className}>
          I am open to new contracts and projects to work on so do reach out to my
          email at <a href="mailto:eraychumak_@outlook.com" className={JBM_Font.className}>eraychumak_@outlook.com</a> and
          we can discuss further about working together.
        </p>
      </article>
    </section>
  );
}