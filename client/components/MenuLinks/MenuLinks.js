import Link from "next/link";
import styles from "./MenuLinks.module.scss";

export default function MenuLinks({ LinksItems, LinkTheme }) {
  const listItems = LinksItems.map(({ id, textlink, url }) => (
    <li key={id} className={styles.MenuLinks__item}>
      <Link
        href={url}
        className={`${styles.MenuLinks__link} ${
          styles[`MenuLinks__link${LinkTheme}`]
        }`}
      >
        {textlink}
      </Link>
    </li>
  ));

  return (
    <nav className={styles.MenuLinks}>
      <ul className={styles.MenuLinks__items}>{listItems}</ul>
    </nav>
  );
}
