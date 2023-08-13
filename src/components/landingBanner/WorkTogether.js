import { JBM_Font, Roboto_Font } from "@/fonts";

import styles from "./WorkTogether.module.css";

export default function WorkTogether() {
  return (
    <section className={styles.work}>
      <h1>Let&apos;s work together 🧑‍💻</h1>
      <p className={Roboto_Font.className}>
        I am open to new contracts and projects to work on so do reach out to my
        email at <a href="mailto:eraychumak_@outlook.com" className={JBM_Font.className}>eraychumak_@outlook.com</a> and
        we can discuss further about working together.
      </p>
    </section>
  );
}