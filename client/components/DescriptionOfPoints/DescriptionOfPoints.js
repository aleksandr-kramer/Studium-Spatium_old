import styles from "./DescriptionOfPoints.module.scss";
import Image from "next/image";
import ParagraphList from "../ParagraphList/ParagraphList";

export default function DescriptionOfPoints({ Name, descriptionofpointsdata }) {
  const descriptionofpointsitems = descriptionofpointsdata.map(
    ({ id, Duration, Title, TextAboutTopic }) => (
      <li key={id} className={styles.DescriptionOfPoints__item}>
        <div className={styles.DescriptionOfPoints__duration}>
          <div className={styles.DescriptionOfPoints__durationimage}>
            <Image
              src="/icons/clock.svg"
              alt="duration"
              height={24}
              width={24}
              priority
            />
          </div>
          <p className={styles.DescriptionOfPoints__durationtext}>{Duration}</p>
        </div>
        <p className={styles.DescriptionOfPoints__numberthemetext}>{id}</p>
        <h3 className={styles.DescriptionOfPoints__namethemetext}>{Title}</h3>
        <div className={styles.DescriptionOfPoints__paragraphlist}>
          <ParagraphList
            ParagraphItems={TextAboutTopic}
            paragraphliststate="fontcolorbaseleft"
          />
        </div>
      </li>
    )
  );

  return (
    <div className={styles.DescriptionOfPoints}>
      <h2 className={styles.DescriptionOfPoints__title}>{Name}</h2>
      <ul className={styles.DescriptionOfPoints__items}>
        {descriptionofpointsitems}
      </ul>
    </div>
  );
}
