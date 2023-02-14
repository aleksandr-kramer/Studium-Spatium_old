import styles from "./Faq.module.scss";

export default function Faq({ faqdata, title }) {
  const faqitem = faqdata.map(({ id, Question, Answer }) => (
    <li key={id} className={styles.Faq__item}>
      <input className={styles.Faq__checkbox} type="checkbox" id={`a${id}`} />
      <label className={styles.Faq__question} htmlFor={`a${id}`}>
        <p className={styles.Faq__questiontext}>{Question}</p>
      </label>
      <div className={styles.Faq__answer}>
        <p className={styles.Faq__answertext}>{Answer}</p>
      </div>
    </li>
  ));

  return (
    <div className={styles.Faq}>
      <h2 className={styles.Faq__title}>{title}</h2>
      <ul className={styles.Faq__items}>{faqitem}</ul>
    </div>
  );
}
