import styles from "./LandingMenu.module.scss";
import LandingMenuLinks from "../LandingMenuLinks/LandingMenuLinks";
import selectTranslate from "../../utils/selectTranslate";

export default function LandingMenu({ idLandingMenu }) {
  const LandingMenuItem =
    selectTranslate().Header.NavMenu[idLandingMenu].LandingMenu;

  return (
    <div className={styles.LandingMenu}>
      <nav className={styles.LandingMenu__LandingMenuLinks}>
        <LandingMenuLinks LandingMenuItems={LandingMenuItem} />
      </nav>
    </div>
  );
}
