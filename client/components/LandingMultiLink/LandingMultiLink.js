import ParagraphList from "../ParagraphList/ParagraphList";
import styles from "./LandingMultiLink.module.scss";
import LandingLinks from "../LandingLinks/LandingLinks";

export default function LandingMultiLink({ listlandingmultilink }) {
  const landingmultilinkitems = listlandingmultilink.map(
    ({ _id, anchorfixlink, title, spantitle, text, links }, index) => (
      <li
        key={_id}
        id={anchorfixlink}
        className={styles.LandingMultiLink__item}
      >
        <h2 className={styles.LandingMultiLink__title}>
          {title}
          <span className={styles.LandingMultiLink__titlespan}>
            {` ${spantitle}`}
          </span>
        </h2>
        <div className={styles.LandingMultiLink__paragraphlist}>
          <ParagraphList
            ParagraphItems={text}
            paragraphliststate="fontcolorbasecenter"
          />
        </div>

        <ul className={styles.LandingMultiLink__landinglinks}>
          <LandingLinks landinglinkslist={links} />
        </ul>
      </li>
    )
  );

  return (
    <div className={styles.LandingMultiLink}>
      <ul className={styles.LandingMultiLink__items}>
        {landingmultilinkitems}
      </ul>
    </div>
  );
}
