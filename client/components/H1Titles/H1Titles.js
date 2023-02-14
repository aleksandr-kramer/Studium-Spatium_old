import styles from "./H1Titles.module.scss";

export default function H1Titles({ h1title, h1subtitle }) {
  return (
    <div className={styles.H1Titles}>
      <h1 className={styles.H1Titles__Title}>{h1title}</h1>
      {h1subtitle ? (
        <p className={styles.H1Titles__SubTitle}>{h1subtitle}</p>
      ) : null}
    </div>
  );
}
