import styles from "./StepComponent.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function StepComponent({
  stepcomponentword,
  stepcomponentdata,
}) {
  const stepcomponentitem = stepcomponentdata.map(
    ({ id, Title, Text, Url, UrlText, ImageName }) => (
      <li key={id} className={styles.StepComponent__item}>
        <div className={styles.StepComponent__steppoint}>
          <p className={styles.StepComponent__stepkey}>{stepcomponentword}</p>
          <p className={styles.StepComponent__stepid}>{id}</p>
        </div>
        <div className={styles.StepComponent__image}>
          <Image
            src={`/images/${ImageName}`}
            alt={Title}
            height={150}
            width={167}
            priority
          />
        </div>
        <div className={styles.StepComponent__line}></div>
        <div className={styles.StepComponent__stepcontent}>
          <p className={styles.StepComponent__title}>{Title}</p>
          <p className={styles.StepComponent__text}>{Text}</p>
        </div>

        {UrlText ? (
          <div className={styles.StepComponent__linkbutton}>
            <Link href={Url} className={styles.StepComponent__link}>
              <a>
                <div className={styles.StepComponent__button}>
                  <p className={styles.StepComponent__linktext}>{UrlText}</p>
                </div>
              </a>
            </Link>
          </div>
        ) : null}
      </li>
    )
  );

  return <ul className={styles.StepComponent}>{stepcomponentitem}</ul>;
}
