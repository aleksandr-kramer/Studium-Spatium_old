import styles from "./ListOfTopic.module.scss";
import Image from "next/image";

export default function ListOfTopic({ listoftopicdata }) {
  const listoftopicitem = listoftopicdata.map(
    ({ id, title, duration, imagename }) => (
      <li key={id} className={styles.ListOfTopic__item}>
        <div className={styles.ListOfTopic__image}>
          <Image
            src={`/images/${imagename}`}
            alt={title}
            height={200}
            width={260}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
        <p className={styles.ListOfTopic__title}>{title}</p>
        <p className={styles.ListOfTopic__info}>{duration}</p>
      </li>
    )
  );

  return <ul className={styles.ListOfTopic}>{listoftopicitem}</ul>;
}
