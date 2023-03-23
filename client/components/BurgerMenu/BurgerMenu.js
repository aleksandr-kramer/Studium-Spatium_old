import styles from "./BurgerMenu.module.scss";
import { useState, useEffect } from "react";
import selectTranslate from "../../utils/selectTranslate";
import MenuLinks from "../MenuLinks/MenuLinks";
import { menulinksdarktheme } from "../../constants/stylesconstants";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import HeaderNavSubMenu from "../HeaderNavSubMenu/HeaderNavSubMenu";

export default function BurgerMenu({ menulinksdomain, menulinkssubdomain }) {
  function ListNavMenuItems(id) {
    return selectTranslate().Header.NavMenu[id - 1].SubMenu;
  }

  const ListNavMenu = selectTranslate().Header.NavMenu.map(
    ({ id, NameMenu }) => (
      <li key={id} className={styles.BurgerMenu__dropdownnavlinkitem}>
        <input
          className={styles.BurgerMenu__dropdownnavlinkcheckbox}
          type="checkbox"
          id={id}
        />
        <label className={styles.BurgerMenu__dropdownnavlinktitle} htmlFor={id}>
          {NameMenu}
        </label>
        <div className={styles.BurgerMenu__dropdownnavlinkmenu}>
          <HeaderNavSubMenu
            NavMenuItems={ListNavMenuItems(id)}
            idNavMenu={id - 1}
          />
        </div>
        <div className={styles.BurgerMenu__dropdownnavlinktitleBorderBottom}>
          {" "}
        </div>
      </li>
    )
  );

  const [activeBurger, setActiveBurger] = useState(false);
  useEffect(() => {
    const keyDownHandler = (e) =>
      e.code === "Escape" && activeBurger
        ? setActiveBurger(!activeBurger)
        : null;
    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [activeBurger]);

  return (
    <div
      className={
        activeBurger
          ? `${styles.BurgerMenu} ${styles.BurgerMenu_open}`
          : styles.BurgerMenu
      }
    >
      <div
        onClick={() => (activeBurger ? setActiveBurger(false) : null)}
        className={styles.BurgerMenu__backdrop}
      ></div>
      <div
        onClick={() => setActiveBurger(!activeBurger)}
        className={
          activeBurger
            ? `${styles.BurgerMenu__icon} ${styles.BurgerMenu__icon_passive}`
            : `${styles.BurgerMenu__icon} ${styles.BurgerMenu__icon_active}`
        }
      ></div>
      <div className={styles.BurgerMenu__dropdown}>
        <div className={styles.BurgerMenu__dropdowncontainer}>
          <ul className={styles.BurgerMenu__dropdownnavlink}>{ListNavMenu}</ul>

          {/* ---------------------------------------------------- */}

          <div className={styles.BurgerMenu__dropdowndomainlink}>
            <div
              onClick={() => (activeBurger ? setActiveBurger(false) : null)}
              className={styles.BurgerMenu__SubDomainLink}
            >
              <MenuLinks
                LinksItems={menulinkssubdomain}
                LinkTheme={menulinksdarktheme}
              />
            </div>
            <div
              onClick={() => (activeBurger ? setActiveBurger(false) : null)}
              className={styles.BurgerMenu__DomainLink}
            >
              <MenuLinks
                LinksItems={menulinksdomain}
                LinkTheme={menulinksdarktheme}
              />
            </div>
            <div className={styles.BurgerMenu__LanguageSelector}>
              <LanguageSelector />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
