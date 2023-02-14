import styles from "./LandingMenuLinks.module.scss";
import Link from "next/link";

export default function LandingMenuLinks({ LandingMenuItems }) {
  const listLandingMenuLinks = LandingMenuItems.map(
    ({ id, TitleLandingMenu, TextLandingMenu, UrlLandingMenu }) => (
      <li key={id} className={styles.LandingMenuLinks__Item}>
        <Link href={UrlLandingMenu}>
          <a className={styles.LandingMenuLinks__Link}>
            <div className={styles.LandingMenuLinks__TextLink}>
              {TitleLandingMenu}
            </div>
          </a>
        </Link>
        {TextLandingMenu ? (
          <p className={styles.LandingMenuLinks__AboutLink}>
            {TextLandingMenu}
          </p>
        ) : null}
      </li>
    )
  );
  return <ul className={styles.LandingMenuLinks}>{listLandingMenuLinks}</ul>;
}
