import styles from "./LandingMonoLink.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function LandingMonoLink({
  landingmonolinkdata,
  uilandingmonolinkbgcolor,
}) {
  const landingmonolinkitem = landingmonolinkdata.map(
    ({ id, Title, TextLink, Url, ImgAlt, ImgName, Text }) => (
      <li
        key={id}
        className={`${styles.LandingMonoLink__item} ${
          styles[`LandingMonoLink__item${uilandingmonolinkbgcolor}`]
        }`}
      >
        <h3 className={styles.LandingMonoLink__title}>{Title}</h3>
        <p className={styles.LandingMonoLink__paragraph}>{Text}</p>
        <div className={styles.LandingMonoLink__linkbutton}>
          <Link href={Url} className={styles.LandingMonoLink__link}>
            <div className={styles.LandingMonoLink__button}>
              <p className={styles.LandingMonoLink__linktext}>{TextLink}</p>
            </div>
          </Link>
        </div>
        <div className={styles.LandingMonoLink__linkimage}>
          <Link href={Url} className={styles.LandingMonoLink__link}>
            <div className={styles.LandingMonoLink__image}>
              <Image
                src={`/images/${ImgName}`}
                alt={ImgAlt}
                height={350}
                width={450}
                priority
              />
            </div>
          </Link>
        </div>
      </li>
    )
  );

  return <ul className={styles.LandingMonoLink}>{landingmonolinkitem}</ul>;
}
