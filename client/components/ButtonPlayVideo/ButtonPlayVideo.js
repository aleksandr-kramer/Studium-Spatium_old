import styles from "./ButtonPlayVideo.module.scss";

export default function ButtonPlayVideo({ videobuttontitle }) {
  return (
    <button type="button" className={styles.ButtonPlayVideo}>
      <div className={styles.ButtonPlayVideo__button}></div>
      <span className={styles.ButtonPlayVideo__text}>{videobuttontitle}</span>
    </button>
  );
}
