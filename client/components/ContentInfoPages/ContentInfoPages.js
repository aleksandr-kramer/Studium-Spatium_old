import styles from "./ContentInfoPages.module.scss";
import Link from "next/link";
import ParagraphList from "../ParagraphList/ParagraphList";

export default function ContentInfoPages({
  contentinfopagesnavdata,
  contentinfopagesarticledata,
}) {
  const contentinfopagesnavitems = contentinfopagesnavdata.map(
    ({ _id, pageurl, pagereference }) => (
      <li key={_id} className={styles.ContentInfoPages__item}>
        <Link href={pageurl} className={styles.ContentInfoPages__linktext}>
          {pagereference}
        </Link>
      </li>
    )
  );
  const contentinfopagesarticleitems = contentinfopagesarticledata.map(
    ({ id, title, text }) => (
      <div key={id} className={styles.ContentInfoPages__articleblock}>
        <h2 className={styles.ContentInfoPages__articletitle}>{title}</h2>
        <ParagraphList
          ParagraphItems={text}
          paragraphliststate="fontcolorbasecenter"
        />
      </div>
    )
  );
  return (
    <div className={styles.ContentInfoPages}>
      <nav className={styles.ContentInfoPages__nav}>
        <ul className={styles.ContentInfoPages__items}>
          {contentinfopagesnavitems}
        </ul>
      </nav>
      <article className={styles.ContentInfoPages__article}>
        {contentinfopagesarticleitems}
      </article>
    </div>
  );
}
