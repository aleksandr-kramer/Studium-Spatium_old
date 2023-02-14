import DescriptionNode from "../DescriptionNode/DescriptionNode";
import LinkText from "../LinkText/LinkText";
import styles from "./DescriptionOfNodes.module.scss";

export default function DescriptionOfNodes({
  linktextstate,
  descriptionofnodestitle,
  descriptionofnodesdata,
}) {
  const descriptionofnodesitems = descriptionofnodesdata.map(
    ({ id, Name, LinkContent, Link, GeneralInfo }) => (
      <li key={id} className={styles.DescriptionOfNodes__item}>
        <div className={styles.DescriptionOfNodes__namenode}>
          <span className={styles.DescriptionOfNodes__numbernode}>{id}</span>
          <p className={styles.DescriptionOfNodes__titlenode}>{Name}</p>
        </div>

        <div className={styles.DescriptionOfNodes__linktext}>
          <LinkText
            linktexturl={Link}
            linktextstate={linktextstate}
            linktextcontent={LinkContent}
          />
        </div>
        <DescriptionNode descriptionnodelist={GeneralInfo} />
      </li>
    )
  );

  return (
    <div className={styles.DescriptionOfNodes}>
      <h2 className={styles.DescriptionOfNodes__title}>
        {descriptionofnodestitle}
      </h2>
      <ul className={styles.DescriptionOfNodes__items}>
        {descriptionofnodesitems}
      </ul>
    </div>
  );
}
