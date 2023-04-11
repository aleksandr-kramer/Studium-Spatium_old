import styles from "./OrderChildrenList.module.scss";

export default function OrderChildrenList({
  onlinelearningincludedtitle,
  orderchildrenlistdata,
}) {
  const orderchildrenlistitems = orderchildrenlistdata.map(
    ({ id, paragraph }) => (
      <li key={id} className={styles.OrderChildrenList__item}>
        <p className={styles.OrderChildrenList__text}>{paragraph}</p>
        <p className={styles.OrderChildrenList__textid}>{id}</p>
      </li>
    )
  );

  return (
    <div className={styles.OrderChildrenList}>
      <h2 className={styles.OrderChildrenList__title}>
        {onlinelearningincludedtitle}
      </h2>
      <ul className={styles.OrderChildrenList__items}>
        {orderchildrenlistitems}
      </ul>
    </div>
  );
}
