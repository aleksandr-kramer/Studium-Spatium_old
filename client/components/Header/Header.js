import HeaderTop from "../HeaderTop/HeaderTop";
import HeaderBottom from "../HeaderBottom/HeaderBottom";
import styles from "./Header.module.scss"

export default function Header() {
  return (
    <header className={styles.Header}>
      <HeaderTop />
      <HeaderBottom />
    </header>
  );
}
