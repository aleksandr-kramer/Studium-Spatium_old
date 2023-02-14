import styles from "./SubMenuTitles.module.scss";

export default function SubMenuTitles({ Titles }) {
  return (
    <div className={styles.SubMenuTitles}>
      <p className={styles.SubMenuTitles__Text}>{Titles}</p>
    </div>
  );
}
