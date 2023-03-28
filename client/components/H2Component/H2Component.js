import styles from "./H2Component.module.scss";

export default function H2Component({
  H2Title,
  H2ComponentSubtitle,
  H2ComponentUIBorder,
  H2ComponentUITheme,
}) {
  const h2subtitlecontent = H2ComponentSubtitle.map(({ id, paragraph }) => (
    <li key={id} className={styles.H2Component__H2SubtitleItem}>
      <p className={styles.H2Component__H2Paragraph}>{paragraph}</p>
    </li>
  ));

  return (
    <div
      className={`${styles.H2Component} ${
        styles[`H2Component${H2ComponentUIBorder}`]
      }  ${styles[`H2Component${H2ComponentUITheme}`]}`}
    >
      {H2Title !== "" ? (
        <h2 className={styles.H2Component__H2Title}>{H2Title}</h2>
      ) : null}
      <ul className={styles.H2Component__H2SubtitleItems}>
        {h2subtitlecontent}
      </ul>
    </div>
  );
}
