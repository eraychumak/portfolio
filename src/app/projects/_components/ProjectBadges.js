import styles from "./ProjectBadges.module.css";

export default function ProjectBadges({ children }) {
  return (
    <section className={styles.container}>
      {children}
    </section>
  );
}