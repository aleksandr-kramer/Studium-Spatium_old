import styles from "./FixLinks.module.scss";
import Link from "next/link";

export default function FixLinks({ fixlinkdata }) {
  const anchorlink = fixlinkdata.map(({ id, Anchor, TextLink }) => (
    <li key={id} className={styles.FixLinks__item}>
      <Link href={`#${Anchor}`} className={styles.FixLinks__link}>
        <div className={styles.FixLinks__button}>
          <p className={styles.FixLinks__text}>{TextLink}</p>
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
