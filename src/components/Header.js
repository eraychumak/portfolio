"use client"

import Image from "next/image";
import styles from "@/components/Header.module.css";

export default function Header() {
  return (
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
  );
}