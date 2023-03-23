import styles from "./Footer.module.scss";
import Logo from "../Logo/Logo";
import MenuLinks from "../MenuLinks/MenuLinks";
import { menulinkswhitetheme } from "../../constants/stylesconstants";
import SocialNetworkFooter from "../SocialNetworkFooter/SocialNetworkFooter";

export default function Footer({
  ImgLogoFooter,
  AltLogoFooter,
  socialnetworkdata,
  menulinksdomain,
  textbeforespan,
  textspan,
  textafterspan,
  titlecontact,
  contactemail,
}) {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Footer__top}>
        <div className={styles.Footer__content}>
          <div className={styles.Footer__logo}>
            <Logo ImgLogo={ImgLogoFooter} AltLogo={AltLogoFooter} />
          </div>
          <p className={styles.Footer__text}>
            {textbeforespan}
            <span className={styles.Footer__textspan}>{textspan}</span>{" "}
            {textafterspan}
          </p>
          <div className={styles.Footer__links}>
            <MenuLinks
              LinksItems={menulinksdomain}
              LinkTheme={menulinkswhitetheme}
            />
          </div>
          <div className={styles.Footer__socialnetworkfooter}>
            <SocialNetworkFooter socialnetwork={socialnetworkdata} />
          </div>
          <p className={styles.Footer__contacttext}>{titlecontact}</p>
          <a
            className={styles.Footer__contactemail}
            href={`mailto: ${contactemail}`}
          >
            {contactemail}
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
