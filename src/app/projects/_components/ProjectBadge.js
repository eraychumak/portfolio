import styles from "./ProjectBadge.module.css";

export default function ProjectBadge({ label }) {
  let bg = styles.default;

  if (label === "Personal Project") {
    bg = styles.personalProject;
  }

  if (label === "Client Project") {
    bg = styles.client;
  }

  return (
    <section className={styles.container}>
      <p className={`${styles.badge} ${bg}`} data-type={label}>{label}</p>
    </section>
  );
}