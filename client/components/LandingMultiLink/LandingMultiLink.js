import ParagraphList from "../ParagraphList/ParagraphList";
import styles from "./LandingMultiLink.module.scss";
import LandingLinks from "../LandingLinks/LandingLinks";

export default function LandingMultiLink({ listlandingmultilink }) {
  const landingmultilinkitems = listlandingmultilink.map(
    ({ id, Anchor, Title, SpanTitle, Text, Links }, index) => (
      <li key={id} id={Anchor} className={styles.LandingMultiLink__item}>
        <h2 className={styles.LandingMultiLink__title}>
          {Title}
          <span className={styles.LandingMultiLink__titlespan}>
            {` ${SpanTitle}`}
          </span>
        </h2>
        <div className={styles.LandingMultiLink__paragraphlist}>
          <ParagraphList
            ParagraphItems={Text}
            paragraphliststate="fontcolorbasecenter"
          />
        </div>

        <ul className={styles.LandingMultiLink__landinglinks}>
          <LandingLinks landinglinkslist={Links} />
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
