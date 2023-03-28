import styles from "./SocialNetwork.module.scss";
import Link from "next/link";
import { useState } from "react";
import selectTranslate from "../../utils/selectTranslate";

export default function SocialNetwork({ socialnetwork }) {
  const [socialnetworkicon, SetSocialNetworkIcon] = useState(0);
  const socialnetworklist = socialnetwork.map(
    ({ _id, networkname, networkurl }) => (
      <li key={_id} className={styles.SocialNetwork__item}>
        <Link
          href={networkurl}
          target="_blank"
          className={styles.SocialNetwork__link}
        >
          <div
            onMouseEnter={() => SetSocialNetworkIcon(_id)}
            onMouseLeave={() => SetSocialNetworkIcon(0)}
            className={
              socialnetworkicon === _id
                ? styles[`SocialNetwork__${networkname}active`]
                : styles[`SocialNetwork__${networkname}passive`]
            }
          ></div>
        </Link>
      </li>
    )
  );

  return (
    <div className={styles.SocialNetwork}>
      <span className={styles.SocialNetwork__text}>Follow Us</span>
      <div className={styles.SocialNetwork__line}></div>
      <ul className={styles.SocialNetwork__items}>{socialnetworklist}</ul>
    </div>
  );
}
