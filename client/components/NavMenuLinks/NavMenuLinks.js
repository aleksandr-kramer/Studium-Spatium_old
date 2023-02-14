import styles from "./NavMenuLinks.module.scss";
import HeaderNavSubMenu from "../HeaderNavSubMenu/HeaderNavSubMenu";
import selectTranslate from "../../utils/selectTranslate";
import { useState } from "react";

export default function NavMenuLinks({ NavMenuLinksItems }) {
  const [activeHeaderNavSubMenu, setActiveHeaderNavSubMenu] = useState(0);
  function ListNavMenuItems(id) {
    return selectTranslate().Header.NavMenu[id - 1].SubMenu;
  }
  const ListNavMenuLinksItems = NavMenuLinksItems.map(
    ({ id, NameMenu, SubMenu }) => (
      <li
        onMouseEnter={() => setActiveHeaderNavSubMenu(id)}
        onMouseLeave={() => setActiveHeaderNavSubMenu(0)}
        onClick={() =>
          activeHeaderNavSubMenu === id
            ? setActiveHeaderNavSubMenu(0)
            : setActiveHeaderNavSubMenu(id)
        }
        key={id}
        className={
          activeHeaderNavSubMenu === id
            ? `${styles.NavMenuLinks__item} ${styles.NavMenuLinks__open}`
            : styles.NavMenuLinks__item
        }
      >
        <p className={styles.NavMenuLinks__text}>{NameMenu}</p>
        <div className={styles.NavMenuLinks__HeaderNavSubMenu}>
          <HeaderNavSubMenu
            NavMenuItems={ListNavMenuItems(id)}
            idNavMenu={id - 1}
          />
        </div>
      </li>
    )
  );
  return <ul className={styles.NavMenuLinks}>{ListNavMenuLinksItems}</ul>;
}
