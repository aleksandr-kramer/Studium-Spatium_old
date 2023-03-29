import styles from "./ThematicPointList.module.scss";

export default function ThematicPointList({
  PointListTitle,
  ThematicPointlistItems,
}) {
  const thematicpointlistitems = ThematicPointlistItems.map(
    ({ id, portfoliolistnumber, portfoliolistlongname }) => (
      <li key={id} className={styles.ThematicPointList__item}>
        <div className={styles.ThematicPointList__itemcontent}>
          <p className={styles.ThematicPointList__itemtext}>{portfoliolistlongname}</p>
          <p className={styles.ThematicPointList__itemnumber}>
            {portfoliolistnumber}
          </p>
        </div>
      </li>
    )
  );

  return (
    <div className={styles.ThematicPointList}>
      <h2 className={styles.ThematicPointList__title}>{PointListTitle}</h2>
      <ul className={styles.ThematicPointList__items}>
        {thematicpointlistitems}
      </ul>
    </div>
  );
}
