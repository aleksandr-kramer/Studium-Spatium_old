import styles from "./ListModuleOfCourse.module.scss";
import LinkText from "../LinkText/LinkText";
import ParagraphList from "../ParagraphList/ParagraphList";

export default function ListModuleOfCourse({
  linktextstate,
  listmoduleofcourse,
}) {
  const moduleofcourseitems = listmoduleofcourse.map(
    ({ id, Number, Name, TextAboutModule, LinkContent, Link }) => (
      <li key={id} className={styles.ListModuleOfCourse__moduleitem}>
        <p className={styles.ListModuleOfCourse__numberofmodule}>{Number}</p>
        <h3 className={styles.ListModuleOfCourse__nameofmodule}>{Name}</h3>
        <div className={styles.ListModuleOfCourse__paragraphitems}>
          <ParagraphList
            ParagraphItems={TextAboutModule}
            paragraphliststate="fontcolorbaseleft"
          />
        </div>
        <div className={styles.ListModuleOfCourse__linktext}>
          <LinkText
            linktexturl={Link}
            linktextstate={linktextstate}
            linktextcontent={LinkContent}
          />
        </div>
      </li>
    )
  );
  return (
    <div className={styles.ListModuleOfCourse}>
      <ul className={styles.ListModuleOfCourse__moduleitems}>
        {moduleofcourseitems}
      </ul>
      <div className={styles.ListModuleOfCourse__patternimage}></div>
    </div>
  );
}
