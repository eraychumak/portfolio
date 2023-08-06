"use client"

import Image from "next/image";
import styles from "./DecoratedPFP.module.css";

export default function DecoratedPFP() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/pfp.jpg"
          alt="Eray sitting on an escalator"
          width={814}
          height={1080}
          priority
        />
      </div>
      <div className={styles.nameContainer}>
        <p>Eray Chumak</p>
      </div>
    </div>
  )
}