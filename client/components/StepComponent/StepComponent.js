import styles from "./StepComponent.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function StepComponent({
  stepcomponentword,
  stepcomponentdata,
}) {
  const stepcomponentitem = stepcomponentdata.map(
    ({ id, title, text, url, texturl, imagename }) => (
      <li key={id} className={styles.StepComponent__item}>
        <div className={styles.StepComponent__steppoint}>
          <p className={styles.StepComponent__stepkey}>{stepcomponentword}</p>
          <p className={styles.StepComponent__stepid}>{id}</p>
        </div>
        <div className={styles.StepComponent__image}>
          <Image
            src={`/images/${imagename}`}
            alt={title}
            height={150}
            width={167}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
        <div className={styles.StepComponent__line}></div>
        <div className={styles.StepComponent__stepcontent}>
          <p className={styles.StepComponent__title}>{title}</p>
          <p className={styles.StepComponent__text}>{text}</p>
        </div>

        {texturl ? (
          <div className={styles.StepComponent__linkbutton}>
            <Link href={url} className={styles.StepComponent__link}>
              <div className={styles.StepComponent__button}>
                <p className={styles.StepComponent__linktext}>{texturl}</p>
              </div>
            </Link>
          </div>
        ) : null}
      </li>
    )
  );

  return <ul className={styles.StepComponent}>{stepcomponentitem}</ul>;
}
