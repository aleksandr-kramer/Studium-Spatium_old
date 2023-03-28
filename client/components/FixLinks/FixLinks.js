import styles from "./FixLinks.module.scss";
import Link from "next/link";

export default function FixLinks({ fixlinkdata }) {
  const anchorlink = fixlinkdata.map(({ _id, anchorfixlink, textfixlink }) => (
    <li key={_id} className={styles.FixLinks__item}>
      <Link href={`#${anchorfixlink}`} className={styles.FixLinks__link}>
        <div className={styles.FixLinks__button}>
          <p className={styles.FixLinks__text}>{textfixlink}</p>
        </div>
      </Link>
    </li>
  ));
  return (
    <div className={styles.FixLinks}>
      <ul className={styles.FixLinks__items}>{anchorlink}</ul>
    </div>
  );
}
