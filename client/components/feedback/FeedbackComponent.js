import styles from "./FeedbackComponent.module.scss";
import Image from "next/image";

export default function FeedbackComponent({
  title,
  feedbackcomponenttextdata,
  feedbackcomponentabouticondata,
  children,
}) {
  const feedbackcomponenttextitems = feedbackcomponenttextdata.map(
    ({ id, Paragraph }) => (
      <p key={id} className={styles.FeedbackComponent__paragraph}>
        {Paragraph}
      </p>
    )
  );
  const feedbackcomponentabouticonitems = feedbackcomponentabouticondata.map(
    ({ id, ImageName, Title }) => (
      <li key={id} className={styles.FeedbackComponent__aboutitem}>
        <div className={styles.FeedbackComponent__icon}>
          <Image
            src={`/icons/${ImageName}`}
            alt={Title}
            height={40}
            width={40}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
        <p className={styles.FeedbackComponent__icontitle}>{Title}</p>
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
