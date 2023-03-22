import HeaderTop from "../HeaderTop/HeaderTop";
import HeaderBottom from "../HeaderBottom/HeaderBottom";
import styles from "./Header.module.scss";

export default function Header({
  ImgLogoHeaderTop,
  AltLogoHeaderTop,
  ImgLogoHeaderBottom,
  AltLogoHeaderBottom,
  menulinkssubdomain,
  menulinksdomain,
}) {
  return (
    <header className={styles.Header}>
      <HeaderTop
        ImgLogoHeaderTop={ImgLogoHeaderTop}
        AltLogoHeaderTop={AltLogoHeaderTop}
        menulinkssubdomain={menulinkssubdomain}
        menulinksdomain={menulinksdomain}
      />
      <HeaderBottom
        ImgLogoHeaderBottom={ImgLogoHeaderBottom}
        AltLogoHeaderBottom={AltLogoHeaderBottom}
      />
    </header>
  );
}
