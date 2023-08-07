"use client"

import Image from "next/image";
import styles from "./ProfilePicture.module.css";

export default function ProfilePicture() {
  return (
    <Image
      className={styles.profilePicture}
      src="/pfp.jpg"
      alt="Eray sitting on an escalator"
      width={814}
      height={1080}
      priority
    />
  );
}