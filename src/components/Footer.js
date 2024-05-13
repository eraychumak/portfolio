import styles from "@/components/Footer.module.css";

export default function Footer() {
  return (
    <section className={styles.container}>
      <p>
        This site is open-source, view the source-code
        in my GitHub <a href="https://github.com/eraychumak/portfolio" target="_blank" rel="noopener noreferrer">repository</a>.
      </p>
      <p>Copyright &copy; 2024 Eray Chumak. All rights reserved.</p>
    </section>
  );
}