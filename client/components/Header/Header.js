import HeaderTop from "../HeaderTop/HeaderTop";
import HeaderBottom from "../HeaderBottom/HeaderBottom";
import styles from "./Header.module.scss";

export default function Header({
  ImgLogoHeaderTop,
  AltLogoHeaderTop,
  ImgLogoHeaderBottom,
  AltLogoHeaderBottom,
}) {
  return (
    <header className={styles.Header}>
      <HeaderTop
        ImgLogoHeaderTop={ImgLogoHeaderTop}
        AltLogoHeaderTop={AltLogoHeaderTop}
      />
      <HeaderBottom
        ImgLogoHeaderBottom={ImgLogoHeaderBottom}
        AltLogoHeaderBottom={AltLogoHeaderBottom}
      />
    </header>
  );
}
