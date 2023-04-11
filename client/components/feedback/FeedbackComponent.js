import styles from "./FeedbackComponent.module.scss";
import Image from "next/image";

export default function FeedbackComponent({
  title,
  feedbackcomponenttextdata,
  feedbackcomponentabouticondata,
  children,
}) {
  const feedbackcomponenttextitems = feedbackcomponenttextdata.map(
    ({ id, paragraph }) => (
      <p key={id} className={styles.FeedbackComponent__paragraph}>
        {paragraph}
      </p>
    )
  );
  const feedbackcomponentabouticonitems = feedbackcomponentabouticondata.map(
    ({ id, imagename, title }) => (
      <li key={id} className={styles.FeedbackComponent__aboutitem}>
        <div className={styles.FeedbackComponent__icon}>
          <Image
            src={`/icons/${imagename}`}
            alt={title}
            height={40}
            width={40}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
        <p className={styles.FeedbackComponent__icontitle}>{title}</p>
      </li>
    )
  );

  return (
    <div className={styles.FeedbackComponent}>
      {title !== "" ? (
        <h1 className={styles.FeedbackComponent__title}>{title}</h1>
      ) : null}
      <div className={styles.FeedbackComponent__text}>
        {feedbackcomponenttextitems}
      </div>

      {feedbackcomponentabouticondata.length !== 0 ? (
        <ul className={styles.FeedbackComponent__aboutitems}>
          {feedbackcomponentabouticonitems}
        </ul>
      ) : null}

      <div className={styles.FeedbackComponent__formblock}>{children}</div>
    </div>
  );
}
