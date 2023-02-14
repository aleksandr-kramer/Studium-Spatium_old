import styles from "./SocialNetworkFooter.module.scss";
import Link from "next/link";
import { useState } from "react";
import selectTranslate from "../../utils/selectTranslate";

export default function SocialNetworkFooter() {
  const [socialnetworkicon, SetSocialNetworkIcon] = useState(0);
  const socialnetworklist = selectTranslate().SocialNetwork.map(
    ({ id, url, networkname }) => (
      <li key={id} className={styles.SocialNetworkFooter__item}>
        <Link href={url}>
          <a target="_blank" className={styles.SocialNetworkFooter__link}>
            <div
              onMouseEnter={() => SetSocialNetworkIcon(id)}
              onMouseLeave={() => SetSocialNetworkIcon(0)}
              className={
                socialnetworkicon === id
                  ? styles[`SocialNetworkFooter__${networkname}active`]
                  : styles[`SocialNetworkFooter__${networkname}passive`]
              }
            ></div>
          </a>
        </Link>
      </li>
    )
  );

  return <ul className={styles.SocialNetworkFooter}>{socialnetworklist}</ul>;
}
