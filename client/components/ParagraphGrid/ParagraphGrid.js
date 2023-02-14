import ParagraphList from "../ParagraphList/ParagraphList";
import styles from "./ParagraphGrid.module.scss";

export default function ParagraphGrid({ paragraphgriddata }) {
  const paragraphgriditems = paragraphgriddata.map(({ id, Name, Text }) => (
    <li key={id} className={styles.ParagraphGrid__item}>
      <p className={styles.ParagraphGrid__name}>{Name}</p>
      <div className={styles.ParagraphGrid__text}>
        <ParagraphList
          ParagraphItems={Text}
          paragraphliststate="fontcolorbaseleft"
        />
      </div>
    </li>
  ));

  return <ul className={styles.ParagraphGrid}>{paragraphgriditems}</ul>;
}
