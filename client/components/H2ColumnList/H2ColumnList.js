import styles from "./H2ColumnList.module.scss";

export default function H2ColumnList({ nameofmodule, h2columnlistdata }) {
  const h2columnlistitems = h2columnlistdata.map(
    ({ id, NodeTitle, NodeText }) => (
      <li key={id} className={styles.H2ColumnList__item}>
        <p className={styles.H2ColumnList__itemtext}>
          <span className={styles.H2ColumnList__itemtitle}>{NodeTitle}</span>{" "}
          {NodeText}
        </p>
      </li>
    )
  );

  return (
    <div className={styles.H2ColumnList}>
      <h2 className={styles.H2ColumnList__title}>{nameofmodule}</h2>
      <ul className={styles.H2ColumnList__items}>{h2columnlistitems}</ul>
    </div>
  );
}
