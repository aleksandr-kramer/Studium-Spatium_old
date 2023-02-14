import styles from "./OrderChildrenImageText.module.scss";
import Image from "next/image";

export default function OrderChildrenImageText({
  Title,
  orderchildrenimagetextdata,
}) {
  const orderchildrenimagetextitems = orderchildrenimagetextdata.map(
    ({ id, Title, Paragraph, ImageName }) => (
      <li key={id} className={styles.OrderChildrenImageText__item}>
        <div className={styles.OrderChildrenImageText__image}>
          <Image
            src={`/icons/${ImageName}`}
            alt={Title}
            height={54}
            width={54}
            priority
          />
        </div>
        <p className={styles.OrderChildrenImageText__itemtitle}>{Title}</p>
        <p className={styles.OrderChildrenImageText__itemtext}>{Paragraph}</p>
      </li>
    )
  );

  return (
    <div className={styles.OrderChildrenImageText}>
      <h2 className={styles.OrderChildrenImageText__title}>{Title}</h2>
      <ul className={styles.OrderChildrenImageText__items}>
        {orderchildrenimagetextitems}
      </ul>
    </div>
  );
}
