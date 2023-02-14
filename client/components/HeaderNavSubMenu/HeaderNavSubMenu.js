import LandingMenu from "../LandingMenu/LandingMenu";
import SubMenuLinks from "../SubMenuLinks/SubMenuLinks";
import SubMenuTitles from "../SubMenuTitles/SubMenuTitles";
import styles from "./HeaderNavSubMenu.module.scss";
import selectTranslate from "../../utils/selectTranslate";

export default function HeaderNavSubMenu({ NavMenuItems, idNavMenu }) {
  const ListNavMenuItems = NavMenuItems.map(({ id, TitleSubMenu }) => (
    <li key={id} className={styles.HeaderNavSubMenu__SubMenuItem}>
      <SubMenuTitles Titles={TitleSubMenu} />
      <SubMenuLinks
        SubMenuItems={
          selectTranslate().Header.NavMenu[idNavMenu].SubMenu[id - 1]
            .ListSubMenu
        }
      />
    </li>
  ));
  return (
    <nav className={styles.HeaderNavSubMenu}>
      <ul className={styles.HeaderNavSubMenu__SubMenuItems}>
        {ListNavMenuItems}
      </ul>
      <div className={styles.HeaderNavSubMenu__LandingMenu}>
        <LandingMenu idLandingMenu={idNavMenu} />
      </div>
    </nav>
  );
}
