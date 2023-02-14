import styles from "./LandingLinks.module.scss";
import Link from "next/link";

export default function LandingLinks({ landinglinkslist }) {
  const landinglinksitems = landinglinkslist.map(({ id, TextLink, Url }) => (
    <li key={id} className={styles.LandingLinks__linkitem}>
      <Link href={Url} className={styles.LandingLinks__link}>
        <div className={styles.LandingLinks__button}>
          <p className={styles.LandingLinks__linktext}>{TextLink}</p>
        </div>
      </Link>
    </li>
  ));

  return <ul className={styles.LandingLinks}>{landinglinksitems}</ul>;
}
