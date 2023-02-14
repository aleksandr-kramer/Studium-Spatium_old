import styles from "./OrderChildrenParagraph.module.scss";

export default function OrderChildrenParagraph({ orderchildrenparagraphdata }) {
  const orderchildrenparagraphitems = orderchildrenparagraphdata.map(
    ({ id, NodeTitle, NodeText }) => (
      <p key={id} className={styles.OrderChildrenParagraph__text}>
        <span className={styles.OrderChildrenParagraph__title}>
          {NodeTitle}{" "}
        </span>
        {NodeText}
      </p>
    )
  );

  return (
    <div className={styles.OrderChildrenParagraph}>
      {orderchildrenparagraphitems}
    </div>
  );
}
