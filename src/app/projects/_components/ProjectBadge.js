import styles from "./ProjectBadge.module.css";

export default function ProjectBadge({ label }) {
  return (
    <section className={styles.container}>
      <p className={styles.badge}>{label}</p>
    </section>
  );
}