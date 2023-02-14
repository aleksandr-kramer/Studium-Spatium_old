import styles from "./ContentInfoPages.module.scss";
import Link from "next/link";
import ParagraphList from "../ParagraphList/ParagraphList";

export default function ContentInfoPages({
  contentinfopagesnavdata,
  contentinfopagesarticledata,
}) {
  const contentinfopagesnavitems = contentinfopagesnavdata.map(
    ({ id, NameSubMenu, UrlSubMenu }) => (
      <li key={id} className={styles.ContentInfoPages__item}>
        <Link href={UrlSubMenu} className={styles.ContentInfoPages__linktext}>
          {NameSubMenu}
        </Link>
      </li>
    )
  );
  const contentinfopagesarticleitems = contentinfopagesarticledata.map(
    ({ id, Title, Text }) => (
      <div key={id} className={styles.ContentInfoPages__articleblock}>
        <h2 className={styles.ContentInfoPages__articletitle}>{Title}</h2>
        <ParagraphList
          ParagraphItems={Text}
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
