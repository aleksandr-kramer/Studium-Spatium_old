import styles from "./Footer.module.scss";
import Logo from "../Logo/Logo";
import selectTranslate from "../../utils/selectTranslate";
import MenuLinks from "../MenuLinks/MenuLinks";
import { menulinkswhitetheme } from "../../constants/stylesconstants";
import SocialNetworkFooter from "../SocialNetworkFooter/SocialNetworkFooter";

export default function Footer({ ImgLogoFooter, AltLogoFooter }) {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Footer__top}>
        <div className={styles.Footer__content}>
          <div className={styles.Footer__logo}>
            <Logo
              ImgLogo={ImgLogoFooter}
              AltLogo={AltLogoFooter}
              // ImgLogo={selectTranslate().Logo.LogoFooter.ImgName}
              // AltLogo={selectTranslate().Logo.LogoFooter.ImgAlt}
            />
          </div>
          <p className={styles.Footer__text}>
            {selectTranslate().Footer.FooterTextBeforeSpan}
            <span className={styles.Footer__textspan}>
              {selectTranslate().Footer.FooterSpanText}
            </span>{" "}
            {selectTranslate().Footer.FooterTextAfterSpan}
          </p>
          <div className={styles.Footer__links}>
            <MenuLinks
              LinksItems={selectTranslate().Header.DomainLink}
              LinkTheme={menulinkswhitetheme}
            />
          </div>
          <div className={styles.Footer__socialnetworkfooter}>
            <SocialNetworkFooter />
          </div>
          <p className={styles.Footer__contacttext}>
            {selectTranslate().Footer.TitleContact}
          </p>
          <a
            className={styles.Footer__contactemail}
            href={`mailto: ${selectTranslate().Footer.ContactEmail}`}
          >
            info@email.ru
          </a>
        </div>
      </div>

      <p className={styles.Footer__copyrighttext}>
        Design by:{" "}
        <a
          className={styles.Footer__copyrightlink}
          href="https://www.behance.net/lusydesigner"
          target="blank"
        >
          Liudmyla Nechiporuk
        </a>
      </p>
    </footer>
  );
}
