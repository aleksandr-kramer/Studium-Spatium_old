import HeaderNavMenu from "../HeaderNavMenu/HeaderNavMenu";
import styles from "./HeaderBottom.module.scss";

export default function HeaderBottom({
  ImgLogoHeaderBottom,
  AltLogoHeaderBottom,
}) {
  return (
    <section className={styles.HeaderBottom}>
      <div className={styles.HeaderBottom__HeaderNavMenu}>
        <HeaderNavMenu
          ImgLogoHeaderBottom={ImgLogoHeaderBottom}
          AltLogoHeaderBottom={AltLogoHeaderBottom}
        />
      </div>
    </section>
  );
}
