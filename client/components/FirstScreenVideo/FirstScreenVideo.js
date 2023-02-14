import styles from "./FirstScreenVideo.module.scss";
import H1Titles from "../H1Titles/H1Titles";
import Image from "next/image";
import SocialNetwork from "../SocialNetwork/SocialNetwork";
import ButtonPlayVideo from "../ButtonPlayVideo/ButtonPlayVideo";
import { useState, useEffect } from "react";

export default function FirstScreenVideo({
  h1title,
  h1subtitle,
  altimage,
  nameimage,
  urlvideo,
  titlevideo,
}) {
  const [activePopUpVideo, setActivePopUpVideo] = useState(false);

  useEffect(() => {
    const keyDownHandler = (e) =>
      e.code === "Escape" && activePopUpVideo
        ? setActivePopUpVideo(!activePopUpVideo)
        : null;
    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  });

  return (
    <div
      className={
        activePopUpVideo
          ? `${styles.FirstScreenVideo} ${styles.FirstScreenVideo__open}`
          : styles.FirstScreenVideo
      }
    >
      <div className={styles.FirstScreenVideo__H1Title}>
        <H1Titles h1title={h1title} h1subtitle={h1subtitle} />
      </div>
      <div className={styles.FirstScreenVideo__Image}>
        <Image
          src={`/images/${nameimage}`}
          alt={altimage}
          height={547}
          width={489}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
          priority
        />
        <div className={styles.FirstScreenVideo__PatternImage}></div>
      </div>

      <div className={styles.FirstScreenVideo__SocialNetwork}>
        <SocialNetwork />
      </div>
      <div
        onClick={() => setActivePopUpVideo(!activePopUpVideo)}
        className={styles.FirstScreenVideo__ButtonPlayVideo}
      >
        <ButtonPlayVideo />
      </div>
      <div className={styles.FirstScreenVideo__PopUpVideo}>
        <iframe
          width="100%"
          height="100%"
          src={activePopUpVideo ? urlvideo : ""}
          title={titlevideo}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>

        <div
          onClick={() => setActivePopUpVideo(!activePopUpVideo)}
          className={styles.FirstScreenVideo__ClosePopUpVideo}
        ></div>
      </div>
      <div
        onClick={() => setActivePopUpVideo(!activePopUpVideo)}
        className={styles.FirstScreenVideo__BackDropVideo}
      ></div>
    </div>
  );
}
