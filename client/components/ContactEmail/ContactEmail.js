import styles from "./ContactEmail.module.scss";

export default function ContactEmail({ Title, contactemaildata }) {
  const contactemailitems = contactemaildata.map(({ id, text, email }) => (
    <li key={id} className={styles.ContactEmail__item}>
      <p className={styles.ContactEmail__itemtitle}>{text}</p>
      <a className={styles.ContactEmail__itememail} href={`mailto: ${email}`}>
        {email}
      </a>
    </li>
  ));

  return (
    <div className={styles.ContactEmail}>
      <p className={styles.ContactEmail__title}>{Title}</p>
      <ul className={styles.ContactEmail__items}>{contactemailitems}</ul>
    </div>
  );
}
