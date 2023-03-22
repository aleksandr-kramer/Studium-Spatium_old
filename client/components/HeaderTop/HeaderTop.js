import styles from "./HeaderTop.module.scss";
import selectTranslate from "../../utils/selectTranslate";
import MenuLinks from "../MenuLinks/MenuLinks";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { menulinksdarktheme } from "../../constants/stylesconstants";
import Logo from "../Logo/Logo";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

export default function HeaderTop({
  ImgLogoHeaderTop,
  AltLogoHeaderTop,
  menulinksdomain,
  menulinkssubdomain,
}) {
  // const SubDomainLink = selectTranslate().Header.SubDomainLink;
  // const DomainLink = selectTranslate().Header.DomainLink;
  return (
    <section className={styles.HeaderTop}>
      <div className={styles.HeaderTop__Content}>
        <div className={styles.HeaderTop__logo}>
          <Logo
            ImgLogo={ImgLogoHeaderTop}
            AltLogo={AltLogoHeaderTop}
            // ImgName={selectTranslate().Logo.LogoHeader.ImgName}
            // ImgAlt={selectTranslate().Logo.LogoHeader.ImgAlt}
          />
        </div>
        <div className={styles.HeaderTop__SubDomainLink}>
          <MenuLinks
            LinksItems={menulinkssubdomain}
            LinkTheme={menulinksdarktheme}
          />
        </div>
        <div className={styles.HeaderTop__DomainLink}>
          <MenuLinks
            LinksItems={menulinksdomain}
            LinkTheme={menulinksdarktheme}
          />
        </div>
        <div className={styles.HeaderTop__LanguageSelector}>
          <LanguageSelector />
        </div>
        <BurgerMenu
          menulinksdomain={menulinksdomain}
          menulinkssubdomain={menulinkssubdomain}
        />
      </div>
    </section>
  );
}
