"use client"

import { useCallback, useState } from "react";
import Image from "next/image";
import { Roboto_Font } from "@/fonts";

import styles from "./ProfilePicture.module.css";

export default function ProfilePicture() {
  const [typo, setTypo] = useState("curious curious");

  const typoHover = useCallback(() => {
    setTypo("curious");
  }, [setTypo]);

  return (
    <div className={styles.intro}>
      <div className={styles.pfpContainer}>
        <Image
          className={styles.pfp}
          src="/pfp.jpg"
          alt="Eray sitting on an escalator"
          width={814}
          height={1080}
          priority
        />
      </div>
      <div className={styles.available}>
        <p className={styles.Roboto_Font}>Great news! I&apos;m accepting new projects</p>
      </div>
      <div className={styles.content}>
        <h1>Hello, I&apos;m Eray</h1>
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
      </div>
    </div>
  );
}