import styles from "./OrderChildrenParagraph.module.scss";

export default function OrderChildrenParagraph({ orderchildrenparagraphdata }) {
  const orderchildrenparagraphitems = orderchildrenparagraphdata.map(
    ({ id, nodetitle, nodetext }) => (
      <p key={id} className={styles.OrderChildrenParagraph__text}>
        <span className={styles.OrderChildrenParagraph__title}>
          {nodetitle}{" "}
        </span>
        {nodetext}
      </p>
    )
  );

  return (
    <div className={styles.OrderChildrenParagraph}>
      {orderchildrenparagraphitems}
    </div>
  );
}
