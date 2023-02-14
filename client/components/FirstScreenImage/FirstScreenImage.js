import styles from "./FirstScreenImage.module.scss";
import H1Titles from "../H1Titles/H1Titles";
import Image from "next/image";
import SocialNetwork from "../SocialNetwork/SocialNetwork";

export default function FirstScreenImage({
  h1title,
  h1subtitle,
  altimage,
  nameimage,
}) {
  return (
    <div className={styles.FirstScreenImage}>
      <div className={styles.FirstScreenImage__H1Title}>
        <H1Titles h1title={h1title} h1subtitle={h1subtitle} />
      </div>
      <div className={styles.FirstScreenImage__Image}>
        <Image
          src={`/images/${nameimage}`}
          alt={altimage}
          height={588}
          width={588}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>
      <div className={styles.FirstScreenImage__SocialNetwork}>
        <SocialNetwork />
      </div>
    </div>
  );
}
