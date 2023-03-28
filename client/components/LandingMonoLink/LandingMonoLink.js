import styles from "./LandingMonoLink.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function LandingMonoLink({
  landingmonolinkdata,
  uilandingmonolinkbgcolor,
}) {
  const landingmonolinkitem = landingmonolinkdata.map(
    ({ _id, title, textlink, url, imgalt, imgname, text }) => (
      <li
        key={_id}
        className={`${styles.LandingMonoLink__item} ${
          styles[`LandingMonoLink__item${uilandingmonolinkbgcolor}`]
        }`}
      >
        <h3 className={styles.LandingMonoLink__title}>{title}</h3>
        <p className={styles.LandingMonoLink__paragraph}>{text}</p>
        <div className={styles.LandingMonoLink__linkbutton}>
          <Link href={url} className={styles.LandingMonoLink__link}>
            <div className={styles.LandingMonoLink__button}>
              <p className={styles.LandingMonoLink__linktext}>{textlink}</p>
            </div>
          </Link>
        </div>
        <div className={styles.LandingMonoLink__linkimage}>
          <Link href={url} className={styles.LandingMonoLink__link}>
            <div className={styles.LandingMonoLink__image}>
              <Image
                src={`/images/${imgname}`}
                alt={imgalt}
                height={350}
                width={450}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </Link>
        </div>
      </li>
    )
  );

  return <ul className={styles.LandingMonoLink}>{landingmonolinkitem}</ul>;
}
