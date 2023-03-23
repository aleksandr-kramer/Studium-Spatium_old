import styles from "./SocialNetworkFooter.module.scss";
import Link from "next/link";
import { useState } from "react";

export default function SocialNetworkFooter({ socialnetwork }) {
  const [socialnetworkicon, SetSocialNetworkIcon] = useState(0);
  const socialnetworklist = socialnetwork.map(
    ({ _id, networkname, networkurl }) => (
      <li key={_id} className={styles.SocialNetworkFooter__item}>
        <Link
          href={networkurl}
          target="_blank"
          className={styles.SocialNetworkFooter__link}
        >
          <div
            onMouseEnter={() => SetSocialNetworkIcon(_id)}
            onMouseLeave={() => SetSocialNetworkIcon(0)}
            className={
              socialnetworkicon === _id
                ? styles[`SocialNetworkFooter__${networkname}active`]
                : styles[`SocialNetworkFooter__${networkname}passive`]
            }
          ></div>
        </Link>
      </li>
    )
  );

  return <ul className={styles.SocialNetworkFooter}>{socialnetworklist}</ul>;
}
