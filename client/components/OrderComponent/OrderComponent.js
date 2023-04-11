import styles from "./OrderComponent.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function OrderComponent({
  children,
  orderblankinfodata,
  orderblankbuttondata,
  fees,
  currency,
  currencyrate,
  price,
  priceperiod,
}) {
  const orderblankbuttonitems = orderblankbuttondata.map(
    ({ id, linkcontent, linkurl }) => (
      <li key={id} className={styles.OrderComponent__buttonitem}>
        <Link href={linkurl} className={styles.OrderComponent__buttonlink}>
          <div className={styles.OrderComponent__button}>
            <p className={styles.OrderComponent__buttontext}>{linkcontent}</p>
          </div>
        </Link>
      </li>
    )
  );

  const orderblankinfoitems = orderblankinfodata.map(
    ({ id, ordertext, imagename }) => (
      <li key={id} className={styles.OrderComponent__blankinfoitem}>
        <div className={styles.OrderComponent__blankinfoimage}>
          <Image
            src={`/icons/${imagename}`}
            alt={ordertext}
            height={24}
            width={24}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
        <p className={styles.OrderComponent__blankinfotext}>{ordertext}</p>
      </li>
    )
  );

  return (
    <div className={styles.OrderComponent}>
      <div className={styles.OrderComponent__childrencontent}>{children}</div>
      <div className={styles.OrderComponent__blank}>
        <ul className={styles.OrderComponent__blankinfoitems}>
          {orderblankinfoitems}
        </ul>
        <div className={styles.OrderComponent__blankinfoborder}></div>
        <p className={styles.OrderComponent__fees}>
          {`${fees} `}
          <span className={styles.OrderComponent__price}>
            {`${price * currencyrate} ${currency} ${priceperiod} `}
          </span>
        </p>

        <ul className={styles.OrderComponent__buttonitems}>
          {orderblankbuttonitems}
        </ul>
      </div>
    </div>
  );
}
