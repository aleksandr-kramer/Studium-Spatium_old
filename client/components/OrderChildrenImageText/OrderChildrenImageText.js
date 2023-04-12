import styles from "./OrderChildrenImageText.module.scss";
import Image from "next/image";

export default function OrderChildrenImageText({
  Title,
  orderchildrenimagetextdata,
}) {
  const orderchildrenimagetextitems = orderchildrenimagetextdata.map(
    ({ id, title, paragraph, imagename }) => (
      <li key={id} className={styles.OrderChildrenImageText__item}>
        <div className={styles.OrderChildrenImageText__image}>
          <Image
            src={`/icons/${imagename}`}
            alt={title}
            height={54}
            width={54}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
        <p className={styles.OrderChildrenImageText__itemtitle}>{title}</p>
        <p className={styles.OrderChildrenImageText__itemtext}>{paragraph}</p>
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
