import Logo from "../Logo/Logo";
import NavMenuLinks from "../NavMenuLinks/NavMenuLinks";
import styles from "./HeaderNavMenu.module.scss";
import selectTranslate from "../../utils/selectTranslate";

export default function HeaderNavMenu() {
  const NavMenuLinksItem = selectTranslate().Header.NavMenu;
  return (
    <div className={styles.HeaderNavMenu}>
      <div className={styles.HeaderNavMenu__logo}>
        <Logo
          ImgName={selectTranslate().Logo.LogoHeader.ImgName}
          ImgAlt={selectTranslate().Logo.LogoHeader.ImgAlt}
        />
      </div>

      <NavMenuLinks NavMenuLinksItems={NavMenuLinksItem} />
    </div>
  );
}
