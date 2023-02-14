import HeaderNavMenu from "../HeaderNavMenu/HeaderNavMenu";
import styles from "./HeaderBottom.module.scss";

export default function HeaderBottom() {
  return (
    <section className={styles.HeaderBottom}>
      <div className={styles.HeaderBottom__HeaderNavMenu}>
        <HeaderNavMenu />
      </div>
    </section>
  );
}
