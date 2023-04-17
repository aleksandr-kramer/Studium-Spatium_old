import styles from "./Page404.module.scss";
import Image from "next/image";

export default function Page404({
  ImageName,
  H2Title,
  H1Title,
  page404textdata,
}) {
  const page404textitems = page404textdata.map(({ id, paragraph }) => (
    <p key={id} className={styles.Page404__paragraph}>
      {paragraph}
    </p>
  ));
  return (
    <div className={styles.Page404}>
      <div className={styles.Page404__image}>
        <Image
          src={`/images/${ImageName}`}
          alt={H2Title}
          height={400}
          width={675}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>
      <h1 className={styles.Page404__title}>{H1Title}</h1>
      <p className={styles.Page404__subtitle}>{H2Title}</p>
      <div className={styles.Page404__text}>{page404textitems}</div>
    </div>
  );
}
