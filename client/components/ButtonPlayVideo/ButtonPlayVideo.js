import styles from "./ButtonPlayVideo.module.scss";
import selectTranslate from "../../utils/selectTranslate";

export default function ButtonPlayVideo() {
  const buttonname =
    selectTranslate().Pages.index.FirstScreenVideo.VideoButtonTitle;
  return (
    <button type="button" className={styles.ButtonPlayVideo}>
      <div className={styles.ButtonPlayVideo__button}></div>
      <span className={styles.ButtonPlayVideo__text}>{buttonname}</span>
    </button>
  );
}
