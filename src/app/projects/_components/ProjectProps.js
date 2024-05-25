import ExternalLink from "@/_components/ExternalLink";
import styles from "./ProjectProps.module.css";

function Prop({item}) {
  let value = <p>{item.value}</p>;

  if (item.link) {
    value = <ExternalLink url={item.link} label={item.value}/>
  }

  return (
    <article key={item.label}>
      <p className={styles.tag}>{item.label}</p>
      {value}
    </article>
  )
}

export default function ProjectProps({ data }) {
  return (
    <aside className={styles.container}>
      <h6>Overview</h6>
      <section className={styles.props}>
        {data.map(item => (
          <Prop key={item.label} item={item}/>
        ))}
      </section>
    </aside>
  );
}