import Link from "next/link";
import styles from "./MenuLinks.module.scss";

export default function MenuLinks({ LinksItems, LinkTheme }) {
  const listItems = LinksItems.map(({ id, url, text }) => (
    <li key={id} className={styles.MenuLinks__item}>
      <Link href={url}>
        <a
          className={`${styles.MenuLinks__link} ${
            styles[`MenuLinks__link${LinkTheme}`]
          }`}
        >
          {text}
        </a>
      </Link>
    </li>
  ));

  return (
    <nav className={styles.MenuLinks}>
      <ul className={styles.MenuLinks__items}>{listItems}</ul>
    </nav>
  );
}
