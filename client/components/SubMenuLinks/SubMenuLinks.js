import styles from "./SubMenuLinks.module.scss";
import Link from "next/link";

export default function SubMenuLinks({ SubMenuItems }) {
  const ListSubMenuItems = SubMenuItems.map(
    ({ id, NameSubMenu, UrlSubMenu }) => (
      <li key={id} className={styles.SubMenuLinks__item}>
        <Link href={UrlSubMenu}>
          <a className={styles.SubMenuLinks__link}>{NameSubMenu}</a>
        </Link>
      </li>
    )
  );
  return <ul className={styles.SubMenuLinks}>{ListSubMenuItems}</ul>;
}
