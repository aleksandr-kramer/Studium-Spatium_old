import styles from "./ListOfTopic.module.scss";
import Image from "next/image";

export default function ListOfTopic({ listoftopicdata }) {
  const listoftopicitem = listoftopicdata.map(
    ({ id, Title, Duration, ImageName }) => (
      <li key={id} className={styles.ListOfTopic__item}>
        <div className={styles.ListOfTopic__image}>
          <Image
            src={`/images/${ImageName}`}
            alt={Title}
            height={200}
            width={260}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
        <p className={styles.ListOfTopic__title}>{Title}</p>
        <p className={styles.ListOfTopic__info}>{Duration}</p>
      </li>
    )
  );

  return <ul className={styles.ListOfTopic}>{listoftopicitem}</ul>;
}
