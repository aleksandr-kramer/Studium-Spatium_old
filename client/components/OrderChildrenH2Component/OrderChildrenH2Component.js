import ParagraphList from "../ParagraphList/ParagraphList";
import styles from "./OrderChildrenH2Component.module.scss";

export default function OrderChildrenH2Component({
  Title,
  ParagraphItems,
  paragraphliststate,
}) {
  return (
    <div className={styles.OrderChildrenH2Component}>
      <h2 className={styles.OrderChildrenH2Component__title}>{Title}</h2>
      <div className={styles.OrderChildrenH2Component__paragraph}>
        <ParagraphList
          ParagraphItems={ParagraphItems}
          paragraphliststate={paragraphliststate}
        />
      </div>
    </div>
  );
}
